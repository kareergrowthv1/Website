import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { useModalStore } from '../../data/useModalStore';

const PlaceholderPage = ({ title, category, description }) => {
  const { openDemoModal, openGetStartedModal } = useModalStore();

  return (
    <main className="min-h-screen bg-cream pt-28 md:pt-32 lg:pt-36 pb-24 font-sans text-perk-black antialiased">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-perk-black/50 mb-10">
          <Link to="/" className="flex items-center gap-1 hover:text-perk-black transition-colors">
            <Home size={12} /> Home
          </Link>
          <ChevronRight size={10} />
          {category && (
            <>
              <span className="capitalize">{category}</span>
              <ChevronRight size={10} />
            </>
          )}
          <span className="text-perk-black font-bold">{title}</span>
        </nav>

        {/* Hero Section */}
        <section className="py-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-brand-lime/20 text-perk-black mb-6 border border-brand-lime/30">
              <Sparkles size={10} className="text-perk-black animate-pulse" /> {category || 'Platform'}
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-perk-black mb-8 leading-[1.05]">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-perk-black/60 font-medium leading-relaxed mb-12 max-w-2xl">
              {description}
            </p>
          </motion.div>
        </section>

        {/* Content Box / Coming Soon Card */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-white rounded-[32px] border border-perk-black/5 p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12"
        >
          {/* Subtle logo pattern background */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#bef33e]/5 rounded-full blur-3xl" />
          
          <div className="flex-1 text-left relative z-10">
            <h3 className="text-3xl font-bold tracking-tight mb-4">Detailed Content Coming Soon</h3>
            <p className="text-sm sm:text-base text-slate-500 font-medium mb-8 leading-relaxed max-w-lg">
              We are currently finalizing the content and resources for this section. Check back soon for industry insights, features, case studies, and advanced integration guidelines.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openGetStartedModal}
                className="px-6 py-3 bg-brand-lime text-perk-black rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:brightness-95 transition-all shadow-md cursor-pointer"
              >
                Get Started <ArrowRight size={14} />
              </button>
              
              <button 
                onClick={openDemoModal}
                className="px-6 py-3 bg-transparent border border-perk-black/10 text-perk-black rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black/5 transition-colors cursor-pointer"
              >
                Book a Demo <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Interactive Help Widget */}
          <div className="w-full md:w-80 bg-cream/60 border border-perk-black/5 rounded-[24px] p-6 text-left shrink-0 relative z-10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-brand-lime/20 flex items-center justify-center text-perk-black mb-4">
                <HelpCircle size={20} />
              </div>
              <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-600 mb-2">Have questions?</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Connect with our expert team to learn how KareerGrowth can supercharge your career or recruiting workflow today.
              </p>
            </div>
            <button 
              onClick={openDemoModal}
              className="mt-6 text-xs font-extrabold text-perk-black flex items-center gap-1 hover:underline"
            >
              Contact Support <ChevronRight size={14} />
            </button>
          </div>
        </motion.section>

      </div>
    </main>
  );
};

export default PlaceholderPage;
