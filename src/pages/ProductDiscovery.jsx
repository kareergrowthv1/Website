import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import TrustedBanner from '../components/home/TrustedBanner';
import { productFeatures } from '../data/productFeatures';
import { useModalStore } from '../data/useModalStore';

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
                  <img src="/assets/recruiter_candidate_screening.png" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="z-20 mt-auto w-full">
                  <div className="inline-block px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm mb-3">Recruiters</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-perk-black mb-4 tracking-tighter leading-[0.9]">AI Candidate Screening</h3>
                  <p className="text-[17px] text-perk-black/80 font-medium max-w-xl mb-6 leading-normal line-clamp-6">Streamline your hiring funnel with intelligent AI screening that instantly parses, analyzes, and shortlists top applicants based on multi-dimensional skill profiles and precise job criteria.</p>
                  <button className="px-8 py-3 bg-brand-lime border border-perk-black rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-white/20 transition-colors shadow-sm">
                    Learn more <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>

              {/* Right 2x2 Cluster */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/recruiter_resume_ranking.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Recruiters</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Smart Resume Match & Ranking</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Eliminate manual sorting with smart ranking algorithms that evaluate and score applicant resumes against your technical requirements, experience level, and cultural fit metrics.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/recruiter_interview_scheduler.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Recruiters</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Automated Interview Scheduler</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Coordinate seamless interview cycles with automated scheduling, real-time feedback collation, and integrated scorecards that keep hiring managers perfectly aligned.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/candidate_resume_builder.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Smart Resume Builder</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Craft a professional, ATS-optimized resume tailored to your target industry using real-time AI suggestions, keyword tailoring, and high-impact action verbs.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/recruiter_skills_assessment.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Recruiters</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Intelligent Skills Assessment</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Design and launch customized technical tests, behavioral assessments, and cognitive challenges to objectively evaluate and verify candidate competencies before interviewing.</p>
                </motion.div>
              </div>

            </div>
          </div>

          {/* ROW 2: 4-Card Grid */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                  <img src="/assets/institute_placement_center.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Institutes</div>
                </div>
                <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">Smart Placement Command Center</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Empower placement cell officers with a unified workspace to track student registrations, corporate invitations, application progress, and final placement outcomes in real time.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                  <img src="/assets/institute_campus_recruitment.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Institutes</div>
                </div>
                <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Campus Recruitment Platform</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Bridge the gap between education and employment by giving top recruiters direct, secure access to your verified student profiles, portfolios, and graduation timelines.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                  <img src="/assets/institute_skill_benchmarking.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Institutes</div>
                </div>
                <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Employability Skill Benchmarking</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Benchmark your student cohort's employability with comprehensive assessments covering domain knowledge, coding proficiency, aptitude, and soft skills.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                  <img src="/assets/institute_placement_analytics.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Institutes</div>
                </div>
                <h3 className="text-xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Predictive Placement Analytics</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Visualize historical and real-time placement statistics, company-wise selections, package distributions, and branch performance to refine your institutional strategy.</p>
              </motion.div>

            </div>
          </div>

          {/* ROW 3: 3-Card Layout */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-6 aspect-square w-full relative">
                  <img src="/assets/candidate_skill_analyzer.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                </div>
                <h3 className="text-2xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">AI Skill Gap Analyzer</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Compare your current profile against real-time job market requirements to instantly map out the missing skills, courses, and certifications you need to succeed.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-6 aspect-video w-full relative">
                  <img src="/assets/candidate_profile_booster.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                </div>
                <h3 className="text-2xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Profile Visibility Booster</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6">Transform your professional profile into a talent magnet with smart, actionable suggestions that maximize your visibility to active recruiters and headhunters. Our platform evaluates your details and guides you to showcase your best verified strengths to employers.</p>
                <button className="mt-4 px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f0f0e8] rounded-[25px] p-8 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-8 aspect-video w-full relative">
                  <img src="/assets/candidate_job_recommendations.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                </div>
                <h3 className="text-5xl font-bold text-perk-black mb-auto tracking-tighter leading-[0.9]">AI Job Recommendations</h3>
                <div className="mt-4 pt-10">
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Receive daily, highly relevant job matches that perfectly align with your verified skills, experience level, career aspirations, and salary expectations.</p>
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
                    <img src="/assets/candidate_export_hub.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">Document Export Hub</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-4">Export your application documents and skill reports in clean, high-fidelity formats like PDF and DOCX, or share dynamic, secure web links with hiring managers. Keep all your application documents structured, optimized, and ready to share.</p>
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
                    <img src="/assets/candidate_followup_assistant.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                  </div>
                  <h3 className="text-3xl font-bold text-perk-black mb-4 tracking-tighter leading-[1.0]">Smart Follow-Up Assistant</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Never miss an opportunity by using smart schedule reminders, follow-up triggers, and professionally drafted email templates tailored for post-interview outreach.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                  <div className="rounded-[20px] overflow-hidden mb-4 aspect-video w-full relative">
                    <img src="/assets/institute_corporate_portal.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Institutes</div>
                  </div>
                  <h3 className="text-xl font-bold text-perk-black mb-2 tracking-tighter leading-tight">Corporate Placement Portal</h3>
                  <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed line-clamp-6">Facilitate seamless collaboration between placement coordinators and corporate partners for pre-placement talks, guest lectures, hackathons, and campus drives.</p>
                </motion.div>
              </div>

              {/* Right Hero Card */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-6 bg-[#f0f0e8] rounded-[25px] p-6 flex flex-col items-start border border-black/5 text-left group">
                <div className="rounded-[20px] overflow-hidden mb-10 aspect-video w-full relative">
                  <img src="/assets/recruiter_workflow_automation.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Recruiters</div>
                </div>
                <h3 className="text-5xl font-bold text-perk-black mb-6 tracking-tighter leading-[0.9]">Hiring Workflow Automation</h3>
                <p className="text-[15px] text-perk-black/60 font-medium leading-relaxed mb-8 line-clamp-6">Accelerate time-to-hire by automating repetitive administrative steps, background checks, document signing, and offer approvals across your entire organization.</p>
                <button className="mt-4 px-8 py-3 bg-transparent border border-perk-black/20 rounded-full text-[15px] font-bold flex items-center gap-2 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={18} /></button>
              </motion.div>

            </div>
          </div>

          {/* ROW 5: 3-Card High Fidelity */}
          <div className="max-w-[1440px] mx-auto mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-[#f0f0e8] rounded-[25px] p-8 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-8 aspect-video w-full relative">
                  <img src="/assets/recruiter_video_evaluation.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Recruiters</div>
                </div>
                <h3 className="text-5xl font-bold text-perk-black mb-4 tracking-tighter leading-[0.9]">Cognitive Video Evaluation</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Conduct asynchronous or live video interviews integrated with speech-to-text transcription, sentiment checks, and automated behavioral insights to speed up screening.</p>
                <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#f0f0e8] rounded-[25px] p-4 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-6 aspect-square w-full relative">
                  <img src="/assets/candidate_cover_letter.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Candidates</div>
                </div>
                <h3 className="text-2xl font-bold text-perk-black mb-3 tracking-tighter leading-tight">Instant Cover Letter Writer</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Generate highly personalized, role-specific cover letters in seconds that articulate your strengths and perfectly align with the specific job description.</p>
                <button className="mt-auto px-6 py-2 bg-transparent border border-perk-black/20 rounded-full text-[13px] font-bold flex items-center gap-1 hover:bg-black/5 transition-colors">Learn more <ChevronRight size={16} /></button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#f0f0e8] rounded-[25px] p-8 flex flex-col items-start border border-black/5 text-left h-full group">
                <div className="rounded-[20px] overflow-hidden mb-8 aspect-video w-full relative">
                  <img src="/assets/institute_placement_audits.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 shadow-xl" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-lime rounded-md text-[10px] font-bold text-perk-black shadow-sm z-30">Institutes</div>
                </div>
                <h3 className="text-5xl font-bold text-perk-black mb-4 tracking-tighter leading-[0.9]">Automated Placement Audits</h3>
                <p className="text-[13px] text-perk-black/60 font-medium leading-relaxed mb-6 line-clamp-6">Generate audit-ready, visually rich reports documenting student placement ratios, recruiter feedback, average packages, and skill levels for accreditation.</p>
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
                  'Smart Resume Match & Ranking',
                  'Automated Interview Scheduler',
                  'Smart Resume Builder',
                  'Intelligent Skills Assessment',
                  'Smart Placement Command Center',
                  'AI Campus Recruitment Platform',
                  'Employability Skill Benchmarking',
                  'Predictive Placement Analytics',
                  'AI Skill Gap Analyzer',
                  'Profile Visibility Booster',
                  'AI Job Recommendations',
                  'Document Export Hub',
                  'Smart Follow-Up Assistant',
                  'Corporate Placement Portal',
                  'Hiring Workflow Automation',
                  'Cognitive Video Evaluation',
                  'Instant Cover Letter Writer',
                  'Automated Placement Audits'
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
