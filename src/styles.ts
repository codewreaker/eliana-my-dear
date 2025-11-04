export const styles = {
  // Visitor Tributes Styles
  visitorTributeContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)'
  },
  tributeForm: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    marginBottom: '2rem'
  },
  tributeInput: {
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    color: 'white'
  },
  tributeTextarea: {
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    color: 'white',
    minHeight: '120px',
    resize: 'vertical' as const
  },
  tributeSubmitButton: {
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: 'rgba(138, 43, 226, 0.6)',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: 'rgba(138, 43, 226, 0.8)'
    }
  },
  visitorTributesList: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'space-around'
  } as React.CSSProperties,
  visitorTributeCard: {
    padding: '1em',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '500px',
    minWidth: '200px',
    height: '150px',
    overflowX: 'scroll'
  } as React.CSSProperties,
  visitorTributeTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: 'rgba(255, 255, 255, 0.6)'
  } as React.CSSProperties,
  visitorTributeName: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#fff'
  },
  visitorTributeMessage: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.6',
    marginBottom: '1rem'
  },
  canvas: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0
  } as React.CSSProperties,
  gradientOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
    transition: 'background 0.3s ease'
  } as React.CSSProperties,
  particleContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 2
  } as React.CSSProperties,
  particle: {
    position: 'absolute',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float-particle 20s infinite ease-in-out'
  } as React.CSSProperties,
  header: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '80px 20px 40px',
    marginBottom: '40px'
  } as React.CSSProperties,
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
  } as React.CSSProperties,
  angelIconLarge: {
    fontSize: '100px',
    marginBottom: '20px',
    animation: 'float-gentle 4s ease-in-out infinite',
    filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))'
  } as React.CSSProperties,
  headerTitle: {
    fontSize: '28px',
    fontWeight: 300,
    letterSpacing: '6px',
    textTransform: 'uppercase',
    marginBottom: '20px',
    opacity: 0.9,
    textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
  } as React.CSSProperties,
  decorativeLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    fontSize: '20px'
  } as React.CSSProperties,
  decorativeDot: {
    color: '#d4af37',
    animation: 'sparkle-slow 3s ease-in-out infinite'
  } as React.CSSProperties,
  decorativeDash: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '16px'
  } as React.CSSProperties,
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    padding: '20px',
    backdropFilter: 'blur(20px)',
    background: 'transparent',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
  } as React.CSSProperties,
  navContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    maxWidth: '800px',
    margin: '0 auto'
  } as React.CSSProperties,
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
  } as React.CSSProperties,
  navButtonActive: {
    color: '#fff'
  } as React.CSSProperties,
  navButtonText: {
    position: 'relative',
    zIndex: 1
  } as React.CSSProperties,
  navButtonUnderline: {
    position: 'absolute',
    bottom: '8px',
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
    animation: 'expand 0.3s ease-out'
  } as React.CSSProperties,
  main: {
    position: 'relative',
    zIndex: 10,
    margin: '0 auto',
    padding: '60px 20px 120px'
  } as React.CSSProperties,
  section: {
    width: '100%',
    padding: 10,
    animation: 'fade-in-up 0.8s ease-out'
  } as React.CSSProperties,
  blurBackdrop: {
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(0,0,0,0.08)'
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto'
  } as React.CSSProperties,
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '40px'
  } as React.CSSProperties,
  wingLeft: {
    fontSize: '1.5rem',
    animation: 'pulse-glow 2s ease-in-out infinite'
  } as React.CSSProperties,
  wingRight: {
    fontSize: '1.5rem',
    animation: 'pulse-glow 2s ease-in-out infinite',
    animationDelay: '1s'
  } as React.CSSProperties,
  babyName: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 400,
    margin: 0,
    background: 'linear-gradient(135deg, #fff 0%, #d4af37 50%, #fff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '3px',
    textShadow: '0 0 40px rgba(212, 175, 55, 0.3)'
  } as React.CSSProperties,
  lightBox: {
    display: 'inline-block',
    padding: '20px 40px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    border: '1px solid rgba(212, 175, 55, 0.3)',
    backdropFilter: 'blur(10px)',
    marginBottom: '50px'
  } as React.CSSProperties,
  lightboxText: {
    zIndex: 1,
    fontSize: '1.8rem',
    lineHeight: '2',
    color: 'rgba(255, 255, 255, 0.9)',
    fontStyle: 'italic',
    fontWeight: 300
  } as React.CSSProperties,
  dateLabel: {
    fontSize: '14px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.6)',
    marginBottom: '8px'
  } as React.CSSProperties,
  dateValue: {
    fontSize: '24px',
    color: '#d4af37',
    fontWeight: 300,
    letterSpacing: '2px'
  } as React.CSSProperties,
  divider: {
    margin: '40px 0',
    fontSize: '40px',
    opacity: 0.7
  } as React.CSSProperties,
  dividerIcon: {
    display: 'inline-block',
    animation: 'float-gentle 3s ease-in-out infinite'
  } as React.CSSProperties,
  introduction: {
    fontSize: '1.2rem',
    lineHeight: '1.9',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '50px',
    fontStyle: 'italic',
    fontWeight: 300
  } as React.CSSProperties,
  poemContainer: {
    padding: '40px',
    background: 'rgba(138, 43, 226, 0.1)',
    borderRadius: '20px',
    border: '1px solid rgba(138, 43, 226, 0.2)',
    backdropFilter: 'blur(10px)',
    marginTop: '50px'
  } as React.CSSProperties,
  poemLine: {
    fontSize: '1.3rem',
    lineHeight: '2',
    margin: '5px 0',
    fontStyle: 'italic',
    animation: 'fade-in 1s ease-out',
    textAlign: 'center'
  } as React.CSSProperties,
  lightBeam: {
    position: 'absolute',
    top: '40vh',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '2px',
    height: '100%',
    background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent)',
    pointerEvents: 'none'
  } as React.CSSProperties,
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px'
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '48px',
    fontWeight: 300,
    marginBottom: '15px',
    letterSpacing: '3px',
    color: '#fff',
    textShadow: '0 0 30px rgba(255, 255, 255, 0.2)'
  } as React.CSSProperties,
  sectionSubtitle: {
    fontSize: '18px',
    color: 'rgba(255, 255, 255, 0.6)',
    letterSpacing: '2px',
    fontStyle: 'italic'
  } as React.CSSProperties,
  footer: {
    position: 'relative',
    zIndex: 10,
    padding: '40px 20px',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    marginTop: '80px'
  } as React.CSSProperties,
  footerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px'
  } as React.CSSProperties,
  footerIcon: {
    color: '#d4af37',
    fontSize: '16px',
    animation: 'sparkle-slow 3s ease-in-out infinite'
  } as React.CSSProperties,
  footerText: {
    margin: 0,
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.7)',
    letterSpacing: '2px'
  } as React.CSSProperties
};