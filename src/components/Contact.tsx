import { useState } from 'react';
import InstagramIcon from '../assets/instagram-svgrepo-com.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#10120f]">
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingTop: '0px', paddingBottom: '64px', paddingLeft: '16px', paddingRight:'16px' }} className="sm:px-8 lg:px-16">
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '300', color: 'white', marginBottom: '32px', letterSpacing: '0.05em' }} className="lg:text-5xl">CONTACT</h2>
        </div>

        <div style={{ display: 'grid', gap: '64px' }} className="lg:grid-cols-2">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '300', color: 'white', marginBottom: '24px', letterSpacing: '0.05em' }}>
                LET'S GET STARTED
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>



              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>EMAIL</div>
                <div style={{ color: 'white', fontSize: '1.125rem' }}>rizqi.faishal.hilmy@gmail.com</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>INSTAGRAM</div>
                <div style={{ color: 'white', fontSize: '1.125rem' }}>@hilmywho</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', paddingTop: '32px' }}>
              <a target="_blank" href="https://www.instagram.com/hilmywho/" style={{ width: '40px', height: '40px', border: '1px solid rgba(255, 255, 255, 0.3)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'all 0.3s' }} className="hover:bg-white hover:text-black">
                <img src={InstagramIcon} alt="Instagram" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} className="hover:filter-none" />
              </a>

            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px 0', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', color: 'white', fontSize: '0.875rem', outline: 'none' }}
                  placeholder="YOUR NAME"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px 0', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', color: 'white', fontSize: '0.875rem', outline: 'none' }}
                  placeholder="YOUR EMAIL"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px 0', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', color: 'white', fontSize: '0.875rem', outline: 'none' }}
                  placeholder="YOUR PHONE"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{ width: '100%', padding: '12px 0', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.3)', color: 'white', fontSize: '0.875rem', outline: 'none', resize: 'none' }}
                  placeholder="YOUR MESSAGE"
                />
              </div>

              <button
                type="submit"
                style={{ padding: '12px 32px', backgroundColor: 'white', color: 'black', border: 'none', fontSize: '0.875rem', letterSpacing: '0.05em', marginTop: '32px', cursor: 'pointer', transition: 'all 0.3s' }}
                className="hover:bg-white/90"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;