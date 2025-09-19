
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showBackToTop && window.scrollY > 400) {
        setShowBackToTop(true);
      } else if (showBackToTop && window.scrollY <= 400) {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showBackToTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-primary min-h-screen">
      <Header />
      <main className="container mx-auto px-4 md:px-8 lg:px-16">
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-accent text-primary p-3 rounded-full shadow-lg hover:bg-blue-400 transition-colors duration-300 z-50"
          aria-label="Go to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
