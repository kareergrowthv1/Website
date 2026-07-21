import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import TrustedBanner from '../components/home/TrustedBanner';
import { useModalStore } from '../data/useModalStore';

const FEATURE_CARDS = [
  {
    title: 'AI Mock Interview',
    desc: 'Practice with 4 configurable rounds — Communication, Technical, Aptitude, and HR — with real-time AI feedback and detailed scoring after every session.',
    image: '/assets/canproducts/mock interview.png',
    href: '/features/mock-interview',
  },
  {
    title: 'KareerGrowth Hunt',
    desc: 'All-in-one job search connecting LinkedIn, Indeed, and Naukri — with an application tracker, cover letter builder, CAR tool, salary negotiator, and more.',
    image: '/assets/canproducts/KareerGwoth Hunt.png',
    href: '/features/kareergrowth-hunt',
  },
  {
    title: 'Tracker',
    desc: 'Manage every application, interview, follow-up, and offer from one command centre — Saved, Applied, Active, Preparation, Offered, and Closed.',
    image: '/assets/canproducts/tracker.png',
    href: '/features/tracker',
  },
  {
    title: 'Practice Hub',
    desc: 'Sharpen DSA, coding, and aptitude with structured practice sets, courses, and a knowledge base — all in a full in-browser IDE with no setup required.',
    image: '/assets/canproducts/practice hub.png',
    href: '/features/practice-hub',
  },
  {
    title: 'Career Platform',
    desc: 'Your end-to-end career launchpad — Roadmap, Jobs, Resume, Portfolio, Auto Apply, and My Profile all in one connected place.',
    image: '/assets/canproducts/career platform.png',
    href: '/features/career-platform',
    objectPosition: 'top',
  },
  {
    title: 'Resume Studio',
    desc: 'Build an ATS-optimised resume with AI suggestions, real-time scoring, and one-click tailoring for any job description you paste.',
    image: '/assets/canproducts/resume studio.png',
    href: '/features/resume-studio',
  },
  {
    title: 'Fake Offer Detection',
    desc: 'Verify any job offer instantly — KareerGrowth cross-checks company details, offer patterns, and known scam signals to keep you protected.',
    image: '/assets/canproducts/fake offer detections.png',
    href: '/features/fake-offer-detection',
  },
];

const ProductDiscovery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchParams] = useSearchParams();
  const { openDemoModal, openGetStartedModal } = useModalStore();

  const filters = ['All', 'Recruiters', 'Institutes', 'Candidates'];

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && filters.includes(tab)) {
      setActiveFilter(tab);
    }
  }, [searchParams]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto text-center">

        {/* Hero — Top Statement */}
        <div className="mb-16 max-w-none w-full flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="title-huge mt-0 font-medium tracking-[-0.04em] leading-[1.05] text-center text-perk-black mb-8"
          >
            Get down to business with our AI-Powered<br />
            <span className="text-perk-black/30">Career Acceleration Platform</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg md:text-[20px] text-perk-black/55 max-w-3xl mb-10 font-medium leading-relaxed text-center"
          >
            Set up candidates, recruiters, and institutions just once — and KareerGrowth automatically connects your assessments, placements, and career journeys. When everything lives in one intelligent platform, it just works. No duplicate data. No blind spots. No manual chasing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <button 
              onClick={openGetStartedModal}
              className="px-8 py-3.5 bg-brand-lime text-perk-black rounded-full text-[15px] font-bold flex items-center gap-2 hover:brightness-95 transition-all shadow-md cursor-pointer"
            >
              Get started <ChevronRight size={18} />
            </button>
            <button 
              onClick={openDemoModal}
              className="px-8 py-3.5 bg-transparent border border-perk-black/20 text-perk-black rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-black/5 transition-colors cursor-pointer"
            >
              Book a demo <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Trusted Banner */}
        <div className="w-full mb-20">
          <TrustedBanner />
        </div>

        {/* Connected Platform Statement + Video */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium text-perk-black mb-6 tracking-[-0.04em] leading-[1.05]"
          >
            One connected AI platform for<br />hiring, placements, and careers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[17px] text-perk-black/55 font-medium leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Real-time visibility. Tighter controls. Zero tool-juggling. KareerGrowth gives you the flexibility to decide — start with the modules that fit your needs best, or unlock the connected power of the full recruiting, assessment, and career platform.
          </motion.p>

          {/* Video Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-video bg-perk-black rounded-[28px] overflow-hidden shadow-2xl border border-black/10 group pointer-events-none"
          >
            <iframe
              key={activeFilter}
              src={`https://www.youtube.com/embed/${activeFilter === 'Recruiters' || activeFilter === 'Institutes' ? 'Y0BXaQ85PLc' : 'UWMjSEzrME0'}?autoplay=1&mute=1&loop=1&playlist=${activeFilter === 'Recruiters' || activeFilter === 'Institutes' ? 'Y0BXaQ85PLc' : 'UWMjSEzrME0'}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&playsinline=1`}
              title="KareerGrowth Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full h-full object-cover pointer-events-none"
            ></iframe>
          </motion.div>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full border border-perk-black/5 shadow-md flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
            {filters.map((filter, i) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={i}
                  onClick={() => handleFilterChange(filter)}
                  className={`px-8 py-2.5 rounded-full text-[15px] font-bold whitespace-nowrap transition-all ${isActive ? 'bg-brand-lime text-perk-black shadow-sm scale-105' : 'text-perk-black/50 hover:text-perk-black hover:bg-black/5'}`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* =========================================
          BENTO GRID — "All" view
          First 7 slots = feature cards, rest = blank
          ========================================= */}
      {activeFilter === 'All' && (
        <div className="space-y-4">

          {/* ROW 1: Large card (card 1) + 2×2 cluster (cards 2–5) */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

              {/* Card 1 — large hero slot */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:col-span-5 bg-[#BEF264] rounded-[25px] p-5 flex flex-col items-start text-left group min-h-[450px] border border-black/5"
              >
                <div className="rounded-[20px] overflow-hidden mb-5 w-full relative">
                  <img src={FEATURE_CARDS[0].image} alt={FEATURE_CARDS[0].title} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="w-full">
                  <h3 className="text-4xl md:text-5xl font-bold text-perk-black mb-3 tracking-tighter leading-[0.9]">{FEATURE_CARDS[0].title}</h3>
                  <p className="text-[15px] text-perk-black/60 font-medium max-w-xl mb-5 leading-normal">
                    Practice with 4 configurable rounds. Communication, Technical, Aptitude and HR. Get real-time AI feedback and detailed scoring after every session.
                  </p>

                  {/* Interview round pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Communication', 'Technical', 'Aptitude', 'HR / Management'].map(round => (
                      <span key={round} className="px-4 py-2 bg-white/60 rounded-full text-[13px] font-bold text-perk-black">{round}</span>
                    ))}
                  </div>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { label: 'Instant scoring', sub: 'Get scored after every answer' },
                      { label: 'Detailed report', sub: 'Full breakdown post-session' },
                      { label: 'Company-specific', sub: 'Questions tailored to your target role' },
                      { label: 'Soft skill analysis', sub: 'Tone, clarity & confidence assessed' },
                    ].map(f => (
                      <div key={f.label} className="bg-white/40 rounded-[14px] px-4 py-3">
                        <p className="text-[13px] font-black text-perk-black leading-snug">{f.label}</p>
                        <p className="text-[11px] font-medium text-perk-black/55 leading-snug mt-0.5">{f.sub}</p>
                      </div>
                    ))}
                  </div>

                  <Link to={FEATURE_CARDS[0].href} className="px-8 py-3 bg-white text-perk-black rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-white/90 transition-all shadow-sm w-fit">
                    Learn more <ChevronRight size={18} />
                  </Link>
                </div>
              </motion.div>

              {/* Cards 2–5 — 2×2 cluster */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                {FEATURE_CARDS.slice(1, 5).map((card, i) => (
                  <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                    <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={card.objectPosition ? { objectPosition: card.objectPosition } : {}} />
                    </div>
                    <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">{card.title}</h3>
                    <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4 flex-grow line-clamp-3">{card.desc}</p>
                    <Link to={card.href} className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">
                      Learn more <ChevronRight size={16} />
                    </Link>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

          {/* ROW 2: Cards 6–7 + 2 blank boxes */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEATURE_CARDS.slice(5, 7).map((card, i) => (
                <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">{card.title}</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4 flex-grow line-clamp-4">{card.desc}</p>
                  <Link to={card.href} className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">
                    Learn more <ChevronRight size={16} />
                  </Link>
                </motion.div>
              ))}
              <div className="bg-[#f0f0e8] rounded-[25px] min-h-[300px] border border-black/5" />
              <div className="bg-[#f0f0e8] rounded-[25px] min-h-[300px] border border-black/5" />
            </div>
          </div>

          {/* ROW 3: 3 blank boxes */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#f0f0e8] rounded-[25px] min-h-[400px] border border-black/5" />
              <div className="bg-[#f0f0e8] rounded-[25px] min-h-[400px] border border-black/5" />
              <div className="bg-[#f0f0e8] rounded-[25px] min-h-[400px] border border-black/5" />
            </div>
          </div>

          {/* ROW 4: Inverted matrix — blank */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-3 flex flex-col gap-4">
                <div className="bg-[#f0f0e8] rounded-[25px] flex-1 min-h-[380px] border border-black/5" />
              </div>
              <div className="lg:col-span-3 flex flex-col gap-4">
                <div className="bg-[#f0f0e8] rounded-[25px] flex-1 min-h-[220px] border border-black/5" />
                <div className="bg-[#f0f0e8] rounded-[25px] flex-1 min-h-[150px] border border-black/5" />
              </div>
              <div className="lg:col-span-6 bg-[#f0f0e8] rounded-[25px] min-h-[380px] border border-black/5" />
            </div>
          </div>

          {/* ROW 5: 3 blank boxes */}
          <div className="max-w-[1440px] mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12">
              <div className="bg-[#f0f0e8] rounded-[25px] min-h-[420px] border border-black/5" />
              <div className="bg-[#f0f0e8] rounded-[25px] min-h-[420px] border border-black/5" />
              <div className="bg-[#f0f0e8] rounded-[25px] min-h-[420px] border border-black/5" />
            </div>
          </div>

        </div>
      )}

      {/* =========================================
          BLANK PLACEHOLDER — Persona filtered views
          ========================================= */}
      {activeFilter !== 'All' && (
        <div className="max-w-[1440px] mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-[#f0f0e8] rounded-[25px] aspect-video border border-black/5" />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDiscovery;
