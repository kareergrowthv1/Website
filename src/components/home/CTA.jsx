import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto premium-gradient rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-primary/20"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-8 opacity-20 transform rotate-12">
          <Sparkles size={120} className="text-white" />
        </div>
        <div className="absolute bottom-0 left-0 p-8 opacity-20 transform -rotate-12 translate-y-12">
          <Sparkles size={80} className="text-white" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight">
            Ready to redefine your <span className="opacity-80 italic">future?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Join thousands of professionals and companies who have already accelerated their growth with KareerGrowth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-50 w-full sm:w-auto">
              Get Started Now <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 w-full sm:w-auto">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
