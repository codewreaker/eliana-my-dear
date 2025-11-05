-- Create the tributes table
CREATE TABLE IF NOT EXISTS tributes (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE tributes ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public read access
CREATE POLICY "Allow public read access" ON tributes
  FOR SELECT
  USING (true);

-- Create a policy to allow public insert access
CREATE POLICY "Allow public insert access" ON tributes
  FOR INSERT
  WITH CHECK (true);

-- Optional: Create an index on created_at for faster sorting
CREATE INDEX IF NOT EXISTS idx_tributes_created_at ON tributes(created_at DESC);

-- Seed data
INSERT INTO tributes (name, message) VALUES
  ('Alice Johnson', 'Thank you for everything you''ve done. Your kindness will never be forgotten.'),
  ('Michael Chen', 'You were an inspiration to us all. Rest in peace.'),
  ('Sarah Williams', 'Your memory lives on in our hearts. We miss you dearly.'),
  ('David Brown', 'Gone but never forgotten. You touched so many lives.'),
  ('Emma Davis', 'Your legacy of love and compassion continues to inspire us every day.');
