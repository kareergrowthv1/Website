import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, MessageSquare, BarChart2, Zap } from 'lucide-react';
import { useModalStore } from '../../data/useModalStore';

/* ─── FAQ Item ───────────────────────────────────────────────── */
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="border-t border-black/10" />
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-[20px] text-left group"
      >
        <span className="text-[17px] font-bold text-[#111] pr-8 leading-snug">{q}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-black/40 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-[15px] text-black/55 leading-relaxed font-medium">{a}</p>
      )}
    </div>
  );
};

/* ─── Data ───────────────────────────────────────────────────── */
const BENEFITS = [
  {
    icon: MessageSquare,
    color: '#89D0F5',
    title: 'Instant AI feedback',
    desc: 'Get scored on answers, tone, vocabulary, and confidence the moment you finish each round — no waiting.',
  },
  {
    icon: BarChart2,
    color: '#C5A5F5',
    title: 'Real-time analytics',
    desc: 'Track your improvement across sessions with round-by-round performance dashboards and progress charts.',
  },
  {
    icon: Zap,
    color: '#F5A585',
    title: 'Speech & delivery scoring',
    desc: 'Pace, filler words, eye contact cues, and overall presentation quality scored in real time.',
  },
];

const ROUNDS = [
  {
    number: '01',
    title: 'Communication',
    desc: 'Evaluate your soft skills and situational judgment. The AI assesses clarity, tone, confidence, pacing, and how well you handle behavioural questions under pressure.',
    side: 'right',
    accent: '#BEF264',
  },
  {
    number: '02',
    title: 'Technical',
    desc: 'Test your technical depth and problem-solving ability. Live coding challenges, system design questions, and role-specific technical scenarios evaluated for correctness and approach.',
    side: 'left',
    accent: '#89D0F5',
  },
  {
    number: '03',
    title: 'Aptitude',
    desc: 'Sharpen your logical reasoning and numerical puzzle-solving skills. Timed modules that closely mirror the aptitude assessments used in real campus and lateral hiring.',
    side: 'right',
    accent: '#C5A5F5',
  },
  {
    number: '04',
    title: 'HR / Management',
    desc: 'Explore culture fit and career alignment. The AI asks about your work style, motivations, and career goals — then scores your answers against what top hiring teams look for.',
    side: 'left',
    accent: '#F5A585',
  },
];

const FEATURES = [
  { title: 'Role-specific questions', desc: 'Questions tailored to your target job pulled directly from your Application Tracker.' },
  { title: 'Instant AI scoring', desc: 'Every answer scored for content, delivery, and relevance the moment you finish.' },
  { title: 'Speech analysis', desc: 'Real-time analysis of pace, filler words, and overall presentation quality.' },
  { title: 'Full performance report', desc: 'Round-by-round breakdown with improvement areas and sample ideal answers.' },
  { title: 'Unlimited attempts', desc: 'Practice as many times as needed and track your improvement across every session.' },
  { title: 'Company-specific prep', desc: 'Target specific companies and get questions based on their real hiring patterns.' },
];

const FAQS = [
  { q: 'How realistic are the AI mock interviews?', a: 'Our AI models are trained on thousands of real interview transcripts from top companies. They ask follow-up questions, probe deeper on weak answers, and evaluate both content and delivery just like a real interviewer would.' },
  { q: 'How many mock interview attempts do I get?', a: 'You can practice as many times as you need. Each attempt is scored independently so you can track your improvement over time.' },
  { q: 'Can I practice for a specific company or role?', a: 'Yes. You can specify the role, industry, and target company and the AI tailors the question set, difficulty level, and evaluation criteria accordingly.' },
  { q: 'Does the AI evaluate technical coding answers?', a: 'Yes. Our technical round includes live coding challenges evaluated for correctness, efficiency, and approach — not just whether it runs.' },
  { q: 'Will I get a score and report after each session?', a: 'After every session you receive a full performance report with round-by-round scores, specific improvement areas, and sample ideal answers for questions you struggled with.' },
];

/* ─── Round Visual Card ──────────────────────────────────────── */
const RoundCard = ({ round }) => (
  <div
    className="rounded-[28px] p-10 flex flex-col justify-between min-h-[340px]"
    style={{ background: `${round.accent}22` }}
  >
    <span
      className="text-[100px] font-black leading-none select-none"
      style={{ color: `${round.accent}55` }}
    >
      {round.number}
    </span>
    <div>
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold mb-0"
        style={{ background: round.accent, color: '#111' }}
      >
        {round.title} Round
      </div>
    </div>
  </div>
);

/* ─── Page ───────────────────────────────────────────────────── */
const MockInterviewDetail = () => {
  const { openDemoModal } = useModalStore();
  const [email, setEmail] = useState('');

  return (
    <main className="flex-grow">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-cream h-screen overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 px-10 md:px-16 lg:px-20">
          <div className="flex flex-col justify-center pt-24 pb-12">
            <h1 className="title-huge text-perk-black leading-tight mb-6">
              Configure Your<br />Mock Interview.
            </h1>
            <p className="text-[16px] md:text-[17px] text-black/55 leading-relaxed font-medium mb-8 max-w-lg">
              Practice mock interviews with AI feedback. Select a job from your Application Tracker to tailor your mock interview to the exact role you're targeting.
            </p>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Work email address"
                className="w-full max-w-lg border border-black/15 rounded-xl px-5 py-4 text-[15px] text-[#111] placeholder-black/35 bg-transparent outline-none focus:border-black/40 transition-colors"
              />
            </div>
            <p className="text-[12px] text-black/40 font-medium mb-6 max-w-lg">
              We will record your data for marketing purposes. Read more in our{' '}
              <Link to="/legal/privacy" className="underline text-black/50 hover:text-black">Privacy Policy</Link>.
            </p>
            <button
              onClick={openDemoModal}
              className="flex items-center gap-2 bg-[#BEF264] text-black font-bold text-[15px] px-7 py-3.5 rounded-full w-fit hover:bg-[#a3d44d] transition-colors group/cta"
            >
              Book a demo
              <ChevronRight size={16} className="group-hover/cta:translate-x-0.5 transition-transform" />
            </button>
          </div>
          <div className="hidden lg:flex items-center justify-center py-20">
            <div className="w-[82%] rounded-[28px] overflow-hidden shadow-xl">
              <img src="/assets/canproducts/mock interview.png" alt="Mock Interview" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 BENEFIT CARDS ──────────────────────────────────── */}
      <section className="bg-white py-24 px-10 md:px-16 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="title-huge text-perk-black leading-tight mb-4">
              Four rounds built for real hiring.
            </h2>
            <p className="text-[16px] text-black/50 font-medium leading-relaxed">
              Each round mirrors the exact structure of top company hiring processes — so you walk in prepared, not surprised.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-[#f5f4eb] rounded-[20px] p-8 flex flex-col gap-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: b.color }}
                >
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

      {/* ── ALTERNATING ROUND SECTIONS ───────────────────────── */}
      {ROUNDS.map((round) => (
        <section key={round.number} className="bg-white py-20 px-10 md:px-16 lg:px-20 border-t border-black/5">
          <div className="max-w-[1300px] mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${round.side === 'left' ? 'lg:grid-flow-dense' : ''}`}>

              {/* Text */}
              <div className={round.side === 'left' ? 'lg:col-start-2' : ''}>
                <span className="text-[12px] font-bold text-black/30 tracking-widest uppercase mb-4 block">
                  Round {round.number}
                </span>
                <h2 className="title-huge text-perk-black leading-tight mb-5">{round.title}</h2>
                <p className="text-[16px] text-black/55 leading-relaxed font-medium max-w-lg">{round.desc}</p>
              </div>

              {/* Visual */}
              <div className={round.side === 'left' ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <RoundCard round={round} />
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── AT A GLANCE ──────────────────────────────────────── */}
      <section className="bg-white py-20 px-10 md:px-16 lg:px-20 border-t border-black/5">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="title-huge text-perk-black leading-tight mb-5">
              Mock Interview<br />at a glance.
            </h2>
            <p className="text-[16px] text-black/55 leading-relaxed font-medium max-w-md">
              Practice interviews with AI feedback. Four rounds, instant scoring, and detailed reports — all built around your target role.
            </p>
          </div>
          <div className="rounded-[28px] overflow-hidden bg-[#f5f4eb] shadow-sm">
            <img
              src="/assets/canproducts/mock interview.png"
              alt="Mock Interview at a glance"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── MAIN FEATURES GRID ───────────────────────────────── */}
      <section className="bg-white py-24 px-10 md:px-16 lg:px-20 border-t border-black/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="title-huge text-perk-black leading-tight mb-4">Main features</h2>
            <p className="text-[16px] text-black/50 font-medium">Get to know your AI mock interview coach.</p>
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
          <h2 className="title-huge text-perk-black text-center leading-tight mb-16">
            Frequently asked questions
          </h2>
          <div>
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
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
              <div className="text-center">
                <p className="text-[28px] font-black text-[#111]">98%</p>
                <p className="text-[11px] font-bold text-black/40 uppercase tracking-wider">Match accuracy</p>
              </div>
              <div className="w-px h-10 bg-black/10" />
              <div className="text-center">
                <p className="text-[28px] font-black text-[#111]">12K+</p>
                <p className="text-[11px] font-bold text-black/40 uppercase tracking-wider">Companies</p>
              </div>
              <div className="w-px h-10 bg-black/10" />
              <div className="text-center">
                <p className="text-[28px] font-black text-[#111]">1M+</p>
                <p className="text-[11px] font-bold text-black/40 uppercase tracking-wider">Candidates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK CTA ─────────────────────────────────────────── */}
      <section className="bg-[#141414] py-20 px-10 md:px-16 lg:px-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">
          <div>
            <h2 className="title-huge text-white leading-tight mb-3">
              Start practising today.<br />Get hired faster.
            </h2>
            <p className="text-[15px] text-white/45 font-medium">
              Join 500,000+ candidates already using KareerGrowth.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <input
              type="email"
              placeholder="Work email address"
              className="w-full border border-white/20 rounded-xl px-5 py-4 text-[15px] text-white placeholder-white/50 bg-transparent outline-none focus:border-white/50 transition-colors"
            />
            <p className="text-[12px] text-white/35 font-medium">
              We will record your data for marketing purposes. Read more in our{' '}
              <Link to="/legal/privacy" className="underline text-white/50 hover:text-white">Privacy Policy</Link>.
            </p>
            <button
              onClick={openDemoModal}
              className="flex items-center gap-2 bg-white text-black font-bold text-[15px] px-7 py-3.5 rounded-full w-fit hover:bg-white/90 transition-colors group/dcta"
            >
              Book a demo
              <ChevronRight size={16} className="group-hover/dcta:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default MockInterviewDetail;
