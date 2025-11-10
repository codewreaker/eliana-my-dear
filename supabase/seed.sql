-- Create the tributes table
CREATE TABLE
    IF NOT EXISTS tributes (
        id BIGSERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW ()
    );

-- Enable Row Level Security (RLS)
ALTER TABLE tributes ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public read access
CREATE POLICY "Allow public read access" ON tributes FOR
SELECT
    USING (true);

-- Create a policy to allow public insert access
CREATE POLICY "Allow public insert access" ON tributes FOR INSERT
WITH
    CHECK (true);

-- Optional: Create an index on created_at for faster sorting
CREATE INDEX IF NOT EXISTS idx_tributes_created_at ON tributes (created_at DESC);

-- Seed data
INSERT INTO
    "public"."tributes" ("id", "name", "email", "message", "created_at")
VALUES
    (
        '1',
        'Uncle Denzel',
        'denzel@theheartbeatmusic.com',
        'Beautiful soul, our dearly beloved, You set our hearts aflame with heaven''s hush – With joy and peace, you brushed our days. To us you are near, To us you remain dear. We behold your smile with eyes of faith, Framed in light where angels dwell. With love that lingers and hope that heals, To us you are near, To us you remain dear. We lift our gaze to God Most High, In thanks and trembling gratitude. For though your breath was brief on earth, Your being blooms beyond our years. To us you are near, To us you remain dear. Beautiful soul, you are not far – Heaven holds what earth could not. Your memory sings in our hearts'' quiet chambers. To us you are near, To us you remain dear.',
        '2025-11-05 21:31:09.89473+00'
    ),
    (
        '2',
        'Adjoa Adutwum',
        'adjoafosua@hotmail.com',
        'My sweet Eliana, Though your time with us was brief, your presence has changed my heart forever. From the moment I knew of you, I loved you deeply, fiercely, completely. You were prayed for, dreamt of, and already so cherished before you ever took your first breath. And though you never opened your eyes to this world, you opened ours to eternity. You were My Eliana "God has answered." And though His answer came wrapped in mystery and pain, I trust His heart even when I cannot trace His hand. I will forever carry you in mine. In the quiet moments, I imagine your tiny fingers, your peaceful face, and I rest in the thought that you are safe in the arms of Jesus – where there is no more pain, no more tears, and no more sorrow. You will never know the struggles of this world, only the beauty of Heaven. And one day, when my race is finished, I will meet you again whole, radiant, and smiling. Until then, your name will live in every prayer, every song, and every heartbeat that remembers you. Rest, My Eliana. You were loved beyond words, and missed beyond measure. You will forever be the answer I didn''t expect, but the miracle I''ll never forget. I will always and forever love you. Your Godmother Adjoa 💙',
        '2025-11-05 21:31:09.89473+00'
    ),
    (
        '3',
        'APOSTLE KOFI ODURO OFORI-AGYEMAN-PREMPEH',
        'kofi_agyemanprempeh@yahoo.co.uk',
        'Ani Saba Cohen Gadol At Eliana Cohenet Gadolet Ani Lo Mevin Eliana At Mevinah????? Ani Lo Beseder Ani Lo Beseder Gamol Lo Tov, Lo Tov, Lo Tov Lamah? Lamah?? Lamah??? Naim Meod Gadol, Ki Yeshua Hamashiac Melakim Eliana Beverkasha Lamah, Lamah, Lamah, Lamah,Lamah??????? Lehitraout L''Shamayim Eliana, Lama, Lama, Lama? Anilomargish Matsuyan Atmargisha Metsuyan??? Ooooooooooooooooh Eliana Lamah? Lamah??? Lamah???? Lehitraout BaShamayim !!! Am Yisrael Chai!!!!!! Bashanah Yerushalayim!!!! Sabah Cohen Gadol',
        '2025-11-05 21:31:09.89473+00'
    ),
    (
        '4',
        'Aunty Kristen',
        'kristenfaprempeh@gmail.com',
        'Hi my lovely angel, Aunty Kristen here☺️ I longed to meet and watch you grow like your other uncles and aunties but as God would have it, He called you back to Himself. You will always be in our hearts and we celebrate your little life! Forever in my heart Eliana 🤍🤎',
        '2025-11-05 21:31:09.89473+00'
    ),
    (
        '5',
        'Nana Opoku Agyeman-Prempeh',
        'nana@growforme.com',
        'Tribute to Baby Elaina I met Elaina while she was still in mummy''s tummy. Her presence was felt throughout the house as mummy carried her wherever she went. Every morning, I saw mummy carefully walk down the staircase, carrying you with such love and grace, her body protecting you from the world. You were always safe with her. Daddy, on the other hand, gave up his spot on the bed just for you. He would rather sleep on the floor, because your comfort meant more to him than anything else. You were his little treasure, and he loved you deeply even before meeting you. As the fifth member of our home, you sat quietly most of the time, but your little kicks and jolts reminded us that you were there, full of life and joy. Your brothers, Paa Kwesi and Nana Osei, could not wait to add you to the team. The three musketeers would have been a formidable trio. Paa and Nana would have protected you with their lives every single day. Their love for you is more than you could ever imagine. When we visited Grandma''s house, your presence brought laughter and anticipation. Grandma looked forward to meeting you, her new bundle of joy to fill the space Great-Grandma had left behind. When I went shopping, I couldn''t resist getting you a gift a little dress and a baby wrap, the perfect welcome for our precious girl. You were a gift to all of us. I thought I would see you in a few weeks after I left, and yes, we did see you, but heaven had its own plans. God called you home before we could hear your voice, your whisper, or your cry. Our hearts are broken, mine, Naana''s, Nana Kofi''s, and Aunty Angie''s. Yet we find comfort knowing that you are still with us in spirit. You were loved deeply, and you always will be. Rest well, sweet Elaina. We love you beyond words.',
        '2025-11-05 21:31:09.89473+00'
    ),
    (
        '6',
        'Aunty Gaby',
        'gaby_gabriella@hotmail.co.uk',
        'Our beautiful Eliana! I know you are in heaven comforted by our Heavenly Father, yet I am still so jealous that I didn''t get to see your beautiful face. I take joy in the fact that the Lord saw you were too perfect for this world. Right now your dad and mum miss you greatly, but deep in their hearts they know you are waiting for them to join you in the peace and comfort of our Father. Keep cheering your parents on and encouraging your siblings! We won''t let you down! We will make you proud! Love aunty Gaby ',
        '2025-11-05 21:54:02.620057+00'
    ),
    (
        '7',
        'Anna Andoh Owusu',
        'anndebest@live.com',
        'Our baby Eliana, we had longed to see you baby girl. I was just waiting to tease your dad about how you look nothing like him. God however had different plans for you and although we are heartbroken, we know you are in a better place looking over mum and dad and your big brothers cheering them over! You are in good hands over there little angel. One day auntie will see you and get all the cuddles we couldn’t get here on earth. I guess you really were too perfect for Earth. Love you ',
        '2025-11-05 21:55:33.305835+00'
    ),
    (
        '8',
        'Edward A. ',
        'enagyeman@gmail.com',
        'We wished to have had you here with us, but God knows best. We might not understand it all, but we are still trusting God. Farewell, till we meet again at Jesus’ feet. ',
        '2025-11-05 21:58:41.169168+00'
    ),
    (
        '9',
        'Esena',
        'esther.banson6@gmail.com',
        'Our hearts ache with you as we remember your precious Eliana, a beautiful soul who touched this world for only a moment but will be loved for a lifetime. Though her time here was brief, her presence was a gift, leaving behind a quiet yet powerful reminder of love’s depth and fragility.

May you find peace in knowing that Eliana now rests safely in God’s arms, surrounded by His perfect love. 

Keeping you close in prayer and trusting that God’s comfort will carry you through this difficult time. 💖
',
        '2025-11-05 22:07:27.53679+00'
    ),
    (
        '10',
        'Barbara Bonney ',
        'barbarabonney@hotmail.com',
        'Eliana

I felt so sad when I heard about your passing. I thank God for the joy and hope you gave to your parents and I know that they will never forget you. I pray that you will continually be a beacon of light which will never be dimmed, and that your name will live eternally in the hearts of your parents ♥️. ',
        '2025-11-05 22:21:06.179895+00'
    ),
    (
        '11',
        'George Cornelius ',
        'g.cornelius774@gmail.com',
        'Hi Baby Elliana.Thanks for the little time we had with you. We know you are in Abrahams bossom. God willing one day we shat meet again. Enjoy with the Angels in God''s presence.',
        '2025-11-05 22:50:42.817576+00'
    ),
    (
        '12',
        'Ebi Mensah ',
        'esmensah@mensah.org.uk',
        'Dear precious Eliana,
We were looking forward to having you with us, but you came and left before we could carry you and admire your beautiful smile. God knows why, it is well.  We''ll all meet one day in heaven. 💘 The Mensah household. ',
        '2025-11-05 23:28:40.788546+00'
    ),
    (
        '13',
        'Grandma Awo Amarteifio ',
        'Patricia.amarteifio@lfaccra.com',
        'Eliana,
We thank God for your life and departure because of the Great spiritual lessons you have brought us.
You epitomise the fact that in life, whatever our lot, we remain steadfast and sing, it is well. 
God took you away, but He saved your mother''s life. 
One day your family will be reunited with you forever. 
To God forever be all the glory. ',
        '2025-11-06 04:55:03.982173+00'
    ),
    (
        '14',
        'Owura',
        'k.oseikusi@gmail.com',
        'Every single moment we had with you will last for eternity and every joy you brought will be cherished forever. Our love for you will always burn bright in our hearts and never dim until our reunion. You are a perfect gift from the Lord and in Him we will be reunited in perfect love. ',
        '2025-11-06 06:03:10.219318+00'
    ),
    (
        '15',
        'The Kwaku family (Moses and Franklina)',
        'siahfranklina@hotmail.com',
        'Beautiful Eliana, we were so excited to meet you in person, knowing you were the miracle your parents had longed for. Though your time with us was heartbreakingly brief, your presence left an imprint deeper than words can reach.
You will always be remembered, not for the days you lived in your mum’s womb, but for the joy you brought the moment we learned you were coming.
Sleep peacefully, sweet Eliana. You are forever cherished.',
        '2025-11-06 08:08:53.815723+00'
    ),
    (
        '16',
        'Grandma Judith',
        'israel.agyeman.prempeh@gmail.com',
        'Our precious baby Eliana,
you were loved deeply even before we saw your face.
You were carried with joy, prayer, and hope.
And just a few minutes before you were to be born into our arms,
God quietly called you back into His own.
We did not hear your first cry,
yet your life spoke loudly of love.
We did not see your eyes open,
yet your presence changed us forever.
Eliana, you are a gift.
A gift we did not get to keep in our hands,
but a gift we will always hold in our hearts.
We thank God for your life,
no matter how short it was.
We thank God for the time you lived in your mother’s womb,
safe, surrounded by love, song, and prayer.
We trust that you are now resting gently
in the arms of Christ.
You know no pain.
You know no fear.
You are wrapped in perfect peace.
Your name means “My God has answered.”
And even in our tears,
we believe that God is still good.
We believe His mercy is still sure.
We believe we will one day see you again.
Sleep well, our little angel Eliana.
Your story is written in love.
Your memory is kept in grace.
Your place in this family will never be replaced.
You are loved forever.
You are remembered forever.
You belong to God.
Rest in His peace, dear Eliana.
From Grandma Judith',
        '2025-11-06 09:33:19.173223+00'
    ),
    (
        '17',
        'Grandma Sarah ',
        'ekuapene@gmail.com',
        'My beautiful, dearest and beloved grand daughter Eliana, you are precious in the sight of the Lord.
I rushed back from laying your great grandma to rest just to help prepare for your arrival. I was looking forward to pampering and spoiling you - as G''mas do BUT God answered in a different way.Someday we will understand.
The heartbreaking news that fateful morning from the Medical Officer on the other end of the phone still rings in my ears yet in all of this we say " the Lord gave and the Lord has taken away, may the name of the Lord be praised". He will heal and restore.
I am grateful He saved your mum my beloved Nhyira and I am glad I got to cuddle you in my arms as you "slept" - so beautifully and wonderfully made! That memory will be etched in my heart forever. 
Continue to sleep peacefully in the bossom of the One who knew you before He formed you in the womb and approved of you as His chosen vessel, and consecrated you to Himself as His own.Love you more than words can say and miss you every passing day but for now it''s AUREVOIR Sweetheart Eliana x x x',
        '2025-11-06 09:55:57.935819+00'
    ),
    (
        '18',
        'Mummy',
        'ursula_c@hotmail.co.uk',
        'Our beautiful baby girl Eliana, Daddy and I were so excited the day we found out you were a girl. I really looked forward to feeding you, changing you , styling your hair, watching you take your first steps, seeing your first smile and getting to know this daughter I’ve always prayed for. Your big brothers were also ready to give you hugs, play with you and protect you 🥹. 
Grandma Sarah knows I always used to beg her to have one more baby so I could have a little sister. Ever since she said no, I prayed to God for a baby girl when I get married. God had His own plans but I’m glad at least I  got to meet you, cuddle you and kiss you. 

The first time the doctor broke the news to us I was so heart broken💔😢. I just didn’t understand . You were such a healthy, lively girl full of life kicking me in the womb whenever I wanted to sleep. I have so many questions. However, after coming out of surgery, the first thing I said when I held you was "Thank you Lord" I don''t know why but I was grateful to be alive and was glad God answered my prayer and gave us a girl🥹. Your name means God has answered. We chose this name a few months ago but through this hard time I’ve seen how God has started answering prayer requests I made to Him whilst I carried you for those 9 months and for that I’m grateful to God .I still don’t understand what God is doing but one thing He told me a day after you passed was that "His work is not done yet" and I stand on the scripture that says ALL things are WORKING for our good. We know God is still working so all we can do is trust Him and rely on Him during this time. Today we say see you later, we will see you again some day. I love you Eliana it’s really hard not having you here physically but have fun in Heaven we know you are well taken care of up there🥹❤️
Love from Mummy 💕',
        '2025-11-06 10:13:06.816487+00'
    ),
    (
        '19',
        'Uncle Colin',
        'colin.appiah@gmail.com',
        'This is your uncle Colin, though our meeting was brief while you were still in your mummy’s womb, you left a lasting imprint on all our hearts.

We thank God for the precious time He allowed us with you, and we hold fast to His word: “In all things, give thanks to God.” The Lord, who sits outside of time; to whom a thousand years are as a day, and a day as a thousand years - knows why you are now resting safely in His presence.

We take comfort knowing you are cradled in Abraham’s bosom, wrapped in perfect peace. Until we meet again at Jesus’ feet…

With all our love,
The Appiah Family',
        '2025-11-06 10:18:09.54738+00'
    ),
    (
        '20',
        'Carolyn ',
        'cadams_87@outlook.com',
        'Beautiful Eliana, me and mummy talked about you long before you were even conceived, I was so excited to hear that you were on your way, you gave me hope and we were ready to pamper our girl. We smiled at the thought of you and had many plans for you but God had a better one, and he has the final say. Thank you for being a dream come true, rest well angel!',
        '2025-11-06 10:48:20.868471+00'
    ),
    (
        '21',
        'The Poku Family',
        '',
        'You were fearfully and wonderfully made, and a precious gift from God. We may not understand why you could not stay, but we trust that you are now held safely in the arms of Jesus; where there is no pain, no sorrow, only perfect peace.
Your life reminds us that every soul, no matter how short the time on earth, has purpose. You have drawn us closer to God, reminded us of the fragility and beauty of life. Rest in the warmth of God’s eternal presence, Eliana.',
        '2025-11-06 10:51:22.63737+00'
    ),
    (
        '22',
        'Afua ',
        'Afua_ocloo@hotmail.com',
        'There are many precious gifts we receive in this world, but I know you would have been the rarest jewel too special for this earth to see.
If we had been blessed with the grace of holding you in our arms, you would have had the most amazing, God-fearing, and loving parents. Your brothers would have showered you with endless hugs, love, and protection to keep you safe.

There is nothing any of us wouldn’t have done for you. And as for me, your aunty, please know that my love for you will always be endless beyond time, beyond this world.

We will love you forever, 
xxx',
        '2025-11-06 15:59:41.416142+00'
    ),
    (
        '23',
        'Uncle Marcus',
        'marcus_cato@hotmail.com',
        'Our dearly loved and cherished baby Eliana. We looked forward earnestly to your coming, preparing our hearts for the joy that only comes from a new precious life that only our Lord can give -  (the fruit of the womb is His reward)- but little did we know that the Lord had His own plans. ..His ways are not our ways.... So even as we bear the pain of losing you, we have comfort knowing that you are in a beautiful place with a broad smile on your face in the presence of our Lord and Master. Rest well our dear Eliana because we know we will see you again still looking beautiful as ever and that time we will be with you forever. We love you and will keep your flame burning in our hearts 💕 ',
        '2025-11-06 17:26:58.219179+00'
    ),
    (
        '24',
        'Theresa Y',
        'tyemoh@yahoo.com',
        'The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart. Eliana , our beautiful Angel , you shall forever remain in our heart . ❤️❤️🕊️🕊️😇',
        '2025-11-06 20:36:30.820974+00'
    ),
    (
        '25',
        'Kelli Lambie',
        'fattymctoosh@aol.com',
        'Truly heartbroken to hear of your loss. My thoughts and prayers are with you at this sad time. She will always be with you a beautiful angel xxx',
        '2025-11-06 21:49:49.789611+00'
    ),
    (
        '26',
        'Seesiwa Abekah ',
        '',
        'Dear baby Eliana, we were looking forward to meet you but God knows best. We thank God for mom’s life and  everything. You will always be the family’s little angel. We love you.',
        '2025-11-06 21:54:33.897951+00'
    ),
    (
        '27',
        'Sylvia Agyare',
        'sylvia.agyare@yahoo.co.uk',
        'Forever on our hearts 
Rest in peace 🙏🙏🙏',
        '2025-11-06 22:41:31.465823+00'
    ),
    (
        '28',
        'Ruby ',
        'rubybrown94@gmail.com',
        'Sweet Eliana 🥹 I was so excited when mummy told me she was having a baby girl and I knew you would be such a blessing & beautiful addition to your lovely family. 
I have always known mummy would love to have a girl because she always wanted a sister when we were little. The news of you coming to join us was such a joy and that will always be special to me. 
Although God called you home before we could all see you grow, you have been a blessing. 
Yes, it is sad for us to not get to experience you as we imagined to but God knows all. Though you are now in heaven, you have been a blessing to us here - helping us to strengthen our faith and our dependency on Almighty God. 
In all things, we give Him thanks, trusting that He will continue to keep, bless & protect your family. I love you all. 
We will always remember you. 
Until we meet again princess 👼🏾🤍',
        '2025-11-06 22:45:20.719369+00'
    ),
    (
        '29',
        'Melissa Appiah',
        'melissaappiah@outlook.com',
        'Sweet…Pure…Beautiful and Precious Eliana, 

We were absolutely heartbroken to hear of your brief entrance to this world, but God had better plans and you now remain in the promised place we all hope for - Heaven. 

You have a huge family of worshippers who are forever grateful that you atleast entered this world and blessed Mummy and Daddy with your presence, uniqueness and special purpose which will be unearthed more and more throughout the years.

We will hold the children we have on this side a little tighter and cherish them more because we were all so truly excited for your arrival and to not enjoy you leaves a somewhat sinking feeling.

We lean on The Lord Our Almighty Father for wisdom, comfort and direction and we hope to see you in the place we sing about so much. Until then, rest well in the arms of Our King surrounded by wonderful angels. 

Send Mummy and Daddy a sign ok. 

Love you Dearest, Auntie Melissa',
        '2025-11-06 22:48:58.176444+00'
    ),
    (
        '30',
        'Ebo ',
        'ebopett@icloud.cim',
        'Though you were with us only a moment,
you were God’s perfect gift of love.
He called you home before our hearts were ready,
but we trust His plan is greater than our pain.
Rest in His arms, sweet Baby Eliana
our angel forever in heaven.
',
        '2025-11-07 03:57:08.059148+00'
    ),
    (
        '31',
        'Jessica Sarfo Boateng ',
        'Jessduah@gmail.com',
        'God bless you for even the tiniest moment you chose to be with mom and dad, baby Eliana. Keep watching over them until we all meet in Heaven one day, Amen.',
        '2025-11-07 05:22:53.813497+00'
    ),
    (
        '32',
        'V. Oforiwah Gyasi-Adonten ',
        'oforiwaag@yahoo.com',
        'We shall indeed carry her in our hearts. May beautiful Eliana rest peacefully in the bosom of the Lord❤️🙏🏼',
        '2025-11-07 08:14:28.216931+00'
    ),
    (
        '33',
        'Gloria Yankah ',
        'gloyankah@yahoo.co.uk',
        'Eliana, a precious gift from God we were all looking forward to meet. Everything happened so quickly most of us missed the opportunity to behold your cute face, little fingers and feet and all the beautiful feelings babies bring. We feel robbed but as the hymn goes ''God moves in a mysterious way, His wonders to perform''. Sleep well sweet little princess 👸 and enjoy your angelic journey ♥️ ',
        '2025-11-07 09:09:44.150966+00'
    ),
    (
        '34',
        'Geraldine Nartey',
        'geraldinenartey@gmail.com',
        'Dear Eliana, a baby gone to heaven. A child loved forever. Gone from sight but 
Forever in our hearts. ♥️ ',
        '2025-11-07 09:39:08.261998+00'
    ),
    (
        '35',
        'Geraldine Nartey',
        '',
        'Dear Eliana our beautiful baby in heaven. Gone from sight but will be forever in our hearts. ♥️ ',
        '2025-11-07 09:41:00.390164+00'
    ),
    (
        '36',
        'Geraldine Nartey',
        '',
        'Dear Eliana our beautiful baby in heaven. Gone from sight but will be forever in our hearts. ♥️ ',
        '2025-11-07 09:41:08.795826+00'
    ),
    (
        '37',
        'Nyima Sarr',
        'nyimasarr12@gmail.com',
        'My love  and prayers go to you all in this sad moment. May the Almighty God keep guiding you all. Lots of hugs.',
        '2025-11-07 11:23:35.572087+00'
    ),
    (
        '38',
        'Sheila',
        'shoopa69@yahoo.co.uk',
        'Twinkle twinkle little star how I wonder what you are, up above the world so high, like a diamond in the sky. Dear Eliana, our little princess, you are indeed a diamond in our sky, keep shining bright over us. When people lose precious jewels they don''t know where they are, but we have not lost you because we do know where you are - in the bossom of the father, watching over Mum,dad, your siblings and all till we meet again. Sleep well little diamond',
        '2025-11-07 12:50:07.030774+00'
    ),
    (
        '39',
        'Odo family',
        'Jeezuma@gmail.com',
        'Oh my sweet Eliana, its heartbreaking 💔  to hear that you were only with us briefly but in that brief moment you were loved so much and by so many.  But who are we to question God we just thank Him for the little time we had and know that you are resting in His bosom. We will meet again in Paradise, love you❤️❤️❤️❤️

',
        '2025-11-07 19:09:51.242234+00'
    ),
    (
        '40',
        'The Antwi’s ',
        '',
        'To Eliana, the beautiful angel who is the arms of the Lord. What an honour it was to know that you were coming! We could see the joy on mummy and daddy’s face when we found out you were growing in mummy. A beautiful addition you have been to your family and a perfect addition you are to Heaven. Although it’s very hard to understand and painful to process, we will be behind your mummy, daddy and brothers to honour you and remember you always. Praying that our Eden keeps you company in Heaven and that you bask in the unreserved glory of the Lord. We love you precious angel! Thank you God for the things we know and the things we don’t know. In it all you remain good & may your faithfulness carry this family through each and every day. With deepest comfort and love
Aunty Olivia & Uncle Andrew ',
        '2025-11-07 19:39:17.028231+00'
    ),
    (
        '41',
        'Saurabh',
        'khare.saurabh@gmail.com',
        'Sometimes Angels are needed in the Heavens sooner a d when they make a perfect one, they get greedy up there. Your little Angel is looking after you from the stars - forever. Live well up there, little Angel!',
        '2025-11-09 11:21:41.812791+00'
    ),
    (
        '42',
        'Ayodele & Billie Ajayi',
        'ayoinc@gmail.com',
        'Weeping may endure for a night, but Joy comes in the morning. There are many things we do not understand about this life, but one thing is sure: God understands.

Your little angel is our forerunner to meet the Lord; take heart ❤️ and it is well with your soul.

Love from Ayo & Billie',
        '2025-11-09 15:38:05.992433+00'
    );