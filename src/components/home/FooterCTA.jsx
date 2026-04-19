import React from 'react';
import { Calendar, User, Briefcase, Users, ChevronRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="bg-black py-32 px-6 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Floating Badges Container */}
        <div className="relative w-full max-w-4xl min-h-[120px] mb-8">
          {/* Top Left: Cyan */}
          <div className="absolute top-0 -left-4 md:left-20 transform -translate-y-1/2">
            <div className="bg-[#A5F3FC] px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg">
              <Calendar size={16} className="text-black" />
              <span className="text-[13px] font-bold text-black whitespace-nowrap">Founded in 2015</span>
            </div>
          </div>

          {/* Top Right: Violet */}
          <div className="absolute top-4 -right-4 md:right-16 transform -translate-y-1/2">
            <div className="bg-[#C4B5FD] px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg">
              <User size={16} className="text-black" />
              <span className="text-[13px] font-bold text-black whitespace-nowrap">1,800+ employees</span>
            </div>
          </div>

          {/* Bottom Left: Pink */}
          <div className="absolute bottom-4 left-4 md:left-40">
            <div className="bg-[#FBCFE8] px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg">
              <Briefcase size={16} className="text-black" />
              <span className="text-[13px] font-bold text-black whitespace-nowrap">12 offices globally</span>
            </div>
          </div>

          {/* Bottom Right: Orange */}
          <div className="absolute bottom-0 right-4 md:right-32">
            <div className="bg-[#FED7AA] px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg">
              <Users size={16} className="text-black" />
              <span className="text-[13px] font-bold text-black whitespace-nowrap">10,000+ customers worldwide</span>
            </div>
          </div>

          {/* The Main Headline */}
          <h2 className="text-[56px] md:text-[80px] font-bold text-white leading-[0.95] tracking-tighter mt-12 mb-4">
            Ready to get<br />to work?
          </h2>
        </div>

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
