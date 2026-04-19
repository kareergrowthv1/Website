import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, X, ShieldCheck, Smartphone, ArrowRight, BarChart3, Clock, Lock, Sparkles, GraduationCap, Users, Layout, Zap } from 'lucide-react';
import heroImage from '../../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-x-hidden bg-cream min-h-screen flex flex-col pt-32 lg:pt-36">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative flex-grow flex flex-col justify-center">

        {/* Title */}
        <div className="text-center max-w-7xl mx-auto mb-2 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="title-huge text-perk-black leading-tight"
          >
            The intelligent platform to assess smarter, hire sharper, and place talent faster.
          </motion.h1>
        </div>

        {/* Hero Image & Floating Cards Container */}
        <div className="relative w-full max-w-4xl mx-auto flex justify-center">

          {/* Main Hand-Mobile Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20"
          >
            <img
              src={heroImage}
              alt="KareerGrowth App"
              className="w-full max-w-[400px] h-auto pointer-events-none"
            />
          </motion.div>

          {/* Simplified Floating UI - Desktop */}
          <div className="hidden lg:block">
            {/* Redesigned Card 1: Sarah Jenkins (Vertical Profile) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-6 left-[-8%] z-30 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl w-[320px] border border-white"
            >
              <h4 className="font-bold text-sm text-perk-black mb-1">Shortlist top-tier candidates, 24/7.</h4>
              <p className="text-[10px] text-slate-500 font-medium italic mb-3">"From job description to shortlist — in days, not months."</p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => <img key={i} className="w-6 h-6 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />)}
                </div>
                <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-tighter">Shortlisting active</span>
              </div>
            </motion.div>

            {/* New Card: AI Proctoring Monitor (Middle Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="absolute top-[35%] left-[-12%] z-30 bg-white p-5 rounded-3xl shadow-xl w-[280px] border border-slate-50"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1.5 bg-brand-lime text-perk-black rounded-lg">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="font-bold text-sm">AI Proctoring Active</h4>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Real-time monitoring for tab shifting and webcam-based test integrity.</p>
            </motion.div>

            {/* Card 2: Competency (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="absolute bottom-28 left-[-6%] z-30 bg-white p-5 rounded-3xl shadow-2xl w-[280px] border border-slate-50"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                  <BarChart3 size={16} />
                </div>
                <h4 className="font-bold text-xs text-perk-black leading-tight">Deep-competency reports,<br />not résumé guesses.</h4>
              </div>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                Unlock actionable insights from skill-based assessments for colleges and companies.
              </p>
            </motion.div>

            {/* Card 3: Assessment Hub (Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="absolute top-10 right-[-2%] z-30 bg-white px-6 py-3 rounded-3xl shadow-xl w-[280px] border border-slate-50"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1.5 bg-brand-lime text-perk-black rounded-lg">
                  <Layout size={18} />
                </div>
                <h4 className="font-bold text-sm">Assessment Hub</h4>
              </div>
              <p className="text-[10px] text-slate-400 font-medium mb-4">Placement-grade hub for smarter hiring.</p>

              <div className="overflow-hidden mb-1 py-1">
                <motion.div
                  animate={{ x: [0, -200] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="flex gap-3 whitespace-nowrap"
                >
                  {['Coding', 'Aptitude', 'Behavioral', 'Culture'].map((tag, i) => (
                    <div key={i} className="px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-600">
                      {tag}
                    </div>
                  ))}
                  {/* Duplicate for infinite effect */}
                  {['Coding', 'Aptitude', 'Behavioral', 'Culture'].map((tag, i) => (
                    <div key={`dup-${i}`} className="px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-600">
                      {tag}
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Card 4: Velocity (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-32 right-[-4%] z-30 bg-white p-5 rounded-3xl shadow-xl w-[280px] border border-slate-50"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1.5 bg-brand-lime text-perk-black rounded-lg">
                  <Zap size={18} />
                </div>
                <h4 className="font-bold text-sm">Job Description</h4>
              </div>
              <p className="text-[10px] text-slate-400 font-medium leading-tight">From job description to shortlist — in days, not months.</p>
            </motion.div>

            {/* Unified Ecosystem Card (Right Mid) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute top-[35%] right-[-10%] z-30 bg-white p-5 rounded-3xl shadow-xl w-[280px] border border-slate-50"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-brand-lime text-perk-black rounded-lg">
                  <Sparkles size={16} />
                </div>
                <h4 className="font-bold text-xs">Unified Ecosystem</h4>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Connecting Students, Institutes & Recruiters on one intelligent platform.</p>
            </motion.div>
          </div>

          {/* Mobile UI - Simplified */}
          <div className="flex lg:hidden absolute top-20 right-0 z-30 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100"
            >
              <div className="w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                <BarChart3 size={14} />
              </div>
              <div>
                <h4 className="font-bold text-[10px]">92% Match</h4>
                <p className="text-[8px] text-slate-400">Deep Assessment</p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Trusted By Logos - Infinite Marquee Loop */}
      <div className="bg-[#d3d3cc] mt-auto py-8 overflow-hidden border-y border-black/5">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex whitespace-nowrap gap-16 items-center"
        >
          {/* First set including new brands */}
          <div className="flex items-center gap-16 pr-16">
            <span className="text-xl font-black text-black">IIT Bombay</span>
            <span className="text-xl font-bold tracking-widest text-black uppercase">TATA Steel</span>
            <span className="text-xl font-black italic underline decoration-black text-black">Deloitte</span>
            <span className="text-xl font-black leading-none text-black">J.P. Morgan</span>
            <span className="text-xl font-bold text-black">NIT Trichy</span>
            <span className="text-xl font-black text-black tracking-tight">SystemMindz</span>
            <span className="text-xl font-bold text-black uppercase tracking-[0.2em]">ValidProfile</span>
            <span className="text-2xl font-black text-black">Apex Skill Technology</span>
            <span className="text-xl font-bold italic text-black">Epigon</span>
          </div>

          {/* Identical duplicate for seamless loop */}
          <div className="flex items-center gap-16 pr-16">
            <span className="text-xl font-black text-black">IIT Bombay</span>
            <span className="text-xl font-bold tracking-widest text-black uppercase">TATA Steel</span>
            <span className="text-xl font-black italic underline decoration-black text-black">Deloitte</span>
            <span className="text-xl font-black leading-none text-black">J.P. Morgan</span>
            <span className="text-xl font-bold text-black">NIT Trichy</span>
            <span className="text-xl font-black text-black tracking-tight">SystemMindz</span>
            <span className="text-xl font-bold text-black uppercase tracking-[0.2em]">ValidProfile</span>
            <span className="text-2xl font-black text-black">Apex Skill Technology</span>
            <span className="text-xl font-bold italic text-black">Epigon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
