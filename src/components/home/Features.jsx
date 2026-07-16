import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { productFeatures } from '../../data/productFeatures';

// Import assets
const suitcaseImg = '/Users/ifocus/.gemini/antigravity/brain/b9dd75a1-1b4d-45ff-8f1f-ed0567981784/suitcase_trip_3d_1776586948568.png';
const engineerImg = '/Users/ifocus/.gemini/antigravity/brain/b9dd75a1-1b4d-45ff-8f1f-ed0567981784/engineer_tablet_industrial_1776586996847.png';
const fieldEngineerImg = '/Users/ifocus/.gemini/antigravity/brain/b9dd75a1-1b4d-45ff-8f1f-ed0567981784/engineer_field_laptop_1776590357705.png';

// News items for the recruitment marquee
const recruitmentNews = [
  {
    source: 'TechCrunch',
    title: 'AI agents screen 10,000+ applicants in under 5 minutes',
    desc: 'New conversational tech-hiring models automate screening rounds at unprecedented velocity.',
    action: 'Explore AI Vetting',
    link: '/product?tab=Recruiters',
    type: 'news'
  },
  {
    source: 'Forbes',
    title: 'How automated proctoring sandboxes cut high-volume operations by 75%',
    desc: 'Eliminating manual vetting friction and cheating attempts using lock-down browser sandboxes.',
    action: 'See Sandbox',
    link: '/product?tab=Recruiters',
    type: 'news'
  },
  {
    source: 'Deloitte',
    title: '"Automatic proctoring has been an absolute game changer for our global campus drives."',
    author: 'Marta Jenkins',
    role: 'Lead Talent Acquisition, Deloitte',
    action: 'Watch story',
    link: '/stories',
    type: 'testimonial'
  },
  {
    source: 'VentureBeat',
    title: 'Deep semantic ATS engines boost matching accuracy to 98%',
    desc: 'Beyond basic keywords. LLM-based profile scorers match candidates perfectly to job specs.',
    action: 'Test Parser',
    link: '/product?tab=Recruiters',
    type: 'news'
  },
  {
    source: 'Wired',
    title: 'Why active commit history is replacing legacy resume guesses',
    desc: 'How direct GitHub/GitLab crawlers generate verified skills badges autonomously.',
    action: 'Build Portfolio',
    link: '/product?tab=Candidates',
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
    link: '/product?tab=Institutes',
    type: 'news'
  },
  {
    source: 'University Today',
    title: 'University of Technology reports 40% higher placement rate',
    desc: 'How standardized competency metrics helped students land better roles.',
    action: 'Read more',
    link: '/product?tab=Institutes',
    type: 'news'
  },
  {
    source: 'Premier Institute',
    title: '"Student placement rates grew by 35% after we integrated KareerGrowth. It is a game changer for our Dean\'s office."',
    author: 'Dr. Arjan Singh',
    role: 'Dean of Placements',
    action: 'Watch',
    link: '/stories',
    type: 'testimonial'
  },
  {
    source: 'EdTech Review',
    title: 'Standardizing Academic Integrity with Institutional-grade AI Proctoring',
    desc: 'How KareerGrowth sets new benchmarks for fair assessment in higher ed.',
    action: 'Read more',
    link: '/product?tab=Institutes',
    type: 'news'
  },
  {
    source: 'Global Campus',
    title: 'KareerGrowth announces $10M Grant for Institutional Standardizing',
    desc: 'Supporting colleges in bridging the industry-academia skills gap.',
    action: 'Learn more',
    link: '/product?tab=Institutes',
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
    <div 
      className="w-full relative pb-12 pt-12 border-t border-black/5 bg-cream"
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
                  <Link 
                    to={news.link || '/product'}
                    className="flex items-center gap-2 group/btn font-bold text-[13px] border border-black/10 px-5 py-2 rounded-full w-fit hover:bg-black hover:text-white transition-all cursor-pointer"
                  >
                    {news.action} <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
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

// ─── Infinite one-direction card marquee ─────────────────────────────────────
const FeatureMarquee = ({ cards, trackWidth, cardW, gap }) => {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const startAnim = () => {
    controls.start({
      x: [x.get(), x.get() - trackWidth],
      transition: { duration: cards.length * 3, ease: 'linear', repeat: Infinity },
    });
  };

  useEffect(() => {
    if (!hovered) startAnim(); else controls.stop();
    return () => controls.stop();
  }, [hovered, trackWidth]);

  // Seamless loop reset
  useEffect(() => {
    const unsub = x.on('change', (latest) => {
      if (latest <= -trackWidth * 2) x.set(latest + trackWidth);
      else if (latest >= 0) x.set(latest - trackWidth);
    });
    return () => unsub();
  }, [trackWidth]);

  return (
    <div
      className="w-full overflow-hidden py-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={controls}
        className="flex"
        style={{ gap: `${gap}px`, width: 'max-content', x }}
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 rounded-[1.75rem] overflow-hidden bg-white border border-black/10 group cursor-pointer"
            style={{ width: `${cardW}px`, height: '480px' }}
          >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ height: '55%' }}>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">
                {card.tag}
              </div>
            </div>
            {/* Content */}
            <div className="p-6 flex flex-col" style={{ height: '45%' }}>
              <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">{card.title}</h3>
              <p className="text-[12px] text-perk-black/60 font-medium leading-relaxed line-clamp-3 mb-auto">{card.desc}</p>
              <button className="mt-3 flex items-center gap-1.5 font-bold text-xs border border-perk-black/10 px-4 py-1.5 rounded-full w-fit hover:bg-perk-black hover:text-white transition-all">
                Learn more <ChevronRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
// ─────────────────────────────────────────────────────────────────────────────

const FeatureSection = ({ persona = 'Recruitment', id = 'recruitment', showIntro = false }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Map persona prop to productFeatures tag
  const tagMap = { Recruitment: 'Recruiters', Institute: 'Institutes', Candidates: 'Candidates' };
  const tag = tagMap[persona] || 'Recruiters';

  const headlines = {
    Recruitment: { headline: 'Automate your hiring funnel with AI', subtext: 'From screening to final vetting, KareerGrowth handles the heavy lifting so you can focus on the best talent.' },
    Institute:   { headline: 'Scale your campus placements with AI',       subtext: 'Unified tracking and industry-grade proctoring for every student in your institution.' },
    Candidates:  { headline: 'Accelerate your career with AI',             subtext: 'Smart matching, verified profiles, and skill-building tools — all in one place.' },
  };

  const { headline, subtext } = headlines[persona] || headlines.Recruitment;
  const cards = productFeatures.filter(f => f.tag === tag);

  // Doubled cards for seamless circular loop
  const loopCards = [...cards, ...cards];

  const scroll = (direction) => {
    if (!scrollRef.current || cards.length === 0) return;
    const cardWidth = window.innerWidth < 768 ? 280 : 380;
    const gap = 16;
    
    if (direction === 'next') {
      const nextIndex = activeIndex + 1;
      
      // Animate forward
      scrollRef.current.scrollTo({ left: nextIndex * (cardWidth + gap), behavior: 'smooth' });
      setActiveIndex(nextIndex % cards.length);
      
      // If we just scrolled to the start of the second set, jump back silently after animation
      if (nextIndex >= cards.length) {
        setTimeout(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
          }
        }, 600); // 600ms to match smooth scroll duration
      }
    } else {
      let prevIndex = activeIndex - 1;
      
      if (prevIndex < 0) {
        // Jump to the end of the first set (silently) then animate back to N-1
        scrollRef.current.scrollTo({ left: cards.length * (cardWidth + gap), behavior: 'auto' });
        prevIndex = cards.length - 1;
      }
      
      setTimeout(() => {
        scrollRef.current?.scrollTo({ left: prevIndex * (cardWidth + gap), behavior: 'smooth' });
      }, 20);
      setActiveIndex(prevIndex);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = window.innerWidth < 768 ? 280 : 380;
      const index = Math.round(scrollLeft / (cardWidth + 16));
      if (index !== activeIndex) {
        setActiveIndex(index % cards.length);
      }
    }
  };

  return (
    <section id={id} className={`pt-8 bg-cream overflow-hidden ${showIntro ? 'pt-0' : ''}`}>
      <div className="max-w-[1440px] mx-auto">
        {showIntro && (
          <div className="flex flex-col items-center text-center mb-6 px-6">
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
            className="title-huge text-perk-black leading-tight mb-6"
          >
            {headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto"
          >
            {subtext}
          </motion.p>
        </div>
      </div>

      {/* Cards Slider */}
      <div className="w-full relative py-4 mb-2">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-4 scrollbar-hide snap-x snap-mandatory px-6 md:px-[calc((100vw-1200px)/2)] lg:px-[calc((100vw-1440px)/2)] pb-4"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {loopCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (idx % cards.length) * 0.08 }}
              className="flex-shrink-0 w-[280px] md:w-[380px] h-[400px] rounded-[1.75rem] overflow-hidden snap-center relative bg-white border border-black/10 group"
            >
              <div className="relative h-[55%] overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2.5s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">{card.tag}</div>
              </div>
              <div className="p-5 flex flex-col h-[45%]">
                <h3 className="text-lg font-bold text-perk-black mb-1.5 tracking-tighter leading-tight">{card.title}</h3>
                <p className="text-[12px] text-perk-black/60 font-medium leading-relaxed mb-auto line-clamp-2">{card.desc}</p>
                <Link 
                  to={`/product?tab=${card.tag}`}
                  className="flex items-center gap-2 font-bold text-[11px] border border-perk-black/10 px-4 py-1.5 rounded-full w-fit hover:bg-perk-black hover:text-white transition-all group mt-2"
                >
                  Learn more <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls Bar */}
        <div className="max-w-[1440px] mx-auto px-6 mt-10 pb-12 relative flex items-center">
          {/* Centered Dots */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
            {cards.map((_, i) => (
              <motion.div
                key={i}
                onClick={() => {
                  const cardWidth = window.innerWidth < 768 ? 280 : 380;
                  scrollRef.current.scrollTo({ left: i * (cardWidth + 16), behavior: 'smooth' });
                  setActiveIndex(i);
                }}
                animate={{
                  width: i === activeIndex ? 36 : 8,
                  backgroundColor: i === activeIndex ? '#1a1a1a' : '#d1d1d1',
                }}
                className="h-2 rounded-full cursor-pointer"
              />
            ))}
          </div>

          {/* Right-aligned Arrows + Show all */}
          <div className="ml-auto flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button onClick={() => scroll('prev')} className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm">
                <ChevronRight size={18} className="rotate-180" />
              </button>
              <button onClick={() => scroll('next')} className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm">
                <ChevronRight size={18} />
              </button>
            </div>
            <Link 
              to={`/product?tab=${tag}`} 
              className="hidden sm:flex items-center gap-2 font-bold text-[13px] border border-black/10 px-8 py-2.5 rounded-full hover:bg-black hover:text-white transition-all shadow-sm group"
            >
              Show all features <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
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
