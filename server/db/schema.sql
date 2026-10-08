-- Nestr database schema

CREATE TABLE IF NOT EXISTS activities (
  id          SERIAL PRIMARY KEY,
  activity    TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  date        TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'pending'
              CHECK (status IN ('pending', 'completed')),
  creature_id INTEGER
              CHECK (creature_id BETWEEN 1 AND 48)
);

-- Activities are displayed newest first.
CREATE INDEX IF NOT EXISTS activities_id_idx
  ON activities (id DESC);