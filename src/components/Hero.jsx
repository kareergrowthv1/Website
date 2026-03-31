import React, { useState } from 'react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('Recruiter');

  return (
    <section className="w-full bg-white pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-2 md:px-4 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-[55%] space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-black tracking-tightest">
              The AI-Native Platform for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF492C] to-[#FF8A50] inline-block pb-3 md:pb-4 -mb-3 md:-mb-4"> Colleges</span> and <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF492C] to-[#FF8A50] inline-block pb-3 md:pb-4 -mb-3 md:-mb-4">Recruiters</span>
            </h1>

            <div className="mb-8 max-w-2xl">
              <p className="text-base md:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed mb-4">
                KareerGrowth is your end-to-end solution, Whether you're training students for placement success or scaling your recruitment with a complete ATS.
              </p>
              <p className="text-xs md:text-sm text-slate-400 font-medium tracking-wide">
                Empowering the next generation of talent through AI-driven insights
              </p>
            </div>

            <div className="flex flex-col gap-6 mb-10 w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth">
                <div className="flex items-center gap-2 text-sm md:text-base font-medium text-black">
                  <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="whitespace-nowrap">Placement Training</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base font-medium text-black">
                  <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="whitespace-nowrap">Comprehensive ATS</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base font-medium text-black">
                  <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="whitespace-nowrap">AI Assessments</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="px-8 py-2.5 rounded-full bg-gradient-to-r from-[#E6391D] to-[#FF492C] text-white text-base md:text-lg font-bold hover:shadow-lg hover:shadow-orange-100 transition-all text-center">
                  Create Account
                </button>
                <button className="px-8 py-2.5 rounded-full border border-slate-200 text-slate-600 text-base md:text-lg font-medium hover:bg-slate-50 transition-all text-center">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Illustration (45%) */}
          <div className="relative flex justify-center lg:justify-end py-8 lg:py-0 lg:w-[45%]">
            <div className="relative w-full max-w-[500px] lg:max-w-none">
              <img
                src="/hero-illustration.png"
                alt="KareerGrowth AI Recruitment Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* New Performance Overview Section (Below the 2-column row) */}
        <div className="mt-4 md:mt-6 space-y-12">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Candidate NPS",
                value: "85+",
                icon: (
                  <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9h.01M15 9h.01" />
                  </svg>
                )
              },
              {
                label: "Interviews done",
                value: "1,00,000+",
                icon: (
                  <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                label: "Saved using KareerGrowth",
                value: "5+ human years",
                icon: (
                  <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-5 p-6 bg-white border border-slate-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] group hover:border-[#FF492C]/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-slate-900 tracking-tight">{stat.value}</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tabbed Overview */}
          <div className="space-y-8">
            <div className="flex justify-center border-b border-slate-100 overflow-x-auto no-scrollbar">
              <div className="flex gap-8 md:gap-16 px-4">
                {['Recruiter', 'Interview', 'Colleges', 'Candidates'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-sm md:text-base font-medium transition-all relative ${activeTab === tab ? 'text-black' : 'text-slate-400 hover:text-slate-600'
                      }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-full transition-all duration-300"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Mockup (High Fidelity) */}
            <div className="max-w-[1000px] mx-auto bg-white rounded-3xl border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="bg-slate-50/50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                </div>
                <div className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {activeTab} Dashboard — Active
                </div>
              </div>

              <div className="p-8 md:p-12 min-h-[400px] flex flex-col">
                {/* Dynamic Tab Content */}
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {activeTab === 'Recruiter' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { label: "Open Jobs", val: "12", color: "text-blue-600" },
                        { label: "AI Matches", val: "148", color: "text-orange-600" },
                        { label: "Interviews", val: "34", color: "text-emerald-600" },
                        { label: "Time Saved", val: "24h", color: "text-purple-600" }
                      ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                          <span className={`text-4xl font-black ${item.color}`}>{item.val}</span>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">{item.label}</p>
                        </div>
                      ))}
                      <div className="md:col-span-4 mt-8 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                        <h4 className="text-sm font-black text-slate-800 mb-4 uppercase tracking-widest">Recent Activity Feed</h4>
                        <div className="space-y-4">
                          {[1, 2, 3].map(id => (
                            <div key={id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                                <div className="flex flex-col">
                                  <span className="text-xs font-bold text-slate-800">Candidate #{240 + id} matched for "Sr. Product Designer"</span>
                                  <span className="text-[10px] text-slate-400">Match Accuracy: 98%</span>
                                </div>
                              </div>
                              <span className="text-[10px] font-black text-emerald-500 uppercase">Excellent Match</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'Interview' && (
                    <div className="flex flex-col items-center justify-center py-12 text-center max-w-xl mx-auto">
                      <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-4">AI-Driven Interview Intelligence</h4>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">
                        Experience real-time contextual follow-ups and comprehensive skill scoring. Land top talent with 100% deeper insights compared to traditional screening.
                      </p>
                      <button className="mt-8 px-8 py-3 rounded-full bg-slate-900 text-white text-[13px] font-black uppercase tracking-widest">Start Free Session</button>
                    </div>
                  )}
                  {activeTab === 'Colleges' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between h-[240px]">
                          <div>
                            <h5 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-1">Student Readiness</h5>
                            <p className="text-xs text-slate-400 font-medium">Monthly aggregate proficiency scores</p>
                          </div>
                          <div className="flex items-end gap-3 h-32">
                            {[60, 45, 80, 55, 90, 75, 95].map((h, i) => (
                              <div key={i} className="flex-1 bg-slate-100 rounded-lg group relative">
                                <div style={{ height: `${h}%` }} className="bg-blue-600 rounded-lg w-full transition-all duration-500 hover:bg-slate-900"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                          <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center justify-between">
                            <div>
                              <span className="text-2xl font-black text-emerald-900">92%</span>
                              <p className="text-xs font-bold text-emerald-700/70 uppercase tracking-widest">Placement Rate</p>
                            </div>
                            <span className="text-3xl">📈</span>
                          </div>
                          <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-between">
                            <div>
                              <span className="text-2xl font-black text-blue-900">1.2k+</span>
                              <p className="text-xs font-bold text-blue-700/70 uppercase tracking-widest">Active Assessments</p>
                            </div>
                            <span className="text-3xl">📝</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'Candidates' && (
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      <div className="flex-1 space-y-6">
                        <h4 className="text-3xl font-black text-slate-900 leading-tight">Elevate Your Career with <span className="text-blue-600">AI Insights</span></h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                          Get 24/7 access to mock interviews, personalized skill roadmaps, and direct placement opportunities from top recruiters.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {['Resume Builder', 'Mock Sessions', 'Skill Analytics', 'Direct Apply'].map(item => (
                            <div key={item} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                              <span className="text-blue-600 font-black">✓</span> {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-full lg:w-[350px] p-6 rounded-3xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-xl">🚀</div>
                          <div className="flex flex-col">
                            <span className="text-xs font-black text-slate-900">Placement Score</span>
                            <span className="text-xl font-black text-blue-600">Expert Level</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[
                            { label: "Technical Proficiency", val: 94 },
                            { label: "Communication Skill", val: 88 },
                            { label: "Problem Solving", val: 92 }
                          ].map(skill => (
                            <div key={skill.label} className="space-y-1.5">
                              <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                                <span>{skill.label}</span>
                                <span>{skill.val}%</span>
                              </div>
                              <div className="h-1.5 bg-white border border-slate-100 rounded-full overflow-hidden">
                                <div style={{ width: `${skill.val}%` }} className="h-full bg-slate-900 rounded-full"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
