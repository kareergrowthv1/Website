import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ExternalLink, MoveRight } from 'lucide-react';

const VideoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const videos = [
    { id: '9noX6980N4U', title: 'Modern Infrastructure' },
    { id: 'ScMzIvxBSi4', title: 'Team Collaboration' },
    { id: 'XmreF8aFkZc', title: 'Development Flow' },
    { id: '9vYV7wT2cZ0', title: 'Business Growth' },
    { id: 'L_LUpnjUXP0', title: 'Future of Work' },
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleWatchFull = () => {
    window.open(`https://www.youtube.com/watch?v=${videos[currentIndex].id}`, '_blank');
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

        {/* Video Container */}
        <div className="relative aspect-video w-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white/50 bg-slate-900 group">
          {/* YouTube Embed Layer */}
          <div className="absolute inset-0 pointer-events-none scale-105">
            <AnimatePresence mode="wait">
              <motion.div
                key={videos[currentIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videos[currentIndex].id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videos[currentIndex].id}&modestbranding=1&rel=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full pointer-events-none"
                ></iframe>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Controls Overlay */}
          <div className="absolute top-8 right-8 flex items-center gap-4 z-20">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95"
            >
              {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" className="ml-1" />}
            </button>
            <button 
              onClick={handleWatchFull}
              className="flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/20 transition-all active:scale-95"
            >
              <Play size={16} fill="white" />
              Watch full video
            </button>
          </div>

          {/* Video Title (Bottom Left) */}
          <div className="absolute bottom-8 left-8 z-20 text-white/80 text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {videos[currentIndex].title}
          </div>
          
          {/* Progress Indicators */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 flex gap-1 px-8 mb-4 z-20">
            {videos.map((_, idx) => (
              <div key={idx} className="h-full flex-grow bg-white/20 rounded-full overflow-hidden">
                {currentIndex === idx && isPlaying && (
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-brand-lime"
                  />
                )}
                {currentIndex > idx && <div className="h-full w-full bg-brand-lime/50" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
