import React, { useState, useEffect, useRef } from 'react';

const memorialContent = {
  name: "Our Precious Angel",
  dateOfBirth: "October 17, 2025",
  introduction: "Forever in our hearts, eternally in heaven. Though your time with us was brief, your impact is eternal.",
  poem: [
    "An angel in the book of life wrote down our baby's birth,",
    "Then whispered as she closed the book,",
    "'Too beautiful for Earth.'"
  ],
  memories: [
    {
      title: "The Day We Met You",
      content: "October 17th, 2025 - A day forever etched in our hearts. Though we couldn't hold you for long, we felt your presence deeply.",
      icon: "🌟"
    },
    {
      title: "Your Legacy",
      content: "You taught us the depths of love in the briefest moment. Your spirit lives on in everything we do.",
      icon: "💫"
    },
    {
      title: "Forever Loved",
      content: "In our hearts, you live on. Every sunrise reminds us of your light, every sunset of your peace.",
      icon: "🌸"
    }
  ],
  tribute: "You are our little angel, watching over us from heaven. Your wings were ready, but our hearts were not. We carry you with us always, in every breath, every heartbeat, every moment of love we share."
};

const AngelMemorial = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
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

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      opacity: Math.random()
    }));

    let animationId;
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
    <div style={styles.app}>
      {/* Canvas Background */}
      <canvas ref={canvasRef} style={styles.canvas} />

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
      <header style={{...styles.header, ...parallaxStyle}}>
        <div style={styles.headerGlow} />
        <div style={styles.angelIconLarge}>👼</div>
        <h1 style={styles.headerTitle}>In Loving Memory</h1>
        <div style={styles.decorativeLine}>
          <span style={styles.decorativeDot}>✦</span>
          <span style={styles.decorativeDash}>—</span>
          <span style={styles.decorativeDot}>✦</span>
        </div>
      </header>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          {['home', 'memories', 'tribute'].map((section) => (
            <button
              key={section}
              style={activeSection === section ? {...styles.navButton, ...styles.navButtonActive} : styles.navButton}
              onClick={() => setActiveSection(section)}
            >
              <span style={styles.navButtonText}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
              {activeSection === section && <span style={styles.navButtonUnderline} />}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        {activeSection === 'home' && (
          <div style={styles.section}>
            <div style={styles.heroContent}>
              <div style={styles.nameContainer}>
                <div style={styles.wingLeft}>✨</div>
                <h2 style={styles.babyName}>{memorialContent.name}</h2>
                <div style={styles.wingRight}>✨</div>
              </div>
              
              <div style={styles.dateBox}>
                <div style={styles.dateLabel}>Born into Heaven</div>
                <div style={styles.dateValue}>{memorialContent.dateOfBirth}</div>
              </div>

              <div style={styles.divider}>
                <span style={styles.dividerIcon}>🕊️</span>
              </div>

              <p style={styles.introduction}>{memorialContent.introduction}</p>

              <div style={styles.poemContainer}>
                {memorialContent.poem.map((line, i) => (
                  <p key={i} style={{...styles.poemLine, animationDelay: `${i * 0.3}s`}}>
                    {line}
                  </p>
                ))}
              </div>

              <div style={styles.lightBeam} />
            </div>
          </div>
        )}

        {activeSection === 'memories' && (
          <div style={styles.section}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Cherished Memories</h2>
              <p style={styles.sectionSubtitle}>Moments that live forever in our hearts</p>
            </div>

            <div style={styles.memoriesGrid}>
              {memorialContent.memories.map((memory, index) => (
                <div 
                  key={index} 
                  style={{
                    ...styles.memoryCard,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div style={styles.memoryCardGlow} />
                  <div style={styles.memoryIconContainer}>
                    <span style={styles.memoryIconLarge}>{memory.icon}</span>
                  </div>
                  <h3 style={styles.memoryTitle}>{memory.title}</h3>
                  <div style={styles.memoryDivider} />
                  <p style={styles.memoryContent}>{memory.content}</p>
                  <div style={styles.memoryFooter}>
                    <span style={styles.memoryFooterIcon}>✦</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'tribute' && (
          <div style={styles.section}>
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
              <p style={styles.tributeText}>{memorialContent.tribute}</p>
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
        )}
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
  );
};

const styles = {
  app: {
    minHeight: '100vh',
    background: '#0a0a1a',
    color: '#fff',
    fontFamily: "'Crimson Text', 'Georgia', serif",
    position: 'relative',
    overflow: 'auto'
  },
  canvas: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0
  },
  gradientOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
    transition: 'background 0.3s ease'
  },
  particleContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 2
  },
  particle: {
    position: 'absolute',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float-particle 20s infinite ease-in-out'
  },
  header: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '80px 20px 40px',
    marginBottom: '40px'
  },
  headerGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, transparent 70%)',
    filter: 'blur(60px)',
    zIndex: -1
  },
  angelIconLarge: {
    fontSize: '100px',
    marginBottom: '20px',
    animation: 'float-gentle 4s ease-in-out infinite',
    filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))'
  },
  headerTitle: {
    fontSize: '28px',
    fontWeight: 300,
    letterSpacing: '6px',
    textTransform: 'uppercase',
    marginBottom: '20px',
    opacity: 0.9,
    textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
  },
  decorativeLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    fontSize: '20px'
  },
  decorativeDot: {
    color: '#d4af37',
    animation: 'sparkle-slow 3s ease-in-out infinite'
  },
  decorativeDash: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '16px'
  },
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    padding: '20px',
    backdropFilter: 'blur(20px)',
    background: 'rgba(10, 10, 26, 0.8)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  navButton: {
    background: 'transparent',
    border: 'none',
    color: 'rgba(255, 255, 255, 0.6)',
    padding: '12px 0',
    cursor: 'pointer',
    fontSize: '18px',
    fontFamily: "'Crimson Text', 'Georgia', serif",
    transition: 'all 0.3s ease',
    position: 'relative',
    letterSpacing: '2px'
  },
  navButtonActive: {
    color: '#fff'
  },
  navButtonText: {
    position: 'relative',
    zIndex: 1
  },
  navButtonUnderline: {
    position: 'absolute',
    bottom: '8px',
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
    animation: 'expand 0.3s ease-out'
  },
  main: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px 120px'
  },
  section: {
    animation: 'fade-in-up 0.8s ease-out'
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto'
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '40px'
  },
  wingLeft: {
    fontSize: '40px',
    animation: 'pulse-glow 2s ease-in-out infinite'
  },
  wingRight: {
    fontSize: '40px',
    animation: 'pulse-glow 2s ease-in-out infinite',
    animationDelay: '1s'
  },
  babyName: {
    fontSize: '56px',
    fontWeight: 400,
    margin: 0,
    background: 'linear-gradient(135deg, #fff 0%, #d4af37 50%, #fff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '3px',
    textShadow: '0 0 40px rgba(212, 175, 55, 0.3)'
  },
  dateBox: {
    display: 'inline-block',
    padding: '20px 40px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    border: '1px solid rgba(212, 175, 55, 0.3)',
    backdropFilter: 'blur(10px)',
    marginBottom: '50px'
  },
  dateLabel: {
    fontSize: '14px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '8px'
  },
  dateValue: {
    fontSize: '24px',
    color: '#d4af37',
    fontWeight: 300,
    letterSpacing: '2px'
  },
  divider: {
    margin: '40px 0',
    fontSize: '40px',
    opacity: 0.7
  },
  dividerIcon: {
    display: 'inline-block',
    animation: 'float-gentle 3s ease-in-out infinite'
  },
  introduction: {
    fontSize: '24px',
    lineHeight: '1.9',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '50px',
    fontStyle: 'italic',
    fontWeight: 300
  },
  poemContainer: {
    padding: '40px',
    background: 'rgba(138, 43, 226, 0.1)',
    borderRadius: '20px',
    border: '1px solid rgba(138, 43, 226, 0.2)',
    backdropFilter: 'blur(10px)',
    marginTop: '50px'
  },
  poemLine: {
    fontSize: '22px',
    lineHeight: '2',
    color: 'rgba(255, 255, 255, 0.85)',
    margin: '10px 0',
    fontStyle: 'italic',
    animation: 'fade-in 1s ease-out',
    textAlign: 'center'
  },
  lightBeam: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '2px',
    height: '100%',
    background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent)',
    pointerEvents: 'none'
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  sectionTitle: {
    fontSize: '48px',
    fontWeight: 300,
    marginBottom: '15px',
    letterSpacing: '3px',
    color: '#fff',
    textShadow: '0 0 30px rgba(255, 255, 255, 0.2)'
  },
  sectionSubtitle: {
    fontSize: '18px',
    color: 'rgba(255, 255, 255, 0.6)',
    letterSpacing: '2px',
    fontStyle: 'italic'
  },
  memoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
    marginTop: '60px'
  },
  memoryCard: {
    position: 'relative',
    padding: '40px 30px',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '25px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    transition: 'all 0.4s ease',
    animation: 'fade-in-up 0.8s ease-out',
    overflow: 'hidden'
  },
  memoryCardGlow: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 50%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    pointerEvents: 'none'
  },
  memoryIconContainer: {
    marginBottom: '25px'
  },
  memoryIconLarge: {
    fontSize: '60px',
    display: 'inline-block',
    animation: 'float-gentle 3s ease-in-out infinite',
    filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
  },
  memoryTitle: {
    fontSize: '28px',
    marginBottom: '15px',
    fontWeight: 400,
    color: '#d4af37',
    letterSpacing: '1px'
  },
  memoryDivider: {
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)',
    margin: '20px 0'
  },
  memoryContent: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '20px'
  },
  memoryFooter: {
    textAlign: 'center',
    marginTop: '20px'
  },
  memoryFooterIcon: {
    color: 'rgba(212, 175, 55, 0.5)',
    fontSize: '20px'
  },
  tributeContainer: {
    position: 'relative',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '60px 50px',
    background: 'rgba(255, 255, 255, 0.04)',
    borderRadius: '30px',
    border: '1px solid rgba(212, 175, 55, 0.2)',
    backdropFilter: 'blur(20px)',
    textAlign: 'center',
    overflow: 'hidden'
  },
  tributeGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
    filter: 'blur(40px)',
    zIndex: 0
  },
  tributeIconContainer: {
    position: 'relative',
    zIndex: 1,
    marginBottom: '30px'
  },
  tributeIcon: {
    fontSize: '80px',
    display: 'inline-block',
    animation: 'pulse-glow 3s ease-in-out infinite',
    filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.4))'
  },
  quoteOpen: {
    position: 'absolute',
    top: '60px',
    left: '30px',
    fontSize: '120px',
    color: 'rgba(212, 175, 55, 0.2)',
    fontFamily: 'Georgia, serif',
    lineHeight: 1,
    zIndex: 0
  },
  quoteClose: {
    position: 'absolute',
    bottom: '60px',
    right: '30px',
    fontSize: '120px',
    color: 'rgba(212, 175, 55, 0.2)',
    fontFamily: 'Georgia, serif',
    lineHeight: 1,
    zIndex: 0
  },
  tributeText: {
    position: 'relative',
    zIndex: 1,
    fontSize: '26px',
    lineHeight: '2',
    color: 'rgba(255, 255, 255, 0.9)',
    fontStyle: 'italic',
    fontWeight: 300,
    marginBottom: '40px'
  },
  heartContainer: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginTop: '40px',
    fontSize: '35px'
  },
  floatingHeart: {
    display: 'inline-block',
    animation: 'float-heart 3s ease-in-out infinite',
    filter: 'drop-shadow(0 0 15px rgba(100, 149, 237, 0.5))'
  },
  footer: {
    position: 'relative',
    zIndex: 10,
    padding: '40px 20px',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    marginTop: '80px'
  },
  footerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px'
  },
  footerIcon: {
    color: '#d4af37',
    fontSize: '16px',
    animation: 'sparkle-slow 3s ease-in-out infinite'
  },
  footerText: {
    margin: 0,
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.7)',
    letterSpacing: '2px'
  }
};

// CSS Animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes float-gentle {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }

  @keyframes float-heart {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-20px) scale(1.1); }
  }

  @keyframes float-particle {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(20px, -20px); }
    50% { transform: translate(0, -40px); }
    75% { transform: translate(-20px, -20px); }
  }

  @keyframes pulse-glow {
    0%, 100% { 
      opacity: 0.8;
      filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
    }
    50% { 
      opacity: 1;
      filter: drop-shadow(0 0 40px rgba(255, 255, 255, 0.6));
    }
  }

  @keyframes sparkle-slow {
    0%, 100% { 
      opacity: 0.5;
      transform: scale(1);
    }
    50% { 
      opacity: 1;
      transform: scale(1.3);
    }
  }

  @keyframes expand {
    from {
      transform: scaleX(0);
      opacity: 0;
    }
    to {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  button:hover {
    color: #fff !important;
    transform: translateY(-2px);
  }

  div[style*="memoryCard"]:hover {
    transform: translateY(-10px);
    border-color: rgba(212, 175, 55, 0.4);
    box-shadow: 0 20px 60px rgba(138, 43, 226, 0.3);
  }

  div[style*="memoryCard"]:hover > div[style*="memoryCardGlow"] {
    opacity: 1;
  }

  @media (max-width: 768px) {
    h2[style*="babyName"] {
      font-size: 36px !important;
    }
    
    div[style*="poemLine"] {
      font-size: 18px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default AngelMemorial;