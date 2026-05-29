import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, User, ChevronDown, Sparkles, MoveRight } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Product', href: '/product' },
    { name: 'About', href: '/about' },
    { name: 'Stories', href: '/stories' },
    { name: 'Integrations', href: '/integrations' },
  ];

  const handleNavLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#') && location.pathname !== '/') {
      // Navigation will be handled by the Link component
    }
  };

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
            <div className="flex-grow flex items-center justify-center gap-4 text-xs md:text-sm font-medium text-perk-black">
              <span>Focus on your next hire. We'll handle the recruitment friction.</span>
              <Link to="/product" className="underline font-bold">Discover our product</Link>
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

          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-perk-black flex items-center">
              KareerGrowth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-[13px] font-bold text-perk-black hover:opacity-100 opacity-80 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm font-bold flex items-center gap-1.5 hover:opacity-70 transition-opacity mr-2 text-perk-black">
              <Globe size={14} className="opacity-60" /> <ChevronDown size={14} className="opacity-40" />
            </button>
            <button className="bg-primary text-perk-black px-6 py-2.5 rounded-full text-[13px] font-bold border border-perk-black/5 flex items-center gap-2 hover:opacity-90 transition-opacity shadow-sm">
              Book a demo <MoveRight size={14} />
            </button>
            {/* Get Started Hover Dropdown */}
            <div className="relative group">
              <button className="bg-white text-perk-black px-6 py-2.5 rounded-full text-[13px] font-bold border border-perk-black shadow-sm flex items-center gap-1.5 hover:bg-slate-50 cursor-pointer transition-all duration-200">
                Get started <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300 opacity-60" />
              </button>
              
              {/* Invisible bridge to prevent dropdown from closing on gap hover */}
              <div className="absolute top-full left-0 right-0 h-2" />
              
              <div className="absolute right-0 mt-2 w-64 bg-white border border-perk-black/5 rounded-[22px] shadow-2xl py-3.5 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50 transform origin-top-right">
                <a 
                  href="https://candidate.kareergrowth.com/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-bold text-slate-600 hover:text-perk-black hover:bg-[#f5f4eb]/60 transition-all group/item"
                >
                  <div className="flex flex-col">
                    <span className="font-bold">Candidates</span>
                    <span className="text-[10px] text-slate-400 font-medium mt-0.5">Jobs & AI Resume Builder</span>
                  </div>
                  <MoveRight size={14} className="-translate-x-1 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-perk-black" />
                </a>
                
                <div className="h-[1px] bg-perk-black/5 my-1" />
                
                <a 
                  href="https://admin.kareergrowth.com/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-bold text-slate-600 hover:text-perk-black hover:bg-[#f5f4eb]/60 transition-all group/item"
                >
                  <div className="flex flex-col">
                    <span className="font-bold">Recruiters</span>
                    <span className="text-[10px] text-slate-400 font-medium mt-0.5">Vetting, Screening & Ranking</span>
                  </div>
                  <MoveRight size={14} className="-translate-x-1 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-perk-black" />
                </a>

                <div className="h-[1px] bg-perk-black/5 my-1" />

                <a 
                  href="https://admin.kareergrowth.com/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-bold text-slate-600 hover:text-perk-black hover:bg-[#f5f4eb]/60 transition-all group/item"
                >
                  <div className="flex flex-col">
                    <span className="font-bold">Colleges/Institutes</span>
                    <span className="text-[10px] text-slate-400 font-medium mt-0.5">Student Placements & Analytics</span>
                  </div>
                  <MoveRight size={14} className="-translate-x-1 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-perk-black" />
                </a>
              </div>
            </div>
            
            <button 
              onClick={() => {
                setIsMegaMenuOpen(!isMegaMenuOpen);
                setIsMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl transition-all ml-2 cursor-pointer flex items-center justify-center ${
                isMegaMenuOpen ? 'bg-black/5 text-perk-black' : 'hover:bg-black/5 text-perk-black'
              }`}
            >
              {isMegaMenuOpen ? <X size={18} /> : (
                <div className="flex flex-col gap-0.5">
                  <div className="w-5 h-0.5 bg-perk-black"></div>
                  <div className="w-5 h-0.5 bg-perk-black"></div>
                </div>
              )}
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              className="p-1 flex flex-col gap-1 cursor-pointer"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsMegaMenuOpen(false);
              }}
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
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold text-perk-black px-2 hover:bg-black/5 py-2 rounded-xl transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="grid grid-cols-1 gap-3 pt-4 px-2">
                  <Button variant="primary" className="w-full">Book a demo</Button>
                  <div className="flex flex-col gap-2 pt-2 border-t border-perk-black/5 mt-2">
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-2 mb-1">Get Started</p>
                    <a href="https://candidate.kareergrowth.com/login" target="_blank" rel="noopener noreferrer" className="bg-white text-perk-black px-5 py-3 rounded-xl text-sm font-bold border border-perk-black/5 flex items-center justify-between shadow-sm active:bg-slate-50 transition-colors">
                      <span>Candidates Login</span>
                      <MoveRight size={14} className="text-slate-400" />
                    </a>
                    <a href="https://admin.kareergrowth.com/login" target="_blank" rel="noopener noreferrer" className="bg-white text-perk-black px-5 py-3 rounded-xl text-sm font-bold border border-perk-black/5 flex items-center justify-between shadow-sm active:bg-slate-50 transition-colors">
                      <span>Recruiters Login</span>
                      <MoveRight size={14} className="text-slate-400" />
                    </a>
                    <a href="https://admin.kareergrowth.com/login" target="_blank" rel="noopener noreferrer" className="bg-white text-perk-black px-5 py-3 rounded-xl text-sm font-bold border border-perk-black/5 flex items-center justify-between shadow-sm active:bg-slate-50 transition-colors">
                      <span>Colleges & Institutes Login</span>
                      <MoveRight size={14} className="text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mega Menu Drawer */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-[92%] mt-3 bg-white rounded-[32px] border border-perk-black/5 p-10 shadow-2xl text-perk-black z-40 overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-left">
              
              {/* Column 1: Services */}
              <div>
                <p className="text-[10px] font-extrabold uppercase text-slate-600 tracking-widest mb-4">Services</p>
                <ul className="space-y-3">
                  <li>
                    <Link to="/product" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Candidates Platform
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Recruiters Platform
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Colleges/Institutes
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Research */}
              <div>
                <p className="text-[10px] font-extrabold uppercase text-slate-600 tracking-widest mb-4">Research</p>
                <ul className="space-y-3">
                  <li>
                    <Link to="/about" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Skill Gap Reports
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Placement Trends
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Integrity Standards
                    </Link>
                  </li>
                  <li>
                    <Link to="/stories" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Vetting Case Studies
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Resources */}
              <div>
                <p className="text-[10px] font-extrabold uppercase text-slate-600 tracking-widest mb-4">Resources</p>
                <ul className="space-y-3">
                  <li>
                    <Link to="/product" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      AI Resumes
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Mock Interview Simulator
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Assessment Prep
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: About */}
              <div>
                <p className="text-[10px] font-extrabold uppercase text-slate-600 tracking-widest mb-4">About</p>
                <ul className="space-y-3">
                  <li>
                    <Link to="/about" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Core Principles
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Leadership Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/stories" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Placement Success
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 5: Media and legal */}
              <div>
                <p className="text-[10px] font-extrabold uppercase text-slate-600 tracking-widest mb-4">Media and legal</p>
                <ul className="space-y-3">
                  <li>
                    <Link to="/stories" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      News
                    </Link>
                  </li>
                  <li>
                    <Link to="/stories" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Press Releases
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Legal Terms
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={() => setIsMegaMenuOpen(false)} className="text-[14px] font-bold text-perk-black/70 hover:text-perk-black transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
