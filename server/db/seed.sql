
TRUNCATE TABLE activities RESTART IDENTITY CASCADE;

INSERT INTO activities
  (activity, description, date, status, creature_id)
VALUES
  (
    'Study React',
    'Reviewed React components and props.',
    '2026-10-01',
    'completed',
    7
  ),
  (
    'Finish UI Design',
    'Completed the Nestr design system.',
    '2026-10-02',
    'completed',
    23
  ),
  (
    'Exercise',
    'Went for a short walk.',
    '2026-10-03',
    'completed',
    41
  ),
  (
    'Read Documentation',
    'Read about Express and PostgreSQL.',
    '2026-10-04',
    'pending',
    NULL
  ),
  (
    'Work on Nestr',
    'Continue building the activity logger.',
    '2026-10-05',
    'pending',
    NULL
  );