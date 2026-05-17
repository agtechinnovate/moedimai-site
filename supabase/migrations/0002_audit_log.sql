-- Migration 0002 — append-only audit log.
-- Targets every business-state mutation. Triggers on individual tables added in
-- their respective migrations.

BEGIN;

CREATE TABLE audit_log (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id        uuid,
  actor_email     text,
  actor_role      text,
  action          text NOT NULL,
  entity_type     text NOT NULL,
  entity_id       uuid,
  before          jsonb,
  after           jsonb,
  ip_address      text,
  user_agent      text,
  created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX audit_log_entity_idx ON audit_log (entity_type, entity_id);
CREATE INDEX audit_log_actor_idx  ON audit_log (actor_id);
CREATE INDEX audit_log_created_idx ON audit_log (created_at DESC);

COMMENT ON TABLE audit_log IS
  'Append-only audit trail. 7-year retention per KRA requirement. Never deleted via app code.';

ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- No anon access. Service role (which bypasses RLS) is the only writer.
-- A future admin role policy is added in 0010_rls_policies.sql once admin_users exists.

COMMIT;
