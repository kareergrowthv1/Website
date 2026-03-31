import React from 'react';

const TrustedBy = () => {
  const logos = [
    "TATA CAPITAL",
    "lenskart",
    "plum",
    "ZUARI",
    "BRINTON",
    "RICE.F.W TECH",
    "pocketpills"
  ];

  return (
    <section className="pt-8 pb-0 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 mb-4 md:mb-6">
        <p className="text-center text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider">
          Trusted by HRs and recruiters to save time, money, and sanity
        </p>
      </div>

      <div className="relative border-x border-slate-200 group">
        <div className="flex animate-marquee-ultra-slow group-hover:[animation-play-state:paused]">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[180px] md:w-[250px] py-4 md:py-6 border-y border-r border-slate-200 flex items-center justify-center bg-transparent transition-colors"
            >
              <span className="text-sm md:text-lg font-extrabold text-[#1a1a1a] tracking-tightest uppercase opacity-90">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
