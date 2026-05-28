import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users, Zap, ArrowRight } from 'lucide-react';

const About = () => {
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
    { name: "Ananya Sharma", role: "CEO & Co-Founder", bio: "Former Talent Acquisition Lead with 12+ years building placement infrastructure." },
    { name: "Vikram Malhotra", role: "Chief Technology Officer", bio: "AI Researcher specializing in biometric test proctoring and semantic analysis." },
    { name: "Priya Patel", role: "Head of Product", bio: "Dedicated to designing frictionless university-to-corporate hiring workflows." }
  ];

  return (
    <main className="min-h-screen bg-cream pt-28 md:pt-32 lg:pt-36 pb-24 font-sans text-perk-black antialiased">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs md:text-sm font-bold bg-brand-lime px-4 py-1.5 rounded-full uppercase tracking-wider select-none">Our Story</span>
          <h1 className="title-huge mt-6 font-medium tracking-[-0.04em] leading-[1.05]">
            Transforming recruitment.
            <br />
            Empowering talent.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            KareerGrowth is an intelligent, assessment-first platform designed to eliminate hiring friction, ensure integrity, and align top-tier candidates with stellar recruiters.
          </p>
        </div>
      </section>

      {/* Values Grid Section */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mt-8">
        <div className="bg-white rounded-[32px] border border-perk-black/5 p-8 sm:p-12 shadow-sm">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Core Principles Driving KareerGrowth</h2>
            <p className="text-slate-500 font-medium">We build high-trust hiring infrastructure designed for universities and fast-growth businesses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {values.map((v, i) => (
              <div key={i} className="flex gap-4 items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                <div className="p-3 bg-brand-lime rounded-xl shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mt-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Leadership Team</h2>
          <p className="text-slate-500 font-medium mt-3">Experienced innovators committed to democratizing opportunity and streamining placement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-[24px] border border-perk-black/5 p-8 shadow-sm flex flex-col justify-between hover:border-brand-lime transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-perk-black mb-1">{member.name}</h3>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{member.role}</span>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">{member.bio}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-perk-black">
                <span>View profile</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
