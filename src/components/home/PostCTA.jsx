import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useModalStore } from '../../data/useModalStore';

const PostCTA = () => {
  const { openDemoModal, openGetStartedModal } = useModalStore();

  return (
    <section className="bg-[#292924] p-8 relative z-20">
      <div className="max-w-[1440px] mx-auto">

        {/* Three Column Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Card 1: Get Started */}
          <div className="bg-black rounded-[40px] p-8 md:p-10 flex flex-col h-full transition-transform duration-300 ease-out hover:scale-[1.03]">
            <h3 className="text-white text-[32px] font-bold mb-6">Get started</h3>
            <p className="text-white/60 text-[16px] leading-relaxed mb-10 flex-grow">
              Create an account and join the 12,000+ companies already using KareerGrowth 
              to simplify their hiring vetting and automate their campus placements.
            </p>
            <button 
              onClick={openGetStartedModal}
              className="flex items-center gap-2 group/btn font-bold text-[14px] text-black bg-white px-6 py-3 rounded-full w-fit hover:bg-white/90 transition-all cursor-pointer"
            >
              Sign up <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 2: Discover KareerGrowth */}
          <div className="bg-black rounded-[40px] p-8 md:p-10 flex flex-col h-full transition-transform duration-300 ease-out hover:scale-[1.03]">
            <h3 className="text-white text-[32px] font-bold mb-6">Discover KareerGrowth</h3>
            <p className="text-white/60 text-[16px] leading-relaxed mb-10 flex-grow">
              Get an overview of our platform and explore key assessment features with our expert team.
            </p>
            <button 
              onClick={openDemoModal}
              className="flex items-center gap-2 group/btn font-bold text-[14px] text-black bg-[#BEF264] px-8 py-3 rounded-full w-fit hover:bg-[#a3d44d] transition-all cursor-pointer"
            >
              Book a demo <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 3: KareerGrowth Action */}
          <div className="bg-black rounded-[40px] p-8 md:p-10 flex flex-col h-full transition-transform duration-300 ease-out hover:scale-[1.03]">
            <h3 className="text-white text-[32px] font-bold mb-6">KareerGrowth Action</h3>
            <p className="text-white/60 text-[16px] leading-relaxed mb-10 flex-grow">
              Take a quick look at how KareerGrowth makes assessment proctoring and placement coordination simple—all in one place.
            </p>
            <Link 
              to="/product"
              className="flex items-center gap-2 group/btn font-bold text-[14px] text-black bg-white px-6 py-3 rounded-full w-fit hover:bg-white/90 transition-all"
            >
              See how it works <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Localized Banner */}
        <div className="bg-black rounded-[32px] md:rounded-full p-6 px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white font-bold text-[15px]">
            Looking for custom solutions? Connect your Applicant Tracking Systems (ATS) directly with KareerGrowth.
          </p>
          <Link 
            to="/integrations"
            className="flex items-center gap-2 group/banner font-bold text-[14px] text-black bg-white px-8 py-2.5 rounded-full hover:bg-white/90 transition-all whitespace-nowrap"
          >
            Explore integrations <ChevronRight size={16} className="group-hover/banner:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PostCTA;
