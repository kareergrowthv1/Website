import React from 'react';
import { ChevronRight } from 'lucide-react';

const stories = [
  {
    logo: 'AI Resume',
    metric: '85%',
    unit: 'time saved in ATS vetting',
    image: '/stories/resume.png',
    tags: ['Resume Builder', 'ATS Vetting', 'AI Scoring'],
    title: 'How candidates bypass traditional screening with verified AI-score resumes',
    author: 'Sarah Jenkins',
    role: 'Product Lead, Student Career Center',
    action: 'Learn more'
  },
  {
    logo: 'Job Match',
    metric: '92%',
    unit: 'match accuracy rating',
    image: '/stories/jobmatch.png',
    tags: ['AI Placements', 'Corporate Hub', 'Verified Skills'],
    title: 'Matching top-tier talent into placement drives at companies like Deloitte and Tata Steel',
    author: 'Rahul Mehta',
    role: 'Head of Recruiting & Corporate Relations',
    action: 'Learn more'
  },
  {
    logo: 'Pipeline',
    metric: '3.5x',
    unit: 'increase in interview callbacks',
    image: '/stories/network.png',
    tags: ['Direct Pipeline', 'Ecosystem Connect', 'Career Accelerator'],
    title: 'Bridging the talent gap by connecting verified portfolios to active HR pipelines',
    author: 'Siddharth Nair',
    role: 'Director of Academic Placements',
    action: 'Learn more'
  }
];

const BusinessStories = () => {
  return (
    <section id="candidates" className="pt-0 pb-16 px-6 bg-cream">
      <div className="max-w-[1440px] mx-auto pt-8 pb-10 md:pt-14 md:pb-14 px-8 md:px-20">
        <h2 className="text-[36px] md:text-[42px] font-bold text-perk-black text-center mb-16 tracking-tight">
          Accelerating careers and matching top talent
        </h2>

        {/* Asymmetrical Grid: Middle card is wider (Hero style) */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.85fr_1fr] gap-8 md:gap-14 items-start">
          {stories.map((story, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer w-full">
              {/* Card Image with Metrics Overlay */}
              <div className={`relative rounded-[32px] overflow-hidden mb-8 w-full ${
                idx === 1 ? 'aspect-[1.8/1]' : 'aspect-[1/1.1]'
              }`}>
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />
                
                {/* Logo Overlays */}
                <div className="absolute top-8 left-8">
                  <span className="text-white font-black text-2xl uppercase tracking-tighter">{story.logo}</span>
                </div>
                
                {/* Metric Overlay */}
                <div className="absolute bottom-10 left-8 text-white">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[52px] font-bold leading-none">{story.metric}</span>
                  </div>
                  <p className="text-[16px] font-medium opacity-95 mt-1">{story.unit}</p>
                </div>
              </div>

              {/* Editorial Content */}
              <div className="flex flex-col h-full">
                <h3 className="text-[20px] font-bold text-perk-black mb-6 leading-[1.3] tracking-tight">
                  {story.title}
                </h3>

                <div className="mb-10">
                  <p className="text-[14px] font-bold text-perk-black mb-0.5">{story.author}</p>
                  <p className="text-[13px] text-perk-black/50 font-medium leading-relaxed">{story.role}</p>
                </div>

                <div className="mt-auto">
                  <button className="flex items-center gap-2 group/link font-bold text-[14px] border border-perk-black/10 px-6 py-2.5 rounded-full w-fit hover:bg-perk-black hover:text-white transition-all shadow-sm">
                    {story.action} <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Action */}
        <div className="flex justify-end mt-12 md:mt-16">
          <button className="flex items-center gap-2 group/global font-bold text-[15px] bg-white border border-perk-black/10 px-8 py-3 rounded-full hover:bg-perk-black hover:text-white transition-all shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
            Browse all stories <ChevronRight size={16} className="group-hover/global:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessStories;
