import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const newsItems = [
  {
    source: 'AI VETTING',
    title: 'Screen 10,000+ candidates in under 5 minutes with AI Agents',
    desc: 'Deploy custom conversational bots to evaluate technical competency, communication skills, and role alignment at scale.',
    action: 'Explore AI Vetting',
    link: '/product?tab=Recruiters',
    type: 'news'
  },
  {
    source: 'PROCTORING SANDBOX',
    title: 'Secure technical coding rounds with advanced gaze tracking',
    desc: 'Eliminate code copying and unauthorized external aid with deep audio-visual anomaly detection and a locked-down browser environment.',
    action: 'See Sandbox',
    link: '/product?tab=Recruiters',
    type: 'news'
  },
  {
    source: 'ATS ENGINE',
    title: 'Deep semantic profile parsing with 98% matching accuracy',
    desc: 'Go beyond legacy keyword checking. Match complex candidate histories with rich job specs to rank the perfect matches instantly.',
    action: 'Test Parser',
    link: '/product?tab=Recruiters',
    type: 'news'
  },
  {
    source: 'DELOITTE',
    title: '"KareerGrowth cut our high-volume operational cycles by 75%. The automatic proctoring has been an absolute game changer for our global campus drives."',
    author: 'Marta Jenkins',
    role: 'Lead Talent Acquisition, Deloitte',
    action: 'Watch story',
    link: '/stories',
    type: 'testimonial',
    logo: (
      <div className="flex items-center gap-1.5 mb-4 group-hover:scale-105 transition-transform origin-left">
        <span className="font-black text-xl tracking-tight text-white uppercase">Deloitte<span className="text-[#86EFAC]">.</span></span>
      </div>
    )
  },
  {
    source: 'AI PORTFOLIOS',
    title: 'Transform active code branches into placement-ready metrics',
    desc: 'Automatically crawl public repositories to analyze commit structure, architectural quality, and design decisions to stamp real skill badges.',
    action: 'Build Portfolio',
    link: '/product?tab=Candidates',
    type: 'news'
  },
  {
    source: 'CAMPUS PLACEMENT',
    title: 'Coordinate university drives, schedules, and mock prep in one place',
    desc: 'Empower placement committees and campus hiring managers with deep collaborative scheduling and automated resume feedback loops.',
    action: 'Open Portal',
    link: '/product?tab=Institutes',
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
          
          {/* Floating badges around title — same layout all sizes, smaller on mobile */}
          <div className="relative w-full max-w-4xl md:min-h-[280px] mb-12">

            {/* Top Left */}
            <div className="absolute top-0 left-0 md:left-10">
              <div className="bg-[#FBCFE8] px-2.5 py-1.5 md:px-5 md:py-3 rounded-full flex items-center gap-1.5 md:gap-2 shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0" />
                <span className="text-[10px] md:text-[13px] font-bold text-black whitespace-nowrap uppercase tracking-wider">12 offices globally</span>
              </div>
            </div>

            {/* Top Right */}
            <div className="absolute top-2 right-2 md:right-1">
              <div className="bg-[#C4B5FD] px-2.5 py-1.5 md:px-5 md:py-3 rounded-full flex items-center gap-1.5 md:gap-2 shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0" />
                <span className="text-[10px] md:text-[13px] font-bold text-black whitespace-nowrap uppercase tracking-wider">1,800+ employees</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-[44px] md:text-[96px] font-bold text-white leading-[0.9] tracking-tighter mt-10 md:mt-14 mb-12 md:mb-14">
              Ready to get<br />to work?
            </h2>

            {/* Bottom Left */}
            <div className="absolute bottom-0 left-2 md:left-20">
              <div className="bg-[#A5F3FC] px-2.5 py-1.5 md:px-5 md:py-3 rounded-full flex items-center gap-1.5 md:gap-2 shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0" />
                <span className="text-[10px] md:text-[13px] font-bold text-black whitespace-nowrap uppercase tracking-wider">Founded in 2015</span>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-0 right-2 md:right-10">
              <div className="bg-[#FED7AA] px-2.5 py-1.5 md:px-5 md:py-3 rounded-full flex items-center gap-1.5 md:gap-2 shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0" />
                <span className="text-[10px] md:text-[13px] font-bold text-black whitespace-nowrap uppercase tracking-wider">10,000+ customers</span>
              </div>
            </div>

          </div>

          {/* Mission Statement */}
          <p className="max-w-3xl text-white/60 text-[18px] md:text-[20px] leading-relaxed font-medium mb-12">
            We're eliminating recruitment friction for universities, candidates, and enterprises — so everyone can focus on what matters: real skills, real matches, real growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link 
              to="/about"
              className="bg-[#BEF264] text-black font-bold px-10 py-4 rounded-full text-[15px] flex items-center gap-2 hover:bg-[#a3d44d] transition-all shadow-xl"
            >
              Get to know us <ChevronRight size={18} />
            </Link>
            <Link 
              to="/about"
              className="bg-transparent text-white border border-white/20 font-bold px-10 py-4 rounded-full text-[15px] flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              Join the team <ChevronRight size={18} />
            </Link>
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
                        news.logo
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
                      <Link 
                        to={news.link}
                        className="flex items-center gap-2 group/btn font-bold text-[13px] border border-white text-white px-5 py-2 rounded-full w-fit hover:bg-white hover:text-black transition-all shadow-sm"
                      >
                        {news.action} <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
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
