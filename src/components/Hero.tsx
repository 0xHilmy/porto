const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#545454] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 style={{ fontSize: '8rem', fontFamily: '"Bebas Neue", sans-serif', color: 'white', lineHeight: '1.1', letterSpacing: '0.05em' }} className="lg:text-8xl">
              RIZQI HILMY
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              WELCOME TO MY PORTFOLIO. I AM HILMY AND YOU WILL FIND EVERYTHING ABOUT MY DEVELOPMENT JOURNEY AND SERVICES HERE.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '24px', paddingTop:'24px' }}>
            <a
              href="#works"
              style={{
                padding: '12px 32px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                transition: 'all 0.3s',
                backgroundColor: 'transparent'
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
              SEE WORKS
            </a>
            <a
              href="#works"
              style={{
                padding: '12px 32px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                transition: 'all 0.3s',
                backgroundColor: 'transparent'
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
              CONTACT
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-start">
          <div className="w-full max-w-lg h-[700px] relative -mt-16">
            {/* Profile Image Container with transparent background */}
            <div className="w-full h-full relative">
              <img
                src="/src/assets/profile.png"
                alt="Hilmy Profile"
                className="w-full h-full object-contain object-top scale-[1.9]"
                style={{
                  paddingBottom: '100px',
                  background: 'transparent'
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