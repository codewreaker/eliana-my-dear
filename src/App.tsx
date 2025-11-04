import { useState, useEffect, useRef } from 'react';
import './App.css'
import { styles } from './styles.js'
import type { Tribute, NewTribute } from './types';


import LightRays from './LightRays';

const memorialContent = {
  name: "E · L · I · A · N · A",
  subtext: "Our Precious Angel",
  dateOfBirth: "October 17, 2025",
  introduction: "Forever in our hearts, eternally in heaven. Though your time with us was brief, your impact is eternal.",
  poem: [
    "An angel in the book of life wrote down our baby's birth,",
    "Then whispered as she closed the book,",
    "'Too beautiful for Earth.'"
  ],
  tributes: "You are our little angel, watching over us from heaven. Your wings were ready, but our hearts were not. We carry you with us always, in every breath, every heartbeat, every moment of love we share."
};



function App() {

  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visitorTributes, setVisitorTributes] = useState<Tribute[]>([]);
  const [newTribute, setNewTribute] = useState<NewTribute>({ name: '', message: '' });
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
  }>>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
        console.error('Failed to load tributes:', error);
      }
    };
    loadTributes();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Generate floating particles
    const newParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Canvas constellation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      opacity: Math.random()
    }));

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Draw connections between nearby stars
      stars.forEach((star1, i) => {
        stars.slice(i + 1).forEach(star2 => {
          const dx = star1.x - star2.x;
          const dy = star1.y - star2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(star1.x, star1.y);
            ctx.lineTo(star2.x, star2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`
  };

  return (
    <>
      {/* Canvas Background */}
      <canvas ref={canvasRef} style={styles.canvas} />
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
            <div style={styles.heroContent}>
              <div style={{ ...styles.nameContainer }}>
                <h2 style={styles.babyName}>{memorialContent.name}</h2>

              </div>
              <div style={{ ...styles.nameContainer }}>
                <div style={styles.wingLeft}>✨</div>
                <h2 style={{ ...styles.babyName, fontSize: '2rem' }}>{memorialContent.subtext}</h2>
                <div style={styles.wingRight}>✨</div>
              </div>

              <div>
                <div style={styles.dateLabel}>Born into Heaven</div>
                <div style={styles.dateValue}>{memorialContent.dateOfBirth}</div>
              </div>

              <div style={styles.divider}>
                <span style={styles.dividerIcon}>🕊️</span>
              </div>

              <p style={styles.introduction}>{memorialContent.introduction}</p>

              <div style={styles.lightBox}>
                {memorialContent.poem.map((line, i) => (
                  <p key={i} style={{ ...styles.poemLine, animationDelay: `${i * 0.3}s` }}>
                    {line}
                  </p>
                ))}
              </div>

            </div>
          </div>

          <div style={styles.lightBeam} />
          <div id='memories' style={styles.section}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Cherished Memories</h2>
              <p style={styles.sectionSubtitle}>Moments that live forever in our hearts</p>
            </div>
          </div>

          <div id='tributes' style={styles.section}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>A Parent's Tribute</h2>
              <p style={styles.sectionSubtitle}>Words from the heart</p>
            </div>

            <div style={styles.tributeContainer}>
              <div style={styles.tributeGlow} />
              <div style={styles.tributeIconContainer}>
                <span style={styles.tributeIcon}>💝</span>
              </div>
              <div style={styles.quoteOpen}>"</div>
              <p style={styles.lightboxText}>{memorialContent.tributes}</p>
              <div style={styles.quoteClose}>"</div>

              <div style={styles.heartContainer}>
                {[0, 1, 2, 3, 4].map(i => (
                  <span
                    key={i}
                    style={{
                      ...styles.floatingHeart,
                      animationDelay: `${i * 0.4}s`
                    }}
                  >
                    💙
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.section}>
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
                    console.error('Failed to submit tribute:', error);
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
