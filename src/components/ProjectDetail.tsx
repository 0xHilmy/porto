import { useParams, useNavigate } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'IoT Monitoring System',
      image: 'https://via.placeholder.com/800x500/374151/ffffff?text=IoT+Monitoring+System',
      fullDescription: `This comprehensive IoT monitoring system represents a cutting-edge solution for industrial applications, combining the power of modern web technologies with robust hardware integration.

Built with React.js for the frontend and Node.js for the backend, the system provides real-time visualization of sensor data collected from various industrial equipment. The architecture includes:

• Real-time data streaming using WebSocket connections
• RESTful API for device management and historical data
• MongoDB database for efficient data storage and retrieval
• MQTT protocol for reliable device communication
• Responsive dashboard compatible with desktop and mobile devices

Key features include automated alert systems that notify operators of critical conditions, customizable dashboards for different user roles, and comprehensive reporting tools for data analysis. The system has been successfully deployed in manufacturing environments, reducing downtime by 30% and improving operational efficiency.

The project showcases expertise in full-stack development, IoT protocols, database design, and real-time systems architecture.`
    },
    {
      id: 2,
      title: 'Smart Home Automation',
      image: 'https://via.placeholder.com/800x500/374151/ffffff?text=Smart+Home+Automation',
      fullDescription: `A sophisticated smart home automation platform that seamlessly integrates multiple IoT devices into a unified control system. This project demonstrates advanced skills in both hardware integration and modern web development.

The system architecture includes:

• React-based web application with intuitive user interface
• Node.js backend with Express.js framework
• Real-time device control using WebSocket technology
• Integration with popular IoT protocols (Zigbee, Z-Wave, WiFi)
• Mobile-responsive design for smartphone and tablet control
• Voice control integration with popular assistants

Features implemented include automated lighting control based on occupancy and time schedules, climate control with learning algorithms that adapt to user preferences, security system integration with real-time notifications, and energy monitoring with detailed consumption analytics.

The platform supports over 50 different device types and includes a plugin architecture for easy expansion. Users report average energy savings of 25% and improved home security through intelligent automation rules.`
    },
    {
      id: 3,
      title: 'Embedded Weather Station',
      image: 'https://via.placeholder.com/800x500/374151/ffffff?text=Weather+Station',
      fullDescription: `An advanced embedded weather monitoring system that combines precision hardware sensors with modern web technologies to create a comprehensive environmental monitoring solution.

Hardware components include:

• Custom PCB design with ESP32 microcontroller
• Multiple environmental sensors (temperature, humidity, pressure, wind speed, rainfall)
• Solar power system with battery backup
• Weatherproof enclosure design
• Long-range wireless communication (LoRaWAN)

Software architecture features:

• Embedded C++ firmware for sensor data collection
• Real-time data transmission to cloud servers
• React.js web dashboard for data visualization
• Historical data analysis with trend predictions
• Mobile app for remote monitoring
• API integration with weather services

The system provides accurate meteorological data with 99.5% uptime, supports multiple deployment locations, and includes predictive analytics for weather pattern analysis. Data is collected every 30 seconds and transmitted to the cloud platform for processing and storage.

This project demonstrates expertise in embedded systems design, PCB development, firmware programming, and full-stack web development.`
    },
    {
      id: 4,
      title: 'Industrial Data Analytics',
      image: 'https://via.placeholder.com/800x500/374151/ffffff?text=Industrial+Analytics',
      fullDescription: `A powerful industrial data analytics platform that leverages machine learning algorithms to provide predictive maintenance insights and performance optimization for manufacturing equipment.

Core technologies and features:

• Python-based machine learning pipeline using TensorFlow and scikit-learn
• React.js frontend with advanced data visualization using D3.js
• Node.js backend with PostgreSQL database for time-series data
• Real-time data processing using Apache Kafka
• Docker containerization for scalable deployment
• RESTful APIs for third-party system integration

Machine learning capabilities include:

• Predictive maintenance algorithms that forecast equipment failures
• Anomaly detection for identifying unusual operational patterns
• Performance optimization recommendations based on historical data
• Automated report generation with actionable insights
• Custom alerting system for critical conditions

The platform processes over 1 million data points daily from various industrial sensors and has successfully predicted equipment failures with 85% accuracy, resulting in significant cost savings through preventive maintenance. The system supports integration with existing SCADA systems and provides ROI tracking for maintenance decisions.

Implementation has led to 40% reduction in unplanned downtime and 25% decrease in maintenance costs across deployed facilities.`
    },
    {
      id: 5,
      title: 'Web3 DApp Platform',
      image: 'https://via.placeholder.com/800x500/374151/ffffff?text=Web3+DApp+Platform',
      fullDescription: `A decentralized application (DApp) platform built on blockchain technology, specifically designed for secure and transparent data sharing in IoT device networks. This project represents the intersection of blockchain technology, IoT, and modern web development.

Blockchain architecture:

• Smart contracts developed in Solidity for Ethereum network
• IPFS integration for decentralized file storage
• Web3.js integration for blockchain interactions
• MetaMask wallet integration for user authentication
• Gas optimization techniques for cost-effective transactions

Frontend and backend technologies:

• React.js with TypeScript for type-safe development
• Next.js for server-side rendering and optimization
• Node.js backend with Express.js framework
• MongoDB for off-chain data storage
• WebSocket connections for real-time updates

Key features include:

• Decentralized identity management for IoT devices
• Secure data sharing with cryptographic verification
• Token-based incentive system for data contributors
• Transparent audit trails for all transactions
• Cross-chain compatibility for multiple blockchain networks

The platform enables IoT device owners to monetize their data while maintaining privacy and security through blockchain technology. Smart contracts ensure fair compensation and data integrity, while the decentralized architecture eliminates single points of failure.

Early adoption has shown 60% improvement in data security and 35% increase in data sharing participation compared to traditional centralized platforms.`
    }
  ];

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
            <h1 style={{ fontSize: '3rem', fontWeight: '300', color: 'white', letterSpacing: '0.05em', marginBottom: '16px' }}>
              {project.title}
            </h1>
          </div>

          {/* Project Image */}
          <div style={{ marginBottom: '48px', textAlign: 'center' }}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
            />
          </div>

          {/* Project Description */}
          <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '64px' }}>
            <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
              {project.fullDescription}
            </div>
          </div>

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