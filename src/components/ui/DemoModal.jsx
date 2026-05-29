import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Building, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { useModalStore } from '../../data/useModalStore';

const DemoModal = () => {
  const { isDemoModalOpen, closeDemoModal } = useModalStore();
  const [step, setStep] = useState(1); // 1 = Form, 2 = Success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Enterprise Recruiter',
    date: 'Monday, June 1',
    time: '10:00 AM'
  });

  const dates = [
    'Monday, June 1',
    'Tuesday, June 2',
    'Wednesday, June 3',
    'Thursday, June 4',
    'Friday, June 5'
  ];

  const times = [
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;
    setStep(2);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      role: 'Enterprise Recruiter',
      date: 'Monday, June 1',
      time: '10:00 AM'
    });
    setStep(1);
    closeDemoModal();
  };

  if (!isDemoModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeDemoModal}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl bg-white border border-perk-black/10 rounded-[32px] shadow-2xl overflow-hidden z-10 flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={closeDemoModal}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-20 cursor-pointer text-slate-400 hover:text-perk-black"
          >
            <X size={20} />
          </button>

          {step === 1 ? (
            <form onSubmit={handleSubmit} className="flex flex-col h-full p-8 md:p-10">
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lime/20 rounded-full text-xs font-bold text-perk-black mb-3">
                  <Sparkles size={12} className="text-perk-black" />
                  <span>Book a live product demo</span>
                </div>
                <h3 className="text-3xl font-black tracking-tight text-perk-black">
                  Experience KareerGrowth
                </h3>
                <p className="text-sm text-slate-500 font-medium mt-1">
                  Discover how our smart proctoring and assessment pipeline accelerates your hiring workflow.
                </p>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <User size={12} /> Full name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-perk-black/30 rounded-xl text-sm font-bold outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <Mail size={12} /> Business Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-perk-black/30 rounded-xl text-sm font-bold outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <Building size={12} /> Company or Institution
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Enterprise Corp"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-perk-black/30 rounded-xl text-sm font-bold outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <User size={12} /> Primary Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-perk-black/30 rounded-xl text-sm font-bold outline-none cursor-pointer transition-all appearance-none"
                  >
                    <option>Enterprise Recruiter</option>
                    <option>SME Business Manager</option>
                    <option>University Placement Officer</option>
                    <option>Candidate Prep Partner</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Slot Selector */}
              <div className="flex flex-col gap-4 mb-8">
                {/* Date slots */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <Calendar size={12} /> Select Available Date
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {dates.map((date) => {
                      const isActive = formData.date === date;
                      return (
                        <button
                          type="button"
                          key={date}
                          onClick={() => setFormData({ ...formData, date })}
                          className={`px-4 py-2 border rounded-xl text-[12px] font-bold cursor-pointer transition-all ${isActive ? 'bg-perk-black text-white border-perk-black shadow-sm' : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100 hover:text-perk-black'}`}
                        >
                          {date}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time slots */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <Clock size={12} /> Select Time Slot
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {times.map((time) => {
                      const isActive = formData.time === time;
                      return (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setFormData({ ...formData, time })}
                          className={`px-4 py-2 border rounded-xl text-[12px] font-bold cursor-pointer transition-all ${isActive ? 'bg-perk-black text-white border-perk-black shadow-sm' : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100 hover:text-perk-black'}`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#BEF264] text-perk-black py-4 rounded-2xl text-[15px] font-bold border border-black/5 hover:brightness-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                Confirm Booking Slot
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center p-12 md:p-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle2 size={48} />
              </motion.div>
              <h3 className="text-3xl font-black text-perk-black mb-3">Slot Confirmed!</h3>
              <p className="text-sm text-slate-500 font-medium max-w-md mb-8 leading-relaxed">
                Thank you, <span className="font-bold text-perk-black">{formData.name}</span>. A calendar invitation and demo link has been sent to <span className="font-bold text-perk-black">{formData.email}</span>.
              </p>

              <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl w-full max-w-sm mb-10 text-left flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <Building size={16} className="text-slate-400" />
                  <span>{formData.company} ({formData.role})</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <Calendar size={16} className="text-slate-400" />
                  <span>{formData.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <Clock size={16} className="text-slate-400" />
                  <span>{formData.time}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 bg-perk-black text-white rounded-xl text-sm font-bold hover:opacity-95 transition-opacity cursor-pointer shadow-sm"
              >
                Great, got it!
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DemoModal;
