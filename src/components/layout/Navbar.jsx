import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, User, ChevronDown, Sparkles, MoveRight } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Recruitment', href: '#recruitment' },
    { name: 'Institute', href: '#institute' },
    { name: 'Stories', href: '#candidates' },
    { name: 'Insights', href: '#news' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
      {/* Top Banner */}
      <AnimatePresence>
        {isBannerVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full banner-lime px-4 py-2.5 flex items-center justify-between text-center"
          >
            <div className="flex-grow flex items-center justify-center gap-4 text-xs md:text-sm font-medium">
              <span>Focus on your next hire. We'll handle the recruitment friction.</span>
              <a href="#recruitment" className="underline font-bold">Learn more</a>
            </div>
            <button
              onClick={() => setIsBannerVisible(false)}
              className="p-1 hover:bg-black/10 rounded-full transition-colors"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={false}
        animate={{
          width: isScrolled ? '92%' : '100%',
          marginTop: isScrolled ? '12px' : '0px',
          borderRadius: isScrolled ? '60px' : '0px',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.1)' : '0 0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`bg-cream/95 backdrop-blur-md border border-perk-black/5 px-6 py-3 transition-colors duration-300 ${isScrolled ? 'bg-cream/80' : 'bg-cream'}`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-2 md:px-4">

          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-perk-black flex items-center">
              KareerGrowth
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold text-perk-black hover:opacity-100 opacity-80 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity mr-2">
              <Globe size={14} className="opacity-60" /> <ChevronDown size={14} className="opacity-40" />
            </button>
            <button className="bg-primary text-perk-black px-6 py-2.5 rounded-full text-[13px] font-bold border border-perk-black/5 flex items-center gap-2 hover:opacity-90 transition-opacity shadow-sm">
              Book a demo <MoveRight size={14} />
            </button>
            <button className="bg-white text-perk-black px-6 py-2.5 rounded-full text-[13px] font-bold border border-perk-black shadow-sm flex items-center gap-2 hover:bg-slate-50 transition-colors">
              Get started <MoveRight size={14} />
            </button>
            
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 cursor-pointer transition-colors ml-2">
               <User size={18} />
            </div>
            
            <div className="flex flex-col gap-0.5 cursor-pointer hover:opacity-70 ml-2">
               <div className="w-5 h-0.5 bg-perk-black"></div>
               <div className="w-5 h-0.5 bg-perk-black"></div>
            </div>
          </div>

          {/* Mobile Menu Actions */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
               <User size={18} />
            </div>
            <button
              className="p-1 flex flex-col gap-1 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-perk-black transition-transform duration-300"></div>
              <div className="w-6 h-0.5 bg-perk-black transition-transform duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden py-4 border-t border-perk-black/5 bg-cream"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-bold text-perk-black px-2 hover:bg-black/5 py-2 rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="grid grid-cols-1 gap-3 pt-4 px-2">
                  <Button variant="primary" className="w-full">Book a demo</Button>
                  <Button variant="outline" className="w-full bg-white">Get started</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
