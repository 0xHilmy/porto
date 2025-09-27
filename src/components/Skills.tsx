import { useState, useEffect } from 'react';

const Skills = () => {
  const [imageOrientations, setImageOrientations] = useState<{ [key: number]: 'portrait' | 'landscape' }>({});

  const services = [
    {
      number: '01',
      title: 'Custom IoT System Development',
      description: 'I design and build IoT systems using microcontrollers such as ESP32, Arduino etc, integrating various sensors to collect real-time data and display it through monitoring dashboards',
      image: 'src/assets/service/service1-1.jpeg'
    },
    {
      number: '02',
      title: 'Web Dashboard & Data Visualization (ReactJS)',
      description: 'I develop interactive and user-friendly web dashboards using ReactJS to visualize IoT and sensor data, complete with features like charts, tables, notifications, and API integrations.',
      image: 'src/assets/service/service2.png'
    },
    {
      number: '03',
      title: 'Embedded Systems & Hardware Integration',
      description: 'I create embedded systems by designing electronic circuits, programming microcontrollers, and integrating hardware with software to support measurement tools, data logging, and automation.',
      image: 'src/assets/service/service3.jpeg'
    },
    {
      number: '04',
      title: 'Instrumentation & Control Solutions',
      description: 'I provide solutions in instrumentation and control, including calibration, integration of measurement devices, and development of systems tailored for research, industrial applications, and meteorology.',
      image: 'src/assets/service/service4.jpeg'
    }
  ];

  useEffect(() => {
    const checkImageOrientations = () => {
      services.forEach((service, index) => {
        const img = new Image();
        img.onload = () => {
          const orientation = img.height > img.width ? 'portrait' : 'landscape';
          setImageOrientations(prev => ({
            ...prev,
            [index]: orientation
          }));
        };
        img.src = service.image;
      });
    };

    checkImageOrientations();
  }, []);

  return (
    <section id="services" className="py-20 bg-[#10120f]">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 16px' }} className="sm:px-8 lg:px-16">
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '300', color: 'white', marginBottom: '32px', letterSpacing: '0.05em' }} className="lg:text-5xl">SERVICES</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {services.map((service, index) => (
            <div key={index} style={{ display: 'grid', gap: '32px', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '48px' }} className="lg:grid-cols-3">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="lg:col-span-2">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '1.5rem', fontWeight: '300' }}>{service.number}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '300', color: 'white', letterSpacing: '0.05em' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', lineHeight: '1.6', maxWidth: '48rem' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: imageOrientations[index] === 'portrait' ? '100%' : '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;