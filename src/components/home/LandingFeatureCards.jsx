import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GAP = 20;

const cards = [
  {
    title: 'Mock Interview',
    desc: '4-round AI interview sim covering Communication, Technical, HR, and Aptitude with instant feedback.',
    img: '/assets/canproducts/mock interview.png',
    link: '/features/mock-interview',
  },
  {
    title: 'Resume Studio',
    desc: 'Build ATS-ready resumes with real-time AI keyword suggestions and one-click PDF export.',
    img: '/assets/canproducts/resume studio.png',
    link: '/features/resume-studio',
  },
  {
    title: 'KareerGrowth Hunt',
    desc: 'Search LinkedIn, Indeed, and Naukri jobs from one unified smart job-hunt dashboard.',
    img: '/assets/canproducts/KareerGwoth Hunt.png',
    link: '/features/kareergrowth-hunt',
  },
  {
    title: 'Practice Hub',
    desc: 'Sharpen DSA, coding challenges, and aptitude skills with curated role-based practice sets.',
    img: '/assets/canproducts/practice hub.png',
    link: '/features/practice-hub',
  },
  {
    title: 'Tracker',
    desc: 'Track every job application, interview stage, offer, and follow-up from one central hub.',
    img: '/assets/canproducts/tracker.png',
    link: '/features/tracker',
  },
  {
    title: 'Career Platform',
    desc: 'AI-powered career roadmap, portfolio builder, and growth planning all in one place.',
    img: '/assets/canproducts/career platform.png',
    link: '/features/career-platform',
  },
  {
    title: 'Fake Offer Detection',
    desc: 'Instantly verify job offers and get alerts on fraudulent postings before you apply.',
    img: '/assets/canproducts/fake offer detections.png',
    link: '/features/fake-offer-detection',
  },
];

const N = cards.length; // 7
// 5 copies gives plenty of buffer for rapid clicking in both directions
const COPIES = 5;
const allItems = Array.from({ length: COPIES * N }, (_, i) => cards[i % N]);
const START = Math.floor(COPIES / 2) * N; // 14 — middle copy

const LandingFeatureCards = () => {
  const containerRef = useRef(null);
  const cardWRef = useRef(0);
  const posRef = useRef(START);
  const controls = useAnimation();

  const [dotIdx, setDotIdx] = useState(0);
  const [visCount, setVisCount] = useState(4);

  const getVisible = () => {
    const w = window.innerWidth;
    if (w >= 1024) return 4;
    if (w >= 640)  return 2;
    return 1;
  };

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const vis = getVisible();
    setVisCount(vis);
    const style = window.getComputedStyle(containerRef.current);
    const pl = parseFloat(style.paddingLeft) || 0;
    const pr = parseFloat(style.paddingRight) || 0;
    const availableWidth = containerRef.current.clientWidth - pl - pr;
    const cw = (availableWidth - (vis - 1) * GAP) / vis;
    cardWRef.current = cw;
    controls.set({ x: -(posRef.current * (cw + GAP)) });
  }, [controls]);

  useLayoutEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  // Fires every animation completion (including interrupted ones).
  // Normalizes pos back to the middle copy so we never run out of buffer.
  const onComplete = useCallback(() => {
    const pos = posRef.current;
    const normalised = N + ((pos % N) + N) % N;
    if (normalised !== pos) {
      posRef.current = normalised;
      controls.set({ x: -(normalised * (cardWRef.current + GAP)) });
    }
  }, [controls]);

  const slide = useCallback((newPos) => {
    posRef.current = newPos;
    controls.start({
      x: -(newPos * (cardWRef.current + GAP)),
      transition: { type: 'spring', stiffness: 320, damping: 34, mass: 0.85 },
    });
  }, [controls]);

  const next = () => {
    setDotIdx(d => (d + 1) % N);
    slide(posRef.current + 1);
  };

  const prev = () => {
    setDotIdx(d => (d - 1 + N) % N);
    slide(posRef.current - 1);
  };

  const goToDot = (idx) => {
    const delta = idx - (posRef.current % N + N) % N;
    const newPos = posRef.current + (delta > N / 2 ? delta - N : delta < -N / 2 ? delta + N : delta);
    setDotIdx(idx);
    slide(newPos);
  };

  return (
    <section className="bg-cream py-16 overflow-hidden">

      {/* Centered title */}
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="title-huge text-perk-black leading-tight text-center mb-10">
          Everything you need to hire smarter.
        </h2>
      </div>

      {/* Full-width carousel */}
      <div ref={containerRef} className="w-full overflow-hidden px-6">
        <motion.div
          animate={controls}
          onAnimationComplete={onComplete}
          className="flex"
          style={{ gap: GAP }}
        >
          {allItems.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white border border-black/8 rounded-[22px] overflow-hidden flex flex-col"
              style={{ width: cardWRef.current || `calc((100% - ${(visCount - 1) * GAP}px) / ${visCount})` }}
            >
              {/* Image */}
              <div className="w-full overflow-hidden bg-cream flex-shrink-0" style={{ height: 220 }}>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-5">
                <h3 className="text-[19px] font-bold text-perk-black leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="text-[13px] text-black/55 leading-relaxed font-medium flex-grow line-clamp-2">
                  {card.desc}
                </p>
                <Link
                  to={card.link}
                  className="mt-4 flex items-center gap-1.5 text-[12px] font-bold text-perk-black border border-black/15 px-4 py-2 rounded-full w-fit hover:bg-perk-black hover:text-white transition-all duration-200 group/btn"
                >
                  Read more
                  <ChevronRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls below cards */}
      <div className="max-w-[1440px] mx-auto px-6 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Dots — centered on mobile, left on desktop */}
        <div className="flex items-center justify-center sm:justify-start gap-1.5">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => goToDot(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === dotIdx ? 'w-6 bg-perk-black' : 'w-2 bg-black/20 hover:bg-black/40'
              }`}
              aria-label={`Go to ${cards[i].title}`}
            />
          ))}
        </div>

        {/* Prev · Next · Show all features — right on desktop, centered on mobile */}
        <div className="flex items-center justify-center sm:justify-end gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-perk-black hover:bg-perk-black hover:text-white transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-perk-black hover:bg-perk-black hover:text-white transition-all duration-200"
          >
            <ChevronRight size={18} />
          </button>
          <Link
            to="/product"
            className="flex items-center gap-2 font-bold text-[14px] text-perk-black border border-black/15 px-5 py-2.5 rounded-full hover:bg-perk-black hover:text-white transition-all duration-200 whitespace-nowrap group/sf"
          >
            Show all features
            <ChevronRight size={14} className="group-hover/sf:translate-x-0.5 transition-transform" />
          </Link>
        </div>

      </div>

    </section>
  );
};

export default LandingFeatureCards;
