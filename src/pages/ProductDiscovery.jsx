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
            className="title-huge mt-0 font-medium tracking-[-0.04em] leading-[1.05] text-center text-perk-black mb-8"
          >
            Get down to business<br />with our AI-Powered<br />
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
                  <path d="M8 5.14v14l11-7-11-7z" />
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
                  <img src="/assets/candidate_screening.png" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="z-20 mt-auto w-full">
                  <div className="inline-block px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm mb-3">Recruiters</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-perk-black mb-4 tracking-tighter leading-[0.9]">AI Candidate Screening</h3>
                  <p className="text-[17px] text-perk-black/80 font-medium max-w-xl mb-6 leading-normal line-clamp-6">Automatically shortlist candidates based on job requirements and skill matching.</p>
                  <button className="px-8 py-3 bg-brand-lime border border-perk-black rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-white/20 transition-colors shadow-sm">
                    Learn more <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>

              {/* Right 2x2 Cluster */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/resume_ranking.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Recruiters</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Smart Resume Ranking</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Rank applicants using AI-powered scoring and matching systems.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/interview_management.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Recruiters</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Interview Management System</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Manage interview scheduling, tracking, and candidate evaluations.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/ai_resume_builder.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Resume Builder</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Create ATS-friendly professional resumes with intelligent suggestions and role-based optimization.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/assessment_platform.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Recruiters</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Candidate Assessment Platform</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Create technical, aptitude, and role-based assessments for hiring.</p>
                </motion.div>
              </div>

            </div>
          </div>

          {/* ROW 2: 4-Card Grid */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                  <img src="/assets/placement_dashboard.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Institutes</div>
                </div>
                <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">AI Student Placement Management</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Manage student profiles, placements, applications, and outcomes centrally.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                  <img src="/assets/campus_recruitment.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Institutes</div>
                </div>
                <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Campus Recruitment Platform</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Connect students directly with recruiters and hiring partners.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                  <img src="/assets/assessment_platform.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Institutes</div>
                </div>
                <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Student Skill Assessments</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Evaluate technical, aptitude, and communication skills effectively.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                  <img src="/assets/recruitment_analytics.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Institutes</div>
                </div>
                <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Placement Analytics Dashboard</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Track placement performance, hiring trends, and student progress.</p>
              </motion.div>

            </div>
          </div>

          {/* ROW 3: 3-Card Layout */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-6 aspect-square w-full relative">
                  <img src="/assets/skill_gap_analyzer.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                </div>
                <h3 className="text-2xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Skill Gap Analyzer</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Discover missing skills and get recommendations to improve job readiness.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-6 aspect-video w-full relative">
                  <img src="/assets/candidate_database.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                </div>
                <h3 className="text-2xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Profile Optimization Assistant</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6">Improve visibility with smart suggestions to build stronger candidate profiles. Our platform evaluates your details and guides you to showcase your best verified strengths to employers.</p>
                <button className="mt-4 px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f0f0e8] rounded-[25px] p-8 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-8 aspect-video w-full relative">
                  <img src="/assets/candidate_screening.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                </div>
                <h3 className="text-5xl font-bold text-perk-black mb-auto tracking-tighter leading-[0.9]">AI Personalized Job Recommendations</h3>
                <div className="mt-4 pt-10">
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Get curated job suggestions based on skills, resume, and preferences.</p>
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
                    <img src="/assets/document_export.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">AI Resume & Document Export Center</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4">Download resumes, cover letters, and reports in multiple formats instantly. Keep all your application documents structured, optimized, and ready to share.</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Download resumes & cover letters instantly',
                      'Export industry-standard ATS-friendly PDFs',
                      'Generate comprehensive skill gap reports',
                      'Share verified competency profiles via secure links',
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px] font-semibold text-perk-black/70">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-brand-lime flex items-center justify-center flex-shrink-0">
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3 5.5L6.5 2" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
                    <img src="/assets/automated_communication.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                  </div>
                  <h3 className="text-3xl font-bold text-perk-black mb-4 tracking-tighter leading-[1.0]">AI Smart Follow-Up Assistant</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Manage recruiter follow-ups using reminders and prebuilt communication templates.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/campus_recruitment.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Institutes</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">AI Recruiter Collaboration Portal</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Allow institutes and companies to collaborate for hiring and events.</p>
                </motion.div>
              </div>

              {/* Right Hero Card */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-6 bg-[#f0f0e8] rounded-[25px] p-6 flex flex-col items-start border border-black/5 text-left group">
                <div className="rounded-[20px] overflow-hidden mb-10 aspect-video w-full relative">
                  <img src="/assets/workflow_automation.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Recruiters</div>
                </div>
                <h3 className="text-5xl font-bold text-perk-black mb-6 tracking-tighter leading-[0.9]">AI Hiring Workflow Automation</h3>
                <p className="text-[15px] text-perk-black/60 font-medium leading-relaxed mb-8 line-clamp-6">Reduce manual effort with automated recruitment workflows and approvals.</p>
                <button className="mt-4 px-8 py-3 bg-transparent border border-perk-black/20 rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={18} /></button>
              </motion.div>

            </div>
          </div>

          {/* ROW 5: 3-Card High Fidelity */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-8 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-8 aspect-video w-full relative">
                  <img src="/assets/video_interview.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Recruiters</div>
                </div>
                <h3 className="text-5xl font-bold text-perk-black mb-4 tracking-tighter leading-[0.9]">AI Video Interview Platform</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Conduct AI-powered video interviews with automated insights and analysis.</p>
                <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-6 aspect-square w-full relative">
                  <img src="/assets/smart_cover_letter.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                </div>
                <h3 className="text-2xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Smart Cover Letter Generator</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Generate personalized cover letters instantly for every job application.</p>
                <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f0f0e8] rounded-[25px] p-8 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-8 aspect-video w-full relative">
                  <img src="/assets/recruitment_analytics.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Institutes</div>
                </div>
                <h3 className="text-5xl font-bold text-perk-black mb-4 tracking-tighter leading-[0.9]">AI Placement Success Reports</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Generate reports for placements, assessments, and recruitment activities.</p>
                <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
              </motion.div>

            </div>
          </div>

          {/* ROW 6: Remaining productFeatures not already shown above */}
          <div className="max-w-[1440px] mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-12">
              {productFeatures
                .filter(f => ![
                  'AI Candidate Screening',
                  'AI Smart Resume Ranking',
                  'AI Interview Management System',
                  'AI Resume Builder',
                  'AI Candidate Assessment Platform',
                  'AI Student Placement Management',
                  'AI Campus Recruitment Platform',
                  'AI Student Skill Assessments',
                  'AI Placement Analytics Dashboard',
                  'AI Skill Gap Analyzer',
                  'AI Profile Optimization Assistant',
                  'AI Personalized Job Recommendations',
                  'AI Resume & Document Export Center',
                  'AI Smart Follow-Up Assistant',
                  'AI Recruiter Collaboration Portal',
                  'AI Hiring Workflow Automation',
                  'AI Video Interview Platform',
                  'AI Smart Cover Letter Generator',
                  'AI Placement Success Reports'
                ].includes(f.title))
                .map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group"
                  >
                    <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative z-10">
                      <img src={card.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl z-20" />
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
                  <div className="rounded-[20px] overflow-hidden mb-8 aspect-video w-full relative z-10">
                    <img src={card.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl z-20" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">{card.tag}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent group-hover:bg-black/60 transition-colors duration-500 pointer-events-none z-0" />
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
