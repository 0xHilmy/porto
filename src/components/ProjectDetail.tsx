import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { projects, type GalleryImage } from '../data/projectsDataDetailed';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const project = projects.find(p => p.id === parseInt(id || '1'));



  if (!project) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#10120f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: 'white', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            style={{ padding: '12px 24px', backgroundColor: 'white', color: 'black', border: 'none', cursor: 'pointer' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#10120f' }}>
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: '0', width: '100%', zIndex: '50', backgroundColor: 'rgba(16, 18, 15, 0.9)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
            <div style={{ fontSize: '1.25rem', fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: '300', color: 'white', letterSpacing: '0.05em' }}>
              RH
            </div>
            <button
              onClick={() => navigate('/')}
              style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '300', letterSpacing: '0.05em', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div style={{ paddingTop: '80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 16px' }}>
          {/* Project Title */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '300', color: 'white', letterSpacing: '0.05em', marginBottom: '16px' }}>
              {project.title}
            </h1>
          </div>

          {/* Project Content with Image and Description */}
          <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '64px' }}>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {/* Project Image */}
              <div style={{ flex: '0 0 350px', minWidth: '300px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                  }}
                />
                
                {/* Project Info Cards */}
                {(project.duration || project.teamSize || project.role) && (
                  <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {project.duration && (
                      <div style={{ padding: '12px 16px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', marginBottom: '4px' }}>Duration</div>
                        <div style={{ color: 'white', fontSize: '0.95rem' }}>{project.duration}</div>
                      </div>
                    )}
                    {project.teamSize && (
                      <div style={{ padding: '12px 16px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', marginBottom: '4px' }}>Team Size</div>
                        <div style={{ color: 'white', fontSize: '0.95rem' }}>{project.teamSize}</div>
                      </div>
                    )}
                    {project.role && (
                      <div style={{ padding: '12px 16px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', marginBottom: '4px' }}>My Role</div>
                        <div style={{ color: 'white', fontSize: '0.95rem' }}>{project.role}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Project Description and Details */}
              <div style={{ flex: '1', minWidth: '400px' }}>
                {/* Description */}
                <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify', marginBottom: '32px' }}>
                  {project.description}
                </div>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: '500', marginBottom: '16px', letterSpacing: '0.025em' }}>
                      Technologies Used
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          style={{
                            padding: '6px 12px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: 'rgba(255, 255, 255, 0.9)',
                            borderRadius: '16px',
                            fontSize: '0.875rem',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: '500', marginBottom: '16px', letterSpacing: '0.025em' }}>
                      Key Features
                    </h3>
                    <ul style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '20px' }}>
                      {project.features.map((feature, index) => (
                        <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: '500', marginBottom: '16px', letterSpacing: '0.025em' }}>
                      Technical Challenges
                    </h3>
                    <ul style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '20px' }}>
                      {project.challenges.map((challenge, index) => (
                        <li key={index} style={{ marginBottom: '8px' }}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Results */}
                {project.results && project.results.length > 0 && (
                  <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: '500', marginBottom: '16px', letterSpacing: '0.025em' }}>
                      Results & Achievements
                    </h3>
                    <ul style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '20px' }}>
                      {project.results.map((result, index) => (
                        <li key={index} style={{ marginBottom: '8px' }}>{result}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {project.gallery && project.gallery.length > 0 && (
            <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '64px' }}>
              <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: '300', marginBottom: '32px', textAlign: 'center', letterSpacing: '0.05em' }}>
                Project Gallery
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {project.gallery.map((image) => (
                  <div
                    key={image.id}
                    style={{
                      cursor: 'pointer',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setSelectedImage(image)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <img
                      src={image.thumbnail}
                      alt={image.caption}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{ padding: '16px' }}>
                      <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '500', marginBottom: '8px', letterSpacing: '0.025em' }}>
                        {image.caption}
                      </h3>
                      <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Image Modal */}
          {selectedImage && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                overflow: 'auto'
              }}
              onClick={() => setSelectedImage(null)}
            >
              <div
                style={{
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  backgroundColor: '#10120f',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <img
                    src={selectedImage.fullSize}
                    alt={selectedImage.caption}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '60vh',
                      objectFit: 'contain'
                    }}
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      cursor: 'pointer',
                      fontSize: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ×
                  </button>
                </div>
                <div 
                  style={{ 
                    padding: '24px',
                    overflow: 'auto',
                    maxHeight: '30vh',
                    flexGrow: 1
                  }}
                >
                  <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: '500', marginBottom: '12px', letterSpacing: '0.025em' }}>
                    {selectedImage.caption}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ padding: '48px 24px', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '300', color: 'white', marginBottom: '24px', letterSpacing: '0.05em' }}>
                Want to know the detail?
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px auto' }}>
                Interested in learning more about this project? Feel free to reach out and I'll be happy to share more details about the technical implementation, challenges, and solutions.
              </p>
              <button
                onClick={() => window.open('mailto:rizqi.faishal.hilmy@gmail.com?subject=Inquiry about ' + project.title + '&body=Hi Rizqi,%0D%0A%0D%0AI am interested in learning more about your ' + project.title + ' project. Could you please share more details?%0D%0A%0D%0AThank you!', '_blank')}
                style={{
                  padding: '16px 32px',
                  backgroundColor: 'white',
                  color: 'black',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  letterSpacing: '0.025em',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.1)';
                }}
              >
                📧 Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;