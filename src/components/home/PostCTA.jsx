import React from 'react';
import { ChevronRight } from 'lucide-react';

const PostCTA = () => {
  return (
    <section className="bg-[#292924] py-24 px-6 relative z-20 mt-0 pb-32">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Three Column Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Get Started */}
          <div className="bg-black rounded-[40px] p-10 md:p-14 flex flex-col h-full">
            <h3 className="text-white text-[32px] font-bold mb-6">Get started</h3>
            <p className="text-white/60 text-[16px] leading-relaxed mb-10 flex-grow">
              Create an account and join the 12,000+ customers already using KareerGrowth 
              to simplify their business travel and automate their corporate spend.
            </p>
            <button className="flex items-center gap-2 group/btn font-bold text-[14px] text-white border border-white/20 px-6 py-3 rounded-full w-fit hover:bg-white hover:text-black transition-all">
              Sign up <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 2: Discover Perk */}
          <div className="bg-black rounded-[40px] p-10 md:p-14 flex flex-col h-full transform md:scale-105 z-10 shadow-2xl">
            <h3 className="text-white text-[32px] font-bold mb-6">Discover KareerGrowth</h3>
            <p className="text-white/60 text-[16px] leading-relaxed mb-10 flex-grow">
              Get an overview of our platform and explore the key features with our expert team.
            </p>
            <button className="flex items-center gap-2 group/btn font-bold text-[14px] text-black bg-[#BEF264] px-8 py-3 rounded-full w-fit hover:bg-[#a3d44d] transition-all">
              Book a demo <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 3: See Perk in action */}
          <div className="bg-black rounded-[40px] p-10 md:p-14 flex flex-col h-full">
            <h3 className="text-white text-[32px] font-bold mb-6">See KareerGrowth in action</h3>
            <p className="text-white/60 text-[16px] leading-relaxed mb-10 flex-grow">
              Take a quick look at how KareerGrowth makes managing travel and spend simple—all in one intelligent platform.
            </p>
            <button className="flex items-center gap-2 group/btn font-bold text-[14px] text-white border border-white/20 px-6 py-3 rounded-full w-fit hover:bg-white hover:text-black transition-all">
              See how it works <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Localized Banner */}
        <div className="bg-black rounded-[32px] md:rounded-full p-6 px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white font-bold text-[15px]">
            Located in North America? Check out our latest expense management integrations.
          </p>
          <button className="flex items-center gap-2 group/banner font-bold text-[14px] text-white border border-white/20 px-8 py-2.5 rounded-full hover:bg-white hover:text-black transition-all whitespace-nowrap">
            Explore integrations <ChevronRight size={16} className="group-hover/banner:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PostCTA;
