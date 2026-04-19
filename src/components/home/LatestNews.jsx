import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const newsItems = [
  {
    source: 'CNBC',
    title: 'KareerGrowth doubles valuation to $2.7 billion, plans fintech push',
    desc: 'The company is eyeing a major expansion into financial services as it hits a new valuation milestone.',
    action: 'Read more',
    type: 'news'
  },
  {
    source: 'CNBC',
    title: 'SoftBank-backed firm KareerGrowth acquires U.S. rival and bags $135 million for expansion',
    desc: 'Strategic acquisition marks a significant step in the company\'s global scaling strategy.',
    action: 'Read more',
    type: 'news'
  },
  {
    source: 'SKIFT',
    title: 'KareerGrowth Sees Corporate Travel Bouncing Back, But Not For All',
    desc: 'Insights into the uneven recovery of business travel across different sectors.',
    action: 'Read more',
    type: 'news'
  },
  {
    source: 'FORBES',
    title: 'Loyalty Bonus: How A Travel Policy Has Grown In A Constrained Environment',
    desc: 'Exploring how loyalty programs are adapting to the new corporate landscape.',
    action: 'Read more',
    type: 'news'
  },
  {
    source: 'WISE',
    title: '"People book their own travel without involving us. It gives us a lot of time back. KareerGrowth has..."',
    author: 'Marta Kutt',
    role: 'Events & Travel Manager',
    action: 'Watch',
    type: 'testimonial',
    logo: (
      <div className="flex items-center gap-1 mb-4 group-hover:scale-110 transition-transform origin-left">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 19.74h20L12 2zm0 4.14L18.66 17.6H5.34L12 6.14z"/>
          </svg>
          <span className="font-bold text-xl tracking-tighter">Wise</span>
      </div>
    )
  },
  {
    source: 'BLOOMBERG',
    title: 'KareerGrowth hits $1.3 billion valuation as business trips rebound',
    desc: 'Market resurgence fuels investor confidence in the travel tech giant\'s future.',
    action: 'Read more',
    type: 'news'
  },
  {
    source: 'BBC',
    title: 'Your team is your product, build a well-oiled machine',
    desc: 'The critical importance of organizational culture in the era of hybrid work.',
    action: 'Read more',
    type: 'news'
  }
];

const LatestNews = () => {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardWidth = 420; // 420px total width including padding
  const totalItems = newsItems.length;
  const trackWidth = totalItems * cardWidth;
  
  // Triplicate for seamless looping
  const infiniteItems = [...newsItems, ...newsItems, ...newsItems];

  const startAnimation = () => {
    controls.start({
      x: [x.get(), x.get() - trackWidth],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      }
    });
  };

  useEffect(() => {
    if (!isHovered) {
      startAnimation();
    } else {
      controls.stop();
    }
    return () => controls.stop();
  }, [isHovered, trackWidth]);

  // Handle wraparound logic for the motion value to keep it in a manageable range
  useEffect(() => {
    const unsub = x.on("change", (latest) => {
      if (latest <= -trackWidth * 2) {
        x.set(latest + trackWidth);
      } else if (latest >= 0) {
        x.set(latest - trackWidth);
      }
    });
    return () => unsub();
  }, [trackWidth]);

  const handleNext = () => {
    const currentPos = x.get();
    const nextPos = Math.floor(currentPos / cardWidth) * cardWidth - cardWidth;
    controls.stop();
    controls.start({
      x: nextPos,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
    }).then(() => {
      if (!isHovered) startAnimation();
    });
  };

  const handlePrev = () => {
    const currentPos = x.get();
    const prevPos = Math.ceil(currentPos / cardWidth) * cardWidth + cardWidth;
    controls.stop();
    controls.start({
      x: prevPos,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
    }).then(() => {
      if (!isHovered) startAnimation();
    });
  };

  return (
    <section id="news" className="bg-black pt-12 pb-32 px-6 overflow-hidden relative z-30">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Brand Stats CTA (Top of Section) */}
        <div className="mb-16 flex flex-col items-center text-center relative">
          
          {/* Floating Badges Ribbon */}
          <div className="relative w-full max-w-4xl min-h-[140px] mb-12">
            {/* Top Left: 12 offices (Pink) */}
            <div className="absolute top-0 -left-4 md:left-10 transform -translate-y-1/2">
              <div className="bg-[#FBCFE8] px-5 py-3 rounded-full flex items-center gap-2 shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                <span className="text-[13px] font-bold text-black whitespace-nowrap uppercase tracking-wider">12 offices globally</span>
              </div>
            </div>

            {/* Top Right: 1,800+ employees (Violet) */}
            <div className="absolute top-6 right-0 md:right-1 transform -translate-y-1/2">
              <div className="bg-[#C4B5FD] px-5 py-3 rounded-full flex items-center gap-2 shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                <span className="text-[13px] font-bold text-black whitespace-nowrap uppercase tracking-wider">1,800+ employees</span>
              </div>
            </div>

            {/* Bottom Left: Founded (Cyan) */}
            <div className="absolute bottom-6 left-0 md:left-20">
              <div className="bg-[#A5F3FC] px-5 py-3 rounded-full flex items-center gap-2 shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                <span className="text-[13px] font-bold text-black whitespace-nowrap uppercase tracking-wider">Founded in 2015</span>
              </div>
            </div>

            {/* Bottom Right: 10,000+ customers (Orange) */}
            <div className="absolute bottom-0 right-4 md:right-10">
              <div className="bg-[#FED7AA] px-5 py-3 rounded-full flex items-center gap-2 shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                <span className="text-[13px] font-bold text-black whitespace-nowrap uppercase tracking-wider">10,000+ customers</span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-[56px] md:text-[96px] font-bold text-white leading-[0.9] tracking-tighter mt-12 mb-6">
              Ready to get<br />to work?
            </h2>
          </div>

          {/* Mission Statement */}
          <p className="max-w-2xl text-white/60 text-[18px] md:text-[20px] leading-relaxed font-medium mb-12">
            We're on a mission to erase shadow work—the work behind work—from every corner of business 
            so you can focus on what matters: real work with real impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="bg-[#BEF264] text-black font-bold px-10 py-4 rounded-full text-[15px] flex items-center gap-2 hover:bg-[#a3d44d] transition-all shadow-xl">
              Get to know us <ChevronRight size={18} />
            </button>
            <button className="bg-transparent text-white border border-white/20 font-bold px-10 py-4 rounded-full text-[15px] flex items-center gap-2 hover:bg-white/10 transition-all">
              Join the team <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Global Slider Container (Bottom of Section) */}
        <div 
          className="relative group pt-12 border-t border-white/10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-visible">
            <motion.div 
              style={{ x }}
              animate={controls}
              className="flex whitespace-nowrap"
            >
              {infiniteItems.map((news, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[420px] px-8 md:px-12 border-l border-white/10 first:border-l-0"
                >
                  <div className="flex flex-col h-full group/card transition-all duration-500 whitespace-normal">
                    
                    {/* Category / Source Label */}
                    <div className="h-10 mb-2">
                      {news.type === 'testimonial' ? (
                        <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform origin-left">
                          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 19.74h20L12 2zm0 4.14L18.66 17.6H5.34L12 6.14z"/>
                          </svg>
                          <span className="font-bold text-lg text-white tracking-tighter">Wise</span>
                        </div>
                      ) : (
                        <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-[0.2em] transition-colors group-hover/card:text-white">
                          {news.source}
                        </span>
                      )}
                    </div>

                    {/* Title - Big, 2 lines */}
                    <h3 className="font-bold text-white mb-3 leading-[1.2] text-[22px] md:text-[26px] line-clamp-2 transition-all duration-500">
                      {news.title}
                    </h3>

                    {/* Description - Smaller, 2 lines */}
                    <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed font-medium line-clamp-2 mb-4">
                      {news.desc}
                    </p>

                    {/* Author / Position Block (Right after description) */}
                    {news.type === 'testimonial' && (
                      <div className="mb-6">
                        <p className="text-[13px] font-bold text-white mb-0.5">{news.author}</p>
                        <p className="text-[12px] text-slate-500 font-medium">{news.role}</p>
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="mt-auto">
                      <button className="flex items-center gap-2 group/btn font-bold text-[13px] border border-white text-white px-5 py-2 rounded-full w-fit hover:bg-white hover:text-black transition-all shadow-sm">
                        {news.action} <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slider Controls (Bottom Right) */}
          <div className="flex justify-end gap-2 mt-12 px-6">
            <button 
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-95 group/prev text-white hover:text-black"
            >
              <ChevronRight size={18} className="rotate-180 group-hover/prev:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-95 group/next text-white hover:text-black"
            >
              <ChevronRight size={18} className="group-hover/next:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestNews;
