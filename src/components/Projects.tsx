import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);



  const nextProject = () => {
    // Pause current video before switching
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    // Pause current video before switching
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Reset video when project changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video element
    }
  }, [currentProject]);

  return (
    <section id="works" className="py-20 bg-[#10120f]">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }} className="sm:px-8 lg:px-16">
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '300', color: 'white', letterSpacing: '0.05em', margin: '0 0 16px 0' }} className="lg:text-5xl">PROJECTS</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', margin: '0', textAlign: 'right', maxWidth: '70%', marginLeft: 'auto' }}>
              EXPLORE MY PORTFOLIO OF ENGINEERING PROJECTS THAT COMBINE HARDWARE AND SOFTWARE SOLUTIONS TO CREATE INNOVATIVE AND IMPACTFUL APPLICATIONS.
            </p>
          </div>
        </div>

        {/* Project Slider */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', minHeight: '400px' }}>
          {/* Left Arrow */}
          <button
            onClick={prevProject}
            style={{
              position: 'absolute',
              left: '0',
              zIndex: '10',
              width: '50px',
              height: '50px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(16, 18, 15, 0.8)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              borderRadius: '50%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(16, 18, 15, 0.8)';
              e.currentTarget.style.color = 'white';
            }}
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Project Content */}
          <div style={{ width: '100%', padding: '0 80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
              {/* Project Title */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '300',
                color: 'white',
                textAlign: 'center',
                letterSpacing: '0.05em',
                marginBottom: '16px',
                textTransform: 'uppercase'
              }}>
                {projects[currentProject].title}
              </h3>

              {/* Project Media Layout - Conditional Design */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '1000px' }}>
                {projects[currentProject].isLandscape ? (
                  // Landscape Layout for Project 3 - Image and Video side by side with same scale
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    width: '100%'
                  }}>
                    {/* Top Row - Image (left) and Video (right) with same scale */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '24px',
                      alignItems: 'start'
                    }}>
                      {/* Left - Landscape Image (16:9) - Same scale as video */}
                      <div style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
                        position: 'relative',
                        background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
                        transition: 'transform 0.3s ease'
                      }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}>
                        <img
                          src={projects[currentProject].image}
                          alt={projects[currentProject].title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        />
                      </div>

                      {/* Right - Video Container (16:9) - Same scale as image */}
                      <div style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
                        backgroundColor: '#2d3748',
                        position: 'relative',
                        transition: 'transform 0.3s ease'
                      }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}>

                        {/* Video Player or Second Image */}
                        {projects[currentProject].useImageAsVideo && projects[currentProject].secondImage ? (
                          // Project 4: Use second image instead of video
                          <img
                            src={projects[currentProject].secondImage}
                            alt={`${projects[currentProject].title} - Second View`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.5s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          />
                        ) : projects[currentProject].video.includes('placeholder') ? (
                          // Placeholder video display
                          <div style={{
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                          }}>
                            <div style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(255, 255, 255, 0.95)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: '12px',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)'
                            }}>
                              <svg style={{ width: '24px', height: '24px', color: '#2d3748', marginLeft: '3px' }} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <span style={{
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontSize: '0.75rem'
                              }}>
                                Coming Soon
                              </span>
                            </div>
                          </div>
                        ) : (
                          // Actual video player
                          <video
                            ref={videoRef}
                            key={`video-${currentProject}`}
                            controls
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                            poster={projects[currentProject].image}
                          >
                            <source src={projects[currentProject].video} type="video/mp4" />
                            <source src={projects[currentProject].video} type="video/webm" />
                            <source src={projects[currentProject].video} type="video/x-matroska" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    </div>

                    {/* Bottom - Project Description (full width) */}
                    <div style={{
                      width: '100%',
                      marginTop: '8px'
                    }}>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '0.95rem',
                        lineHeight: '1.7',
                        margin: '0',
                        textAlign: 'justify'
                      }}>
                        {projects[currentProject].description}
                      </p>
                    </div>
                  </div>
                ) : projects[currentProject].isReversedAspectRatio ? (
                  // Reversed Aspect Ratio Layout for Project 5 - Image 16:9, Video 9:16
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 300px',
                    gap: '32px',
                    alignItems: 'start',
                    width: '100%'
                  }} className="lg:grid-cols-[1fr_300px] md:grid-cols-1">

                    {/* Left Side - Content Area */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      height: '100%',
                      justifyContent: 'space-between'
                    }}>

                      {/* Image Container (16:9) */}
                      <div style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
                        position: 'relative',
                        background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
                        transition: 'transform 0.3s ease'
                      }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}>
                        <img
                          src={projects[currentProject].image}
                          alt={projects[currentProject].title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        />
                      </div>

                      {/* Project Description */}
                      <div>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '0.95rem',
                          lineHeight: '1.7',
                          margin: '0',
                          textAlign: 'justify'
                        }}>
                          {projects[currentProject].description}
                        </p>
                      </div>
                    </div>

                    {/* Right Side - Portrait Video (9:16) */}
                    <div style={{
                      width: '100%',
                      aspectRatio: '9/16',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
                      backgroundColor: '#2d3748',
                      position: 'relative',
                      transition: 'transform 0.3s ease'
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}>

                      {/* Video Player */}
                      {projects[currentProject].video.includes('placeholder') ? (
                        // Placeholder video display
                        <div style={{
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative'
                        }}>
                          <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)'
                          }}>
                            <svg style={{ width: '24px', height: '24px', color: '#2d3748', marginLeft: '3px' }} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <span style={{
                              color: 'rgba(255, 255, 255, 0.6)',
                              fontSize: '0.75rem'
                            }}>
                              Coming Soon
                            </span>
                          </div>
                        </div>
                      ) : (
                        // Actual video player
                        <video
                          ref={videoRef}
                          key={`video-${currentProject}`}
                          controls
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          poster={projects[currentProject].image}
                        >
                          <source src={projects[currentProject].video} type="video/mp4" />
                          <source src={projects[currentProject].video} type="video/webm" />
                          <source src={projects[currentProject].video} type="video/x-matroska" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  </div>
                ) : (
                  // Default Asymmetric Layout for other projects
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '300px 1fr',
                    gap: '32px',
                    alignItems: 'start',
                    width: '100%'
                  }} className="lg:grid-cols-[300px_1fr] md:grid-cols-1">

                    {/* Left Side - Portrait Photo (9:16) */}
                    <div style={{
                      width: '100%',
                      aspectRatio: '9/16',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
                      position: 'relative',
                      background: 'linear-gradient(135deg, #374151 0%, #1f2937 100%)'
                    }}>
                      <img
                        src={projects[currentProject].image}
                        alt={projects[currentProject].title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                    </div>

                    {/* Right Side - Content Area */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      height: '100%',
                      justifyContent: 'space-between'
                    }}>

                      {/* Video Container (16:9) */}
                      <div style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
                        backgroundColor: '#2d3748',
                        position: 'relative',
                        transition: 'transform 0.3s ease'
                      }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}>

                        {/* Video Player or Second Image */}
                        {projects[currentProject].useImageAsVideo && projects[currentProject].secondImage ? (
                          // Project 4: Use second image instead of video
                          <img
                            src={projects[currentProject].secondImage}
                            alt={`${projects[currentProject].title} - Second View`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.5s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          />
                        ) : projects[currentProject].video.includes('placeholder') ? (
                          // Placeholder video display
                          <div style={{
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                          }}>
                            <div style={{
                              width: '80px',
                              height: '80px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(255, 255, 255, 0.95)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: '16px',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)'
                            }}>
                              <svg style={{ width: '32px', height: '32px', color: '#2d3748', marginLeft: '4px' }} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <span style={{
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontSize: '0.875rem'
                              }}>
                                Coming Soon
                              </span>
                            </div>
                          </div>
                        ) : (
                          // Actual video player
                          <video
                            ref={videoRef}
                            key={`video-${currentProject}`}
                            controls
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                            poster={projects[currentProject].image}
                          >
                            <source src={projects[currentProject].video} type="video/mp4" />
                            <source src={projects[currentProject].video} type="video/webm" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>

                      {/* Project Description */}
                      <div>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '0.95rem',
                          lineHeight: '1.7',
                          margin: '0',
                          textAlign: 'justify'
                        }}>
                          {projects[currentProject].description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>


              {/* See More Button */}
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = 'black';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  SEE DETAILS
                </button>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextProject}
            style={{
              position: 'absolute',
              right: '0',
              zIndex: '10',
              width: '50px',
              height: '50px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(16, 18, 15, 0.8)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              borderRadius: '50%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = 'black';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(16, 18, 15, 0.8)';
              e.currentTarget.style.color = 'white';
            }}
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Project Indicators */}
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