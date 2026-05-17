-- Migration 0005 — marketing CRM + consent + audit feeds.
-- Holds DPA 2019 / GDPR consent records, newsletter contacts, email events,
-- and drip sequence enrolments.

BEGIN;

CREATE TABLE marketing_contacts (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email                 citext UNIQUE NOT NULL,
  phone                 text,
  full_name             text,
  source                text NOT NULL CHECK (source IN (
                          'checkout_optin', 'newsletter', 'rfq',
                          'sample_request', 'imported', 'coa_download'
                        )),
  consent_given_at      timestamptz NOT NULL,
  consent_method        text NOT NULL,
  consent_ip            text,
  consent_user_agent    text,
  status                text NOT NULL DEFAULT 'active' CHECK (status IN (
                          'active', 'unsubscribed', 'bounced', 'complained', 'prospect'
                        )),
  resend_audience_id    text,
  tags                  text[] NOT NULL DEFAULT '{}',
  last_engaged_at       timestamptz,
  unsubscribed_at       timestamptz,
  created_at            timestamptz NOT NULL DEFAULT now(),
  updated_at            timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX marketing_contacts_status_idx ON marketing_contacts (status);
CREATE INDEX marketing_contacts_tags_idx   ON marketing_contacts USING GIN (tags);

CREATE TRIGGER marketing_contacts_set_updated_at
  BEFORE UPDATE ON marketing_contacts
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

COMMENT ON COLUMN marketing_contacts.consent_given_at IS
  'Explicit affirmative consent timestamp. Required for DPA 2019 + GDPR. Never default.';

CREATE TABLE email_events (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id            uuid REFERENCES marketing_contacts(id) ON DELETE SET NULL,
  email_type            text NOT NULL CHECK (email_type IN ('transactional', 'marketing', 'sequence')),
  template              text NOT NULL,
  resend_message_id     text,
  event_type            text NOT NULL CHECK (event_type IN (
                          'sent', 'delivered', 'opened', 'clicked',
                          'bounced', 'complained', 'unsubscribed', 'failed'
                        )),
  payload               jsonb,
  created_at            timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX email_events_contact_idx ON email_events (contact_id, created_at DESC);
CREATE INDEX email_events_type_idx    ON email_events (event_type, created_at DESC);

CREATE TABLE marketing_sequence_enrolments (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id            uuid NOT NULL REFERENCES marketing_contacts(id) ON DELETE CASCADE,
  sequence_slug         text NOT NULL,
  current_step          integer NOT NULL DEFAULT 0,
  next_send_at          timestamptz,
  status                text NOT NULL DEFAULT 'active' CHECK (status IN (
                          'active', 'completed', 'paused', 'exited'
                        )),
  exit_reason           text,
  created_at            timestamptz NOT NULL DEFAULT now(),
  updated_at            timestamptz NOT NULL DEFAULT now(),
  UNIQUE (contact_id, sequence_slug)
);

CREATE INDEX seq_enrolments_due_idx ON marketing_sequence_enrolments (next_send_at)
  WHERE status = 'active';

CREATE TRIGGER seq_enrolments_set_updated_at
  BEFORE UPDATE ON marketing_sequence_enrolments
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Cookie / analytics / marketing consent log.
CREATE TABLE consent_log (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_anon_id       text,                             -- random id from cookie banner; not PII
  contact_id            uuid REFERENCES marketing_contacts(id) ON DELETE SET NULL,
  consent_categories    jsonb NOT NULL,                   -- { essential: true, analytics: true, marketing: false }
  user_agent            text,
  ip_country            text,                             -- coarse, derived from Cloudflare cf-ipcountry
  origin_url            text,
  gpc_signal            boolean,                          -- Global Privacy Control header presence
  created_at            timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX consent_log_contact_idx ON consent_log (contact_id);
CREATE INDEX consent_log_visitor_idx ON consent_log (visitor_anon_id);

COMMENT ON TABLE consent_log IS
  'Cookie / analytics / marketing consent audit trail. Never store IP address — country only.';

ALTER TABLE marketing_contacts             ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_events                   ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketing_sequence_enrolments  ENABLE ROW LEVEL SECURITY;
ALTER TABLE consent_log                    ENABLE ROW LEVEL SECURITY;

COMMIT;
