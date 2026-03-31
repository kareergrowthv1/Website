import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Prasanna K.",
      role: "at Enterprise",
      stars: 5,
      text: "The automated screening gives a good understanding of fitment, both technical and behavioral. Extremely helpful for high-volume hiring."
    },
    {
      name: "Harish R.",
      role: "Small-Business",
      stars: 4,
      text: "Helps efficiently shortlist the right candidates with skills required for each job description, and assists in ranking them based on their fit for the role."
    },
    {
      name: "Kunal S.",
      role: "Automation Engineer,",
      stars: 5,
      text: "The AI round is good we go back and review both technical and communication skills of the candidate which is a great feature."
    },
    {
      name: "Sunita P.",
      role: "Talent Acquisition",
      stars: 5,
      text: "Reduced our time-to-hire by 40% using the automated AI screening. The depth of analysis is impressive and saves us hours of manual work."
    },
    {
      name: "Mark T.",
      role: "Founder, TechStart",
      stars: 5,
      text: "Scaleable and reliable. We filtered 500+ candidates in just two days without manual effort. Highly recommend for any fast-growing team."
    },
    {
      name: "Anjali D.",
      role: "Software Architect",
      stars: 4,
      text: "The coding assessment environment is very smooth. Good set of standard problems for senior roles and the playback feature is a game-changer."
    }
  ];

  // Double the testimonials for seamless looping
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative pt-24 border-t border-slate-100 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16 px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-slate-200 bg-white shadow-sm mb-6">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Customers Love Us</span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black flex items-center gap-2 md:gap-4">
              Rated 4.6 <span className="text-orange-500">★</span> on 
              <div className="flex items-baseline">
                <span className="text-[#FF492C] font-extrabold text-3xl sm:text-4xl md:text-5xl">G</span>
                <span className="text-[#FF492C] font-extrabold text-xl sm:text-2xl -ml-0.5">2</span>
              </div>
            </h2>
          </div>
        </div>

        {/* Testimonials Marquee Container */}
        <div className="relative border-y border-slate-200 overflow-hidden bg-white">
          <div className="flex animate-marquee whitespace-nowrap">
            {allTestimonials.map((t, index) => (
              <div 
                key={index} 
                className="inline-block w-[280px] sm:w-[400px] shrink-0 p-6 sm:p-12 flex flex-col items-start border-r border-slate-200 whitespace-normal bg-white transition-colors duration-300 hover:bg-slate-50/50"
              >
                <div className="mb-4 sm:mb-6">
                  <div className="font-bold text-black text-base sm:text-lg">{t.name}</div>
                  <div className="text-slate-400 text-xs sm:text-sm font-medium">{t.role}</div>
                </div>
                
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-3 h-3 sm:w-4 h-4 ${i < t.stars ? 'text-orange-500 fill-orange-500' : 'text-slate-200 fill-slate-200'}`} 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-[15px]">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
