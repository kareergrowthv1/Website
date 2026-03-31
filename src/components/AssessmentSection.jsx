import React from 'react';

const AssessmentSection = () => {
  return (
    <section className="relative pt-24 border-t border-slate-100">
      <div className="w-full">
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-slate-200 bg-white shadow-sm mb-6">
             <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
             <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">AI Interviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tightest leading-tight">
            Automate your assessment workflow
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Box 1: AI Interviews (Platform Style) */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col">
            <h3 className="text-xl font-bold mb-3 text-black">Human-like interviews</h3>
            <p className="text-slate-500 font-medium text-sm mb-8">
              Contextual follow-up questions that mimic real interviews to reveal hidden talents and technical depth.
            </p>
            <div className="mt-auto bg-slate-50 border border-slate-100 rounded-2xl p-6 relative overflow-hidden group">
               <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Live Interview Agent</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">SESSION ID: #TR-928</span>
               </div>
               <div className="space-y-4">
                  <div className="flex items-start gap-3">
                     <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">AI</div>
                     <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none text-[12px] font-medium text-slate-700 shadow-sm">
                       "Can you explain how you handle concurrency in your previous React projects?"
                     </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                     <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none text-[12px] font-medium text-white shadow-sm max-w-[80%]">
                       "I use a combination of local state management and optimized useEffect hooks with cleanup..."
                     </div>
                  </div>
                  <div className="flex items-start gap-3 transition-all">
                     <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">AI</div>
                     <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none text-[12px] font-medium text-slate-700 shadow-sm italic text-slate-400">
                       Thinking about your answer... Generating follow-up question
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Box 2: Institutional Assessment Hub (Clean Service List) */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col">
            <h3 className="text-xl font-bold mb-3 text-black">Institutional Assessment Hub</h3>
            <p className="text-slate-500 font-medium text-sm mb-6 leading-relaxed">
               Empower your institution with high-fidelity assessment tools for modern placement cycles and student excellence. Streamline readiness from attendance tracking to AI evaluations and analytics.
            </p>
            
            <div className="mt-auto">
               {/* Core Service Details - Clean List */}
               <div className="space-y-8">
                  {[
                    { 
                      title: "Automated AI Tests", 
                      desc: "Deploy multi-modal assessments with real-time AI proctoring.",
                      icon: (
                        <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                      )
                    },
                    { 
                      title: "Attendance Management", 
                      desc: "Track student readiness and placement participation seamlessly.",
                      icon: (
                        <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                      )
                    },
                    { 
                      title: "Task Assignments", 
                      desc: "Manage structured workshops and placement readiness tasks.",
                      icon: (
                        <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      )
                    },
                    { 
                      title: "Skill Analytics", 
                      desc: "Deep competency reports and AI-driven student profiles.",
                      icon: (
                        <svg className="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                        </svg>
                      )
                    }
                  ].map((service, i) => (
                    <div key={i} className="flex gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm shadow-slate-200 group-hover:bg-slate-100 transition-colors">
                          {service.icon}
                       </div>
                       <div className="flex flex-col gap-1">
                          <span className="text-[14px] font-black text-slate-800 tracking-tight leading-none">{service.title}</span>
                          <span className="text-[12px] font-medium text-slate-500 leading-tight pr-4">{service.desc}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Box 3: Candidate Portal (Full Width) */}
          <div className="md:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                <span className="text-[10px] font-black uppercase tracking-widest">Test & Practice Portal</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight">Empowering Candidates to <br /> Shortlist Themselves</h3>
              <p className="text-slate-500 font-medium text-base">
                Provide students and job seekers with a powerful AI Interview platform. Practice 24x7, build professional resumes, and access deep skill analytics to land top placements.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                 {[
                   { icon: "✓", label: "AI Mock Interviews" },
                   { icon: "✓", label: "Placement Training" },
                   { icon: "✓", label: "Programming Tests" },
                   { icon: "✓", label: "Skill Analytics" }
                 ].map(item => (
                   <div key={item.label} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                     <span className="text-blue-600 font-black">{item.icon}</span> {item.label}
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="w-full md:w-[450px] bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3 px-3 py-1 rounded-full border border-slate-100 bg-slate-50/50">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Portal Active</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">ID: SG-2481</span>
               </div>
               
               <div className="mb-10 text-center md:text-left">
                 <h4 className="text-2xl font-black text-slate-900 mb-2">Senior Product Designer</h4>
                 <div className="text-[13px] text-slate-500 font-bold flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <span className="flex items-center gap-1.5">🏢 Springworks</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="flex items-center gap-1.5">🕒 12:27 AM</span>
                 </div>
               </div>
               
               <button className="w-full group/btn bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-100 active:scale-95">
                  <span className="text-lg">Take Interview Now</span>
                  <svg className="w-6 h-6 transition-transform group-hover/btn:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
               </button>
               
               {/* Decorative grid pattern inside card */}
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-50 rounded-full border border-slate-100 -z-10 group-hover:scale-110 transition-transform"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
