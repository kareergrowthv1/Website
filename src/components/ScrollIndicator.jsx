import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const percentage = (scrollTop / scrollableHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-2">
       <span className="text-[10px] font-bold text-slate-400 rotate-90 mb-4">{Math.round(scrollPercentage)}%</span>
       <div className="w-[2px] h-64 bg-slate-100 rounded-full relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-secondary transition-all duration-100 ease-out rounded-full"
            style={{ height: `${scrollPercentage}%` }}
          ></div>
       </div>
       {/* Small notches like a ruler */}
       <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-20">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`w-1 h-[1px] bg-slate-400 ${i % 5 === 0 ? 'w-2' : 'w-1'}`}></div>
          ))}
       </div>
    </div>
  );
};

export default ScrollIndicator;
