-- Create the tributes table
CREATE TABLE IF NOT EXISTS tributes (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
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
INSERT INTO tributes (name, email, message) VALUES
  ('Uncle Denzel', 'denzel@theheartbeatmusic.com', 'Beautiful soul, our dearly beloved, You set our hearts aflame with heaven''s hush – With joy and peace, you brushed our days. To us you are near, To us you remain dear. We behold your smile with eyes of faith, Framed in light where angels dwell. With love that lingers and hope that heals, To us you are near, To us you remain dear. We lift our gaze to God Most High, In thanks and trembling gratitude. For though your breath was brief on earth, Your being blooms beyond our years. To us you are near, To us you remain dear. Beautiful soul, you are not far – Heaven holds what earth could not. Your memory sings in our hearts'' quiet chambers. To us you are near, To us you remain dear.'),
  ('Adjoa Adutwum', 'adjoafosua@hotmail.com', 'My sweet Eliana, Though your time with us was brief, your presence has changed my heart forever. From the moment I knew of you, I loved you deeply, fiercely, completely. You were prayed for, dreamt of, and already so cherished before you ever took your first breath. And though you never opened your eyes to this world, you opened ours to eternity. You were My Eliana "God has answered." And though His answer came wrapped in mystery and pain, I trust His heart even when I cannot trace His hand. I will forever carry you in mine. In the quiet moments, I imagine your tiny fingers, your peaceful face, and I rest in the thought that you are safe in the arms of Jesus – where there is no more pain, no more tears, and no more sorrow. You will never know the struggles of this world, only the beauty of Heaven. And one day, when my race is finished, I will meet you again whole, radiant, and smiling. Until then, your name will live in every prayer, every song, and every heartbeat that remembers you. Rest, My Eliana. You were loved beyond words, and missed beyond measure. You will forever be the answer I didn''t expect, but the miracle I''ll never forget. I will always and forever love you. Your Godmother Adjoa 💙'),
  ('APOSTLE KOFI ODURO OFORI-AGYEMAN-PREMPEH', 'kofi_agyemanprempeh@yahoo.co.uk', 'Ani Saba Cohen Gadol At Eliana Cohenet Gadolet Ani Lo Mevin Eliana At Mevinah????? Ani Lo Beseder Ani Lo Beseder Gamol Lo Tov, Lo Tov, Lo Tov Lamah? Lamah?? Lamah??? Naim Meod Gadol, Ki Yeshua Hamashiac Melakim Eliana Beverkasha Lamah, Lamah, Lamah, Lamah,Lamah??????? Lehitraout L''Shamayim Eliana, Lama, Lama, Lama? Anilomargish Matsuyan Atmargisha Metsuyan??? Ooooooooooooooooh Eliana Lamah? Lamah??? Lamah???? Lehitraout BaShamayim !!! Am Yisrael Chai!!!!!! Bashanah Yerushalayim!!!! Sabah Cohen Gadol'),
  ('Aunty Kristen', 'kristenfaprempeh@gmail.com', 'Hi my lovely angel, Aunty Kristen here☺️ I longed to meet and watch you grow like your other uncles and aunties but as God would have it, He called you back to Himself. You will always be in our hearts and we celebrate your little life! Forever in my heart Eliana 🤍🤎'),
  ('Nana Opoku Agyeman-Prempeh', 'nana@growforme.com', 'Tribute to Baby Elaina I met Elaina while she was still in mummy''s tummy. Her presence was felt throughout the house as mummy carried her wherever she went. Every morning, I saw mummy carefully walk down the staircase, carrying you with such love and grace, her body protecting you from the world. You were always safe with her. Daddy, on the other hand, gave up his spot on the bed just for you. He would rather sleep on the floor, because your comfort meant more to him than anything else. You were his little treasure, and he loved you deeply even before meeting you. As the fifth member of our home, you sat quietly most of the time, but your little kicks and jolts reminded us that you were there, full of life and joy. Your brothers, Paa Kwesi and Nana Osei, could not wait to add you to the team. The three musketeers would have been a formidable trio. Paa and Nana would have protected you with their lives every single day. Their love for you is more than you could ever imagine. When we visited Grandma''s house, your presence brought laughter and anticipation. Grandma looked forward to meeting you, her new bundle of joy to fill the space Great-Grandma had left behind. When I went shopping, I couldn''t resist getting you a gift a little dress and a baby wrap, the perfect welcome for our precious girl. You were a gift to all of us. I thought I would see you in a few weeks after I left, and yes, we did see you, but heaven had its own plans. God called you home before we could hear your voice, your whisper, or your cry. Our hearts are broken, mine, Naana''s, Nana Kofi''s, and Aunty Angie''s. Yet we find comfort knowing that you are still with us in spirit. You were loved deeply, and you always will be. Rest well, sweet Elaina. We love you beyond words.');