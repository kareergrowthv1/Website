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
  ChevronDown
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

              <div className="flex gap-3">
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                  <Apple size={18} fill="white" />
                  <div className="text-[10px] leading-none uppercase font-bold">
                    Download on the<br /><span className="text-[14px]">App Store</span>
                  </div>
                </div>
                <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                  <Play size={18} fill="white" />
                  <div className="text-[10px] leading-none uppercase font-bold">
                    Get it on<br /><span className="text-[14px]">Google Play</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/5 px-4 py-2.5 rounded-full flex items-center gap-3 cursor-pointer hover:bg-black/10 transition-colors">
                <Languages size={18} />
                <span className="text-[14px] font-bold">English</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-black/10 mb-20" />

          {/* Link Matrix */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16">
            <div className="flex flex-col gap-12">
              <div>
                <h4 className="text-[15px] font-black uppercase tracking-widest text-black/30 mb-8 pt-1">Solutions</h4>
                <ul className="flex flex-col gap-4 text-[15px] font-bold text-black">
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Enterprise Hiring</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">SME Recruiting</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">University Drives</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[15px] font-black uppercase tracking-widest text-black/30 mb-8 pt-1">Add-ons</h4>
                <ul className="flex flex-col gap-4 text-[15px] font-bold text-black">
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Custom Proctoring</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">AI Interviewers</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">ATS Integrations</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Skill Badging</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">API Sandbox</a></li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-[15px] font-black uppercase tracking-widest text-black/30 mb-8 pt-1">Product</h4>
              <ul className="flex flex-col gap-4 text-[15px] font-bold text-black">
                <li><a href="#" className="hover:opacity-60 transition-opacity">AI Screening</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Proctoring Sandbox</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Smart ATS</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Interview Coach</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Placement Portal</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Gaze Tracking</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Plagiarism Blocker</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Analytics Suite</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Mock Rounds</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Bulk Scheduler</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Feedback Loop</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-12">
              <div>
                <h4 className="text-[15px] font-black uppercase tracking-widest text-black/30 mb-8 pt-1">Resources</h4>
                <ul className="flex flex-col gap-4 text-[15px] font-bold text-black">
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Placement Glossary</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Hiring Playbook</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Developer API</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">System Status</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[15px] font-black uppercase tracking-widest text-black/30 mb-8 pt-1">Research</h4>
                <ul className="flex flex-col gap-4 text-[15px] font-bold text-black">
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Developer Skill Trends</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">Campus Hiring Report</a></li>
                  <li><a href="#" className="hover:opacity-60 transition-opacity">ATS Accuracy Survey</a></li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-[15px] font-black uppercase tracking-widest text-black/30 mb-8 pt-1">Services</h4>
              <ul className="flex flex-col gap-4 text-[15px] font-bold text-black">
                <li><a href="#" className="hover:opacity-60 transition-opacity">Dedicated Support</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Custom Integrations</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Ops Transformation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[15px] font-black uppercase tracking-widest text-black/30 mb-8 pt-1">About</h4>
              <ul className="flex flex-col gap-4 text-[15px] font-bold text-black">
                <li><a href="#" className="hover:opacity-60 transition-opacity">Company</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Careers</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Partner program</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Customers</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">User reviews</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Media center</a></li>
              </ul>
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
