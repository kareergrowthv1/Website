import React from 'react';
import { ChevronRight } from 'lucide-react';

const stories = [
  {
    logo: 'LUSH',
    metric: '900',
    unit: 'travelers',
    image: '/stories/lush.png',
    tags: ['Travel', 'Retail', 'North America'],
    title: 'How Lush reimagined work travel with KareerGrowth',
    author: 'Sarah Levitin',
    role: 'Travel and Events Manager North America',
    action: 'Read more'
  },
  {
    logo: 'on',
    metric: '90%',
    unit: 'expense automation',
    image: '/stories/on.png',
    tags: ['Spend', 'Retail', 'Switzerland'],
    title: 'How On automates 90% of their expenses with KareerGrowth',
    author: 'Martin Hoffmann',
    role: 'CFO, Co-CEO',
    action: 'Read more'
  },
  {
    logo: 'FABLETICS',
    metric: '60',
    unit: 'hours saved annually',
    image: '/stories/fabletics.png',
    tags: ['Travel', 'Retail', 'North America'],
    title: 'How KareerGrowth saves Fabletics 60 hours every year on travel management',
    author: 'Sören Heise',
    role: 'VP of Financial Planning Europe',
    action: 'Read more'
  }
];

const BusinessStories = () => {
  return (
    <section id="candidates" className="pt-0 pb-16 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto bg-[#F7F6F0] rounded-[48px] pt-8 pb-10 md:pt-14 md:pb-14 px-8 md:px-20">
        <h2 className="text-[36px] md:text-[42px] font-bold text-perk-black text-center mb-16 tracking-tight">
          Businesses getting the job done
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
                  {idx === 1 ? (
                    <span className="text-white font-black text-2xl lowercase tracking-tighter">on</span>
                  ) : (
                    <span className="text-white font-black text-2xl uppercase tracking-tighter">{story.logo}</span>
                  )}
                </div>
                
                {/* Metric Overlay */}
                <div className="absolute bottom-10 left-8 text-white">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[52px] font-bold leading-none">{story.metric}</span>
                  </div>
                  <p className="text-[16px] font-medium opacity-95 mt-1">{story.unit}</p>
                </div>
              </div>

              {/* Tags Layer */}
              <div className="flex flex-wrap gap-2 mb-6">
                {story.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className="px-3 py-1.5 bg-white border border-black/5 rounded-full text-[11px] font-bold text-perk-black/70 uppercase tracking-[0.1em]"
                  >
                    {tag}
                  </span>
                ))}
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
