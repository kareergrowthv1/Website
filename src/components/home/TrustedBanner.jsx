import React from 'react';
import { motion } from 'framer-motion';

const TrustedBanner = () => {
  const logos = [
    'TATA Steel', 
    'Deloitte', 
    'J.P. Morgan', 
    'NIT Trichy', 
    'SystemMindz', 
    'ValidProfile', 
    'Apex Skill Technology', 
    'Epigon', 
    'IIT Bombay'
  ];

  // Double the logos for a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-[#d3d3cc] py-6 border-y border-black/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex items-center gap-16 md:gap-24 px-8"
          animate={{ x: [0, -1035] }} // Adjust -1035 based on estimated content width
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <span key={i} className="text-[15px] md:text-[18px] font-bold tracking-tighter text-perk-black">
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedBanner;
