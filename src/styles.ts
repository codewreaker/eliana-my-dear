export const styles = {
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
    background: 'rgba(10, 10, 26, 0.8)',
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
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px 120px'
  } as React.CSSProperties,
  section: {
    animation: 'fade-in-up 0.8s ease-out'
  } as React.CSSProperties,
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
    fontSize: '40px',
    animation: 'pulse-glow 2s ease-in-out infinite'
  } as React.CSSProperties,
  wingRight: {
    fontSize: '40px',
    animation: 'pulse-glow 2s ease-in-out infinite',
    animationDelay: '1s'
  } as React.CSSProperties,
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
  } as React.CSSProperties,
  dateBox: {
    display: 'inline-block',
    padding: '20px 40px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    border: '1px solid rgba(212, 175, 55, 0.3)',
    backdropFilter: 'blur(10px)',
    marginBottom: '50px'
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
    fontSize: '24px',
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
    fontSize: '22px',
    lineHeight: '2',
    color: 'rgba(255, 255, 255, 0.85)',
    margin: '10px 0',
    fontStyle: 'italic',
    animation: 'fade-in 1s ease-out',
    textAlign: 'center'
  } as React.CSSProperties,
  lightBeam: {
    position: 'absolute',
    top: 0,
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
  memoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
    marginTop: '60px'
  } as React.CSSProperties,
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
  } as React.CSSProperties,
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
  } as React.CSSProperties,
  memoryIconContainer: {
    marginBottom: '25px'
  } as React.CSSProperties,
  memoryIconLarge: {
    fontSize: '60px',
    display: 'inline-block',
    animation: 'float-gentle 3s ease-in-out infinite',
    filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
  } as React.CSSProperties,
  memoryTitle: {
    fontSize: '28px',
    marginBottom: '15px',
    fontWeight: 400,
    color: '#d4af37',
    letterSpacing: '1px'
  } as React.CSSProperties,
  memoryDivider: {
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)',
    margin: '20px 0'
  } as React.CSSProperties,
  memoryContent: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '20px'
  } as React.CSSProperties,
  memoryFooter: {
    textAlign: 'center',
    marginTop: '20px'
  } as React.CSSProperties,
  memoryFooterIcon: {
    color: 'rgba(212, 175, 55, 0.5)',
    fontSize: '20px'
  } as React.CSSProperties,
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
  } as React.CSSProperties,
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
  } as React.CSSProperties,
  tributeIconContainer: {
    position: 'relative',
    zIndex: 1,
    marginBottom: '30px'
  } as React.CSSProperties,
  tributeIcon: {
    fontSize: '80px',
    display: 'inline-block',
    animation: 'pulse-glow 3s ease-in-out infinite',
    filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.4))'
  } as React.CSSProperties,
  quoteOpen: {
    position: 'absolute',
    top: '60px',
    left: '30px',
    fontSize: '120px',
    color: 'rgba(212, 175, 55, 0.2)',
    fontFamily: 'Georgia, serif',
    lineHeight: 1,
    zIndex: 0
  } as React.CSSProperties,
  quoteClose: {
    position: 'absolute',
    bottom: '60px',
    right: '30px',
    fontSize: '120px',
    color: 'rgba(212, 175, 55, 0.2)',
    fontFamily: 'Georgia, serif',
    lineHeight: 1,
    zIndex: 0
  } as React.CSSProperties,
  tributeText: {
    position: 'relative',
    zIndex: 1,
    fontSize: '26px',
    lineHeight: '2',
    color: 'rgba(255, 255, 255, 0.9)',
    fontStyle: 'italic',
    fontWeight: 300,
    marginBottom: '40px'
  } as React.CSSProperties,
  heartContainer: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginTop: '40px',
    fontSize: '35px'
  } as React.CSSProperties,
  floatingHeart: {
    display: 'inline-block',
    animation: 'float-heart 3s ease-in-out infinite',
    filter: 'drop-shadow(0 0 15px rgba(100, 149, 237, 0.5))'
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