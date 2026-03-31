import React, { useState } from 'react';

const FeatureTabs = () => {
  const tabs = ["Home", "Interview", "Assessment", "Proctoring"];
  const [activeTab, setActiveTab] = useState("Home");

  // Im testing
  return (
    <section className="relative overflow-hidden">
      <div className="w-full relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-slate-200 bg-white shadow-sm mb-6">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">AI Interviews</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-black flex flex-wrap justify-center items-center gap-4">
            <span className="flex items-center gap-3">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Shortlist only
            </span>
            <span className="handwritten-circle text-black relative inline-block px-4 py-1">the best</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16 text-black">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="text-xl font-bold mb-3">Human-like interviews</h3>
            <p className="text-slate-500 font-medium text-sm mb-10">
              Contextual follow-up questions that mimic real interviews
            </p>

            <div className="aspect-[4/3] bg-emerald-50/50 rounded-2xl flex items-center justify-center p-6 relative overflow-hidden">
              <div className="w-full h-full bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-6 space-y-6">
                <div className="flex gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className={`w-1 h-8 rounded-full ${i % 3 === 0 ? 'bg-black' : 'bg-black/10'}`}></div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-green-100 rounded text-[10px] font-bold text-green-700 uppercase">Agent</span>
                  <div className="w-24 h-1.5 bg-slate-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="text-xl font-bold mb-3">24x7 AI Interviewer</h3>
            <p className="text-slate-500 font-medium text-sm mb-10">
              Available always, without recruiter involvement
            </p>

            <div className="aspect-[4/3] bg-slate-50/50 rounded-2xl p-6">
              <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <div className="text-sm font-bold">Senior Product Designer</div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">springworks</div>
                  </div>
                  <div className="text-[9px] text-slate-400 font-bold">12:27 AM</div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="w-full h-1.5 bg-slate-50 rounded-full"></div>
                  <div className="w-3/4 h-1.5 bg-slate-50 rounded-full"></div>
                </div>
                <button className="w-full border border-blue-500 text-blue-500 hover:bg-blue-50 py-2 rounded-lg text-xs font-bold transition-all">
                  Take Interview Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;
