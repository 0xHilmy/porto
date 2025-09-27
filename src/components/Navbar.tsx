import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'ABOUT', href: '#about' },
        { name: 'WORKS', href: '#works' },
        { name: 'SERVICES', href: '#services' },
        { name: 'CONTACT', href: '#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1); // Remove the '#'
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const navbarHeight = 80; // Height of fixed navbar
            const additionalOffset = targetId === 'works' ? 0 : 0; // Extra offset for works section
            const targetPosition = targetElement.offsetTop - navbarHeight - additionalOffset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#10120f]/90 backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl" style={{ margin: '0 auto', padding: '0 24px' }}>
                <div className="flex justify-between items-center" style={{ padding: '16px 0' }}>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'Bebas Neue, Arial, sans-serif', fontWeight: '300', color: 'white', letterSpacing: '0.05em' }}>
                        RH
                    </div>

                    <div className="hidden md:flex" style={{ gap: '10px' }}>
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-light tracking-wider"
                                style={{ textDecoration: 'none' }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;