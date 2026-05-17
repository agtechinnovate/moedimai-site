-- Migration 0009 — audit triggers on business-state tables.
-- Each trigger writes a row to audit_log for INSERT / UPDATE / DELETE.
-- Function uses SECURITY DEFINER so app-level RLS does not block the write.

BEGIN;

CREATE OR REPLACE FUNCTION write_audit_log()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_actor_id uuid;
  v_actor_email text;
  v_actor_role text;
BEGIN
  -- Resolve actor from auth.uid() if present.
  v_actor_id := auth.uid();
  IF v_actor_id IS NOT NULL THEN
    SELECT email, role
      INTO v_actor_email, v_actor_role
      FROM admin_users
     WHERE supabase_uid = v_actor_id
     LIMIT 1;
  END IF;

  INSERT INTO audit_log (
    actor_id, actor_email, actor_role,
    action, entity_type, entity_id,
    before, after
  )
  VALUES (
    v_actor_id,
    v_actor_email,
    v_actor_role,
    TG_OP,
    TG_TABLE_NAME,
    CASE
      WHEN TG_OP = 'DELETE' THEN (OLD.id)::uuid
      ELSE (NEW.id)::uuid
    END,
    CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN to_jsonb(OLD) ELSE NULL END,
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN to_jsonb(NEW) ELSE NULL END
  );

  IF TG_OP = 'DELETE' THEN
    RETURN OLD;
  ELSE
    RETURN NEW;
  END IF;
END;
$$;

REVOKE EXECUTE ON FUNCTION write_audit_log() FROM PUBLIC;

-- Apply triggers to business-state tables shipping in W2.
CREATE TRIGGER products_audit
  AFTER INSERT OR UPDATE OR DELETE ON products
  FOR EACH ROW EXECUTE FUNCTION write_audit_log();

CREATE TRIGGER product_variants_audit
  AFTER INSERT OR UPDATE OR DELETE ON product_variants
  FOR EACH ROW EXECUTE FUNCTION write_audit_log();

CREATE TRIGGER lots_audit
  AFTER INSERT OR UPDATE OR DELETE ON lots
  FOR EACH ROW EXECUTE FUNCTION write_audit_log();

CREATE TRIGGER lot_evidence_status_audit
  AFTER INSERT OR UPDATE OR DELETE ON lot_evidence_status
  FOR EACH ROW EXECUTE FUNCTION write_audit_log();

CREATE TRIGGER chemotype_profiles_audit
  AFTER INSERT OR UPDATE OR DELETE ON chemotype_profiles
  FOR EACH ROW EXECUTE FUNCTION write_audit_log();

CREATE TRIGGER rfqs_audit
  AFTER INSERT OR UPDATE OR DELETE ON rfqs
  FOR EACH ROW EXECUTE FUNCTION write_audit_log();

CREATE TRIGGER b2b_contacts_audit
  AFTER INSERT OR UPDATE OR DELETE ON b2b_contacts
  FOR EACH ROW EXECUTE FUNCTION write_audit_log();

CREATE TRIGGER admin_users_audit
  AFTER INSERT OR UPDATE OR DELETE ON admin_users
  FOR EACH ROW EXECUTE FUNCTION write_audit_log();

COMMIT;
