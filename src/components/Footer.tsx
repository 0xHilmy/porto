const Footer = () => {
  return (
    <footer className="bg-[#10120f] text-white py-16">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }} className="sm:px-8 lg:px-16">
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <h3 style={{ fontSize: '2.25rem', fontWeight: '300', letterSpacing: '0.05em', marginBottom: '16px', color: 'white' }} className="lg:text-5xl">
              HILMY
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', letterSpacing: '0.05em' }}>
              IoT / Embedded System Engineer
            </p>
          </div>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '32px' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem', letterSpacing: '0.05em', paddingBottom: '32px' }}>
              © 2025 HILMY. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;