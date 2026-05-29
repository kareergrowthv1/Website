import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const VideoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const videos = [
    { id: 'youtube-candidate', title: 'AI Candidate Acceleration', embedId: 'UWMjSEzrME0' },
    { id: 'youtube-recruiters-institutes', title: 'AI Recruiters & Institutes Placements', embedId: 'Y0BXaQ85PLc' },
  ];

  // Custom Timer-based Carousel Sliding and Progress Updates
  useEffect(() => {
    setProgress(0);
    if (isHovered) return;

    const startTime = Date.now();
    const duration = 10000; // 10 seconds per slide

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(timer);
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  const handleWatchFull = () => {
    window.open(`https://www.youtube.com/watch?v=${videos[currentIndex].embedId}`, '_blank');
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handleSelectSlide = (idx) => {
    setCurrentIndex(idx);
  };

  return (
    <section className="pt-12 pb-4 px-6 bg-cream">
      <div className="max-w-[1440px] mx-auto">
        {/* Title Block */}
        <div className="text-center mb-8 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold text-perk-black mb-4 tracking-tight"
          >
            Real talent. Real<br /> growth. Real impact.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-perk-black/60 leading-relaxed font-medium"
          >
            The endless screening and rescheduling for recruiters, the repetitive applications and feedback lag for students, the manual coordination and data silos for colleges. We call this Recruitment Friction. It’s the work behind the hire—the hidden friction that slows down growth and costs companies, students, and institutions more than they realize.
          </motion.p>
        </div>

        {/* Video Container (1920x1080 Aspect-Ratio 16:9 Screen Shape) */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative aspect-video w-full max-w-4xl mx-auto bg-perk-black rounded-[28px] overflow-hidden shadow-2xl border border-black/10 group"
        >
          {/* Video Embed Layer */}
          <div className="absolute inset-0 scale-100 overflow-hidden pointer-events-none z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={videos[currentIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full relative"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videos[currentIndex].embedId}?autoplay=1&mute=1&loop=1&playlist=${videos[currentIndex].embedId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0`}
                  title={videos[currentIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="absolute w-[116%] h-[116%] left-[-8%] top-[-8%] object-cover pointer-events-none bg-[#0a0a0c]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Controls Overlay */}
          <div className="absolute top-8 right-8 flex items-center gap-4 z-20">
            <button 
              onClick={handleWatchFull}
              className="flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/20 transition-all active:scale-95 shadow-md"
            >
              <ExternalLink size={16} />
              Watch on YouTube
            </button>
          </div>

          {/* Left & Right Arrow Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Video Title (Bottom Left) */}
          <div className="absolute bottom-8 left-8 z-20 text-white/80 text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            {videos[currentIndex].title}
          </div>
          
          {/* Progress Indicators */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 flex gap-1 px-8 mb-4 z-20">
            {videos.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => handleSelectSlide(idx)}
                className="h-full flex-grow bg-white/20 rounded-full overflow-hidden relative cursor-pointer focus:outline-none"
              >
                {currentIndex === idx ? (
                  <div 
                    style={{ width: `${progress}%` }}
                    className="h-full bg-brand-lime transition-all duration-100 ease-out"
                  />
                ) : currentIndex > idx ? (
                  <div className="h-full w-full bg-brand-lime/50" />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
