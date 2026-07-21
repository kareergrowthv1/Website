import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Map, Globe, TrendingUp } from 'lucide-react';
import { useModalStore } from '../../data/useModalStore';

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="border-t border-black/10" />
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between py-[20px] text-left group">
        <span className="text-[17px] font-bold text-[#111] pr-8 leading-snug">{q}</span>
        <ChevronDown size={20} className={`flex-shrink-0 text-black/40 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-[15px] text-black/55 leading-relaxed font-medium">{a}</p>}
    </div>
  );
};

const BENEFITS = [
  { icon: Map, color: '#89D0F5', title: 'AI career roadmap', desc: 'A personalised, step-by-step career path based on your current skills, target role, and industry — updated as the market evolves.' },
  { icon: Globe, color: '#C5A5F5', title: 'Portfolio & profile builder', desc: 'Build a dynamic professional portfolio showcasing your projects, skills, and achievements — shareable with a single link.' },
  { icon: TrendingUp, color: '#F5A585', title: 'Growth analytics', desc: 'Track how your skills, profile views, and application success rate change over time with visual dashboards.' },
];

const SECTIONS = [
  { number: '01', title: 'Overview', desc: 'A complete snapshot of your career progress — active goals, skill milestones, upcoming deadlines, and platform activity — all in one dashboard so you always know exactly where you stand and what to focus on next.', side: 'right', accent: '#89D0F5' },
  { number: '02', title: 'Roadmap', desc: 'Your personalised AI career roadmap with milestones, skills to acquire, and realistic timeframes — built from your current role and target destination. Updated automatically as the job market evolves.', side: 'left', accent: '#BEF264' },
  { number: '03', title: 'Jobs', desc: 'Role recommendations matched specifically to your roadmap stage and skill profile — surfaced from LinkedIn, Indeed, Naukri, and other connected platforms so every suggestion is relevant to where your career is heading.', side: 'right', accent: '#C5A5F5' },
  { number: '04', title: 'Resume', desc: 'Keep your resume permanently in sync with your career platform profile. Tailor it for any specific role in seconds using AI keyword suggestions and ATS scoring — then export as PDF or share as a live link.', side: 'left', accent: '#F5A585' },
  { number: '05', title: 'Portfolio', desc: 'Build a dynamic professional portfolio that showcases your projects, skills, certifications, and achievements. Every portfolio gets a custom KareerGrowth URL you can share directly with any recruiter or hiring manager.', side: 'right', accent: '#89D0F5' },
  { number: '06', title: 'Auto Apply', desc: 'Let KareerGrowth apply to matched roles on your behalf. Auto Apply uses your saved profile, resume, and job preferences to submit targeted applications — so your job search runs even when you are not actively at your desk.', side: 'left', accent: '#BEF264' },
  { number: '07', title: 'My Profile', desc: 'Your complete professional profile — skills, work experience, education, certifications, and career preferences — all in one place. The stronger your profile, the better your job matches, roadmap accuracy, and Auto Apply performance.', side: 'right', accent: '#F5A585' },
];

const FEATURES = [
  { title: 'Overview', desc: 'A dashboard snapshot of your career progress, active goals, and upcoming milestones at a glance.' },
  { title: 'Roadmap', desc: 'AI-generated career path with milestones, skill targets, and timeframes personalised to your goals.' },
  { title: 'Jobs', desc: 'Role recommendations matched to your roadmap stage — surfaced from across all connected platforms.' },
  { title: 'Resume', desc: 'Keep your resume in sync with your career platform profile and tailor it for specific roles instantly.' },
  { title: 'Portfolio', desc: 'Dynamic portfolio with a shareable URL — showcase projects, skills, and achievements to recruiters.' },
  { title: 'Auto Apply', desc: 'Automated applications to matched roles using your saved profile, resume, and job preferences.' },
  { title: 'My Profile', desc: 'Your complete professional profile — skills, experience, certifications, and career preferences.' },
];

const FAQS = [
  { q: 'How does the AI career roadmap work?', a: 'You input your current role, skills, and target destination. Our AI analyses thousands of career trajectories in your industry and generates a personalised path with specific milestones, skills to acquire, and timeframes.' },
  { q: 'Can I use the portfolio as my personal website?', a: 'Yes. Every portfolio gets a custom KareerGrowth URL and can be embedded in your LinkedIn, resume, or email signature. Custom domains are available on paid plans.' },
  { q: 'Does it suggest certifications and courses?', a: 'Yes. The roadmap identifies skill gaps and recommends specific certifications, online courses, and projects to build your target profile.' },
  { q: 'How often is career path data updated?', a: 'We update our career graph data monthly using job posting trends, recruiter signals, and salary benchmarks from across the market.' },
  { q: 'Is this useful for freshers or only experienced professionals?', a: 'It\'s built for both. Freshers use it to discover which entry paths to target; experienced professionals use it to plan transitions and negotiate raises.' },
];

const SectionCard = ({ section }) => (
  <div className="rounded-[28px] p-10 flex flex-col justify-between min-h-[320px]" style={{ background: `${section.accent}22` }}>
    <span className="text-[100px] font-black leading-none select-none" style={{ color: `${section.accent}55` }}>{section.number}</span>
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold w-fit" style={{ background: section.accent, color: '#111' }}>
      {section.title}
    </div>
  </div>
);

const CareerPlatformDetail = () => {
  const { openDemoModal } = useModalStore();
  const [email, setEmail] = useState('');

  return (
    <main className="flex-grow">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-cream h-screen overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 px-10 md:px-16 lg:px-20">
          <div className="flex flex-col justify-center pt-24 pb-12">
            <h1 className="title-huge text-perk-black leading-tight mb-6">
              Your career, mapped<br />and accelerated.
            </h1>
            <p className="text-[16px] md:text-[17px] text-black/55 leading-relaxed font-medium mb-8 max-w-lg">
              KareerGrowth Career Platform gives you an AI-powered roadmap, portfolio builder, and growth analytics — so you're not just applying for jobs but building a career with intention and direction.
            </p>
            <div className="mb-3">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Work email address"
                className="w-full max-w-lg border border-black/15 rounded-xl px-5 py-4 text-[15px] text-[#111] placeholder-black/35 bg-transparent outline-none focus:border-black/40 transition-colors" />
            </div>
            <p className="text-[12px] text-black/40 font-medium mb-6 max-w-lg">
              We will record your data for marketing purposes. Read more in our{' '}
              <Link to="/legal/privacy" className="underline text-black/50 hover:text-black">Privacy Policy</Link>.
            </p>
            <button onClick={openDemoModal} className="flex items-center gap-2 bg-[#BEF264] text-black font-bold text-[15px] px-7 py-3.5 rounded-full w-fit hover:bg-[#a3d44d] transition-colors group/cta">
              Book a demo
              <ChevronRight size={16} className="group-hover/cta:translate-x-0.5 transition-transform" />
            </button>
          </div>
          <div className="hidden lg:flex items-center justify-center py-20">
            <div className="w-[82%] rounded-[28px] overflow-hidden shadow-xl">
              <img src="/assets/canproducts/career platform.png" alt="Career Platform" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 BENEFIT CARDS ──────────────────────────────────── */}
      <section className="bg-white py-24 px-10 md:px-16 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="title-huge text-perk-black leading-tight mb-4">A platform that grows with your ambition.</h2>
            <p className="text-[16px] text-black/50 font-medium leading-relaxed">
              Most platforms help you find a job. We help you build a career — from your first internship to your next senior role.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-[#f5f4eb] rounded-[20px] p-8 flex flex-col gap-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: b.color }}>
                  <div className="w-7 h-7 rounded-full bg-[#BEF264] flex items-center justify-center">
                    <b.icon size={14} className="text-[#111]" strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-[20px] font-black text-[#111] leading-snug mb-3">{b.title}</h3>
                  <p className="text-[14px] text-black/55 leading-relaxed font-medium">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALTERNATING SECTIONS ─────────────────────────────── */}
      {SECTIONS.map((section) => (
        <section key={section.number} className="bg-white py-20 px-10 md:px-16 lg:px-20 border-t border-black/5">
          <div className="max-w-[1300px] mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${section.side === 'left' ? 'lg:grid-flow-dense' : ''}`}>
              <div className={section.side === 'left' ? 'lg:col-start-2' : ''}>
                <span className="text-[12px] font-bold text-black/30 tracking-widest uppercase mb-4 block">Feature {section.number}</span>
                <h2 className="title-huge text-perk-black leading-tight mb-5">{section.title}</h2>
                <p className="text-[16px] text-black/55 leading-relaxed font-medium max-w-lg">{section.desc}</p>
              </div>
              <div className={section.side === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <SectionCard section={section} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── AT A GLANCE ──────────────────────────────────────── */}
      <section className="bg-white py-20 px-10 md:px-16 lg:px-20 border-t border-black/5">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="title-huge text-perk-black leading-tight mb-5">Career Platform<br />at a glance.</h2>
            <p className="text-[16px] text-black/55 leading-relaxed font-medium max-w-md">
              AI roadmap, portfolio builder, and growth analytics — everything you need to build a career with intention, not just find a job.
            </p>
          </div>
          <div className="rounded-[28px] overflow-hidden bg-[#f5f4eb] shadow-sm">
            <img src="/assets/canproducts/career platform.png" alt="Career Platform at a glance" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ── MAIN FEATURES GRID ───────────────────────────────── */}
      <section className="bg-white py-24 px-10 md:px-16 lg:px-20 border-t border-black/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="title-huge text-perk-black leading-tight mb-4">Main features</h2>
            <p className="text-[16px] text-black/50 font-medium">Build the career you actually want.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-[#f5f4eb] rounded-[20px] p-8">
                <h3 className="text-[19px] font-black text-[#111] leading-snug mb-3">{f.title}</h3>
                <p className="text-[14px] text-black/55 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-10 md:px-20 lg:px-32 border-t border-black/5">
        <div className="max-w-[900px] mx-auto">
          <h2 className="title-huge text-perk-black text-center leading-tight mb-16">Frequently asked questions</h2>
          <div>
            {FAQS.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
            <div className="border-t border-black/10" />
          </div>
        </div>
      </section>

      {/* ── TRUST BANNER ─────────────────────────────────────── */}
      <section className="bg-cream px-10 md:px-16 lg:px-20 py-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-[16px] font-bold text-[#111] max-w-lg leading-snug">
              KareerGrowth is trusted by 12,000+ companies and 1,000,000+ candidates across India and Southeast Asia.
            </p>
            <div className="flex items-center gap-6 flex-shrink-0">
              <div className="text-center"><p className="text-[28px] font-black text-[#111]">98%</p><p className="text-[11px] font-bold text-black/40 uppercase tracking-wider">Match accuracy</p></div>
              <div className="w-px h-10 bg-black/10" />
              <div className="text-center"><p className="text-[28px] font-black text-[#111]">12K+</p><p className="text-[11px] font-bold text-black/40 uppercase tracking-wider">Companies</p></div>
              <div className="w-px h-10 bg-black/10" />
              <div className="text-center"><p className="text-[28px] font-black text-[#111]">1M+</p><p className="text-[11px] font-bold text-black/40 uppercase tracking-wider">Candidates</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK CTA ─────────────────────────────────────────── */}
      <section className="bg-[#141414] py-20 px-10 md:px-16 lg:px-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">
          <div>
            <h2 className="title-huge text-white leading-tight mb-3">Build the career<br />you actually want.</h2>
            <p className="text-[15px] text-white/45 font-medium">Join 500,000+ candidates already using KareerGrowth.</p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <input type="email" placeholder="Work email address" className="w-full border border-white/20 rounded-xl px-5 py-4 text-[15px] text-white placeholder-white/50 bg-transparent outline-none focus:border-white/50 transition-colors" />
            <p className="text-[12px] text-white/35 font-medium">
              We will record your data for marketing purposes. Read more in our{' '}
              <Link to="/legal/privacy" className="underline text-white/50 hover:text-white">Privacy Policy</Link>.
            </p>
            <button onClick={openDemoModal} className="flex items-center gap-2 bg-white text-black font-bold text-[15px] px-7 py-3.5 rounded-full w-fit hover:bg-white/90 transition-colors group/dcta">
              Book a demo
              <ChevronRight size={16} className="group-hover/dcta:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default CareerPlatformDetail;
