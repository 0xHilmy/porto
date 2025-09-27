import { useState } from 'react';

const About = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    '/src/assets/about/about.jpeg',
    '/src/assets/about/about1.jpeg',
    '/src/assets/about/about2.jpeg',
    '/src/assets/about/about3.jpeg',
    '/src/assets/about/about4.jpeg',
    '/src/assets/about/about5.jpeg',
    '/src/assets/about/about6.jpeg',
    '/src/assets/about/about7.jpeg'
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section id="about" className="py-20 bg-[#10120f]">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 16px' }} className="sm:px-8 lg:px-16">
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '300', color: 'white', marginBottom: '32px', letterSpacing: '0.05em' }} className="lg:text-5xl">ABOUT</h2>
        </div>

        <div style={{ display: 'grid', gap: '64px', alignItems: 'flex-start' }} className="lg:grid-cols-3">
          <div className="lg:col-span-1">
            {/* Photo Slider */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', borderRadius: '8px', overflow: 'hidden' }}>
              {/* Main Photo */}
              <img
                src={photos[currentPhoto]}
                alt={`Hilmy Profile ${currentPhoto + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />

              {/* Left Arrow */}
              <button
                onClick={prevPhoto}
                style={{
                  position: 'absolute',
                  left: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  zIndex: '10'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.color = 'black';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                  e.currentTarget.style.color = 'white';
                }}
              >
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextPhoto}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  zIndex: '10'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.color = 'black';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                  e.currentTarget.style.color = 'white';
                }}
              >
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Photo Indicators */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '6px',
                zIndex: '10'
              }}>
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhoto(index)}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: index === currentPhoto ? 'white' : 'rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }} className="lg:col-span-2">
            <div style={{ display: 'grid', gap: '32px' }} className="md:grid-cols-2">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', lineHeight: '1.6', textAlign: 'justify' }}>
                  I AM A PASSIONATE ENGINEER WITH EXPERTISE IN BOTH SOFTWARE DEVELOPMENT AND HARDWARE INTEGRATION. WITH A STRONG BACKGROUND IN ELECTRICAL AND INSTRUMENTATION ENGINEERING, I SPECIALIZE IN BUILDING EMBEDDED SYSTEMS AND IOT SOLUTIONS THAT CONNECT SENSORS AND MICROCONTROLLERS. I HOLD AN ASSOCIATE DEGREE (D3) IN ELECTRICAL ENGINEERING FROM UNIVERSITAS NEGERI YOGYAKARTA, GRADUATING IN 2020 WITH A CUM LAUDE GPA OF 3.55. I LATER PURSUED A GOVERNMENT-SPONSORED PROGRAM (IKATAN DINAS) AND EARNED A BACHELOR OF APPLIED SCIENCE (D4) IN INSTRUMENTATION AT SEKOLAH TINGGI METEOROLOGI KLIMATOLOGI DAN GEOFISIKA (STMKG) UNDER BMKG, WHERE I GRADUATED IN 2025 WITH A CUM LAUDE GPA OF 3.66.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', lineHeight: '1.6', textAlign: 'justify' }}>
                  IN ADDITION TO MY ENGINEERING EXPERTISE, I AM SKILLED IN FULL-STACK WEB DEVELOPMENT USING MODERN TECHNOLOGIES SUCH AS REACT, NEXT.JS, AND NODE.JS, ENABLING ME TO CREATE SEAMLESS APPLICATIONS FOR REAL-TIME DATA VISUALIZATION AND MANAGEMENT. DRIVEN BY CURIOSITY AND PROBLEM-SOLVING, I ENJOY WORKING ON PROJECTS THAT INTEGRATE HARDWARE AND SOFTWARE, RANGING FROM SENSOR-BASED INSTRUMENTATION TO SAAS AND WEB3 APPLICATIONS. MY GOAL IS TO LEVERAGE TECHNOLOGY TO DELIVER INNOVATIVE AND IMPACTFUL SOLUTIONS.
                </p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '16px', letterSpacing: '0.05em' }}>
                READY TO BUILD SOMETHING AMAZING? LET'S ENGINEER THE FUTURE TOGETHER.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;