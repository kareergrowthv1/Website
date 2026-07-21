import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, ClipboardList, Calendar, BellDot } from 'lucide-react';
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
  { icon: ClipboardList, color: '#89D0F5', title: 'Full application history', desc: 'Log every role — company, position, date, salary, source — and see your entire pipeline from one clean board.' },
  { icon: Calendar, color: '#C5A5F5', title: 'Interview scheduling', desc: 'Add interview dates directly and get smart reminders before each round with links to your prep materials.' },
  { icon: BellDot, color: '#F5A585', title: 'Follow-up assistant', desc: 'Get prompted to follow up at the right intervals, with pre-written email templates you can send in under 60 seconds.' },
];

const SECTIONS = [
  { number: '01', title: 'Saved', desc: 'Roles you want to pursue. Bookmark any job listing from KareerGrowth Hunt or add one manually. Every saved card captures company, role, source, and expected salary so nothing important is ever forgotten.', side: 'right', accent: '#89D0F5' },
  { number: '02', title: 'Applied', desc: 'Waiting to hear back. Once you submit an application, move the card to Applied. Track the date you applied, the channel you used, and any reference contacts — so you always know exactly where each role stands.', side: 'left', accent: '#BEF264' },
  { number: '03', title: 'Active', desc: 'Interviews and conversations in progress. The moment a recruiter reaches out or an interview is scheduled, move the card to Active. Add interview rounds, dates, interviewers, and notes — all in one place.', side: 'right', accent: '#C5A5F5' },
  { number: '04', title: 'Preparation', desc: 'Resume and research stage. Use the Preparation column to tailor your resume, research the company, and plan your interview answers before your Active interviews begin. Keep all your notes attached to the card.', side: 'left', accent: '#F5A585' },
  { number: '05', title: 'Offered', desc: 'An offer is on the table. Log the full offer details — CTC, joining date, benefits, and deadline. Compare multiple offers side by side and use the built-in salary benchmarks to decide with confidence.', side: 'right', accent: '#BEF264' },
  { number: '06', title: 'Closed', desc: 'Done — learn and move on. Mark every closed role with an outcome: No response, Rejected, In progress, Offer, or Withdrew. Every closed card becomes a data point that helps you refine your next search.', side: 'left', accent: '#F87171' },
];

const FEATURES = [
  { title: 'Saved', desc: 'Bookmark roles you want to pursue — with company, role, source, and salary captured on the card.' },
  { title: 'Applied', desc: 'Log submitted applications with date, channel, and contact so your pipeline stays complete.' },
  { title: 'Active', desc: 'Track live interviews — rounds, dates, interviewers, and notes all on one card.' },
  { title: 'Preparation', desc: 'Research and resume tailoring stage — keep all your prep notes attached to the role card.' },
  { title: 'Offered', desc: 'Log and compare full offer details — CTC, joining date, benefits, and deadline side by side.' },
  { title: 'Closed', desc: 'Mark outcomes (No response, Rejected, Offer, Withdrew) so every experience informs the next.' },
];

const FAQS = [
  { q: 'Can I import applications I\'ve already submitted?', a: 'Yes. You can bulk import past applications via CSV or manually log them. Our browser extension also auto-captures applications you submit on major job boards.' },
  { q: 'Does it sync with my calendar?', a: 'Yes. Interview dates can be synced directly to Google Calendar or Outlook with one click, including joining links if the interview is virtual.' },
  { q: 'Can I track offers and compare packages?', a: 'Yes. The offer management module lets you log offer details — CTC, joining date, benefits — and run a side-by-side comparison across multiple offers.' },
  { q: 'Is there a mobile app?', a: 'Our progressive web app works on all mobile browsers. A native iOS and Android app is on our roadmap for Q3 2026.' },
  { q: 'Can I share my tracker with a placement counsellor?', a: 'Yes. You can generate a shareable view link that lets mentors or counsellors see your pipeline without editing access.' },
];

const SectionCard = ({ section }) => (
  <div className="rounded-[28px] p-10 flex flex-col justify-between min-h-[320px]" style={{ background: `${section.accent}22` }}>
    <span className="text-[100px] font-black leading-none select-none" style={{ color: `${section.accent}55` }}>{section.number}</span>
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold w-fit" style={{ background: section.accent, color: '#111' }}>
      {section.title}
    </div>
  </div>
);

const TrackerDetail = () => {
  const { openDemoModal } = useModalStore();
  const [email, setEmail] = useState('');

  return (
    <main className="flex-grow">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-cream h-screen overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 px-10 md:px-16 lg:px-20">
          <div className="flex flex-col justify-center pt-24 pb-12">
            <h1 className="title-huge text-perk-black leading-tight mb-6">
              Track every opportunity.<br />Miss nothing.
            </h1>
            <p className="text-[16px] md:text-[17px] text-black/55 leading-relaxed font-medium mb-8 max-w-lg">
              KareerGrowth Tracker is your personal job-hunt command centre — managing every application, interview date, follow-up reminder, and offer detail so nothing slips through the cracks.
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
              <img src="/assets/canproducts/tracker.png" alt="Tracker" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 BENEFIT CARDS ──────────────────────────────────── */}
      <section className="bg-white py-24 px-10 md:px-16 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="title-huge text-perk-black leading-tight mb-4">Stay organised. Stay ahead.</h2>
            <p className="text-[16px] text-black/50 font-medium leading-relaxed">
              The average active job seeker tracks 20+ applications at once. Without a system, offers get missed and opportunities are lost.
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
            <h2 className="title-huge text-perk-black leading-tight mb-5">Tracker<br />at a glance.</h2>
            <p className="text-[16px] text-black/55 leading-relaxed font-medium max-w-md">
              Every application, interview, follow-up, and offer — tracked and organised in one place so you stay in control of your entire job hunt.
            </p>
          </div>
          <div className="rounded-[28px] overflow-hidden bg-[#f5f4eb] shadow-sm">
            <img src="/assets/canproducts/tracker.png" alt="Tracker at a glance" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ── MAIN FEATURES GRID ───────────────────────────────── */}
      <section className="bg-white py-24 px-10 md:px-16 lg:px-20 border-t border-black/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="title-huge text-perk-black leading-tight mb-4">Main features</h2>
            <p className="text-[16px] text-black/50 font-medium">Everything you need to take control of your job hunt.</p>
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
            <h2 className="title-huge text-white leading-tight mb-3">Take control of<br />your job hunt today.</h2>
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

export default TrackerDetail;
