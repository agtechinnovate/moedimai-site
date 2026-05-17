-- Migration 0003 — admin_users.
-- Identity table for website operators. Linked to auth.users via supabase_uid.
-- Roles per W2 spec: admin / sales / fulfilment.

BEGIN;

CREATE TABLE admin_users (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  supabase_uid    uuid UNIQUE NOT NULL,                 -- references auth.users.id
  email           citext UNIQUE NOT NULL,
  full_name       text,
  role            text NOT NULL CHECK (role IN ('admin', 'sales', 'fulfilment')),
  is_active       boolean NOT NULL DEFAULT true,
  totp_required   boolean NOT NULL DEFAULT true,
  calendly_url    text,
  notes           text,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX admin_users_role_idx ON admin_users (role) WHERE is_active;

COMMENT ON TABLE admin_users IS
  'Website light admin operators. NOT the platform admin. role-scoped policies are defined in 0010_rls_policies.sql.';

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Helper: returns the current admin_users.role for an authenticated session, or NULL.
CREATE OR REPLACE FUNCTION current_admin_role()
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM admin_users
   WHERE supabase_uid = auth.uid() AND is_active = true
   LIMIT 1
$$;

REVOKE EXECUTE ON FUNCTION current_admin_role() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION current_admin_role() TO authenticated;

-- updated_at trigger.
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS trigger
LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END
$$;

CREATE TRIGGER admin_users_set_updated_at
  BEFORE UPDATE ON admin_users
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

COMMIT;
