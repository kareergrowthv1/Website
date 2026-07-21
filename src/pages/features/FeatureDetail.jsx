import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, MessageSquare, Zap, BarChart2, FileText, Sparkles, Download, Search, SlidersHorizontal, BellRing, Code2, Brain, Trophy, ClipboardList, Calendar, BellDot, Map, Globe, TrendingUp, ShieldCheck, AlertTriangle } from 'lucide-react';
import { featureDetails } from '../../data/featureDetails';
import { useModalStore } from '../../data/useModalStore';

const ICON_MAP = {
  MessageSquare, Zap, BarChart2, FileText, Sparkles, Download,
  Search, SlidersHorizontal, BellRing, Code2, Brain, Trophy,
  ClipboardList, Calendar, BellDot, Map, Globe, TrendingUp,
  ShieldCheck, AlertTriangle,
};

/* ─── FAQ Accordion Item ─────────────────────────────────────── */
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Line extends beyond the padded container */}
      <div className="border-t border-black/10 -mx-6 md:-mx-14 lg:-mx-24" />
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-[18px] text-left group"
      >
        <span className="text-[17px] font-bold text-[#111] pl-4 pr-8 leading-snug">{q}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-black/40 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="pl-4 pb-4 text-[15px] text-black/55 leading-relaxed font-medium">
          {a}
        </p>
      )}
    </div>
  );
};

/* ─── Feature Detail Page ────────────────────────────────────── */
const FeatureDetail = () => {
  const { slug } = useParams();
  const { openDemoModal } = useModalStore();
  const [email, setEmail] = useState('');

  const feature = featureDetails[slug];

  if (!feature) {
    return (
      <main className="flex-grow flex items-center justify-center py-40">
        <div className="text-center">
          <h1 className="text-[40px] font-black text-[#111] mb-4">Feature not found</h1>
          <Link to="/" className="text-black/50 hover:text-black underline">Back to home</Link>
        </div>
      </main>
    );
  }

  const titleLines = feature.heroTitle.split('\n');
  const ctaLines  = feature.ctaTitle.split('\n');

  return (
    <main className="flex-grow">

      {/* ── HERO — full-screen, equal side gaps ─────────────── */}
      <section className="bg-cream h-screen overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 px-10 md:px-16 lg:px-20">

          {/* Left — content centered vertically */}
          <div className="flex flex-col justify-center pt-24 pb-12">
            <h1 className="title-huge text-perk-black leading-tight mb-6">
              {titleLines.map((line, i) => (
                <span key={i}>{line}{i < titleLines.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="text-[16px] md:text-[17px] text-black/55 leading-relaxed font-medium mb-8 max-w-lg">
              {feature.heroDesc}
            </p>

            {/* Email input */}
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

          {/* Right — image smaller, centered vertically */}
          <div className="hidden lg:flex items-center justify-center py-20">
            <div className="w-[82%] rounded-[28px] overflow-hidden shadow-xl">
              <img
                src={feature.heroImage}
                alt={feature.title}
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── ROUNDS (mock interview only) ─────────────────────── */}
      {feature.rounds && (
        <section className="bg-[#141414] py-20 px-10 md:px-16 lg:px-20">
          <div className="max-w-[1440px] mx-auto">

            <div className="mb-14">
              <h2 className="title-huge text-white leading-tight mb-4">
                What each round covers.
              </h2>
              <p className="text-[16px] text-white/45 font-medium max-w-xl">
                Four structured rounds that mirror the exact hiring process at top companies — each scored in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-[24px] overflow-hidden">
              {feature.rounds.map((round) => (
                <div
                  key={round.number}
                  className="bg-[#1a1a1a] hover:bg-[#212121] transition-colors duration-300 p-8 flex flex-col gap-6"
                >
                  <span className="text-[13px] font-bold text-white/25 tracking-widest">{round.number}</span>
                  <div>
                    <h3 className="text-[22px] font-black text-white leading-snug tracking-tight mb-2">
                      {round.title}
                    </h3>
                    <p className="text-[14px] text-white/50 leading-relaxed font-medium">
                      {round.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ── BENEFITS ─────────────────────────────────────────── */}
      <section className="bg-white py-24 px-12 md:px-20 lg:px-28">
        <div className="max-w-[1200px] mx-auto">

          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="title-huge text-perk-black leading-tight mb-5">
              {feature.benefitsTitle}
            </h2>
            <p className="text-[16px] md:text-[17px] text-black/50 leading-relaxed font-medium">
              {feature.benefitsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feature.benefits.map((b, i) => {
              const Icon = ICON_MAP[b.icon];
              const isHighlighted = i === 2;
              return (
                <div
                  key={b.title}
                  className="p-8 rounded-3xl flex flex-col gap-5 hover:bg-[#f5f5f3] transition-colors duration-300"
                >
                  {Icon && (
                    <div className="w-9 h-9 flex items-center justify-center">
                      <Icon size={22} className="text-[#111]" strokeWidth={2} />
                    </div>
                  )}
                  <h3 className="text-[22px] font-black text-[#111] leading-snug tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-[15px] text-black/55 leading-relaxed font-medium">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-10 md:px-20 lg:px-32 border-t border-black/5">
        <div className="max-w-[1100px] mx-auto">

          <h2 className="title-huge text-perk-black text-center leading-tight mb-16">
            Questions?
          </h2>

          <div>
            {feature.faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
            <div className="border-t border-black/10 -mx-6 md:-mx-14 lg:-mx-24" />
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
      <section className="bg-[#141414] py-20 px-10 md:px-16 lg:px-20 mt-0">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">

          {/* Left */}
          <div>
            <h2 className="title-huge text-white leading-tight mb-3">
              {ctaLines.map((line, i) => (
                <span key={i}>{line}{i < ctaLines.length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="text-[15px] text-white/45 font-medium">{feature.ctaSubtitle}</p>
          </div>

          {/* Right */}
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

export default FeatureDetail;
