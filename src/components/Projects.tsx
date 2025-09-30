import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData'; // Pastikan path ini benar

// --- Custom Hook untuk mendeteksi lebar layar ---
// Hook ini memantau lebar jendela browser dan mengembalikan nilainya.
const useWindowWidth = () => {
  // Inisialisasi state dengan lebar jendela saat ini
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Fungsi yang akan dipanggil setiap kali ukuran jendela berubah
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Menambahkan event listener saat komponen pertama kali dirender
    window.addEventListener('resize', handleResize);
    
    // Cleanup: Menghapus event listener saat komponen di-unmount untuk mencegah memory leak
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Array kosong berarti efek ini hanya berjalan sekali saat mount dan cleanup saat unmount

  return windowWidth;
};
// -----------------------------------------------------------------


const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Menggunakan hook untuk mendapatkan lebar layar secara real-time
  const windowWidth = useWindowWidth();
  // Tentukan breakpoint. Di bawah 1024px akan dianggap mobile.
  const isMobile = windowWidth < 1024;


  const nextProject = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentProject]);

  // --- Kumpulan Style Objek Dinamis ---
  
  const headerDescriptionStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.875rem',
    margin: '0',
    textAlign: isMobile ? 'center' : 'right',
    maxWidth: isMobile ? '100%' : '70%',
    marginLeft: isMobile ? '0' : 'auto',
  };

  const projectContentWrapperStyle = {
    width: '100%',
    padding: isMobile ? '0 48px' : '0 80px',
  };
  
  const landscapeMediaLayoutStyle = {
      display: isMobile ? 'flex' : 'grid',
      flexDirection: isMobile ? 'column' : 'row',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '24px',
      alignItems: 'start',
  };

  const reversedAspectRatioLayoutStyle = {
      display: isMobile ? 'flex' : 'grid',
      flexDirection: isMobile ? 'column-reverse' : undefined, // column-reverse di mobile
      gridTemplateColumns: isMobile ? '1fr' : '1fr 300px',
      gap: '32px',
      alignItems: 'start',
      width: '100%',
  };
  
  const defaultLayoutStyle = {
      display: isMobile ? 'flex' : 'grid',
      flexDirection: isMobile ? 'column' : undefined,
      gridTemplateColumns: isMobile ? '1fr' : '300px 1fr',
      gap: '32px',
      alignItems: 'start',
      width: '100%',
  };

  const navButtonStyle = {
    position: 'absolute',
    zIndex: '10',
    width: isMobile ? '40px' : '50px',
    height: isMobile ? '40px' : '50px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(16, 18, 15, 0.8)',
    cursor: 'pointer',
    transition: 'all 0.3s',
    borderRadius: '50%'
  };

  const mediaContainerStyle = {
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
    position: 'relative',
    backgroundColor: '#2d3748',
    transition: 'transform 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  };
  
  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  return (
    <section id="works" style={{ padding: '80px 0', backgroundColor: '#10120f' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 64px' }}>
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: isMobile ? '1.875rem' : '2.25rem', fontWeight: '300', color: 'white', letterSpacing: '0.05em', margin: '0 0 16px 0' }}>
            PROJECTS
          </h2>
          <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end' }}>
            <p style={headerDescriptionStyle}>
              EXPLORE MY PORTFOLIO OF ENGINEERING PROJECTS THAT COMBINE HARDWARE AND SOFTWARE SOLUTIONS TO CREATE INNOVATIVE AND IMPACTFUL APPLICATIONS.
            </p>
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', minHeight: '400px' }}>
          <button onClick={prevProject} style={{ ...navButtonStyle, left: 0 }}>
             <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
             </svg>
          </button>

          <div style={projectContentWrapperStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '300', color: 'white', textAlign: 'center', letterSpacing: '0.05em', marginBottom: '16px', textTransform: 'uppercase' }}>
                {projects[currentProject].title}
              </h3>

              <div style={{ width: '100%', maxWidth: '1000px' }}>
                {projects[currentProject].isLandscape ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
                        <div style={landscapeMediaLayoutStyle}>
                            <div style={{ ...mediaContainerStyle, aspectRatio: '16/9' }}>
                                <img src={projects[currentProject].image} alt={projects[currentProject].title} style={imageStyle}/>
                            </div>
                            <div style={{ ...mediaContainerStyle, aspectRatio: '16/9' }}>
                                <video ref={videoRef} key={`video-${currentProject}`} controls style={videoStyle} poster={projects[currentProject].image}>
                                    <source src={projects[currentProject].video} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <p style={{ color: 'rgba(255, 255, 255, 0.8)', textAlign: 'justify', lineHeight: '1.7' }}>{projects[currentProject].description}</p>
                    </div>
                ) : projects[currentProject].isReversedAspectRatio ? (
                    <div style={reversedAspectRatioLayoutStyle}>
                         <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', justifyContent: 'space-between' }}>
                             <div style={{ ...mediaContainerStyle, aspectRatio: '16/9' }}>
                                 <img src={projects[currentProject].image} alt={projects[currentProject].title} style={imageStyle}/>
                             </div>
                             <p style={{ color: 'rgba(255, 255, 255, 0.8)', textAlign: 'justify', lineHeight: '1.7' }}>{projects[currentProject].description}</p>
                         </div>
                         <div style={{ ...mediaContainerStyle, aspectRatio: '9/16' }}>
                             <video ref={videoRef} key={`video-${currentProject}`} controls style={videoStyle} poster={projects[currentProject].image}>
                                 <source src={projects[currentProject].video} type="video/mp4" />
                             </video>
                         </div>
                    </div>
                ) : (
                    <div style={defaultLayoutStyle}>
                         <div style={{ ...mediaContainerStyle, aspectRatio: '9/16' }}>
                            <img src={projects[currentProject].image} alt={projects[currentProject].title} style={imageStyle}/>
                         </div>
                         <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', justifyContent: 'space-between' }}>
                              <div style={{ ...mediaContainerStyle, aspectRatio: '16/9' }}>
                                  <video ref={videoRef} key={`video-${currentProject}`} controls style={videoStyle} poster={projects[currentProject].image}>
                                     <source src={projects[currentProject].video} type="video/mp4" />
                                  </video>
                              </div>
                              <p style={{ color: 'rgba(255, 255, 255, 0.8)', textAlign: 'justify', lineHeight: '1.7' }}>{projects[currentProject].description}</p>
                         </div>
                    </div>
                )}
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => navigate(`/project/${projects[currentProject].id}`)}
                  style={{
                    padding: '12px 32px',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    fontSize: '0.875rem',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    borderRadius: '4px'
                  }}
                >
                  SEE DETAILS
                </button>
              </div>
            </div>
          </div>

          <button onClick={nextProject} style={{ ...navButtonStyle, right: 0 }}>
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px', gap: '8px' }}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: index === currentProject ? 'white' : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;