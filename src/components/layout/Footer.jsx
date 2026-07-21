import React, { useRef, useState, useLayoutEffect } from 'react';
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Apple,
  Play,
  Languages,
  ChevronDown,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const revealRef = useRef(null);
  const [revealHeight, setRevealHeight] = useState(0);

  // Measure the height of the regulatory base to set the scroll buffer
  useLayoutEffect(() => {
    if (revealRef.current) {
      const handleResize = () => {
        setRevealHeight(revealRef.current.offsetHeight);
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <footer 
      className="relative z-0" 
      style={{ 
        paddingBottom: revealHeight,
        clipPath: 'inset(0 0 0 0)'
      }}
    >
      {/* Lime Green Main Section (The "Green Box") - 100% Scroll Over Curtain */}
      <div className="relative bg-[#BEF264] pt-20 pb-16 rounded-b-[40px] z-20 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Top Section: Help & Socials */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-20">
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <h3 className="text-[20px] font-bold text-black">How can we help?</h3>
              <div className="flex gap-8 text-[15px] font-bold text-black/60">
                <a href="#" className="hover:text-black transition-colors">Contact us</a>
                <a href="#" className="hover:text-black transition-colors">Help center</a>
                <a href="#" className="hover:text-black transition-colors">Status</a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                  <Linkedin size={16} />
                </div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                  <Twitter size={16} />
                </div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                  <Instagram size={16} />
                </div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                  <Facebook size={16} />
                </div>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                  <Youtube size={16} />
                </div>
              </div>

            </div>
          </div>

          <div className="h-[1px] bg-black/10" />

          {/* Brand + Link Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-16">

            {/* Brand Column */}
            <div className="lg:col-span-4 flex flex-col gap-5 lg:pr-12">
              <div>
                <span className="text-[22px] font-black tracking-tight text-black">KareerGrowth</span>
                <p className="mt-2 text-[13px] leading-relaxed text-black max-w-xs">
                  AI-powered hiring, assessment, and career growth platform for recruiters, colleges, and candidates.
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-[12px] text-black"><MapPin size={13} className="text-black flex-shrink-0" /> Bangalore, India</li>
                <li><a href="mailto:hello@kareergrowth.co" className="flex items-center gap-2 text-[12px] text-black hover:opacity-60 transition-opacity"><Mail size={13} className="text-black flex-shrink-0" /> hello@kareergrowth.co</a></li>
                <li><a href="tel:+917829730090" className="flex items-center gap-2 text-[12px] text-black hover:opacity-60 transition-opacity"><Phone size={13} className="text-black flex-shrink-0" /> +91 78297 30090</a></li>
              </ul>
            </div>

            {/* Link Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-black/40 mb-5">Product</h4>
                <ul className="flex flex-col gap-3">
                  <li><a href="/product" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">AI Screening</a></li>
                  <li><a href="/product" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Mock Interview</a></li>
                  <li><a href="/product" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Resume Studio</a></li>
                  <li><a href="/product" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Smart ATS</a></li>
                  <li><a href="/product" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Proctoring</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-black/40 mb-5">Solutions</h4>
                <ul className="flex flex-col gap-3">
                  <li><a href="/product" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Enterprise Hiring</a></li>
                  <li><a href="/product" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">University Drives</a></li>
                  <li><a href="/product" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">SME Recruiting</a></li>
                  <li><a href="/integrations" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Integrations</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-black/40 mb-5">Company</h4>
                <ul className="flex flex-col gap-3">
                  <li><a href="/about" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">About Us</a></li>
                  <li><a href="/stories" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Stories</a></li>
                  <li><a href="/about" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Careers</a></li>
                  <li><a href="/about" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Partner Program</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-black/40 mb-5">Legal</h4>
                <ul className="flex flex-col gap-3">
                  <li><a href="#" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="text-[13px] font-bold text-black/70 hover:text-black transition-colors">Compliance</a></li>
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* Massive Branding Typography - Refined letter spacing */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-6 mb-[-2%] select-none flex justify-center pointer-events-none">
          <span className="text-[10vw] md:text-[14vw] font-bold text-black leading-[0.8] tracking-tight opacity-90 text-center">
            KareerGrowth
          </span>
        </div>
      </div>

      {/* Bottom White Regulatory Footer (100% Fixed Station) */}
      <div 
        ref={revealRef}
        className="fixed bottom-0 left-0 right-0 bg-white pt-10 pb-16 px-6 md:px-24 z-0 border-t border-black/5"
      >
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Logo & Copyright */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-1">
                <span className="text-[28px] font-black tracking-tighter text-black">KareerGrowth</span>
              </div>
              <p className="text-[13px] font-medium text-black/50 italic">© 2026 KareerGrowth</p>
            </div>

            {/* Regulatory Link Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-32 gap-y-6">
              <div className="flex flex-col gap-3">
                <a href="#" className="text-[13px] font-bold text-black hover:opacity-60 transition-opacity">Cookies policy</a>
                <a href="#" className="text-[13px] font-bold text-black hover:opacity-60 transition-opacity">Modern slavery act statement</a>
                <a href="#" className="text-[13px] font-bold text-black hover:opacity-60 transition-opacity">Legal</a>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-[13px] font-bold text-black hover:opacity-60 transition-opacity">Terms of service</a>
                <a href="#" className="text-[13px] font-bold text-black hover:opacity-60 transition-opacity">Trust center</a>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-[13px] font-bold text-black hover:opacity-60 transition-opacity">Imprint</a>
                <a href="#" className="text-[13px] font-bold text-black hover:opacity-60 transition-opacity">Privacy policy</a>
              </div>
            </div>
          </div>

          <p className="text-[11px] leading-relaxed text-black/40 max-w-5xl mx-auto text-center">
            KareerGrowth provides an AI-powered talent assessment and screening infrastructure platform. All product names, logos, and brands are property of their respective owners. Technical assessments are proctored and analyzed using advanced machine learning models to ensure maximum integrity and role fit.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
