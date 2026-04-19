import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue } from 'framer-motion';
import { MoveRight, Check, X, ChevronRight, ArrowRight } from 'lucide-react';

// Import assets
const suitcaseImg = '/Users/ifocus/.gemini/antigravity/brain/b9dd75a1-1b4d-45ff-8f1f-ed0567981784/suitcase_trip_3d_1776586948568.png';
const engineerImg = '/Users/ifocus/.gemini/antigravity/brain/b9dd75a1-1b4d-45ff-8f1f-ed0567981784/engineer_tablet_industrial_1776586996847.png';
const fieldEngineerImg = '/Users/ifocus/.gemini/antigravity/brain/b9dd75a1-1b4d-45ff-8f1f-ed0567981784/engineer_field_laptop_1776590357705.png';

// News items for the recruitment marquee
const recruitmentNews = [
  {
    source: 'CNBC',
    title: 'KareerGrowth doubles valuation to $2.7 billion, plans fintech push',
    desc: 'The company is eyeing a major expansion into financial services as it hits a new valuation...',
    action: 'Read more',
    type: 'news'
  },
  {
    source: 'Forbes',
    title: 'Loyalty Bonus: How A Recruitment Policy Has Grown In A Constrained Environment',
    desc: 'Exploring how loyalty programs are adapting to the new corporate landscape.',
    action: 'Read more',
    type: 'news'
  },
  {
    source: 'Wise',
    title: '"People book their own travel without involving us. It gives us a lot of time back. KareerGrowth has..."',
    author: 'Marta Kutt',
    role: 'Events & Travel Manager',
    action: 'Watch',
    type: 'testimonial'
  },
  {
    source: 'Bloomberg',
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

// News items for the institute marquee
const instituteNews = [
  {
    source: 'TechPulse',
    title: 'Top 50 Engineering Colleges adopt KareerGrowth for Batch Vetting',
    desc: 'New standard in campus placements simplifies bulk interview coordination.',
    action: 'Read story',
    type: 'news'
  },
  {
    source: 'University Today',
    title: 'University of Technology reports 40% higher placement rate',
    desc: 'How standardized competency metrics helped students land better roles.',
    action: 'Read more',
    type: 'news'
  },
  {
    source: 'Premier Institute',
    title: '"Student placement rates grew by 35% after we integrated KareerGrowth. It is a game changer for our Dean\'s office."',
    author: 'Dr. Arjan Singh',
    role: 'Dean of Placements',
    action: 'Watch',
    type: 'testimonial'
  },
  {
    source: 'EdTech Review',
    title: 'Standardizing Academic Integrity with Institutional-grade AI Proctoring',
    desc: 'How KareerGrowth sets new benchmarks for fair assessment in higher ed.',
    action: 'Read more',
    type: 'news'
  },
  {
    source: 'Global Campus',
    title: 'KareerGrowth announces $10M Grant for Institutional Standardizing',
    desc: 'Supporting colleges in bridging the industry-academia skills gap.',
    action: 'Learn more',
    type: 'news'
  }
];

const NewsMarquee = ({ data = recruitmentNews }) => {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const cardWidth = 420;
  const gap = 0; // border-l used instead
  const totalItems = data.length;
  const trackWidth = totalItems * cardWidth;
  const infiniteItems = [...data, ...data, ...data];

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

  useEffect(() => {
    const unsub = x.onChange((latest) => {
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
    <div 
      className="w-full relative pb-12 pt-12 border-t border-black/5 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-visible mb-12">
        <motion.div 
          style={{ x }}
          animate={controls}
          className="flex whitespace-nowrap"
        >
          {infiniteItems.map((news, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[420px] px-12 border-l border-black/5 first:border-l-0"
            >
              <div className="flex flex-col h-full group/card transition-all duration-500 whitespace-normal text-left">
                <div className="h-10 mb-2">
                  {news.type === 'testimonial' ? (
                    <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform origin-left">
                      <span className="font-bold text-lg text-perk-black tracking-tighter">{news.source}</span>
                    </div>
                  ) : (
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em]">
                      {news.source}
                    </span>
                  )}
                </div>

                <h4 className="font-bold text-perk-black mb-3 leading-[1.2] text-[22px] line-clamp-2">
                  {news.title}
                </h4>

                <p className="text-slate-500 text-[13px] leading-relaxed font-medium line-clamp-2 mb-4">
                  {news.desc}
                </p>

                {news.type === 'testimonial' && (
                  <div className="mb-6">
                    <p className="text-[13px] font-bold text-perk-black mb-0.5">{news.author}</p>
                    <p className="text-[12px] text-slate-400 font-medium">{news.role}</p>
                  </div>
                )}

                <div className="mt-auto">
                  <button className="flex items-center gap-2 group/btn font-bold text-[13px] border border-black/10 px-5 py-2 rounded-full w-fit hover:bg-black hover:text-white transition-all">
                    {news.action} <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Manual Controls */}
      <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex justify-end gap-2 text-perk-black/30">
            <button 
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={18} className="rotate-180" />
            </button>
            <button 
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
    </div>
  );
};

const FeatureSection = ({ persona = 'Recruitment', id = 'recruitment', showIntro = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const tabContent = {
    Recruitment: {
      headline: "Automate your entire hiring funnel",
      subtext: "From screening to final vetting, KareerGrowth handles the heavy lifting so you can focus on the best talent.",
      cards: [
        {
          type: 'image',
          title: 'Institutional-grade AI Proctoring',
          desc: 'Ensure 100% integrity in every assessment. Our AI monitors hundreds of signals to prevent cheating and ensure a fair playing field for all candidates.',
          image: fieldEngineerImg
        },
        {
          type: 'list',
          title: 'Automated Round Coordination',
          desc: 'No more manual scheduling. KareerGrowth automatically moves candidates through four rounds of vetting based on their competency scores.',
          items: [
            { icon: <Check size={14} className="text-emerald-500" />, label: 'Aptitude Round', action: <ArrowRight size={14} className="text-slate-400" /> },
            { icon: <Check size={14} className="text-emerald-500" />, label: 'Technical Quiz', value: 'Passed' },
            { icon: <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-white" />, label: 'AI Video Interview', value: 'Scheduled' }
          ]
        },
        {
          type: 'plain',
          title: 'Deep Competency Analytics',
          desc: 'Get a clear picture of every candidate. Our engine extracts deep insights into technical skills, communication, and problem-solving abilities.',
        },
        {
          type: 'status',
          header: 'Funnel Stats',
          title: 'Real-time Candidate Tracking',
          desc: 'Monitor your entire hiring pipeline in one place. See who is excelling, who needs more time, and who the top-tier fits are for your specific roles.',
          avatars: [
            { id: 'JD', color: 'bg-sky-200', status: 'check' },
            { id: 'AM', color: 'bg-orange-200', status: 'check' },
            { id: 'SJ', color: 'bg-indigo-200', status: 'x' },
            { id: 'RK', color: 'bg-pink-200', status: 'check' },
          ]
        },
        {
          type: 'accent',
          title: 'Human-like AI Interviews',
          desc: 'Our AI interviewers run 24/7, providing a comfortable yet intensive experience for candidates to showcase their actual potential.',
          image: suitcaseImg,
          bgColor: 'bg-brand-lime'
        },
        {
          type: 'image',
          title: 'Comprehensive Talent Insights',
          desc: 'Data-driven hiring decisions made simple. We provide clear, actionable reports on every candidate that passes through the machine.',
          image: engineerImg
        }
      ]
    },
    Institute: {
      headline: "Scale your campus placements",
      subtext: "Unified tracking and industry-grade proctoring for every student in your institution.",
      cards: [
        {
          type: 'plain',
          title: 'Centralized Placement Dashboard',
          desc: 'Gain bird-eye visibility into your entire placement season. Track company visits, student applications, and offer ratios in real-time.',
        },
        {
          type: 'image',
          title: 'Massive Batch Vetting',
          desc: 'Assess thousands of students simultaneously without infrastructure headaches. Our cloud-scale engine handles heavy loads with 99.9% reliability.',
          image: fieldEngineerImg
        },
        {
          type: 'accent',
          title: 'AI Proctoring for Institutions',
          desc: 'Ensure university-level integrity with our advanced proctoring suite, specifically designed for large-scale campus environments.',
          image: suitcaseImg,
          bgColor: 'bg-brand-lime'
        },
        {
          type: 'status',
          header: 'Batch Performance',
          title: 'Industry Readiness Scoring',
          desc: 'Get detailed reports on which students are ready for which industries, allowing for more strategic placement coordination.',
          avatars: [
            { id: 'CS', color: 'bg-sky-200', status: 'check' },
            { id: 'EE', color: 'bg-orange-200', status: 'check' },
            { id: 'ME', color: 'bg-indigo-200', status: 'check' },
            { id: 'IT', color: 'bg-pink-200', status: 'check' },
          ]
        }
      ] 
    }
  };

  const currentContent = tabContent[persona] || tabContent.Recruitment;

  // Auto-sliding logic
  useEffect(() => {
    const timer = setInterval(() => {
      scroll('next');
    }, 4000);
    return () => clearInterval(timer);
  }, [activeIndex, persona]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cards = currentContent.cards;
    if (cards.length === 0) return;

    let next;
    if (direction === 'next') {
      next = (activeIndex + 1) % cards.length;
    } else {
      next = (activeIndex - 1 + cards.length) % cards.length;
    }
    
    const cardWidth = window.innerWidth < 768 ? 280 : 380;
    const gap = 16;
    
    scrollRef.current.scrollTo({
      left: next * (cardWidth + gap),
      behavior: 'smooth'
    });
    setActiveIndex(next);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = window.innerWidth < 768 ? 280 : 380;
      const index = Math.round(scrollLeft / (cardWidth + 16)); 
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <section id={id} className={`pt-8 ${['Recruitment', 'Institute'].includes(persona) ? 'bg-white' : 'bg-cream'} overflow-hidden ${showIntro ? 'pt-0' : ''}`}>
      <div className="max-w-[1440px] mx-auto">
        {showIntro && (
          <div className="flex flex-col items-center text-center mb-6 px-6">
            <p className="text-sm md:text-[17px] font-medium text-perk-black/80 max-w-4xl mb-6 leading-relaxed">
              KareerGrowth is the complete vetting engine for today's recruiters, colleges, and candidates. Our human-like AI interviewers conduct four rounds of smart assessments 24/7, providing high-precision data and deep-competency analytics. We simplify the entire hiring journey by removing the manual work and keeping the process fair with institutional-grade security. Whether you are hiring top talent, managing campus placements, or starting your career, KareerGrowth makes the path faster, fairer, and much more intelligent.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group banner-lime text-perk-black px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 mb-8 transition-all shadow-md hover:shadow-xl"
            >
              Discover our product <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Persona Navigation Pills */}
            <div className="relative flex items-center bg-white p-1.5 rounded-full border border-black/5 shadow-sm mb-4">
              {[
                { id: 'recruitment', label: 'Recruitment' },
                { id: 'institute', label: 'Institute' },
                { id: 'candidates', label: 'Candidates' }
              ].map((item) => {
                const isActive = persona.toLowerCase() === item.id;
                
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative px-10 py-3 rounded-full text-sm font-bold transition-all z-10 ${
                      isActive ? 'text-perk-black' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePersonaHero"
                        className="absolute inset-0 bg-brand-lime rounded-full -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Section Headline */}
        <div className="text-center mb-16 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-perk-black mb-6 tracking-tight"
          >
            {currentContent.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto"
          >
            {currentContent.subtext}
          </motion.p>
        </div>
      </div>

      {/* Cards Slider - Restored to Standard Scroll */}
      <div className="w-full relative py-4 mb-2">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-4 scrollbar-hide snap-x snap-mandatory px-6 md:px-[calc((100vw-1200px)/2)] lg:px-[calc((100vw-1440px)/2)] pb-4"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {currentContent.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex-shrink-0 w-[280px] md:w-[380px] h-[520px] rounded-[1.75rem] overflow-hidden snap-center relative ${card.bgColor || 'bg-white border border-black/[0.03]'}`}
            >
              {/* Card Type Logic */}
              {card.type === 'status' && (
                <div className="p-8 h-full flex flex-col">
                  <div className="bg-[#f8f6f0] rounded-2xl p-6 mb-8 border border-black/[0.02]">
                      <div className="text-[9px] font-bold text-slate-400 mb-5 tracking-[0.2em] uppercase">{card.header}</div>
                      <div className="flex gap-3">
                        {card.avatars.map((av, index) => (
                          <div key={index} className="relative group">
                              <div className={`w-11 h-11 rounded-full ${av.color} flex items-center justify-center font-bold text-perk-black text-xs border-2 border-white shadow-sm`}>
                                {av.id}
                              </div>
                              <div className={`absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white shadow-sm ${av.status === 'check' ? 'bg-emerald-400' : 'bg-red-400'}`}>
                                {av.status === 'check' ? <Check size={8} className="text-white" /> : <X size={8} className="text-white" />}
                              </div>
                          </div>
                        ))}
                      </div>
                  </div>
                  <h3 className="text-2xl font-bold text-perk-black mb-5 leading-[1.2]">{card.title}</h3>
                  <p className="text-slate-500 font-medium mb-auto leading-relaxed text-sm">{card.desc}</p>
                  <button className="flex items-center gap-2 font-bold text-xs border border-perk-black/10 px-5 py-2 rounded-full w-fit hover:bg-perk-black hover:text-white transition-all group">
                      Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {card.type === 'list' && (
                <div className="p-8 h-full flex flex-col">
                  <div className="flex flex-col gap-2.5 mb-8">
                      {card.items.map((item, index) => (
                        <div key={index} className="bg-[#f8f6f0] rounded-xl p-3.5 flex items-center justify-between border border-black/[0.02]">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                                  {item.icon}
                              </div>
                              <span className="text-xs font-bold text-perk-black">{item.label}</span>
                            </div>
                            {item.value && <span className="text-xs font-bold text-slate-400">{item.value}</span>}
                            {item.action && <div className="">{item.action}</div>}
                        </div>
                      ))}
                  </div>
                  <h3 className="text-2xl font-bold text-perk-black mb-5 leading-[1.2]">{card.title}</h3>
                  <p className="text-slate-500 font-medium mb-auto leading-relaxed text-sm">{card.desc}</p>
                  <button className="flex items-center gap-2 font-bold text-xs border border-perk-black/10 px-5 py-2 rounded-full w-fit hover:bg-perk-black hover:text-white transition-all group">
                      Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {card.type === 'plain' && (
                <div className="p-8 h-full flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-perk-black mb-6 leading-[1.1]">{card.title}</h3>
                  <p className="text-slate-500 font-medium text-base leading-relaxed mb-10">{card.desc}</p>
                  <button className="flex items-center gap-2 font-bold text-xs border border-perk-black/10 px-5 py-2 rounded-full w-fit hover:bg-perk-black hover:text-white transition-all group">
                      Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {card.type === 'accent' && (
                <div className="h-full flex flex-col">
                  <div className="h-[42%] flex items-center justify-center p-6 overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
                      <motion.img 
                        whileHover={{ scale: 1.1, rotate: -2 }}
                        src={card.image} 
                        alt="featured" 
                        className="w-[100%] h-auto drop-shadow-xl"
                      />
                  </div>
                  <div className="p-8 pt-2 flex flex-col h-[58%]">
                      <h3 className="text-2xl font-bold text-perk-black mb-5 leading-[1.2]">{card.title}</h3>
                      <p className="text-perk-black/70 font-medium mb-auto leading-relaxed text-sm">{card.desc}</p>
                      <button className="flex items-center gap-2 font-bold text-xs border border-perk-black/10 px-5 py-2 rounded-full w-fit hover:bg-perk-black hover:text-white transition-all group">
                        Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                  </div>
                </div>
              )}

              {card.type === 'image' && (
                <div className="h-full flex flex-col relative group">
                  <img src={card.image} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2.5s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white text-left">
                      <h3 className="text-2xl font-bold mb-5 leading-[1.2]">{card.title}</h3>
                      <p className="text-white/80 font-medium mb-6 leading-relaxed text-xs md:text-sm line-clamp-3">{card.desc}</p>
                      <button className="flex items-center gap-2 font-bold text-xs border border-white/20 px-5 py-2 rounded-full w-fit hover:bg-white hover:text-black transition-all group">
                        Learn more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* High-Fidelity Slider Navigation */}
        <div className="max-w-[1440px] mx-auto px-6 mt-12 pb-12">
          <div className="flex flex-col items-center">
            {/* Control Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full">
              
              <div className="hidden md:block"></div>

              {/* Pagination Dots */}
              <div className="flex justify-center items-center gap-3">
                {currentContent.cards.map((_, i) => (
                  <motion.div
                    key={i}
                    onClick={() => {
                        const cardWidth = window.innerWidth < 768 ? 280 : 380;
                        scrollRef.current.scrollTo({ left: i * (cardWidth + 16), behavior: 'smooth' });
                        setActiveIndex(i);
                    }}
                    animate={{ 
                        width: i === activeIndex ? 36 : 8,
                        backgroundColor: i === activeIndex ? '#1a1a1a' : '#d1d1d1'
                    }}
                    className="h-2 rounded-full cursor-pointer transition-all duration-300"
                  />
                ))}
              </div>

              {/* Navigation & Action */}
              <div className="flex items-center justify-end gap-3 md:gap-4 ml-auto md:ml-0">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => scroll('prev')} 
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
                  >
                    <ChevronRight size={18} className="rotate-180" />
                  </button>
                  <button 
                    onClick={() => scroll('next')} 
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <button className="hidden sm:flex items-center gap-2 font-bold text-[13px] md:text-[14px] border border-black/10 px-6 md:px-8 py-2 md:py-2.5 rounded-full hover:bg-black hover:text-white transition-all shadow-sm group">
                  Show all features <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra News Marquee (Recruitment & Institute Exclusive) */}
      {['Recruitment', 'Institute'].includes(persona) && (
        <NewsMarquee data={persona === 'Recruitment' ? recruitmentNews : instituteNews} />
      )}
    </section>
  );
};

export default FeatureSection;
