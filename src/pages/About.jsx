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
        title: "Smart Resume Builder",
        desc: "Craft a professional, ATS-optimized resume tailored to your target industry using real-time AI suggestions, keyword tailoring, and high-impact action verbs."
      },
      {
        icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
        title: "Instant Cover Letter Writer",
        desc: "Generate highly personalized, role-specific cover letters in seconds that articulate your strengths and perfectly align with the specific job description."
      },
      {
        icon: <LayoutDashboard className="w-5 h-5 text-indigo-600" />,
        title: "Dynamic Application Tracker",
        desc: "Organize your entire job hunt from one central hub, tracking every application, interview date, salary offer, follow-up status, and upcoming preparation task."
      },
      {
        icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
        title: "AI Skill Gap Analyzer",
        desc: "Compare your current profile against real-time job market requirements to instantly map out the missing skills, courses, and certifications you need to succeed."
      },
      {
        icon: <UserCheck className="w-5 h-5 text-indigo-600" />,
        title: "Profile Visibility Booster",
        desc: "Transform your professional profile into a talent magnet with smart, actionable suggestions that maximize your visibility to active recruiters and headhunters."
      },
      {
        icon: <Video className="w-5 h-5 text-indigo-600" />,
        title: "Interactive Interview Coach",
        desc: "Master your next interview by practicing in realistic role-specific simulations, receiving instant feedback on your answers, tone, vocabulary, and delivery."
      },
      {
        icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
        title: "Personal Career Dashboard",
        desc: "Visualize your application funnel, analyze response rates across different industries, and discover trends that reveal which strategies yield the most interviews."
      },
      {
        icon: <Download className="w-5 h-5 text-indigo-600" />,
        title: "Document Export Hub",
        desc: "Export your application documents and skill reports in clean, high-fidelity formats like PDF and DOCX, or share dynamic, secure web links with hiring managers."
      },
      {
        icon: <MailOpen className="w-5 h-5 text-indigo-600" />,
        title: "Smart Follow-Up Assistant",
        desc: "Never miss an opportunity by using smart schedule reminders, follow-up triggers, and professionally drafted email templates tailored for post-interview outreach."
      },
      {
        icon: <Briefcase className="w-5 h-5 text-indigo-600" />,
        title: "AI Job Recommendations",
        desc: "Receive daily, highly relevant job matches that perfectly align with your verified skills, experience level, career aspirations, and salary expectations."
      }
    ],
    recruiters: [
      {
        icon: <Search className="w-5 h-5 text-emerald-600" />,
        title: "AI Candidate Screening",
        desc: "Streamline your hiring funnel with intelligent AI screening that instantly parses, analyzes, and shortlists top applicants based on multi-dimensional skill profiles and precise job criteria."
      },
      {
        icon: <Award className="w-5 h-5 text-emerald-600" />,
        title: "Smart Resume Match & Ranking",
        desc: "Eliminate manual sorting with smart ranking algorithms that evaluate and score applicant resumes against your technical requirements, experience level, and cultural fit metrics."
      },
      {
        icon: <ClipboardCheck className="w-5 h-5 text-emerald-600" />,
        title: "Intelligent Skills Assessment",
        desc: "Design and launch customized technical tests, behavioral assessments, and cognitive challenges to objectively evaluate and verify candidate competencies before interviewing."
      },
      {
        icon: <Calendar className="w-5 h-5 text-emerald-600" />,
        title: "Automated Interview Scheduler",
        desc: "Coordinate seamless interview cycles with automated scheduling, real-time feedback collation, and integrated scorecards that keep hiring managers perfectly aligned."
      },
      {
        icon: <Camera className="w-5 h-5 text-emerald-600" />,
        title: "Cognitive Video Evaluation",
        desc: "Conduct asynchronous or live video interviews integrated with speech-to-text transcription, sentiment checks, and automated behavioral insights to speed up screening."
      },
      {
        icon: <PieChart className="w-5 h-5 text-emerald-600" />,
        title: "Predictive Hiring Analytics",
        desc: "Gain powerful intelligence on your hiring operations with real-time analytics tracking applicant flow, cost-per-hire, channel efficiency, and team performance metrics."
      },
      {
        icon: <Send className="w-5 h-5 text-emerald-600" />,
        title: "Smart Job Posting Optimizer",
        desc: "Draft high-converting job descriptions using AI optimizations and syndicate them across top-tier job boards and professional networks with a single click."
      },
      {
        icon: <Database className="w-5 h-5 text-emerald-600" />,
        title: "Intelligent Talent CRM",
        desc: "Build a highly structured, searchable talent pool that categorizes past applicants, tags skills dynamically, and automatically flags passive candidates for new roles."
      },
      {
        icon: <MessageSquare className="w-5 h-5 text-emerald-600" />,
        title: "Automated Recruiter Outreach",
        desc: "Maintain high applicant engagement with personalized, automated email and SMS touchpoints that update candidates on their application status at every stage."
      },
      {
        icon: <Zap className="w-5 h-5 text-emerald-600" />,
        title: "Hiring Workflow Automation",
        desc: "Accelerate time-to-hire by automating repetitive administrative steps, background checks, document signing, and offer approvals across your entire organization."
      }
    ],
    institutes: [
      {
        icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
        title: "Smart Placement Command Center",
        desc: "Empower placement cell officers with a unified workspace to track student registrations, corporate invitations, application progress, and final placement outcomes in real time."
      },
      {
        icon: <MapPin className="w-5 h-5 text-blue-600" />,
        title: "AI Campus Recruitment Platform",
        desc: "Bridge the gap between education and employment by giving top recruiters direct, secure access to your verified student profiles, portfolios, and graduation timelines."
      },
      {
        icon: <FileSpreadsheet className="w-5 h-5 text-blue-600" />,
        title: "Employability Skill Benchmarking",
        desc: "Benchmark your student cohort's employability with comprehensive assessments covering domain knowledge, coding proficiency, aptitude, and soft skills."
      },
      {
        icon: <LineChart className="w-5 h-5 text-blue-600" />,
        title: "Predictive Placement Analytics",
        desc: "Visualize historical and real-time placement statistics, company-wise selections, package distributions, and branch performance to refine your institutional strategy."
      },
      {
        icon: <Mic className="w-5 h-5 text-blue-600" />,
        title: "AI-Powered Mock Interviews",
        desc: "Provide students with unlimited access to realistic AI-conducted interview simulations tailored to specific roles, with instant speech and body language evaluations."
      },
      {
        icon: <FileSignature className="w-5 h-5 text-blue-600" />,
        title: "Intelligent Resume Studio",
        desc: "Provide students with premium, ATS-optimized resume templates and real-time AI copy-editing suggestions to ensure their profiles stand out to top-tier hiring partners."
      },
      {
        icon: <Compass className="w-5 h-5 text-blue-600" />,
        title: "AI Industry Readiness Tracking",
        desc: "Identify high-potential talent and students who need additional support using predictive readiness scores based on grades, assessment scores, and mock interviews."
      },
      {
        icon: <BookOpen className="w-5 h-5 text-blue-600" />,
        title: "Dynamic Curriculum Optimizer",
        desc: "Design and deliver targeted upskilling courses, certification paths, and bootcamps directly aligned with the current skill demands of the hiring market."
      },
      {
        icon: <Users className="w-5 h-5 text-blue-600" />,
        title: "Corporate Placement Portal",
        desc: "Facilitate seamless collaboration between placement coordinators and corporate partners for pre-placement talks, guest lectures, hackathons, and campus drives."
      },
      {
        icon: <CheckCircle2 className="w-5 h-5 text-blue-600" />,
        title: "Automated Placement Audits",
        desc: "Generate audit-ready, visually rich reports documenting student placement ratios, recruiter feedback, average packages, and skill levels for accreditation."
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
