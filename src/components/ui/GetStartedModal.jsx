import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, GraduationCap, Users, ShieldCheck, Sparkles } from 'lucide-react';
import { useModalStore } from '../../data/useModalStore';

const GetStartedModal = () => {
  const { isGetStartedModalOpen, closeGetStartedModal } = useModalStore();

  const options = [
    {
      title: 'Candidates Workspace',
      desc: 'Build AI resumes, practice mock interviews, analyze skill gaps, and explore placement opportunities.',
      icon: <GraduationCap size={24} className="text-violet-600" />,
      bg: 'bg-violet-50/50 hover:bg-violet-50',
      border: 'hover:border-violet-300',
      action: 'https://candidate.kareergrowth.com/login',
      badge: 'Jobs & Resume Tools'
    },
    {
      title: 'Recruiters Platform',
      desc: 'Deploy custom screening agents, proctor coding sandboxes, rank resumes with ATS semantic parsers, and hire top talent.',
      icon: <ShieldCheck size={24} className="text-emerald-600" />,
      bg: 'bg-emerald-50/50 hover:bg-emerald-50',
      border: 'hover:border-emerald-300',
      action: 'https://admin.kareergrowth.com/login',
      badge: 'Vetting & Screening'
    },
    {
      title: 'Colleges & Institutes',
      desc: 'Coordinate campus drives, automate bulk student placement pipelines, track analytics, and collaborate with enterprises.',
      icon: <Users size={24} className="text-amber-600" />,
      bg: 'bg-amber-50/50 hover:bg-amber-50',
      border: 'hover:border-amber-300',
      action: 'https://admin.kareergrowth.com/login',
      badge: 'Placement Portal'
    }
  ];

  const handleSelect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    closeGetStartedModal();
  };

  if (!isGetStartedModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeGetStartedModal}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl bg-white border border-perk-black/10 rounded-[32px] shadow-2xl overflow-hidden z-10 flex flex-col p-8 md:p-10"
        >
          {/* Close button */}
          <button
            onClick={closeGetStartedModal}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-20 cursor-pointer text-slate-400 hover:text-perk-black"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lime/20 rounded-full text-xs font-bold text-perk-black mb-3">
              <Sparkles size={12} className="text-perk-black" />
              <span>Get started with KareerGrowth</span>
            </div>
            <h3 className="text-3xl font-black tracking-tight text-perk-black">
              Select Your Workspace
            </h3>
            <p className="text-sm text-slate-500 font-medium mt-1">
              Select your profile workspace below to access your custom recruitment or placement environment instantly.
            </p>
          </div>

          {/* Selector List */}
          <div className="flex flex-col gap-4">
            {options.map((opt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleSelect(opt.action)}
                className={`group flex items-start justify-between gap-5 p-5 bg-white border border-slate-100 rounded-2xl cursor-pointer hover:shadow-lg transition-all duration-300 ${opt.bg} ${opt.border}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    {opt.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="font-bold text-[16px] text-perk-black group-hover:text-perk-black transition-colors">{opt.title}</span>
                      <span className="text-[9px] font-black uppercase bg-white border border-slate-100 px-2 py-0.5 rounded-md text-slate-400 group-hover:text-slate-600 transition-colors">
                        {opt.badge}
                      </span>
                    </div>
                    <p className="text-[12px] text-slate-500 font-medium leading-relaxed max-w-lg">
                      {opt.desc}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full border border-slate-100 bg-white flex items-center justify-center text-slate-400 group-hover:text-perk-black group-hover:border-perk-black/20 group-hover:bg-[#BEF264] transition-all self-center shadow-sm">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GetStartedModal;
