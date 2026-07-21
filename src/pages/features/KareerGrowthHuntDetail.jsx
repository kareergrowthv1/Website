import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Search, SlidersHorizontal, BellRing } from 'lucide-react';
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
  { icon: Search, color: '#89D0F5', title: 'One unified dashboard', desc: 'Search LinkedIn, Indeed, Naukri, and 20+ platforms simultaneously from a single smart interface.' },
  { icon: SlidersHorizontal, color: '#C5A5F5', title: 'AI-powered matching', desc: 'Every job listing scored against your verified skills, experience, and salary expectations — only relevant roles surface.' },
  { icon: BellRing, color: '#F5A585', title: 'Instant job alerts', desc: 'Get notified the moment a matching role goes live — before hundreds of others apply — giving you a first-mover edge.' },
];

const SECTIONS = [
  { number: '01', title: 'LinkedIn Connections & Jobs', desc: 'Search LinkedIn job listings and build your professional network — all from one place. Apply to roles directly using your KareerGrowth profile and connect with hiring managers and recruiters without leaving the platform.', side: 'right', accent: '#89D0F5' },
  { number: '02', title: 'Indeed Jobs', desc: 'Access the full Indeed job board directly inside KareerGrowth Hunt. Search, filter, and apply to Indeed listings alongside LinkedIn results — no separate account or tab switching needed.', side: 'left', accent: '#BEF264' },
  { number: '03', title: 'Naukri Jobs', desc: 'Search Naukri roles — one of India\'s largest job boards — directly from your KareerGrowth dashboard. All Naukri listings appear in the same unified view as LinkedIn and Indeed results.', side: 'right', accent: '#C5A5F5' },
  { number: '04', title: 'Application Tracker', desc: 'Every job you apply to through KareerGrowth Hunt is automatically logged in your Application Tracker. Track stage, follow-ups, interview dates, and outcomes without any manual entry.', side: 'left', accent: '#F5A585' },
  { number: '05', title: 'Resume Studio', desc: 'Jump directly into Resume Studio from the Hunt dashboard to tailor your resume for any specific role. AI-powered keyword suggestions ensure your resume passes every ATS filter before you hit apply.', side: 'right', accent: '#89D0F5' },
  { number: '06', title: 'Cover Letter', desc: 'Generate a tailored, role-specific cover letter in seconds using AI. The cover letter tool reads the job description and your profile to write a compelling letter you can personalise and attach instantly.', side: 'left', accent: '#BEF264' },
  { number: '07', title: 'CAR — Challenge Action Result', desc: 'Structure your interview answers using the CAR framework — Challenge, Action, Result. The tool guides you through crafting compelling stories from your experience so you\'re ready for any behavioural question.', side: 'right', accent: '#F5A585' },
  { number: '08', title: 'Salary Negotiator', desc: 'Get data-driven salary benchmarks for your role, experience level, and location. The Salary Negotiator gives you the exact numbers and scripted responses you need to negotiate confidently and get what you deserve.', side: 'left', accent: '#C5A5F5' },
  { number: '09', title: 'LinkedIn Influencer Post', desc: 'Build your personal brand on LinkedIn with AI-crafted posts tailored to your industry and goals. The LinkedIn Influencer tool helps you stay visible to recruiters and hiring managers — even when you are not actively applying.', side: 'right', accent: '#BEF264' },
];

const FEATURES = [
  { title: 'Connections', desc: 'Build and manage your professional network directly from the Hunt dashboard to unlock referral opportunities.' },
  { title: 'LinkedIn Jobs', desc: 'Search and apply to LinkedIn job listings with your KareerGrowth profile — no re-entering details.' },
  { title: 'Indeed Jobs', desc: 'Access Indeed listings in the same unified view alongside LinkedIn and Naukri results.' },
  { title: 'Naukri Jobs', desc: 'Search Naukri roles directly from KareerGrowth Hunt without switching platforms.' },
  { title: 'Application Tracker', desc: 'Applied roles are auto-logged to your Tracker so your pipeline is always up to date.' },
  { title: 'Cover Letter', desc: 'Generate tailored cover letters for any role using AI in seconds — ready to attach and send.' },
  { title: 'CAR Tool', desc: 'Structure your interview answers using the CAR (Context, Action, Result) framework with AI guidance.' },
  { title: 'Salary Negotiator', desc: 'Get data-driven salary benchmarks and negotiation scripts tailored to your role and location.' },
  { title: 'LinkedIn Influencer', desc: 'Craft LinkedIn posts and profile updates that boost visibility with recruiters and hiring managers.' },
  { title: 'Resume Studio', desc: 'Jump directly into Resume Studio from the Hunt dashboard to tailor your resume to a specific role.' },
];

const FAQS = [
  { q: 'Which job boards does KareerGrowth Hunt search?', a: 'We currently search LinkedIn, Indeed, Naukri, Internshala, Shine, Glassdoor, and 15+ other major platforms. New sources are added every quarter.' },
  { q: 'How does the AI matching work?', a: 'We analyse your resume, skills, and past applications to build a profile, then score every job listing against that profile for relevance, fit, and growth potential.' },
  { q: 'Can I save and organise job listings I find?', a: 'Yes. Save any listing to your personal board, tag it with custom labels, add notes, and track your application status — all without leaving KareerGrowth.' },
  { q: 'Does it work for both freshers and experienced professionals?', a: 'Absolutely. We have separate filters and matching logic for entry-level, mid-career, and senior roles, as well as internships and contract positions.' },
  { q: 'Will I miss out on jobs that require direct applications on company sites?', a: 'No. For roles that redirect to company portals, we surface the direct link and pre-fill application fields wherever possible using your saved profile.' },
];

const SectionCard = ({ section }) => (
  <div className="rounded-[28px] p-10 flex flex-col justify-between min-h-[320px]" style={{ background: `${section.accent}22` }}>
    <span className="text-[100px] font-black leading-none select-none" style={{ color: `${section.accent}55` }}>{section.number}</span>
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold w-fit" style={{ background: section.accent, color: '#111' }}>
      {section.title}
    </div>
  </div>
);

const KareerGrowthHuntDetail = () => {
  const { openDemoModal } = useModalStore();
  const [email, setEmail] = useState('');

  return (
    <main className="flex-grow">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-cream h-screen overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 px-10 md:px-16 lg:px-20">
          <div className="flex flex-col justify-center pt-24 pb-12">
            <h1 className="title-huge text-perk-black leading-tight mb-6">
              One search.<br />Every job that matters.
            </h1>
            <p className="text-[16px] md:text-[17px] text-black/55 leading-relaxed font-medium mb-8 max-w-lg">
              Stop switching between 10 different job boards. KareerGrowth Hunt searches LinkedIn, Indeed, Naukri, and more simultaneously — surfacing the most relevant roles for your skills in one smart dashboard.
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
              <img src="/assets/canproducts/KareerGwoth Hunt.png" alt="KareerGrowth Hunt" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 BENEFIT CARDS ──────────────────────────────────── */}
      <section className="bg-white py-24 px-10 md:px-16 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="title-huge text-perk-black leading-tight mb-4">Find better jobs faster, without the noise.</h2>
            <p className="text-[16px] text-black/50 font-medium leading-relaxed">
              The average job seeker spends 11 hours a week just searching. We rebuilt that experience from the ground up.
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
            <h2 className="title-huge text-perk-black leading-tight mb-5">KareerGrowth Hunt<br />at a glance.</h2>
            <p className="text-[16px] text-black/55 leading-relaxed font-medium max-w-md">
              One search across 20+ platforms. AI-matched results. Instant alerts. Everything you need to find your next role — faster than anyone else.
            </p>
          </div>
          <div className="rounded-[28px] overflow-hidden bg-[#f5f4eb] shadow-sm">
            <img src="/assets/canproducts/KareerGwoth Hunt.png" alt="KareerGrowth Hunt at a glance" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ── MAIN FEATURES GRID ───────────────────────────────── */}
      <section className="bg-white py-24 px-10 md:px-16 lg:px-20 border-t border-black/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="title-huge text-perk-black leading-tight mb-4">Main features</h2>
            <p className="text-[16px] text-black/50 font-medium">Everything you need to find the right job, faster.</p>
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
            <h2 className="title-huge text-white leading-tight mb-3">Find your next role<br />before anyone else does.</h2>
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

export default KareerGrowthHuntDetail;
