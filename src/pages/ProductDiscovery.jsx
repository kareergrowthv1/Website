import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import TrustedBanner from '../components/home/TrustedBanner';
import { productFeatures } from '../data/productFeatures';

const ProductDiscovery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Recruiters', 'Institutes', 'Candidates'];

  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-cream min-h-screen">
      <div className="max-w-[1440px] mx-auto text-center">

        {/* Hero — Top Statement */}
        <div className="mb-16 max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-[90px] font-bold text-perk-black mb-8 tracking-tight leading-[0.9] text-center"
          >
            Get down to business<br />with the power of<br />
            <span className="text-perk-black/30">one platform</span>
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
            <button className="px-8 py-3.5 bg-brand-lime text-perk-black rounded-full text-[15px] font-bold flex items-center gap-2 hover:brightness-95 transition-all shadow-md">
              Get started <ChevronRight size={18} />
            </button>
            <button className="px-8 py-3.5 bg-transparent border border-perk-black/20 text-perk-black rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-black/5 transition-colors">
              Book a demo <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Trusted Banner */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 mb-20">
          <TrustedBanner />
        </div>

        {/* Connected Platform Statement + Video */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-perk-black mb-6 tracking-tight leading-[1.0]"
          >
            One connected platform for<br />hiring, placements, and careers
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
            className="relative w-full aspect-video bg-perk-black rounded-[28px] overflow-hidden shadow-2xl border border-black/10 group cursor-pointer"
          >
            {/* Poster / background */}
            <img
              src="/assets/all_in_one_1777048329140.png"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-700"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-brand-lime group-hover:border-brand-lime transition-all duration-300 shadow-lg">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="translate-x-0.5 group-hover:fill-perk-black transition-colors duration-300">
                  <path d="M8 5.14v14l11-7-11-7z"/>
                </svg>
              </div>
              <p className="text-white/70 text-[13px] font-semibold tracking-wide">Watch platform overview · 2 min</p>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="text-left">
                <p className="text-white font-bold text-lg tracking-tight">KareerGrowth Platform</p>
                <p className="text-white/50 text-[13px] font-medium">Recruiters · Institutes · Candidates</p>
              </div>
              <div className="px-4 py-1.5 bg-brand-lime rounded-full text-[12px] font-bold text-perk-black">
                Watch now
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full border border-perk-black/5 shadow-md flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
            {filters.map((filter, i) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={i}
                  onClick={() => setActiveFilter(filter)}
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
          STATIC BENTO GRID — "All" view only
          ========================================= */}
      {activeFilter === 'All' && (
        <div className="space-y-4">

          {/* ROW 1: Hero 1+4 Layout */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

              {/* Large Left Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:col-span-5 bg-brand-lime rounded-[25px] p-5 flex flex-col items-start text-left relative overflow-hidden group min-h-[450px] border border-black/5"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] h-[55%] flex items-center justify-center p-2 z-10 pointer-events-none">
                  <img src="/assets/all_in_one_1777048329140.png" className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="z-20 mt-auto w-full">
                  <div className="inline-block px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm mb-3">Recruiters</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-perk-black mb-4 tracking-tighter leading-[0.9]">Automated Round Coordination</h3>
                  <p className="text-[17px] text-perk-black/80 font-medium max-w-xl mb-6 leading-normal line-clamp-6">No more manual scheduling. KareerGrowth automatically moves candidates through four rounds of vetting based on their competency scores.</p>
                  <button className="px-8 py-3 bg-brand-lime border border-perk-black rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-white/20 transition-colors shadow-sm">
                    Learn more <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>

              {/* Right 2x2 Cluster */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/hiring_visibility_1777048292814.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Recruiters</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Deep Competency Analytics</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Get a clear picture of every candidate. Our engine extracts deep insights into technical skills, communication, and problem-solving abilities.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/job_matching_1777048308359.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Recruiters</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Real-time Candidate Tracking</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Monitor your entire hiring pipeline in one place. See who is excelling and who the top-tier fits are for your specific roles.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/recruitment_support_1777048274174.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Candidates</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Verified competency profiles</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Showcase pre-assessed validated profiles. Prove your proficiency to bypass redundant screening stages instantly.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/proctoring_security_1777048429737.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Recruiters</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Industry Readiness Scoring</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Get detailed reports on which students are ready for which industries, enabling more strategic placement coordination.</p>
                </motion.div>
              </div>

            </div>
          </div>

          {/* ROW 2: 4-Card Grid */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                  <img src="/assets/campus_placements_1777048344600.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Institutes</div>
                </div>
                <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">Centralized Placement Dashboard</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Gain bird-eye visibility into your entire placement season. Track company visits, student applications, and offer ratios in real-time.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                  <img src="/assets/bulk_assessments_1777048381845.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Institutes</div>
                </div>
                <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Massive Batch Vetting</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Assess thousands of students simultaneously. Our cloud-scale engine handles heavy loads with 99.9% reliability.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                  <img src="/assets/global_talent_1777048364077.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Institutes</div>
                </div>
                <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Proctoring for Institutions</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Ensure university-level integrity with our advanced proctoring suite, designed for large-scale campus environments.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                  <img src="/assets/verified_profiles_1777048396602.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Institutes</div>
                </div>
                <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Industry Readiness Scoring</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Get detailed reports on which students are ready for which industries, allowing for more strategic placement coordination.</p>
              </motion.div>

            </div>
          </div>

          {/* ROW 3: 3-Card Layout */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-6 aspect-square w-full relative">
                  <img src="/assets/skill_workshops_1777048446140.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Candidates</div>
                </div>
                <h3 className="text-2xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Skill workshops</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Bridge the gap between academia and industry. Access curated learning paths and get industry-ready fast so you stand out to top employers.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-6 aspect-video w-full flex items-center justify-center relative">
                  <img src="/assets/dynamic_portfolio_1777048524789.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Candidates</div>
                </div>
                <h3 className="text-2xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Dynamic portfolio</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6">Go beyond a static resume. Your KareerGrowth portfolio is a living, breathing showcase of your verified skills, completed assessments, project outcomes, and real competency scores — automatically updated as you grow. Recruiters get an instant, trusted snapshot of who you are, not just what you've written. Stand out with proof, not claims.</p>
                <button className="mt-4 px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f0f0e8] rounded-[25px] p-8 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-8 aspect-video w-full relative">
                  <img src="/assets/job_matching_1777048308359.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Candidates</div>
                </div>
                <h3 className="text-6xl font-bold text-perk-black mb-auto tracking-tighter leading-[0.9]">Smart job matching</h3>
                <div className="mt-4 pt-10">
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Find roles tailored precisely to your skills. Our advanced algorithms connect you with career opportunities that organically suit your true potential.</p>
                  <button className="px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
                </div>
              </motion.div>

            </div>
          </div>

          {/* ROW 4: 5-Card Inverted Matrix */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

              {/* Left Column */}
              <div className="lg:col-span-3 flex flex-col gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-5 border border-black/5 text-left flex-1 group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/global_talent_1777048364077.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Candidates</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">Global talent availability</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4">KareerGrowth connects you to a curated, ever-expanding network of 500+ fast-growing tech companies, Fortune 500 enterprises, and high-momentum startups actively hiring across every industry domain. Our intelligent matching engine goes beyond keyword filters — it reads your verified competency scores, behavioral signals, and career trajectory to surface roles where you are genuinely likely to thrive. We surface the right opportunity at the right time, whether you're looking for your first role, a strategic lateral move, or a leadership leap. All in one place, with zero noise.</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      '500+ enterprise companies on the platform',
                      'Roles across 30+ industry verticals',
                      'Remote, hybrid & on-site opportunities',
                      'Real-time job match notifications',
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px] font-semibold text-perk-black/70">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3 5.5L6.5 2" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-2 self-start px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
                </motion.div>
              </div>

              {/* Middle Column */}
              <div className="lg:col-span-3 flex flex-col gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-5 border border-black/5 text-left flex-1 group">
                  <div className="rounded-[20px] overflow-hidden mb-6 aspect-video w-full relative">
                    <img src="/assets/ai_sourcing_1777048462145.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Candidates</div>
                  </div>
                  <h3 className="text-3xl font-bold text-perk-black mb-4 tracking-tighter leading-[1.0]">Quick timeline changes</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Requirements change instantly. Adapt dynamically with flexible workflows enabling you to modify assessments with just a few intuitive clicks.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/account_manager_1777048511287.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Institutes</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">Dedicated account manager</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Our talent specialists are hands-on to ensure your placement journey is entirely seamless and guided.</p>
                </motion.div>
              </div>

              {/* Right Hero Card */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-6 bg-[#f0f0e8] rounded-[25px] p-6 flex flex-col items-start border border-black/5 text-left group">
                <div className="rounded-[20px] overflow-hidden mb-10 aspect-video w-full relative">
                  <img src="/assets/expert_panels_1777048554264.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Recruiters</div>
                </div>
                <h3 className="text-5xl font-bold text-perk-black mb-6 tracking-tighter leading-[0.9]">Expert interview panels</h3>
                <p className="text-[15px] text-perk-black/60 font-medium leading-relaxed mb-8 line-clamp-6">Need help evaluating specialized tech stacks? Our global network of expert interviewers is available around the clock to conduct comprehensive technical interviews on your behalf.</p>
                <button className="mt-4 px-8 py-3 bg-transparent border border-perk-black/20 rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={18} /></button>
              </motion.div>

            </div>
          </div>

          {/* ROW 5: 3-Card High Fidelity */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-8 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-8 aspect-video w-full relative">
                  <img src="/assets/proctoring_security_1777048429737.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Recruiters</div>
                </div>
                <h3 className="text-5xl font-bold text-perk-black mb-4 tracking-tighter leading-[0.9]">Institutional-grade AI Proctoring</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Ensure 100% integrity in every assessment. Our AI monitors hundreds of signals to prevent cheating and ensure a fair playing field for all candidates.</p>
                <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-6 aspect-square w-full relative">
                  <img src="/assets/performance_tracking_1777048480315.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Candidates</div>
                </div>
                <h3 className="text-2xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Personalized profile highlights</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">No more generic resumes. Your technical, behavioral, and communication skills are actively verified and championed to stand out to top recruiters.</p>
                <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f0f0e8] rounded-[25px] p-8 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-8 aspect-video w-full flex items-center justify-center relative">
                  <img src="/assets/all_in_one_1777048329140.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm">Institutes</div>
                </div>
                <h3 className="text-5xl font-bold text-perk-black mb-4 tracking-tighter leading-[0.9]">Complete role based login access</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Manage granular permissions for Deans, faculty, placement officers, and student leads with enterprise-grade authentication built for institutional scale.</p>
                <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
              </motion.div>

            </div>
          </div>

          {/* ROW 6: Remaining productFeatures not already shown above */}
          <div className="max-w-[1440px] mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-12">
              {productFeatures
                .filter(f => ![
                  'Automated Round Coordination',
                  'Deep Competency Analytics',
                  'Real-time Candidate Tracking',
                  'Verified competency profiles',
                  'Industry Readiness Scoring',
                  'Centralized Placement Dashboard',
                  'Massive Batch Vetting',
                  'AI Proctoring for Institutions',
                  'Skill workshops',
                  'Dynamic portfolio',
                  'Smart job matching',
                  'Global talent availability',
                  'Quick timeline changes',
                  'Dedicated account manager',
                  'Expert interview panels',
                  'Institutional-grade AI Proctoring',
                  'Personalized profile highlights',
                  'Complete role based login access',
                ].includes(f.title))
                .map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group"
                  >
                    <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                      <img src={card.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl" />
                      <div className="absolute top-3 right-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">{card.tag}</div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent group-hover:bg-black/60 transition-colors duration-500 pointer-events-none z-0" />
                    </div>
                    <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight line-clamp-1">{card.title}</h3>
                    <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4 line-clamp-6">{card.desc}</p>
                    <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">
                      Learn more <ChevronRight size={16} />
                    </button>
                  </motion.div>
                ))}
            </div>
          </div>

        </div>
      )}

      {/* =========================================
          UNIFIED GRID — Persona filtered views
          ========================================= */}
      {activeFilter !== 'All' && (
        <div className="max-w-[1440px] mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productFeatures
              .filter(f => f.tag === activeFilter)
              .map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#f0f0e8] rounded-[25px] p-8 flex flex-col items-start border border-black/5 text-left h-full group"
                >
                  <div className="rounded-[20px] overflow-hidden mb-8 aspect-video w-full relative">
                    <img src={card.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">{card.tag}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent group-hover:bg-black/60 transition-colors duration-500 pointer-events-none" />
                  </div>
                  <h3 className="text-2xl font-bold text-perk-black mb-4 tracking-tighter leading-tight">{card.title}</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">{card.desc}</p>
                  <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">
                    Learn more <ChevronRight size={16} />
                  </button>
                </motion.div>
              ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDiscovery;
