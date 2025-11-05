import { useState, useEffect, useRef } from 'react';
import './App.css'
import type { Tribute, NewTribute } from './types';

import LightRays from './LightRays';
import useMouseMove from './util/useMouseMove.js';
import EmailForm from './EmailForm/index.js';

const memorialContent = {
  name: "E · L · I · A · N · A",
  subtext: "Our Precious Angel",
  dateOfBirth: "October 17, 2025",
  introduction: "Forever in our hearts, eternally in heaven. Though your time with us was brief, your impact is eternal.",
  poem: [
    "An angel in the book of life wrote down our baby's birth, Then whispered as she closed the book",
    "Too beautiful for Earth."
  ],
  tributes: [
    "You are our little angel, watching over us from heaven.",
    "Your wings were ready, but our hearts were not. We carry you with us always,",
    "in every breath, every heartbeat, every moment of love we share.",
    " ",
    "- Love Mum and Dad"
  ]
};


function App() {
  const [openForm, setOpenForm] = useState(true);
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

  return (
    <>
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="canvas" />
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
      <nav className="nav">
        <div className="navContainer">
          {['home', 'memories', 'tributes'].map((section) => (
            <button
              key={section}
              className={`navButton ${activeSection === section ? 'navButtonActive' : ''}`}
              onClick={() => {
                setActiveSection(section);
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="navButtonText">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
              {activeSection === section && <span className="navButtonUnderline" />}
            </button>
          ))}
        </div>
      </nav>

      <div className="main">
        {/* Animated Gradient Overlay */}
        <div
          className="gradientOverlay"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(138, 43, 226, 0.15) 0%, transparent 50%)`
          }}
        />

        {/* Floating Particles */}
        <div className="particleContainer">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="particle"
              style={{
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

        {/* Main Content */}
        <main className="main">
          <div id="home" className="section">
            <div className="heroContent" style={parallaxStyle}>
              <div className="nameContainer" style={parallaxStyle}>
                <h2 className="babyName">{memorialContent.name}</h2>
              </div>

              <div className="nameContainer" style={parallaxStyle}>
                <div className="wingLeft">✨</div>
                <h2 className="babyName" style={{ fontSize: '2rem' }}>
                  {memorialContent.subtext}
                </h2>
                <div className="wingRight">✨</div>
              </div>

              <div style={parallaxStyle}>
                <div className="dateLabel">Born into Heaven</div>
                <div className="dateValue">{memorialContent.dateOfBirth}</div>
              </div>

              <div className="divider">
                <span className="dividerIcon">🕊️</span>
              </div>

              <p className="introduction">{memorialContent.introduction}</p>
            </div>
          </div>

          <div id="memories" className="section blurBackdrop">
            <div className="sectionHeader">
              <blockquote className="quotes">
                <div className="lightBox">
                  {memorialContent.poem.map((line, i) => (
                    <p key={i}>
                      {line}
                    </p>
                  ))}
                  <hr style={{ width: 50 }} />
                  {memorialContent.tributes.map((line, i) => (
                    <p key={i}>
                      {line}
                    </p>
                  ))}
                </div>
              </blockquote>
            </div>
          </div>

          <div id="tributes" className="section">
            <div className="sectionHeader" onClick={() => setOpenForm(prev => !prev)}>
              <h2 className="sectionTitle">Share Your Tribute</h2>
              <p className="sectionSubtitle">Add your words of love and remembrance</p>
            </div>

            {openForm && <EmailForm />}
            <div className="visitorTributeContainer">
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
                className="tributeForm"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newTribute.name}
                  onChange={(e) => setNewTribute(prev => ({ ...prev, name: e.target.value }))}
                  className="tributeInput"
                  required
                />
                <textarea
                  placeholder="Share your message..."
                  value={newTribute.message}
                  onChange={(e) => setNewTribute(prev => ({ ...prev, message: e.target.value }))}
                  className="tributeTextarea"
                  required
                />
                <button type="submit" className="tributeSubmitButton">
                  Share Your Tribute
                </button>
              </form>
            </div>

            <div className="section blurBackdrop">
              <div className="visitorTributesList">
                {visitorTributes.map((tribute) => (
                  <div key={tribute.id} className="visitorTributeCard">
                    <div className="visitorTributeTitle">
                      <p className="visitorTributeName">{tribute.name}</p>
                      {new Date(tribute.created_at).toLocaleDateString()}
                    </div>
                    <p className="visitorTributeMessage">{tribute.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footerContent">
            <div className="footerIcon">✦</div>
            <p className="footerText">Forever Loved • Never Forgotten • Always in Our Hearts</p>
            <div className="footerIcon">✦</div>
          </div>
        </footer>
      </div>
    </>
  );
}



export default App;


