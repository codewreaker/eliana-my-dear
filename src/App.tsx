import { useState, useEffect, useRef } from 'react';
import './App.css'
import { styles } from './styles.js'
import type { Tribute, NewTribute } from './types';


import LightRays from './LightRays';
import useMouseMove from './util/useMouseMove.js';

const memorialContent = {
  name: "E · L · I · A · N · A",
  subtext: "Our Precious Angel",
  dateOfBirth: "October 17, 2025",
  introduction: "Forever in our hearts, eternally in heaven. Though your time with us was brief, your impact is eternal.",
  poem: "An angel in the book of life wrote down our baby's birth, Then whispered as she closed the book,\
  'Too beautiful for Earth.".split(','),
  tributes: [
    "You are our little angel, watching over us from heaven.",
    "Your wings were ready, but our hearts were not. We carry you with us always,",
    "in every breath, every heartbeat, every moment of love we share.",
    "",
    "- Love Mum and Dad"
  ]
};



function App() {

  const [activeSection, setActiveSection] = useState('home');
  const [visitorTributes, setVisitorTributes] = useState<Tribute[]>([{
    created_at: (new Date()).toISOString(),
    id: 1,
    message: 'Lorem Ipsum dit dolor',
    name: 'Israel'
  }]);
  const [newTribute, setNewTribute] = useState<NewTribute>({ name: '', message: '' });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { mousePos, particles, scrollY } = useMouseMove(canvasRef);


  // Load visitor tributes
  useEffect(() => {
    const loadTributes = async () => {
      try {
        const response = await fetch('/api/tributes');
        if (response.ok) {
          const data = await response.json();
          setVisitorTributes(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadTributes();
  }, []);


  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`
  };

  const textAnim = () => ({ ...styles.poemLine })


  return (
    <>
      {/* {createStatDisplay()} */}
      {/* Canvas Background */}
      <canvas ref={canvasRef} style={styles.canvas} />
      <div style={{ width: '100%', height: '800px', position: 'absolute' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={1}
          rayLength={1.2}
          fadeDistance={2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          {['home', 'memories', 'tributes'].map((section) => (
            <button
              key={section}
              style={activeSection === section ? { ...styles.navButton, ...styles.navButtonActive } : styles.navButton}
              onClick={() => {
                setActiveSection(section);
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span style={styles.navButtonText}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
              {activeSection === section && <span style={styles.navButtonUnderline} />}
            </button>
          ))}
        </div>
      </nav>
      <div className='main' id='home'>
        {/* Animated Gradient Overlay */}
        <div style={{
          ...styles.gradientOverlay,
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(138, 43, 226, 0.15) 0%, transparent 50%)`
        }} />

        {/* Floating Particles */}
        <div style={styles.particleContainer}>
          {particles.map(particle => (
            <div
              key={particle.id}
              style={{
                ...styles.particle,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </div>

        {/* Header with Parallax */}
        {/* <header style={{ ...styles.header, ...parallaxStyle }}>
          <div style={styles.headerGlow} />
          <div style={styles.angelIconLarge}>👼🏾</div>
          <h1 style={styles.headerTitle}>E · L · I · A · N · A</h1>
          <div style={styles.decorativeLine}>
            <span style={styles.decorativeDot}>✦</span>
            <span style={styles.decorativeDash}>—</span>
            <span style={styles.decorativeDot}>✦</span>
          </div>
        </header> */}

        {/* Main Content */}
        <main style={{ ...styles.main }}>
          <div style={styles.section}>
            <div style={{ ...styles.heroContent, ...parallaxStyle }}>
              <div style={{ ...styles.nameContainer, ...parallaxStyle }}>
                <h2 style={styles.babyName}>{memorialContent.name}</h2>

              </div>
              <div style={{ ...styles.nameContainer, ...parallaxStyle }}>
                <div style={styles.wingLeft}>✨</div>
                <h2 style={{ ...styles.babyName, fontSize: '2rem' }}>{memorialContent.subtext}</h2>
                <div style={styles.wingRight}>✨</div>
              </div>

              <div style={parallaxStyle}>
                <div style={styles.dateLabel}>Born into Heaven</div>
                <div style={styles.dateValue}>{memorialContent.dateOfBirth}</div>
              </div>

              <div style={styles.divider}>
                <span style={styles.dividerIcon}>🕊️</span>
              </div>

              <p style={styles.introduction}>{memorialContent.introduction}</p>
            </div>
          </div>

          <div id='memories' style={styles.section}>
            <div style={styles.sectionHeader}>
              <blockquote className='quotes'>
                <div style={styles.lightBox}>
                  {memorialContent.poem.map((line, i) => (
                    <p key={i} style={textAnim(i)}>
                      {line}
                    </p>
                  ))}
                  <hr style={{ width: 50 }} />
                  {memorialContent.tributes.map((line, i) => (
                    <p key={i} style={textAnim(i)}>
                      {line}
                    </p>
                  ))}
                </div>
              </blockquote>
            </div>
          </div>



          <div id='tributes' style={styles.section}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Share Your Tribute</h2>
              <p style={styles.sectionSubtitle}>Add your words of love and remembrance</p>
            </div>

            <div style={styles.visitorTributeContainer}>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    const response = await fetch('/api/tributes', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(newTribute),
                    });
                    if (response.ok) {
                      const tribute = await response.json();
                      setVisitorTributes(prev => [tribute, ...prev]);
                      setNewTribute({ name: '', message: '' });
                    }
                  } catch (error) {
                    console.error(error);
                  }
                }}
                style={styles.tributeForm}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newTribute.name}
                  onChange={(e) => setNewTribute(prev => ({ ...prev, name: e.target.value }))}
                  style={styles.tributeInput}
                  required
                />
                <textarea
                  placeholder="Share your message..."
                  value={newTribute.message}
                  onChange={(e) => setNewTribute(prev => ({ ...prev, message: e.target.value }))}
                  style={styles.tributeTextarea}
                  required
                />
                <button type="submit" style={styles.tributeSubmitButton}>
                  Share Your Tribute
                </button>
              </form>

              <div style={styles.visitorTributesList}>
                {visitorTributes.map((tribute) => (
                  <div key={tribute.id} style={styles.visitorTributeCard}>
                    <p style={styles.visitorTributeName}>{tribute.name}</p>
                    <p style={styles.visitorTributeMessage}>{tribute.message}</p>
                    <div style={styles.visitorTributeDate}>
                      {new Date(tribute.created_at).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            <div style={styles.footerIcon}>✦</div>
            <p style={styles.footerText}>Forever Loved • Never Forgotten • Always in Our Hearts</p>
            <div style={styles.footerIcon}>✦</div>
          </div>
        </footer>
      </div>
    </>
  );
};


export default App
