import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, Code2, Brain, Trophy } from 'lucide-react';
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
  { icon: Code2, color: '#89D0F5', title: 'DSA & coding practice', desc: 'Hundreds of curated DSA problems organised by difficulty, topic, and company with step-by-step solutions.' },
  { icon: Brain, color: '#C5A5F5', title: 'Aptitude & reasoning', desc: 'Timed modules covering quant, logical reasoning, and verbal ability — the exact format used in campus and lateral hiring.' },
  { icon: Trophy, color: '#F5A585', title: 'Company-specific tracks', desc: 'Practice tracks tailored to TCS, Infosys, Amazon, Google, and 100+ companies built from real placement patterns.' },
];

const SECTIONS = [
  { number: '01', title: 'Coding Practice', desc: 'A structured coding environment with DSA problems organised by category, topic, and difficulty. Drill down from category to topic to individual questions — with Easy and Hard levels — in a full in-browser IDE with console and output panel.', side: 'right', accent: '#89D0F5' },
  { number: '02', title: 'Courses', desc: 'Structured programming courses designed to take you from concept to implementation. Each course is broken into modules so you can learn at your own pace and apply concepts directly in the coding environment.', side: 'left', accent: '#BEF264' },
  { number: '03', title: 'Knowledge Base', desc: 'A searchable reference library covering programming concepts, data structures, algorithms, and interview theory — everything you need to understand the why behind every problem you solve.', side: 'right', accent: '#F5A585' },
];

const FEATURES = [
  { title: 'Coding Practice', desc: 'DSA problems by category and topic with an in-browser IDE, console, and output panel.' },
  { title: 'Easy & Hard levels', desc: 'Every problem set has Easy and Hard difficulty tiers so you can progress at the right pace.' },
  { title: 'Category drill-down', desc: 'Navigate from category to topic to individual questions — structured like a real learning path.' },
  { title: 'Courses', desc: 'Structured programming courses broken into modules — learn concepts and apply them immediately.' },
  { title: 'Knowledge Base', desc: 'A searchable reference library covering DSA concepts, algorithms, and interview theory.' },
  { title: 'In-browser IDE', desc: 'Write, run, and debug code directly in the browser — no setup, no installs required.' },
];

const FAQS = [
  { q: 'Is the Practice Hub suitable for campus placements?', a: 'Yes. Our content is specifically curated for campus hiring at both product companies and service firms, covering TCS, Infosys, Wipro, Amazon, and 100+ others.' },
  { q: 'How are problems updated?', a: 'Our editorial team reviews and updates the problem bank monthly, adding new questions reported by community members from recent assessments.' },
  { q: 'Can I practice timed mock tests?', a: 'Yes. Every section has both untimed practice mode and timed mock test mode that closely simulates the actual test-taking environment.' },
  { q: 'Does it cover system design questions?', a: 'For senior roles, yes. We have a dedicated system design module with case studies, framework guides, and reviewed example solutions.' },
  { q: 'Are solutions explained step by step?', a: 'Every problem includes a detailed editorial with multiple approaches, time and space complexity analysis, and common pitfalls to avoid.' },
];

const SectionCard = ({ section }) => (
  <div className="rounded-[28px] p-10 flex flex-col justify-between min-h-[320px]" style={{ background: `${section.accent}22` }}>
    <span className="text-[100px] font-black leading-none select-none" style={{ color: `${section.accent}55` }}>{section.number}</span>
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold w-fit" style={{ background: section.accent, color: '#111' }}>
      {section.title}
    </div>
  </div>
);

const PracticeHubDetail = () => {
  const { openDemoModal } = useModalStore();
  const [email, setEmail] = useState('');

  return (
    <main className="flex-grow">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-cream h-screen overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 px-10 md:px-16 lg:px-20">
          <div className="flex flex-col justify-center pt-24 pb-12">
            <h1 className="title-huge text-perk-black leading-tight mb-6">
              Practice today.<br />Ace every round.
            </h1>
            <p className="text-[16px] md:text-[17px] text-black/55 leading-relaxed font-medium mb-8 max-w-lg">
              KareerGrowth Practice Hub gives you a structured environment to sharpen DSA, solve coding challenges, and master aptitude — with curated sets built specifically for the roles you're targeting.
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
              <img src="/assets/canproducts/practice hub.png" alt="Practice Hub" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 BENEFIT CARDS ──────────────────────────────────── */}
      <section className="bg-white py-24 px-10 md:px-16 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="title-huge text-perk-black leading-tight mb-4">Preparation that mirrors the real assessment.</h2>
            <p className="text-[16px] text-black/50 font-medium leading-relaxed">
              Generic practice sets don't prepare you for role-specific assessments. We map every problem set directly to what companies actually test for.
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
            <h2 className="title-huge text-perk-black leading-tight mb-5">Practice Hub<br />at a glance.</h2>
            <p className="text-[16px] text-black/55 leading-relaxed font-medium max-w-md">
              DSA, aptitude, and company-specific tracks — all in one structured environment built to prepare you for exactly what hiring teams test.
            </p>
          </div>
          <div className="rounded-[28px] overflow-hidden bg-[#f5f4eb] shadow-sm">
            <img src="/assets/canproducts/practice hub.png" alt="Practice Hub at a glance" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ── MAIN FEATURES GRID ───────────────────────────────── */}
      <section className="bg-white py-24 px-10 md:px-16 lg:px-20 border-t border-black/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="title-huge text-perk-black leading-tight mb-4">Main features</h2>
            <p className="text-[16px] text-black/50 font-medium">Everything you need to practise smarter and land the role you want.</p>
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
            <h2 className="title-huge text-white leading-tight mb-3">Start practising smarter.<br />Land the role you want.</h2>
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

export default PracticeHubDetail;
