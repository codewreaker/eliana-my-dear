import { useState, useRef, useEffect } from 'react';
import './App.css'
import type { Tribute } from './types';

import LightRays from './LightRays';
import useMouseMove from './util/useMouseMove.js';
import EmailForm from './EmailForm/index.js';



const memorialContent = {
  name: "E · L · I · A · N · A",
  image: './eliana.svg',
  subtext: "Agyeman-Prempeh",
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


const charities: Array<{
  name: string;
  description: string;
  link: string;
  img: string;
}> = [
    {
      name: 'Abigails Footsteps',
      description: "Is a baby loss charity providing support and counselling for bereaved parents and families as well as specialist \
    bereavement training for midwives and healthcare professionals. Since 2010, they have worked to improve the way bereaved parents are \
    cared for by hospitals and to better educate midwives on how to care for grieving parents. One of their greatest contributions as a charity\
    has been the Abi cooling cot which allowed us valuable time to spend with Eliana before saying goodbye",
      link: 'https://abigailsfootsteps.co.uk/',
      img: './abigail-logo-strapline.png'
    },
    {
      name: 'Remember my Baby',
      description: 'Remember My Baby’ (RMB) is a non-profit registered charity created by professional photographers for the benefit of bereaved parents across the UK\
      RMB has a network of talented and highly trained remembrance photographers throughout the UK who are willing to use their skills, as volunteers, and give up their \
      time to help bereaved families capture a lasting and tangible memory of their baby - at no cost to the parents or the healthcare trust/hospice',
      link: 'https://remembermybaby.org.uk/',
      img: './remember-my-baby-logo.png'
    },
    {
      name: 'Medway Maritime Maternity',
      description: 'The medway maternity were really amazing at helping us through our grief. The midwives were absolutely lovely and lessened our pain a bit\
      without them we don\'t know how we would have gone through this. A big thank you to Sarah Jane, Sarah, Emma, Nicky, Nikki and Linda who were absolutely amazing.\
      Thank you guys ❤️',
      link: 'https://www.medway.nhs.uk/services/maternity/',
      img: './nhs-medway-logo-full.svg'
    },

  ]




function App() {
  const [openForm, setOpenForm] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [visitorTributes, setVisitorTributes] = useState<Tribute[]>([{
    created_at: (new Date()).toISOString(),
    id: 1,
    message: 'Lorem Ipsum dit dolor',
    name: 'Israel'
  }]);

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

      {/* Navigation */}
      <nav className="nav">
        <div className="navContainer">
          {['home', 'mum&Dad', 'tributes', 'giving'].map((section) => (
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

      <div>
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
        <main>
          <div id="home" className="section">
            <div className="heroContent parallax-element" style={parallaxStyle}>
              <div className="nameContainer parallax-element" style={parallaxStyle}>
                <img
                  src={memorialContent.image}
                  alt="Eliana"
                  className="parallax-element"
                  style={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '20px auto',
                    display: 'block',
                    border: '3px solid #d4b03878',
                    boxShadow: '0 4px 20px #49400c, inset 0 2px 10px #0000004d'
                  }}
                />
              </div>
              <div className="nameContainer parallax-element" style={parallaxStyle}>
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

          <div id="mum&Dad" className="section blurBackdrop">
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

          <div id="tributes" className="section blurBackdrop">
            <div className="sectionHeader" onClick={() => setOpenForm(prev => !prev)}>
              <h2 className="sectionTitle">Share Your Tribute</h2>
              <p className="sectionSubtitle">Add your words of love and remembrance</p>
            </div>

            {openForm && <EmailForm onSuccess={newData => setVisitorTributes(prev => ([...prev, newData]))} />}

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

          <div id="giving" className="section blurBackdrop">
            <div className="sectionHeader">
              <h2 className="sectionTitle">Giving</h2>
              <p className="sectionSubtitle" style={{ padding: '0 10%' }}>
                Though our time with our daughter was heartbreakingly brief, her presence changed our lives forever. In her honour, we invite you to give—not to us, \
                but to the incredible charities that carried us through our darkest moments. These organisations bring light, comfort, and hope to families like ours every day.

                Giving to the hands that held us when our world fell silent, will be the greatest gift . You can use 'ELIANA' as reference let us know if you did give to any of these charities
              </p>
            </div>


            <div className="section blurBackdrop">
              <div className="visitorTributesList">
                {charities.map((charity) => (
                  <div key={charity.name} className="visitorTributeCard">
                    <div className="visitorTributeTitle">
                      <p className="visitorTributeName">{charity.name}</p>
                      <a href={charity.link} target='_blank'>Donate</a>
                    </div>
                    <img src={charity.img} />
                    <p className="visitorTributeMessage">{charity.description}</p>
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
            <code className="footerText">Designed by Dad with ❤️ </code>
            <div className="footerIcon">✦</div>
          </div>
        </footer>
      </div>
    </>
  );
}



export default App;


