import React from 'react';
import { Calendar, User, Briefcase, Users, ChevronRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="bg-black py-32 px-6 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Badges — 2×2 grid, small on mobile, larger on desktop */}
        <div className="grid grid-cols-2 gap-2 mb-8 w-full max-w-xs lg:max-w-md">
          <div className="bg-[#FBCFE8] px-3 py-2 lg:px-4 lg:py-2.5 rounded-full flex items-center gap-1.5 shadow-md">
            <Briefcase size={12} className="text-black flex-shrink-0 lg:w-4 lg:h-4" />
            <span className="text-[11px] lg:text-[13px] font-bold text-black leading-tight">12 offices globally</span>
          </div>
          <div className="bg-[#C4B5FD] px-3 py-2 lg:px-4 lg:py-2.5 rounded-full flex items-center gap-1.5 shadow-md">
            <User size={12} className="text-black flex-shrink-0 lg:w-4 lg:h-4" />
            <span className="text-[11px] lg:text-[13px] font-bold text-black leading-tight">1,800+ employees</span>
          </div>
          <div className="bg-[#A5F3FC] px-3 py-2 lg:px-4 lg:py-2.5 rounded-full flex items-center gap-1.5 shadow-md">
            <Calendar size={12} className="text-black flex-shrink-0 lg:w-4 lg:h-4" />
            <span className="text-[11px] lg:text-[13px] font-bold text-black leading-tight">Founded in 2015</span>
          </div>
          <div className="bg-[#FED7AA] px-3 py-2 lg:px-4 lg:py-2.5 rounded-full flex items-center gap-1.5 shadow-md">
            <Users size={12} className="text-black flex-shrink-0 lg:w-4 lg:h-4" />
            <span className="text-[11px] lg:text-[13px] font-bold text-black leading-tight">10,000+ customers</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[48px] md:text-[72px] lg:text-[80px] font-bold text-white leading-[0.95] tracking-tighter mb-8">
          Ready to get<br />to work?
        </h2>

        {/* Mission Statement */}
        <p className="max-w-2xl text-white/60 text-[18px] md:text-[20px] leading-relaxed font-medium mb-12">
          We're on a mission to erase shadow work—the work behind work—from every corner of business 
          so you can take back time to focus on what matters: real work with real impact.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="bg-[#BEF264] text-black font-bold px-8 py-3.5 rounded-full text-[15px] flex items-center gap-2 hover:bg-[#a3d44d] transition-all">
            Get to know us <ChevronRight size={18} />
          </button>
          <button className="bg-transparent text-white border border-white/20 font-bold px-8 py-3.5 rounded-full text-[15px] flex items-center gap-2 hover:bg-white/5 transition-all">
            Join the team <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
