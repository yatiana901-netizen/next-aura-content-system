CREATE TABLE IF NOT EXISTS items (
  url TEXT PRIMARY KEY,
  fingerprint TEXT NOT NULL,
  source_id TEXT NOT NULL,
  source_name TEXT NOT NULL,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  published_at TEXT,
  discovered_at TEXT NOT NULL,
  score INTEGER,
  urgency TEXT,
  hidden_angle TEXT,
  why_it_matters TEXT,
  german_hook TEXT,
  alerted_at TEXT
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_items_fingerprint ON items(fingerprint);
CREATE INDEX IF NOT EXISTS idx_items_discovered ON items(discovered_at DESC);
CREATE INDEX IF NOT EXISTS idx_items_alerted ON items(alerted_at DESC);

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  started_at TEXT NOT NULL,
  finished_at TEXT,
  mode TEXT NOT NULL,
  sources_checked INTEGER DEFAULT 0,
  candidates_found INTEGER DEFAULT 0,
  new_items INTEGER DEFAULT 0,
  alerts_sent INTEGER DEFAULT 0,
  errors INTEGER DEFAULT 0,
  note TEXT
);
