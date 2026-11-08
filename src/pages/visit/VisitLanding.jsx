import React, { useMemo, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Mic,
  FileText,
  Target,
  GraduationCap,
  Building2,
  Users,
  TrendingUp,
  Shield,
  Phone,
} from 'lucide-react';
import { getCampaignForCode, isValidVisitCode } from '../../data/visitCampaigns';
import CallbackRequestModal from '../../components/visit/CallbackRequestModal';

const FEATURES = [
  {
    icon: Mic,
    title: 'AI Mock Interviews',
    desc: 'Practice HR, technical, and coding rounds with instant AI feedback on answers, tone, and clarity.',
  },
  {
    icon: FileText,
    title: 'Smart Resume Builder',
    desc: 'Generate ATS-friendly resumes, get scored against job descriptions, and fix gaps before you apply.',
  },
  {
    icon: Target,
    title: 'Job Tracker',
    desc: 'Organise applications, follow-ups, and interview stages in one dashboard — never lose track again.',
  },
  {
    icon: TrendingUp,
    title: 'Skill Gap Analysis',
    desc: 'See exactly which skills you need for your target role and get a focused prep plan.',
  },
];

const STEPS = [
  { num: '01', title: 'Tell us about you', desc: 'Share your name, contact, and where you are in your career journey.' },
  { num: '02', title: 'Get a free callback', desc: 'Our advisor calls you to understand your goals — student, fresher, or professional.' },
  { num: '03', title: 'Start your prep', desc: 'Access mock interviews, resume tools, and placement support tailored to you.' },
];

const AUDIENCES = [
  { icon: GraduationCap, title: 'College students', desc: 'Final year & pre-final year — campus prep, internships, and placements.' },
  { icon: Building2, title: 'Working professionals', desc: 'Technical & non-technical roles — upskill, switch jobs, or grow faster.' },
  { icon: Users, title: 'Colleges & TPO teams', desc: 'Bulk student access, analytics, and proctored assessments for drives.' },
];

const STATS = [
  { value: '10K+', label: 'Candidates trained' },
  { value: '500+', label: 'Partner institutes' },
  { value: '80%', label: 'Interview callback boost' },
  { value: '24hr', label: 'Avg. callback time' },
];

export default function VisitLanding() {
  const { code } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  const visitCode = String(code || '').trim().toUpperCase();
  const openForm = () => setModalOpen(true);

  if (!isValidVisitCode(visitCode)) {
    return <Navigate to="/" replace />;
  }

  const campaign = useMemo(() => getCampaignForCode(visitCode), [visitCode]);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#cafb44] via-[#bef33e] to-[#a8e635] border-b border-perk-black/10">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/40 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/30 blur-2xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 py-12 md:py-20 md:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-perk-black/10 text-xs font-bold text-perk-black">
              <Sparkles size={12} />
              {campaign.badge}
            </span>
            <span className="text-[10px] font-mono font-semibold text-perk-black/50 tracking-wider px-2 py-1 bg-white/40 rounded-md">
              Campaign ID: {visitCode}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-perk-black leading-[1.05] tracking-tight max-w-4xl mb-5">
            {campaign.headline}
          </h1>
          <p className="text-base md:text-xl text-perk-black/75 font-medium max-w-2xl leading-relaxed mb-8">
            {campaign.subheadline}
          </p>

          <ul className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
            {campaign.highlights.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/85 border border-perk-black/10 text-sm font-semibold text-perk-black shadow-sm"
              >
                <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={openForm}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-perk-black text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-xl"
            >
              <Phone size={16} />
              {campaign.ctaLabel}
            </button>
            <button
              type="button"
              onClick={openForm}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/90 text-perk-black font-bold text-sm border border-perk-black/15 hover:bg-white transition-colors"
            >
              Request a callback
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-perk-black text-white border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-8 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-black text-brand-lime mb-1">{s.value}</p>
              <p className="text-xs md:text-sm text-white/70 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <main className="flex-1">
        {/* What you get */}
        <section className="max-w-6xl mx-auto px-5 py-14 md:px-8 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-perk-black mb-4">
              Everything you need to get hired
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              KareerGrowth combines AI-powered practice, resume intelligence, and job tracking —
              so you move from preparation to offer letter with clarity at every step.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-lime/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-lime/25 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-perk-black" />
                </div>
                <h3 className="text-base font-bold text-perk-black mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-5 py-14 md:px-8 md:py-20">
            <h2 className="text-2xl md:text-4xl font-black text-perk-black mb-3 text-center">
              How it works
            </h2>
            <p className="text-sm text-slate-500 text-center mb-12 max-w-lg mx-auto">
              Three simple steps — start with a free callback, no credit card required.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {STEPS.map((step) => (
                <div key={step.num} className="relative text-center md:text-left">
                  <span className="text-5xl font-black text-brand-lime/50 leading-none block mb-3">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-perk-black mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="max-w-6xl mx-auto px-5 py-14 md:px-8 md:py-20">
          <h2 className="text-2xl md:text-4xl font-black text-perk-black mb-3 text-center">
            Built for every stage of your career
          </h2>
          <p className="text-sm text-slate-500 text-center mb-12 max-w-lg mx-auto">
            Whether you&apos;re in college, switching roles, or running campus placements — we have you covered.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {AUDIENCES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                  <Icon size={26} className="text-perk-black" />
                </div>
                <h3 className="text-lg font-bold text-perk-black mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust + CTA block */}
        <section className="bg-gradient-to-b from-slate-50 to-cream border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-5 py-14 md:px-8 md:py-16">
            <div className="bg-perk-black rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-lime text-xs font-bold mb-5">
                  <Shield size={12} />
                  Trusted & secure · Your data stays private
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-white mb-4 max-w-2xl mx-auto">
                  Ready to talk to a career advisor?
                </h2>
                <p className="text-sm md:text-base text-white/75 mb-8 max-w-xl mx-auto leading-relaxed">
                  Click the chat button below or tap here — fill a short form and we&apos;ll call you back
                  with a personalised plan for mock interviews, resume review, or institute demo.
                </p>
                <button
                  type="button"
                  onClick={openForm}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-lime text-perk-black font-bold text-sm hover:brightness-95 transition-all shadow-lg"
                >
                  <MessageCircle size={18} />
                  Open callback form
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating bubble — opens centered form popup directly */}
      <motion.button
        type="button"
        onClick={openForm}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full bg-perk-black text-white shadow-2xl hover:shadow-brand-lime/20 border border-white/10"
        aria-label="Request a callback"
      >
        <Phone size={20} className="text-brand-lime" />
        <span className="text-sm font-bold hidden sm:inline">Request a callback</span>
      </motion.button>

      <footer className="py-6 text-center border-t border-slate-200/80 bg-white/50">
        <p className="text-sm font-semibold text-perk-black mb-1">KareerGrowth</p>
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} · Marketing campaign {visitCode} · AI career & placement platform
        </p>
      </footer>

      <CallbackRequestModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        visitCode={visitCode}
        campaignId={campaign.id}
      />
    </div>
  );
}
