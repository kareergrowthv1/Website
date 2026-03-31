import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'Who we serve', href: '#who-we-serve' },
    { name: 'Customer Stories', href: '#stories' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 flex justify-center">
        <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Left Section: Logo */}
          <div className="flex-1 flex justify-start">
            <div className="text-xl font-extrabold tracking-tighter flex items-center gap-1">
              <span className="text-black">Kareer</span>
              <span className="text-secondary italic">Growth</span>
            </div>
          </div>
          
          {/* Center Section: Navigation Links (Desktop) */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-black transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section: Buttons & Menu Toggle */}
          <div className="flex-1 flex justify-end items-center gap-2 sm:gap-4">
            <div className="hidden md:flex items-center gap-2 sm:gap-3 text-[10px] sm:text-sm">
              <button className="px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-slate-200 font-medium hover:bg-slate-50 transition-all whitespace-nowrap text-black">
                Book a Demo
              </button>
              <button className="px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-md shadow-blue-100 whitespace-nowrap">
                Create account
              </button>
            </div>
            
            {/* Hamburger Menu Button */}
            <button 
              className="lg:hidden p-1.5 text-slate-600 hover:text-black transition-colors shrink-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-12">
            <div className="text-xl font-extrabold tracking-tighter flex items-center gap-1">
              <span className="text-black">Kareer</span>
              <span className="text-secondary italic">Growth</span>
            </div>
            <button 
              className="p-2 text-slate-400 hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6 mb-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <button className="w-full btn-outline py-3">Book a Demo</button>
            <button className="w-full btn-primary py-3">Create account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
