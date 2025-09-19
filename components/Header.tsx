
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold tracking-wider cursor-pointer" onClick={() => scrollToSection('about')}>
            <span className="text-accent">My</span>Portfolio
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-light hover:text-accent transition-colors duration-300 font-medium">
                {link.label}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map(link => (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-light hover:text-accent transition-colors duration-300 text-lg">
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
