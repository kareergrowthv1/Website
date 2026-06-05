import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ChevronDown, ChevronUp, Star, HelpCircle,
  Download, Plus, Info, Globe, Shield, Headset, Volume2,
  Maximize2, Check, ExternalLink, Play, FileText, Video,
  Briefcase, Cpu, Sparkles, Layout, Award, BookOpen
} from 'lucide-react';
import { useModalStore } from '../../data/useModalStore';



const CandidatesPlatform = () => {
  const { openDemoModal, openGetStartedModal } = useModalStore();

  // FAQ state
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How does the ATS optimization score work?",
      a: "Our AI scans your resume against thousands of industry-standard ATS models to verify keyword density, formatting structures, and layout compatibility to ensure you pass the initial screening filters."
    },
    {
      q: "Is my personal data shared with employers automatically?",
      a: "No. You have complete control over your profile visibility. Your details are only visible to verified recruiters once you explicitly toggle profile boosting or apply to a role."
    },
    {
      q: "What types of mock interviews can I practice?",
      a: "We support over 500 roles, ranging from Software Engineers (with live coding prompts) to Product Managers, Business Analysts, and HR managers."
    },
    {
      q: "Can I track applications submitted outside KareerGrowth?",
      a: "Yes. Our Dynamic Application Tracker allows you to manually add external job openings, schedule interviews, and organize documents for any company."
    },
    {
      q: "Are the resume templates free to export?",
      a: "Yes. We offer multiple clean, professional templates that can be downloaded as PDF or shared via a secure, tracking-enabled web link for free."
    },
    {
      q: "How accurate is the AI Skill Gap analyzer?",
      a: "It matches your profile against live job board listings for your target title, cross-referencing industry certifications, core tech stack, and soft skills to give you an accurate readiness checklist."
    }
  ];

  return (
    <div className="bg-white text-[#1a1a1a] font-sans antialiased min-h-screen pt-20">

      {/* SECTION 1: HERO SECTION */}
      <div className="bg-[#f5f4eb] w-full">
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center gap-16 min-h-[calc(100vh-5rem)]">

        {/* Hero Left Content */}
        <div className="flex-1 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="title-huge font-medium text-[#1a1a1a] leading-tight mb-8"
          >
            AI-powered<br />Kareer Growth<br />made easy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-base md:text-lg font-medium text-[#1a1a1a]/85 leading-relaxed max-w-xl mb-10"
          >
            Our all-in-one career acceleration platform makes job hunting, resume optimization, and interview preparation smooth and easy. From building ATS-optimized resumes to landing your dream job, KareerGrowth has got you covered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-md"
          >
            <button
              onClick={openGetStartedModal}
              className="px-8 py-4 bg-[#bef33e] text-[#1a1a1a] rounded-full text-[15px] font-extrabold flex items-center gap-1.5 hover:brightness-95 transition-all shadow-md cursor-pointer"
            >
              Get started free <ChevronRight size={16} strokeWidth={3} />
            </button>
          </motion.div>
        </div>

        {/* Hero Right Mockup collage */}
        <div className="flex-1 flex items-center justify-center w-full max-w-xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-start justify-between w-full h-[450px] overflow-hidden relative px-2"
          >
            {/* iPhone Mockup Container */}
            <div className="w-[52%] flex-shrink-0 relative translate-y-20">
              {/* iPhone Hardware Side Buttons */}
              {/* Left Side Buttons */}
              <div className="absolute -left-[2.5px] top-[75px] w-[2.5px] h-[15px] bg-[#1a1a1b]/60 rounded-l-[1px] z-10" />
              <div className="absolute -left-[2.5px] top-[110px] w-[2.5px] h-[30px] bg-[#1a1a1b]/60 rounded-l-[1px] z-10" />
              <div className="absolute -left-[2.5px] top-[155px] w-[2.5px] h-[30px] bg-[#1a1a1b]/60 rounded-l-[1px] z-10" />
              {/* Right Side Button */}
              <div className="absolute -right-[2.5px] top-[130px] w-[2.5px] h-[45px] bg-[#1a1a1b]/60 rounded-r-[1px] z-10" />

              {/* iPhone Bezel Outer Frame */}
              <div className="bg-[#0b0c0a] p-3.5 rounded-[48px] shadow-[0_25px_60px_rgba(0,0,0,0.18)] w-full h-[580px] relative">
                {/* Dynamic Island */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5.5 bg-black rounded-full z-20 flex items-center justify-between px-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-950/40"></span>
                  <span className="w-3.5 h-1 bg-white/10 rounded-full"></span>
                </div>

                {/* iPhone Screen Content */}
                <div className="bg-[#fcfbf7] rounded-[36px] overflow-hidden p-5 pt-10 text-left h-full flex flex-col justify-start">

                  {/* iPhone Status Header */}
                  <div className="flex items-center justify-between text-[11px] font-bold text-black/40 mb-5">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M1 8h1v1H1V8zm2-2h1v3H3V6zm2-2h1v5H5V4zm2-2h1v7H7V2zm2-2h1v9H9V0z" /></svg>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M0 2a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H2a2 2 0 01-2-2V2z" /></svg>
                    </div>
                  </div>

                  {/* iPhone App Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#bef33e] flex items-center justify-center font-bold text-lg cursor-pointer text-black hover:brightness-95 transition-all">
                      <Plus size={16} strokeWidth={3} />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#141511] text-white flex items-center justify-center cursor-pointer relative hover:brightness-110 transition-all">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#bef33e] rounded-full border border-[#141511]" />
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120" alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* iPhone Title */}
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a] mb-5 leading-none">
                    What's your goal?
                  </h3>

                  {/* iPhone Icons Card */}
                  <div className="bg-white rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.03)] mb-5 w-full">
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { label: 'Resume', icon: <FileText size={18} strokeWidth={2.5} /> },
                        { label: 'Interviews', icon: <Video size={18} strokeWidth={2.5} /> },
                        { label: 'Tracker', icon: <Briefcase size={18} strokeWidth={2.5} /> },
                        { label: 'Skills', icon: <Cpu size={18} strokeWidth={2.5} /> }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1.5">
                          <div className="w-10 h-10 rounded-full bg-[#bef33e] flex items-center justify-center text-black cursor-pointer hover:brightness-95 transition-all">
                            {item.icon}
                          </div>
                          <span className="text-[9px] font-bold text-black/70">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* iPhone Recent Activities */}
                  <div className="w-full flex-grow flex flex-col justify-start">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-black/30 mb-2.5 block">Recent activities</span>
                    <div className="space-y-2">
                      <div className="bg-white rounded-xl p-3 shadow-sm flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-extrabold text-[#1a1a1a] block">Resume edited</span>
                          <span className="text-[9px] text-slate-400 font-medium">95% ATS Score</span>
                        </div>
                        <ChevronRight size={12} className="text-black/30" />
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-extrabold text-[#1a1a1a] block">Mock interview</span>
                          <span className="text-[9px] text-emerald-600 font-extrabold">Passed (B+)</span>
                        </div>
                        <ChevronRight size={12} className="text-black/30" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Side Rounded Rectangle Image */}
            <div className="w-[40%] h-[380px] rounded-[28px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.1)] flex-shrink-0 self-start mt-2 mr-2">
              <img src="/assets/candidate_hero_visual.webp" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>

      {/* SECTION 2: G2 BADGES & BRAND LOGOS GRID */}
      <div className="bg-white w-full">
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col xl:flex-row gap-12 items-center">

          {/* Support Card */}
          <div className="w-full xl:w-[45%] bg-[#f5f4eb] rounded-[32px] p-8 md:p-12 shadow-[0_15px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[340px] text-left">
            <div>
              <h3 className="text-3xl  tracking-tight text-[#1a1a1a] mb-3 leading-tight">
                Prepare at ease with a complete AI career platform behind you
              </h3>
              <p className="text-sm font-medium text-slate-700 mb-8 max-w-md">
                Thousands of candidates already landed jobs using KareerGrowth, join them!
              </p>
            </div>

            <div className="flex gap-4">
              {/* Capterra */}
              <div className="bg-white rounded-2xl p-4 flex-1 shadow-sm flex flex-col items-center justify-between text-center min-h-[90px]">
                <div className="flex items-center justify-center mb-2 h-6">
                  <img src="/assets/capterra_logo.svg" alt="Capterra" className="h-4 object-contain" />
                </div>
                <div className="flex gap-0.5 text-[#1a1a1a]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-[#1a1a1a] text-[#1a1a1a]" />)}
                </div>
              </div>

              {/* G2 */}
              <div className="bg-white rounded-2xl p-4 flex-1 shadow-sm flex flex-col items-center justify-between text-center min-h-[90px]">
                <div className="flex items-center justify-center mb-2 h-6">
                  <img src="/assets/g2_logo.svg" alt="G2" className="h-5 object-contain" />
                </div>
                <div className="flex gap-0.5 text-[#1a1a1a]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-[#1a1a1a] text-[#1a1a1a]" />)}
                </div>
              </div>
            </div>
          </div>

          {/* Company Logos Grid */}
          <div className="w-full xl:w-[55%] grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-8 text-center items-center py-6">
            {[
              { name: "Google", src: "/assets/google_logo.svg" },
              { name: "Microsoft", src: "/assets/microsoft_logo.svg" },
              { name: "Meta", src: "/assets/meta_logo.svg" },
              { name: "Deloitte", src: "/assets/deloitte_logo.svg" },
              { name: "J.P. Morgan", src: "/assets/jpmorgan_logo.svg" },
              { name: "Tata Steel", src: "/assets/tata_logo.svg" },
              { name: "TCS", src: "/assets/tcs_logo.svg" },
              { name: "Infosys", src: "/assets/infosys_logo.svg" },
              { name: "Amazon", src: "/assets/amazon_logo.svg" }
            ].map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center h-12">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-h-8 md:max-h-9 max-w-[150px] object-contain opacity-60 hover:opacity-100 transition-opacity cursor-pointer" 
                />
              </div>
            ))}
          </div>

        </section>
      </div>

      {/* SECTION 3: VALUE PROPOSITION SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row gap-16 items-center">

        {/* Partnership / Grid side */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4 w-full">
          {/* Card */}
          <div className="w-full sm:w-[45%] bg-[#f5f4eb] rounded-[32px] p-8 flex flex-col justify-between text-left shadow-sm">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
              <Globe size={20} />
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a] leading-tight">
              Integration with top job boards and platforms
            </h3>
          </div>

          {/* 2x3 Logos list */}
          <div className="w-full sm:w-[55%] grid grid-cols-2 gap-4">
            {[
              {
                name: "LinkedIn",
                custom: (
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-10 h-10 object-contain" />
                )
              },
              {
                name: "GitHub",
                custom: (
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-10 h-10 object-contain" />
                )
              },
              {
                name: "Indeed",
                custom: (
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Indeed_logo.svg" alt="Indeed" className="w-24 h-8 object-contain" />
                )
              },
              {
                name: "Glassdoor",
                custom: (
                  <img src="/assets/glassdoor_logo.svg" alt="Glassdoor" className="w-28 h-8 object-contain" />
                )
              },
              {
                name: "Naukri",
                custom: (
                  <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="Naukri" className="w-24 h-8 object-contain" />
                )
              },
              {
                name: "Workday",
                custom: (
                  <img src="/assets/workday_logo.svg" alt="Workday" className="w-24 h-8 object-contain" />
                )
              }
            ].map((platform, idx) => (
              <div key={idx} className="bg-[#f5f4eb] rounded-2xl p-6 flex items-center justify-center shadow-sm hover:opacity-90 hover:scale-[1.02] transition-all cursor-pointer h-20">
                {platform.custom}
              </div>
            ))}
          </div>
        </div>

        {/* Text side */}
        <div className="flex-1 text-left">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-8">
            The #1 candidate career acceleration tool
          </h2>
          <p className="text-sm font-medium text-slate-700 leading-relaxed mb-6">
            What makes us number one? We provide a comprehensive ecosystem connecting students, placement cells, and top employers. This enables us to offer direct job placement channels and verified capability profiles. Our interface is extremely clean and intuitive—removing the stress of landing your next role.
          </p>
          <p className="text-sm font-medium text-slate-700 leading-relaxed">
            Candidates can easily check skill requirements, practice for coding tests, and optimize resumes to pass ATS algorithms with flying colors. Our platform brings complete clarity to your applications—no more sending applications into black holes. Our dedicated AI interview coach and support team are available 24/7 to help you succeed.
          </p>
        </div>

      </section>

      {/* SECTION 4: ALL-IN-ONE BOOKING SECTION (adapted to "All your career tools in one place") */}
      <div className="bg-white w-full">
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row gap-16 items-center justify-between">

          {/* Text side */}
          <div className="flex-grow text-left lg:order-1 order-2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-4">
              All your job prep tools in one place
            </h2>
            <p className="text-sm font-medium text-slate-700 leading-relaxed mb-4">
              KareerGrowth gives you a unified, modern interface to manage all your job application pipelines. Build ATS-compliant resumes using custom templates, write personalized cover letters, and track interview stages. After finalizing your resume, download PDF/DOCX copies or share secure web links with recruiter tracking.
            </p>
            <p className="text-sm font-medium text-slate-700 leading-relaxed">
              We also offer AI-driven mock interviews and automated follow-ups to ensure you stay active and prepared. Our systems guarantee 24/7 coaching support, allowing you to perfect your answers before facing real recruiters.
            </p>
          </div>

          {/* Mockups side */}
          <div className="w-full lg:w-[48%] flex flex-col sm:flex-row gap-4 items-stretch lg:order-2 order-1">

            <div className="w-full sm:w-[50%] flex flex-col gap-4">
              {/* Top Resume builder live mockup */}
              <div className="flex-grow overflow-hidden rounded-[20px] shadow-sm max-h-[120px]">
                <img src="/assets/ai_resume_builder.png" alt="AI Resume Builder" className="w-full h-full object-cover" />
              </div>

              {/* Resume Score Card */}
              <div className="bg-[#f5f4eb] rounded-[24px] p-5 text-left shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex gap-0.5 text-amber-400 mb-1.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-current" />)}
                  </div>
                  <h4 className="font-extrabold text-sm tracking-tight mb-1 text-[#1a1a1a]">Resume Score</h4>
                  <div className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[8px] font-extrabold rounded-md mb-2 uppercase tracking-wider">
                    ATS Optimized
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] font-extrabold uppercase text-slate-600">Score</span>
                    <p className="text-lg font-extrabold text-black leading-none">95/100</p>
                  </div>
                  <span className="text-[9px] font-bold text-slate-600">Excellent</span>
                </div>
              </div>
            </div>

            {/* Right Document Export card */}
            <div className="w-full sm:w-[50%] bg-[#f5f4eb] rounded-[24px] p-5 text-left shadow-sm flex flex-col justify-between min-h-[250px]">
              <div>
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-7 h-7 rounded-full bg-[#bef33e]/20 flex items-center justify-center text-[#1a1a1a]">
                    <Download size={12} />
                  </div>
                  <h4 className="font-extrabold text-sm tracking-tight text-[#1a1a1a]">Export Hub</h4>
                </div>

                <div className="space-y-2.5">
                  {[
                    { name: "Resume_Tech.pdf", type: "PDF Document" },
                    { name: "Cover_Letter_Google.pdf", type: "PDF" },
                    { name: "Skill_Gap_Report.pdf", type: "PDF" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0">
                      <div className="min-w-0 flex-1 pr-2">
                        <p className="text-[8px] font-bold text-slate-600 leading-none">{item.type}</p>
                        <p className="font-extrabold text-[11px] text-[#1a1a1a] mt-0.5 truncate">{item.name}</p>
                      </div>
                      <button className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:opacity-85 transition-opacity flex-shrink-0">
                        <Download size={9} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </section>
      </div>

      {/* SECTION 6: CONTROL SECTION (Job Search Control) */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row gap-16 items-center">

        {/* Collage side */}
        <div className="flex-grow flex flex-col sm:flex-row gap-4 w-full items-stretch">

          <div className="w-full sm:w-[50%] flex flex-col gap-4 justify-between">
            {/* Live interactive task tracker */}
            <img src="/assets/candidate_app_tracker.png" alt="Job Application Tracker" className="w-full h-auto rounded-[24px] drop-shadow-lg object-cover" />

            {/* Career Transition card */}
            <div className="bg-[#f5f4eb] rounded-[24px] p-6 text-center shadow-sm h-20 flex items-center justify-center">
              <span className="text-lg font-extrabold text-[#1a1a1a] tracking-tight">Intern → Full Stack SDE</span>
            </div>
          </div>

          {/* Right vertical card */}
          <div className="w-full sm:w-[50%] bg-[#f5f4eb] rounded-[32px] p-6 text-left shadow-sm flex flex-col justify-between min-h-[300px]">
            <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#bef33e] font-extrabold text-lg">
              <Volume2 size={18} />
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight text-[#1a1a1a] leading-tight">
              Real-time AI feedback on tone & speech
            </h3>
          </div>

        </div>

        {/* Text side */}
        <div className="flex-grow text-left">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-8">
            Have full control of your job search
          </h2>
          <p className="text-sm font-medium text-slate-700 leading-relaxed">
            KareerGrowth offers you a simple user interface where you can see your entire pipeline at a glance. Managing interviews is made simple thanks to our automatic scheduling integrations and email follow-up templates. You can define your own target roles and experience levels, letting our AI recommendations find matching positions. KareerGrowth has everything you need to stand out to employers and land the job.
          </p>
        </div>

      </section>

      {/* SECTION 5: WHY PERK STATS SECTION -> WHY KAREERGROWTH */}
      <div className="bg-white w-full">
        <section className="bg-transparent py-16 md:py-20 text-center">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1a1a1a] mb-12">
              Why KareerGrowth
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { val: "80%+", desc: "increase in interview callback rates" },
                { val: "10,000+", desc: "mock interviews completed daily" },
                { val: "98%", desc: "ATS compliance score on resumes" },
                { val: "3.5x", desc: "faster career placement timeline" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-[#f5f4eb] rounded-3xl p-8 text-left shadow-sm min-h-[160px] flex flex-col justify-between">
                  <h3 className="text-3xl font-extrabold text-[#1a1a1a] tracking-tight leading-none">
                    {stat.val}
                  </h3>
                  <p className="text-xs font-bold text-slate-700 mt-6 leading-normal">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={openGetStartedModal}
              className="px-8 py-3.5 bg-[#bef33e] text-[#1a1a1a] rounded-full text-[14px] font-extrabold flex items-center gap-1.5 mx-auto hover:brightness-95 transition-all shadow-md cursor-pointer"
            >
              Get started free <ChevronRight size={16} strokeWidth={3} />
            </button>

          </div>
        </section>
      </div>

      {/* SECTION 7: MAGIC VIDEO SECTION */}
      <div className="bg-[#141511] w-full text-white">
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">

          {/* Glow detail */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#bef33e]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Video Text left */}
          <div className="flex-grow text-left relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
              Make your interview preparation work like magic
            </h2>
            <p className="text-sm font-medium text-white/85 leading-relaxed mb-6 max-w-xl">
              See how our AI Mock Interview simulator evaluates body language, speech fluency, and technical depth in real time, making you fully ready for the hot seat.
            </p>
            <button
              onClick={openDemoModal}
              className="px-8 py-3.5 bg-[#bef33e] text-[#1a1a1a] rounded-full text-[14px] font-extrabold flex items-center gap-1.5 hover:brightness-95 transition-all shadow-md cursor-pointer"
            >
              Try Simulator Demo <ChevronRight size={16} strokeWidth={3} />
            </button>
          </div>

          {/* Live mock video feed simulator */}
          <div className="flex-grow w-full max-w-lg lg:max-w-[480px] relative z-10">
            <img src="/assets/mock_interview.png" alt="AI Interview Simulator" className="w-full h-auto max-h-[300px] rounded-[24px] drop-shadow-2xl object-cover" />
          </div>

        </section>
      </div>

      {/* SECTION 8: INTEGRATIONS SECTION */}
      <section className="bg-white max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 text-center">

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-4">
          Integrations for easy career management
        </h2>
        <p className="text-sm font-medium text-slate-500 mb-14 max-w-lg mx-auto leading-relaxed">
          Connect your favorite tools and platforms to supercharge your job search workflow.
        </p>

        {/* Integration Icon Cards Grid */}
        <div className="grid grid-cols-6 sm:grid-cols-9 gap-2 max-w-3xl mx-auto mb-12">
          {[
            { name: 'GitHub',       logo: 'https://cdn.simpleicons.org/github/ffffff',                                                                    bg: '#24292e', useFilter: false },
            { name: 'LinkedIn',     logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg',                                       bg: '#0A66C2', useFilter: true  },
            { name: 'Google Cal',   logo: 'https://cdn.simpleicons.org/googlecalendar',                                                                    bg: '#ffffff', useFilter: false },
            { name: 'Notion',       logo: 'https://cdn.simpleicons.org/notion',                                                                            bg: '#ffffff', useFilter: false },
            { name: 'Gmail',        logo: 'https://cdn.simpleicons.org/gmail',                                                                             bg: '#ffffff', useFilter: false },
            { name: 'Zoom',         logo: 'https://cdn.simpleicons.org/zoom/ffffff',                                                                       bg: '#0B5CFF', useFilter: false },
            { name: 'Slack',        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',                                       bg: '#ffffff', useFilter: false },
            { name: 'Outlook',      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftoutlook.svg',                                   bg: '#0078D4', useFilter: true  },
            { name: 'MS Teams',     logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftteams.svg',                                     bg: '#6264A7', useFilter: true  },
            { name: 'Workday',      logo: '/assets/workday_logo.svg',                                                                                      bg: '#f04e23', useFilter: false },
            { name: 'Greenhouse',   logo: 'https://cdn.simpleicons.org/greenhouse/ffffff',                                                                 bg: '#24a47f', useFilter: false },
            { name: 'Lever',        logo: 'https://images.seeklogo.com/logo-png/34/1/lever-logo-png_seeklogo-347700.png',                                  bg: '#1d2a3a', useFilter: true  },
            { name: 'Google Drive', logo: 'https://cdn.simpleicons.org/googledrive',                                                                       bg: '#ffffff', useFilter: false },
            { name: 'Dropbox',      logo: 'https://cdn.simpleicons.org/dropbox/ffffff',                                                                    bg: '#0061FF', useFilter: false },
            { name: 'Canva',        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg',                                              bg: '#7d2ae8', useFilter: true  },
            { name: 'Behance',      logo: 'https://cdn.simpleicons.org/behance/ffffff',                                                                    bg: '#1769ff', useFilter: false },
            { name: 'Medium',       logo: 'https://cdn.simpleicons.org/medium/ffffff',                                                                     bg: '#000000', useFilter: false },
            { name: 'PDF Hub',      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg',                                         bg: '#ffffff', useFilter: false },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-1.5 cursor-pointer"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center p-2 shadow-sm border border-black/[0.06] hover:scale-110 hover:shadow-md transition-all duration-300"
                style={{ backgroundColor: item.bg }}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-full object-contain pointer-events-none"
                  style={{ filter: item.useFilter ? 'brightness(0) invert(1)' : 'none' }}
                />
              </div>
              <span className="text-[9px] font-semibold text-slate-400 group-hover:text-[#1a1a1a] transition-colors leading-tight text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={openGetStartedModal}
          className="px-8 py-3.5 bg-[#bef33e] text-[#1a1a1a] rounded-full text-[14px] font-extrabold flex items-center gap-1.5 mx-auto hover:brightness-95 transition-all shadow-md cursor-pointer"
        >
          Discover integrations <ChevronRight size={16} strokeWidth={3} />
        </button>

      </section>

      {/* SECTION 9: COMPLETE PLATFORM FEATURES */}
      <section className="bg-white py-16 md:py-20 text-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-16">
            The most complete career platform
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "All-in-one workspace", icon: <Layout size={16} className="text-white" />, color: "bg-sky-400", desc: "Optimize resumes, write cover letters, and track applications in a single unified dashboard." },
              { title: "AI Interview Coaching", icon: <Volume2 size={16} className="text-white" />, color: "bg-indigo-400", desc: "Practice role-specific mock interviews with immediate speech, body language, and technical evaluations." },
              { title: "Skill Gap Analysis", icon: <Cpu size={16} className="text-white" />, color: "bg-orange-400", desc: "Scan job listings, analyze missing requirements, and receive targeted learning suggestions." },
              { title: "Direct Recruiter Channels", icon: <Globe size={16} className="text-white" />, color: "bg-pink-400", desc: "Instantly publish your verified profile to top hiring managers and active headhunters looking for your skills." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#f5f4eb] rounded-3xl p-8 text-left border border-black/5 shadow-sm min-h-[220px] flex flex-col justify-between">
                <div>
                  <div className={`w-8 h-8 rounded-full ${feature.color} flex items-center justify-center mb-6 shadow-inner`}>
                    {feature.icon}
                  </div>
                  <h4 className="font-extrabold text-lg tracking-tight mb-3 text-[#1a1a1a]">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 10: RATINGS/G2 BADGES SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row gap-16 items-center">

        {/* Badges list */}
        <div className="flex-grow flex flex-wrap gap-4 w-full items-center justify-center">
          {[
            { tag: "Leader", date: "WINTER 2026", color: "border-t-[14px] border-t-red-500" },
            { tag: "Leader", date: "Winter 2025", color: "border-t-[14px] border-t-orange-500", source: "SOURCEFORGE" },
            { tag: "Momentum Leader", date: "WINTER 2026", color: "border-t-[14px] border-t-red-600" }
          ].map((badge, i) => (
            <div key={i} className="bg-[#f5f4eb] rounded-2xl p-5 border border-black/5 shadow-md text-center flex-1 max-w-[150px] relative overflow-hidden flex flex-col justify-between min-h-[160px]">
              <div className={`absolute top-0 left-0 right-0 h-2 ${badge.color}`} />
              <div>
                <p className="text-[8px] font-extrabold uppercase tracking-wider text-slate-600 mb-1">{badge.source || "G₂"}</p>
                <p className="text-[9px] font-extrabold text-slate-600 leading-none mb-4">{badge.date}</p>
              </div>
              <p className="font-extrabold text-xs text-[#1a1a1a] px-1 uppercase tracking-tight">{badge.tag}</p>
              <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mx-auto mt-4 p-1">
                {badge.source ? (
                  <span className="text-orange-500 text-[10px]">★</span>
                ) : (
                  <img src="/assets/g2_logo.svg" alt="G2" className="w-3.5 h-3.5 object-contain" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Text side */}
        <div className="flex-grow text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-tight mb-6">
            Leading career platform by user review platform G2
          </h2>
          <p className="text-sm font-medium text-slate-700 leading-relaxed">
            Supercharge your career growth with the all-in-one platform that candidates and placement offices love. Let's land your next big role!
          </p>
        </div>

      </section>

      {/* SECTION 11: CTA FOOTER SECTION */}
      <div className="bg-[#141511] w-full text-white">
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 relative overflow-hidden text-left">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
                Start tracking every<br />aspect of your job<br />hunt in one place
              </h2>
              <p className="text-sm font-medium text-[#bef33e] tracking-wider uppercase font-bold">
                Create your free account today.
              </p>
            </div>

            <div className="w-full max-w-md">
              <div className="relative mb-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl font-medium focus:outline-none focus:border-white/30 transition-colors text-white placeholder:text-white/60"
                />
              </div>
              <p className="text-[11px] font-medium text-white/70 leading-relaxed mb-6">
                We will record your data for onboarding purposes. Read more in our{' '}
                <a href="#" className="underline font-bold text-white hover:opacity-75 transition-opacity">Privacy Policy</a>.
              </p>

              <button
                onClick={openGetStartedModal}
                className="px-8 py-3.5 bg-[#bef33e] text-[#1a1a1a] rounded-full text-[14px] font-extrabold flex items-center gap-1.5 hover:brightness-95 transition-all shadow-md cursor-pointer"
              >
                Get started free <ChevronRight size={16} strokeWidth={3} />
              </button>
            </div>

          </div>
        </section>
      </div>

      {/* SECTION 12: FREQUENTLY ASKED QUESTIONS */}
    <div className="bg-white w-full">
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 text-center">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-16">
            Frequently asked questions
          </h2>

          <div className="max-w-4xl mx-auto divide-y divide-[#1a1a1a]/10">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-6 text-left">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-base font-extrabold text-[#1a1a1a] hover:opacity-75 transition-opacity cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={16} strokeWidth={3.5} /> : <ChevronDown size={16} strokeWidth={3.5} />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden mt-3 text-sm text-slate-700 font-medium leading-relaxed pr-6"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </section>
      </div>

    </div>
  );
};

export default CandidatesPlatform;
