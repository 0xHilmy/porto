import { useState, useEffect } from 'react';
import profileImage from '../assets/profile.png';

const Hero = () => {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);
  const [isSmall, setIsSmall] = useState(window.innerWidth >= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 1024);
      setIsSmall(window.innerWidth >= 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#545454',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: isLarge ? '64px' : isSmall ? '32px' : '16px',
          paddingRight: isLarge ? '64px' : isSmall ? '32px' : '16px',
          display: 'grid',
          gridTemplateColumns: isLarge ? '1fr 1fr' : '1fr',
          gap: isLarge ? '64px' : '32px',
          alignItems: 'center',
        }}
      >
        {/* Left Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            paddingTop: '40px', // 🔹 Tambahan padding atas tulisan
            position: 'relative',
            zIndex: 5,
            order: 1, // Text always comes first
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h1
              style={{
                fontSize: isLarge ? '8rem' : '3rem',
                fontFamily: '"Bebas Neue", sans-serif',
                color: 'white',
                lineHeight: '1.1',
                letterSpacing: '0.05em',
              }}
            >
              RIZQI HILMY
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
                maxWidth: '28rem',
              }}
            >
              WELCOME TO MY PORTFOLIO. I AM HILMY AND YOU WILL FIND EVERYTHING
              ABOUT MY DEVELOPMENT JOURNEY AND SERVICES HERE.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: isSmall ? '24px' : '16px',
              paddingTop: '24px',
              position: 'relative',
              zIndex: 10,
              flexWrap: isSmall ? 'nowrap' : 'wrap'
            }}
          >
            <a
              href="#works"
              style={{
                padding: isSmall ? '12px 32px' : '16px 24px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                transition: 'all 0.3s',
                backgroundColor: 'transparent',
                minHeight: '44px', // Minimum touch target size
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                userSelect: 'none',
                WebkitTapHighlightColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'black';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'black';
              }}
              onTouchEnd={(e) => {
                setTimeout(() => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }, 150);
              }}
            >
              SEE WORKS
            </a>
            <a
              href="#contact"
              style={{
                padding: isSmall ? '12px 32px' : '16px 24px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                transition: 'all 0.3s',
                backgroundColor: 'transparent',
                minHeight: '44px', // Minimum touch target size
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                userSelect: 'none',
                WebkitTapHighlightColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'black';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'black';
              }}
              onTouchEnd={(e) => {
                setTimeout(() => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }, 150);
              }}
            >
              CONTACT
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '40px', // 🔹 Tambahan padding atas foto
            order: 2, // Image always comes second
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: isLarge ? '32rem' : '24rem',
              height: isLarge ? '700px' : '400px',
              position: 'relative',
              marginTop: isLarge ? '-64px' : '0px',
            }}
          >
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <img
                src={profileImage}
                alt="Hilmy Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'top',
                  transform: isLarge ? 'scale(1.9)' : 'scale(2.5)',
                  paddingBottom: isLarge ? '100px' : '50px',
                  background: 'transparent',
                  pointerEvents: 'none', // Prevent image from blocking clicks
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
