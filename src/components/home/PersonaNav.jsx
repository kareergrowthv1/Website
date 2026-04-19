import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PersonaNav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('recruitment');

  const navItems = [
    { id: 'recruitment', label: 'Recruitment' },
    { id: 'institute', label: 'Institute' },
    { id: 'candidates', label: 'Candidates' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Sticky logic
      const navElement = document.getElementById('persona-nav-trigger');
      if (navElement) {
        const rect = navElement.getBoundingClientRect();
        setIsSticky(rect.top <= 80); // Sticky offset for Navbar
      }

      // Active section logic
      const scrollPosition = window.scrollY + 200;
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Account for Navbar + PersonaNav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Trigger element to detect sticky start */}
      <div id="persona-nav-trigger" className="h-0 w-full" />
      
      <div 
        className={`w-full z-40 transition-all duration-300 ${
          isSticky ? 'fixed top-[80px] bg-white/80 backdrop-blur-md shadow-sm border-b border-black/5 py-4' : 'relative py-8'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-center">
          <div className="relative flex items-center bg-white p-1.5 rounded-full border border-black/5 shadow-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className={`relative px-10 py-3 rounded-full text-sm font-bold transition-colors z-10 ${
                  activeSection === item.id ? 'text-perk-black' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activePersona"
                    className="absolute inset-0 bg-brand-lime rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonaNav;
