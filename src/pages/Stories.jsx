import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Quote, ArrowUpRight, Award, Landmark, 
  ChevronRight, ArrowRight, Star, Zap, CheckCircle2, GraduationCap
} from 'lucide-react';

const Stories = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Successes' },
    { id: 'corporate', label: 'Corporate Partners' },
    { id: 'institute', label: 'Institutes & Academies' }
  ];

  const stories = [
    {
      type: "corporate",
      badge: <Landmark className="w-4 h-4 text-emerald-600 animate-pulse" />,
      company: "Deloitte",
      title: "How Deloitte Cut Engineering Placement Shortlist Time by 70%",
      summary: "Deloitte leveraged KareerGrowth's automatic AI proctoring and coding assessments to evaluate 1,200 college candidates simultaneously, generating a placement shortlist in under 3 days.",
      metric: "70% faster time-to-shortlist",
      cta: "Read Case Study"
    },
    {
      type: "institute",
      badge: <Award className="w-4 h-4 text-blue-600 animate-pulse" />,
      company: "IIT Bombay Placement Cell",
      title: "IIT Bombay Empowers 98% Placement Success Rate in Coding Cohorts",
      summary: "With KareerGrowth's deep-competency reports, the IIT Bombay placement cell successfully mapped cohort skillsets to match specific industry profiles, maximizing recruitment efficiency.",
      metric: "98% Placement Success",
      cta: "View Institute Story"
    },
    {
      type: "corporate",
      badge: <Landmark className="w-4 h-4 text-emerald-600 animate-pulse" />,
      company: "TATA Steel",
      title: "Tata Steel Achieves Placement Integrity and AI Test Credibility",
      summary: "By deploying KareerGrowth's strict AI proctoring controls, Tata Steel conducted secure campus recruitments across 45 regional centers with full confidence in candidate test validity.",
      metric: "100% Secure Proctoring",
      cta: "Read Success Story"
    },
    {
      type: "institute",
      badge: <Award className="w-4 h-4 text-blue-600 animate-pulse" />,
      company: "NIT Trichy Engineering",
      title: "NIT Trichy Fast-tracks Tech Placements with Mock Assessments",
      summary: "Using KareerGrowth as a placement training dashboard, NIT Trichy helped students run diagnostic mock exams in coding, data structures, and aptitude to align their skillsets with top corporate profiles.",
      metric: "4.8/5 Student Rating",
      cta: "Read Academy Report"
    }
  ];

  const filteredStories = activeTab === 'all' 
    ? stories 
    : stories.filter(s => s.type === activeTab);

  return (
    <main className="min-h-screen bg-cream pt-28 md:pt-32 lg:pt-36 pb-24 font-sans text-perk-black antialiased">
      
      {/* Sleek Dual-Tone Hero Header */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="title-huge mt-0 font-medium tracking-[-0.04em] leading-[1.05] text-center text-perk-black mb-8"
          >
            AI Success Stories.
            <br />
            <span className="text-perk-black/30">AI-Driven High-Velocity Hires.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            Discover how leading engineering institutes, multinational corporations, and stellar students fast-track placement opportunities using KareerGrowth's unified assessment ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Featured Partner Spotlight Banner */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1a1a1a] rounded-[32px] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-white/5 group"
        >
          
          {/* Subtle design element */}
          <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none select-none text-brand-lime">
            <Quote size={200} />
          </div>

          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-[10px] font-black uppercase bg-[#bef33e]/20 text-[#bef33e] px-3.5 py-1.5 rounded-full tracking-widest flex items-center gap-1.5">
                <Star size={10} className="fill-[#bef33e]" /> Partner Spotlight
              </span>
              <span className="text-[10px] font-black uppercase bg-white/10 text-white/80 px-3.5 py-1.5 rounded-full tracking-widest">
                IIT Bombay
              </span>
            </div>
            
            <blockquote className="text-xl sm:text-3xl font-medium tracking-tight leading-relaxed text-slate-100 mb-8 font-sans">
              "KareerGrowth completely streamlined our placement season. What used to take months of manual resume reviews, exam evaluations, and coordination was resolved in days with high-integrity competency shortlists."
            </blockquote>

            <div className="flex items-center gap-4 mt-8 pt-4 border-t border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#bef33e]/10 border border-[#bef33e]/25 flex items-center justify-center text-[#bef33e] shrink-0 font-bold text-lg shadow-inner">
                RK
              </div>
              <div>
                <h4 className="font-bold text-lg text-white">Dr. Rajesh Khanna</h4>
                <p className="text-xs text-slate-400 font-medium">Dean of Academic Placement, IIT Bombay</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#bef33e]/5 rounded-full blur-3xl" />
        </motion.div>
      </section>

      {/* Springy Interactive Tab Switcher */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white p-1.5 rounded-full border border-perk-black/5 flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full shadow-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all z-10 duration-300"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeStoriesTab"
                      className="absolute inset-0 bg-[#bef33e] rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className={isActive ? 'text-perk-black' : 'text-slate-400 hover:text-slate-600'}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Stories Reactive Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
            >
              {filteredStories.map((story, i) => (
                <motion.article 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="bg-white rounded-[32px] border border-perk-black/5 p-8 flex flex-col justify-between hover:border-[#bef33e] hover:shadow-md transition-all duration-300 shadow-sm group"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">{story.company}</span>
                      <div className="p-2 bg-[#f5f4eb] rounded-xl flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 shadow-sm">
                        {story.badge}
                        <span>{story.type === 'corporate' ? 'Corporate Partner' : 'Academy & Institute'}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold tracking-tight text-perk-black mt-6 leading-tight group-hover:text-perk-black transition-colors">
                      {story.title}
                    </h3>
                    
                    <p className="mt-4 text-sm leading-relaxed text-slate-500 font-medium">
                      {story.summary}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Placement Metric</span>
                      <span className="text-lg font-black text-perk-black mt-0.5 flex items-center gap-1.5">
                        <CheckCircle2 size={16} className="text-emerald-600" /> {story.metric}
                      </span>
                    </div>
                    
                    <button className="inline-flex items-center gap-1.5 text-xs font-bold border border-perk-black/10 px-5 py-2.5 rounded-full hover:bg-[#bef33e] hover:border-[#bef33e] hover:text-perk-black transition-all group/btn">
                      <span>{story.cta}</span>
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Premium CTA Bottom section */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1a1a1a] rounded-[32px] p-10 sm:p-16 text-white border border-white/5 relative overflow-hidden shadow-2xl max-w-5xl mx-auto flex flex-col items-center"
        >
          <span className="text-[10px] font-black uppercase bg-[#bef33e]/20 text-[#bef33e] px-3.5 py-1.5 rounded-full tracking-widest flex items-center gap-1.5 mb-6">
            <Zap size={10} className="fill-[#bef33e] text-[#bef33e]" /> Join the Success
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6 max-w-2xl leading-tight">
            Ready to accelerate your placements and recruitment?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-medium max-w-xl mb-10 leading-relaxed">
            Connect your students directly with pre-vetted corporate roles, or filter thousands of candidate portfolios using secure, proctored competency scores.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3.5 bg-[#bef33e] text-perk-black rounded-full text-[14px] font-bold flex items-center gap-2 hover:opacity-95 transition-opacity shadow-lg">
              Book a placement demo <ArrowRight size={16} />
            </button>
            <button className="px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-full text-[14px] font-bold flex items-center gap-2 hover:bg-white/5 transition-colors">
              Schedule a technical pilot <ChevronRight size={16} />
            </button>
          </div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#bef33e]/5 rounded-full blur-3xl" />
        </motion.div>
      </section>

    </main>
  );
};

export default Stories;
