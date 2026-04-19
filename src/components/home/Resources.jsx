import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';

const roadmapImg = '/Users/ifocus/.gemini/antigravity/brain/b9dd75a1-1b4d-45ff-8f1f-ed0567981784/recruitment_roadmap_3d_1776604107177.png';
const frictionImg = '/Users/ifocus/.gemini/antigravity/brain/b9dd75a1-1b4d-45ff-8f1f-ed0567981784/hiring_friction_visual_1776604125704.png';
const speedImg = '/Users/ifocus/.gemini/antigravity/brain/b9dd75a1-1b4d-45ff-8f1f-ed0567981784/vetting_speed_concept_1776604139825.png';
const trendsImg = '/Users/ifocus/.gemini/antigravity/brain/b9dd75a1-1b4d-45ff-8f1f-ed0567981784/ai_hiring_trends_3d_1776604154515.png';
const empowermentImg = '/Users/ifocus/.gemini/antigravity/brain/b9dd75a1-1b4d-45ff-8f1f-ed0567981784/student_empowerment_visual_1776604171618.png';
const campusScalingImg = '/Users/ifocus/.gemini/antigravity/brain/b9dd75a1-1b4d-45ff-8f1f-ed0567981784/scaling_campus_hiring_1776604186807.png';

const resourcesData = [
  {
    type: 'STRATEGY',
    title: "The Ultimate Recruitment Roadmap",
    desc: "A step-by-step guide to navigating the 2026 talent landscape.",
    image: roadmapImg,
    action: "Download Guide"
  },
  {
    type: 'ANALYSIS',
    title: "Eliminating Friction in Your Funnel",
    desc: "How to identify and remove the bottlenecks slowing your hires.",
    image: frictionImg,
    action: "Read Analysis"
  },
  {
    type: 'CASE STUDY',
    title: "Achieving 10x Vetting Speed",
    desc: "How top Fortune 500s are using AI to hire faster than ever.",
    isTestimonial: true,
    image: speedImg,
    action: "Watch Case Study"
  },
  {
    type: 'TRENDS',
    title: "2026 AI Hiring Outlook",
    desc: "What every recruiter and candidate needs to know about the future.",
    image: trendsImg,
    action: "View Trends"
  },
  {
    type: 'SUCCESS',
    title: "Empowering 1M+ Students Globally",
    desc: "The story of how AI-driven vetting is leveling the playing field.",
    isTestimonial: true,
    image: empowermentImg,
    action: "See Impact"
  },
  {
    type: 'GUIDE',
    title: "Scaling Campus Placements",
    desc: "A blueprints for institutions to manage massive placement seasons.",
    image: campusScalingImg,
    action: "Get Blueprint"
  }
];

const Resources = () => {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const cardWidth = 380;
  const groupWidth = resourcesData.length * cardWidth;
  const tripleCards = [...resourcesData, ...resourcesData, ...resourcesData];
  const [currentX, setCurrentX] = useState(-groupWidth);

  const startLinearLoop = (startFrom) => {
    controls.start({
      x: [startFrom, startFrom - groupWidth],
      transition: {
        duration: 45,
        ease: "linear",
        repeat: Infinity
      }
    });
  };

  useEffect(() => {
    startLinearLoop(-groupWidth);
    return () => controls.stop();
  }, [groupWidth]);

  useEffect(() => {
    return x.onChange((latest) => {
      setCurrentX(latest);
    });
  }, [x]);

  const handleNext = async () => {
    const target = Math.floor(currentX / cardWidth) * cardWidth - cardWidth;
    controls.stop();
    await controls.start({
      x: target,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
    });
    let resetX = target;
    if (target <= -groupWidth * 2) {
      resetX = target + groupWidth;
      x.set(resetX);
    }
    startLinearLoop(resetX);
  };

  const handlePrev = async () => {
    const target = Math.ceil(currentX / cardWidth) * cardWidth + cardWidth;
    controls.stop();
    await controls.start({
      x: target,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
    });
    let resetX = target;
    if (target >= 0) {
      resetX = target - groupWidth;
      x.set(resetX);
    }
    startLinearLoop(resetX);
  };

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-perk-black leading-tight mb-4 tracking-tight">Going the extra mile with KareerGrowth</h2>
          <p className="text-slate-500 text-lg font-medium">Resources and insights to help you stay ahead in the modern talent landscape.</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-all text-perk-black"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-perk-black hover:text-white transition-all text-perk-black shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Card Slider Removed per user request */}
    </section>
  );
};

export default Resources;
