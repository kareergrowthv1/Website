import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck, Target, Users, Zap, ArrowRight,
  FileText, Sparkles, LayoutDashboard, TrendingUp, UserCheck, Video, BarChart3, Download, MailOpen, Briefcase,
  Search, Award, ClipboardCheck, Calendar, Camera, PieChart, Send, Database, MessageSquare,
  GraduationCap, MapPin, FileSpreadsheet, LineChart, Mic, FileSignature, Compass, BookOpen, CheckCircle2,
  Linkedin, Twitter, Github, Facebook
} from 'lucide-react';
import sharanDp from '../assets/sharan-dp.webp';
import mallikarjunDp from '../assets/Mallikarjun Dp.jpeg';

const About = () => {
  const [activeTab, setActiveTab] = useState('candidates');

  const tabs = [
    { id: 'candidates', label: 'Candidates Ecosystem' },
    { id: 'recruiters', label: 'Recruiters Platform' },
    { id: 'institutes', label: 'Institutes & Colleges' }
  ];

  // 30 Products & Services Data structured as application pillars
  const pillarFeatures = {
    candidates: [
      {
        icon: <FileText className="w-5 h-5 text-indigo-600" />,
        title: "AI Resume Builder",
        desc: "Builds ATS-friendly resumes with real-time suggestions and tailored optimization to bypass strict filters."
      },
      {
        icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
        title: "Smart Cover Letter Generator",
        desc: "Crafts highly customized, role-specific cover letters instantly for each target job application."
      },
      {
        icon: <LayoutDashboard className="w-5 h-5 text-indigo-600" />,
        title: "Job Application Dashboard",
        desc: "Acts as a centralized command center to track application pipelines, status logs, and schedule timelines."
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
        title: "Skill Gap Analyzer",
        desc: "Compares current student profiles with live industry requirements to suggest hyper-targeted training pathways."
      },
      {
        icon: <UserCheck className="w-5 h-5 text-indigo-600" />,
        title: "Profile Optimization Assistant",
        desc: "Analyzes digital resumes and LinkedIn profiles to offer structured tips that increase organic visibility."
      },
      {
        icon: <Video className="w-5 h-5 text-indigo-600" />,
        title: "AI Mock Interview Platform",
        desc: "Conducts realistic simulated video interviews with deep AI metrics covering content, speed, and delivery."
      },
      {
        icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
        title: "Career Analytics Dashboard",
        desc: "Provides clear analytics on success rates, competency progression, and application efficiency."
      },
      {
        icon: <Download className="w-5 h-5 text-indigo-600" />,
        title: "Resume & Document Export Center",
        desc: "Generates industry-grade PDFs, portfolios, and diagnostic assessment reports with single-click downloads."
      },
      {
        icon: <MailOpen className="w-5 h-5 text-indigo-600" />,
        title: "Smart Follow-Up Assistant",
        desc: "Automates post-interview check-ins with recruiters using prebuilt communication schedules and templates."
      },
      {
        icon: <Briefcase className="w-5 h-5 text-indigo-600" />,
        title: "Personalized Job Recommendations",
        desc: "Curates tailored job matching recommendations based on actual technical and behavioral competencies."
      }
    ],
    recruiters: [
      {
        icon: <Search className="w-5 h-5 text-emerald-600" />,
        title: "AI Candidate Screening",
        desc: "Scours application lists to immediately surface candidates matching exact technical requirements."
      },
      {
        icon: <Award className="w-5 h-5 text-emerald-600" />,
        title: "Smart Resume Ranking",
        desc: "Grades incoming talent using high-precision scoring parameters rather than primitive keywords."
      },
      {
        icon: <ClipboardCheck className="w-5 h-5 text-emerald-600" />,
        title: "Candidate Assessment Platform",
        desc: "Configures industry-grade tech assessments, cognitive exams, and communication test sequences."
      },
      {
        icon: <Calendar className="w-5 h-5 text-emerald-600" />,
        title: "Interview Management System",
        desc: "Automates calendar scheduling, tracks interviewer feedback sheets, and manages status changes."
      },
      {
        icon: <Camera className="w-5 h-5 text-emerald-600" />,
        title: "Video Interview Platform",
        desc: "Runs automatic webcam-proctored, AI-scored video screenings for early-round candidate evaluation."
      },
      {
        icon: <PieChart className="w-5 h-5 text-emerald-600" />,
        title: "Recruitment Analytics Dashboard",
        desc: "Tracks pipeline velocity, cost-per-hire, screening metrics, and overall recruitment performance."
      },
      {
        icon: <Send className="w-5 h-5 text-emerald-600" />,
        title: "Job Posting Management",
        desc: "Acts as a central manager to draft, publish, and track jobs across dozens of digital channels."
      },
      {
        icon: <Database className="w-5 h-5 text-emerald-600" />,
        title: "Candidate Database Management",
        desc: "Maintains a structured, searchable archival database of profiles with tags, scores, and history."
      },
      {
        icon: <MessageSquare className="w-5 h-5 text-emerald-600" />,
        title: "Automated Communication System",
        desc: "Sends real-time pipeline status updates, invitations, and follow-ups to candidate groups."
      },
      {
        icon: <Zap className="w-5 h-5 text-emerald-600" />,
        title: "Hiring Workflow Automation",
        desc: "Cuts out repetitive tasks by automating multi-stage recruitment pipelines and offer approvals."
      }
    ],
    institutes: [
      {
        icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
        title: "Student Placement Management",
        desc: "Provides placement cells with unified portals to track batch profiles, applications, and placement statistics."
      },
      {
        icon: <MapPin className="w-5 h-5 text-blue-600" />,
        title: "Campus Recruitment Platform",
        desc: "Links institutes directly with corporate partners for recruiters to host hiring drives on-campus."
      },
      {
        icon: <FileSpreadsheet className="w-5 h-5 text-blue-600" />,
        title: "Student Skill Assessments",
        desc: "Maintains institutional proctored testing setups to evaluate technical and aptitude readiness."
      },
      {
        icon: <LineChart className="w-5 h-5 text-blue-600" />,
        title: "Placement Analytics Dashboard",
        desc: "Enables deans to monitor placement progress, department-wise stats, and trending skill gaps."
      },
      {
        icon: <Mic className="w-5 h-5 text-blue-600" />,
        title: "Mock Interview Platform",
        desc: "Helps colleges train cohorts with diagnostic mock video screens mimicking actual corporate filters."
      },
      {
        icon: <FileSignature className="w-5 h-5 text-blue-600" />,
        title: "Resume Building Platform",
        desc: "Enables thousands of students to construct professional, institution-approved ATS resumes instantly."
      },
      {
        icon: <Compass className="w-5 h-5 text-blue-600" />,
        title: "Industry Readiness Tracking",
        desc: "Monitors each student's competency progress and maps their readiness scores against real roles."
      },
      {
        icon: <BookOpen className="w-5 h-5 text-blue-600" />,
        title: "Training Program Management",
        desc: "Launches and tracks custom skill-ups, coding cohorts, and industry certifications."
      },
      {
        icon: <Users className="w-5 h-5 text-blue-600" />,
        title: "Recruiter Collaboration Portal",
        desc: "Lets deans share student resumes, invite companies, and coordinate corporate events."
      },
      {
        icon: <CheckCircle2 className="w-5 h-5 text-blue-600" />,
        title: "Placement Success Reports",
        desc: "Generates ready-to-share PDF reports of batch placement achievements and training outcomes."
      }
    ]
  };

  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#1a1a1a]" />,
      title: "Assessment Integrity",
      desc: "Our state-of-the-art AI proctoring technology guarantees placement-grade exam credibility, protecting test validity at every stage."
    },
    {
      icon: <Target className="w-8 h-8 text-[#1a1a1a]" />,
      title: "Data-Driven Shortlists",
      desc: "Say goodbye to resume guesswork. Our deep-competency reports show concrete capability metrics, not just text claims."
    },
    {
      icon: <Users className="w-8 h-8 text-[#1a1a1a]" />,
      title: "Unified Ecosystem",
      desc: "We bring candidates, university partners, and corporate recruiters onto a single intelligent platform to streamline hiring."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#1a1a1a]" />,
      title: "Frictionless Speed",
      desc: "Go from creating job descriptions to curating an active shortlist of top-tier talent in days, not months."
    }
  ];

  const team = [
    {
      name: "Sharan M Neeli",
      role: "Head of Product",
      photo: sharanDp,
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        facebook: "https://facebook.com"
      }
    },
    {
      name: "Mallikarjuna S",
      role: "Product Manager",
      photo: mallikarjunDp,
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        facebook: "https://facebook.com"
      }
    }
  ];

  return (
    <main className="min-h-screen bg-cream pt-28 md:pt-32 lg:pt-36 pb-24 font-sans text-perk-black antialiased">

      {/* Editorial Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="title-huge mt-0 font-medium tracking-[-0.04em] leading-[1.05] text-center text-perk-black mb-8"
          >
            AI-Powered Recruitment.
            <br />
            <span className="text-perk-black/30">AI-Driven Career Acceleration.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            KareerGrowth is a complete, assessment-first intelligent application designed to connect recruiters, training institutes, and candidates on a single, high-trust ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Narrative Application Vision Section */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mt-4">
        <div className="bg-white rounded-[32px] border border-perk-black/5 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-black uppercase bg-[#bef33e] text-perk-black px-3.5 py-1.5 rounded-full tracking-widest">Our Vision</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-perk-black mt-6 mb-6 leading-tight">
              One application.<br />Infinite opportunities.
            </h2>
            <p className="text-slate-500 font-medium text-[16px] leading-relaxed mb-4">
              Legacy recruiting relies on static paper resumes and disconnected tools, creating blind spots for companies, placement deans, and talent alike.
            </p>
            <p className="text-slate-500 font-medium text-[16px] leading-relaxed">
              KareerGrowth replaces manual chasing with a unified digital gateway. We track core competencies from college classroom labs to industry screening pipelines, providing a secure proctoring sandbox where candidates prove what they can build.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#f5f4eb] rounded-[24px] p-8 border border-black/5 flex flex-col justify-center h-full relative overflow-hidden group"
          >
            <h3 className="text-xl font-bold mb-4 text-perk-black">Ecosystem Architecture</h3>
            <p className="text-xs text-slate-400 font-semibold mb-6">How the platform bridges placement and hiring datasets seamlessly:</p>

            {/* CSS visual data-flow diagram */}
            <div className="space-y-4 relative z-10">
              <div className="bg-white p-4 rounded-xl border border-black/5 flex items-center gap-3 shadow-sm transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">C</div>
                <div>
                  <h4 className="text-xs font-bold text-perk-black">Candidate Pillar</h4>
                  <p className="text-[9px] text-slate-400 font-medium">Builds ATS Resumes & trains with AI Mock Interviews</p>
                </div>
              </div>

              <div className="flex justify-center my-1">
                <div className="h-4 border-l-2 border-dashed border-brand-lime" />
              </div>

              <div className="bg-white p-4 rounded-xl border border-black/5 flex items-center gap-3 shadow-sm transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">I</div>
                <div>
                  <h4 className="text-xs font-bold text-perk-black">Institutional Gateway</h4>
                  <p className="text-[9px] text-slate-400 font-medium">Monitors competency indexes & coordinates batch drives</p>
                </div>
              </div>

              <div className="flex justify-center my-1">
                <div className="h-4 border-l-2 border-dashed border-brand-lime" />
              </div>

              <div className="bg-white p-4 rounded-xl border border-black/5 flex items-center gap-3 shadow-sm transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">R</div>
                <div>
                  <h4 className="text-xs font-bold text-perk-black">Recruiter Funnel</h4>
                  <p className="text-[9px] text-slate-400 font-medium">Auto-ranks applicants & conducts AI Video Interviews</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-lime/10 rounded-full blur-2xl z-0" />
          </motion.div>
        </div>
      </section>

      {/* Interactive Application Pillar Showcase */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mt-16">
        <div className="bg-white rounded-[32px] border border-perk-black/5 p-8 sm:p-12 shadow-sm text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <span className="text-[10px] font-black uppercase bg-[#bef33e] text-perk-black px-3.5 py-1.5 rounded-full tracking-widest">Application Pillars</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-6 mb-4">Core Application Capabilities</h2>
            <p className="text-slate-500 font-medium">Select an ecosystem tab below to explore the 10 custom AI services KareerGrowth offers to solve hiring, placement, and preparation hurdles.</p>
          </motion.div>

          {/* tab switcher */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#f5f4eb] p-1.5 rounded-full border border-black/5 flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
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
                        layoutId="activeAboutTab"
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
          </div>

          {/* Features content grid under selected pillar */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
              >
                {pillarFeatures[activeTab].map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-black/5 hover:border-[#bef33e] hover:bg-[#f5f4eb]/20 transition-all duration-300 flex gap-4 items-start group shadow-sm bg-white"
                  >
                    <div className="p-3 bg-[#f5f4eb] group-hover:bg-[#bef33e] rounded-xl shrink-0 transition-colors duration-300">
                      {feat.icon}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-perk-black mb-1.5 tracking-tight group-hover:text-perk-black transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-slate-500 font-medium">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mt-16">
        <div className="bg-white rounded-[32px] border border-perk-black/5 p-8 sm:p-12 shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Core Principles Driving KareerGrowth</h2>
            <p className="text-slate-500 font-medium">We build high-trust hiring infrastructure designed for universities and fast-growth businesses.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="flex gap-4 items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300"
              >
                <div className="p-3 bg-[#bef33e] rounded-xl shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Leadership Team</h2>
          <p className="text-slate-500 font-medium mt-3">Experienced innovators committed to democratizing opportunity and streamlining placement.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-white border border-slate-100 rounded-[32px] p-8 sm:p-10 shadow-lg shadow-black/[0.02] hover:border-[#bef33e] hover:shadow-xl hover:shadow-black/[0.04] flex flex-col justify-between transition-all duration-300 min-h-[220px]"
            >
              <div className="flex items-center justify-between gap-6">
                {/* Left Side: Name, Profession, Socials */}
                <div className="text-left">
                  <h3 className="text-[20px] font-bold text-slate-900 leading-tight">{member.name}</h3>
                  <span className="text-[13px] font-bold text-[#6d28d9] uppercase tracking-wider block mt-1">{member.role}</span>

                  {/* Social media icons below profession */}
                  <div className="flex items-center gap-4 mt-4">
                    <a
                      href={member.socials?.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={member.socials?.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-600 transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href={member.socials?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-700 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>

                {/* Right Side: Circular Profile Image */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover shadow-sm border border-slate-100 shrink-0"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80";
                  }}
                />
              </div>

              {/* View Profile plain text link at the very bottom */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-perk-black group cursor-pointer">
                <span className="group-hover:text-slate-600 transition-colors">View profile</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
