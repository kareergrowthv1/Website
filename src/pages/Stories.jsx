import React from 'react';
import { Quote, ArrowUpRight, Award, Landmark } from 'lucide-react';

const Stories = () => {
  const stories = [
    {
      type: "corporate",
      badge: <Landmark className="w-4 h-4 text-emerald-600" />,
      company: "Deloitte",
      title: "How Deloitte Cut Engineering Placement Shortlist Time by 70%",
      summary: "Deloitte leveraged KareerGrowth's automatic AI proctoring and coding assessments to evaluate 1,200 college candidates simultaneously, generating a placement shortlist in under 3 days.",
      metric: "70% faster time-to-shortlist",
      cta: "Read Case Study"
    },
    {
      type: "institute",
      badge: <Award className="w-4 h-4 text-blue-600" />,
      company: "IIT Bombay Placement Cell",
      title: "IIT Bombay Empowers 98% Placement Success Rate in Coding Cohorts",
      summary: "With KareerGrowth's deep-competency reports, the IIT Bombay placement cell successfully mapped cohort skillsets to match specific industry profiles, maximizing recruitment efficiency.",
      metric: "98% Placement Success",
      cta: "View Institute Story"
    },
    {
      type: "corporate",
      badge: <Landmark className="w-4 h-4 text-emerald-600" />,
      company: "TATA Steel",
      title: "Tata Steel Achieves Placement Integrity and AI Test Credibility",
      summary: "By deploying KareerGrowth's strict AI proctoring controls, Tata Steel conducted secure campus recruitments across 45 regional centers with full confidence in candidate test validity.",
      metric: "100% Secure Proctoring",
      cta: "Read Success Story"
    },
    {
      type: "institute",
      badge: <Award className="w-4 h-4 text-blue-600" />,
      company: "NIT Trichy Engineering",
      title: "NIT Trichy Fast-tracks Tech placements with Mock Assessments",
      summary: "Using KareerGrowth as a placement training dashboard, NIT Trichy helped students run diagnostic mock exams in coding, data structures, and aptitude to align their skillsets with top corporate profiles.",
      metric: "4.8/5 Student Rating",
      cta: "Read Academy Report"
    }
  ];

  return (
    <main className="min-h-screen bg-cream pt-28 md:pt-32 lg:pt-36 pb-24 font-sans text-perk-black antialiased">
      {/* Hero Header */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="title-huge mt-0 font-medium tracking-[-0.04em] leading-[1.05]">
            AI Success Stories.
            <br />
            AI-Driven High-Velocity Hires.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Discover how leading engineering institutes, multinational corporations, and stellar students fast-track opportunities using KareerGrowth's unified assessment ecosystem.
          </p>
        </div>
      </section>

      {/* Featured Testimonial Banner */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-[#092241] rounded-[32px] p-8 sm:p-12 text-white relative overflow-hidden shadow-sm">
          <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none select-none">
            <Quote size={200} />
          </div>
          <div className="max-w-3xl relative z-10">
            <span className="text-[10px] font-black uppercase bg-[#00c2ff]/20 text-[#00c2ff] px-3.5 py-1.5 rounded-full tracking-widest">Partner Spotlight</span>
            <blockquote className="mt-8 text-xl sm:text-2xl font-serif italic leading-relaxed text-slate-100">
              "KareerGrowth completely streamlined our placement season. What used to take months of manual resume reviews, exam evaluations, and coordination was resolved in days with high-integrity competency shortlists."
            </blockquote>
            <div className="mt-8">
              <h4 className="font-bold text-lg">Dr. Rajesh Khanna</h4>
              <p className="text-sm text-slate-400 mt-1">Dean of Academic Placement, IIT Bombay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((story, i) => (
            <article 
              key={i} 
              className="bg-white rounded-[28px] border border-perk-black/5 p-8 flex flex-col justify-between hover:border-[#bef33e] transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">{story.company}</span>
                  <div className="p-2 bg-slate-50 rounded-lg flex items-center gap-1.5 text-xs font-bold">
                    {story.badge}
                    <span className="capitalize">{story.type}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight text-perk-black mt-6 leading-tight">
                  {story.title}
                </h3>
                
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {story.summary}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Placement Metric</span>
                  <span className="text-lg font-black text-perk-black mt-0.5">{story.metric}</span>
                </div>
                <button className="inline-flex items-center gap-1.5 text-sm font-bold text-perk-black hover:opacity-75 transition-opacity">
                  <span>{story.cta}</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Stories;
