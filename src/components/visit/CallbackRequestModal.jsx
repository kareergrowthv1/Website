import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { EXPERIENCE_OPTIONS } from '../../data/visitCampaigns';
import { submitMarketingLead } from '../../utils/submitLead';

const emptyForm = { name: '', phone: '', email: '', experience: '' };

export default function CallbackRequestModal({ open, onClose, visitCode, campaignId }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.phone.trim()) next.phone = 'Phone number is required';
    else if (!/^[\d\s+\-()]{8,}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone number';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Enter a valid email';
    if (!form.experience) next.experience = 'Please select your experience';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      await submitMarketingLead({
        visitCode,
        campaignId,
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        experience: form.experience,
        source: 'visit_callback',
        pageUrl: window.location.href,
      });
      setSuccess(true);
    } catch (err) {
      setErrors({ form: err.message || 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setForm(emptyForm);
    setErrors({});
    setSuccess(false);
    onClose();
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/55 backdrop-blur-sm"
          onClick={handleClose}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 z-10 max-h-[92vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors z-10"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {success ? (
            <div className="px-6 py-10 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="text-emerald-600" size={24} />
              </div>
              <p className="text-base font-semibold text-perk-black mb-1">Request received</p>
              <p className="text-sm text-slate-500 mb-6">We&apos;ll call you back soon.</p>
              <button
                type="button"
                onClick={handleClose}
                className="w-full py-2.5 rounded-lg bg-perk-black text-white font-semibold text-sm hover:opacity-90"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-6 py-7">
              <p className="text-sm font-bold text-slate-800 mb-5 pr-6 leading-relaxed">
                Get a callback to know more about us
              </p>

              {errors.form && (
                <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {errors.form}
                </p>
              )}

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-slate-800 mb-1.5 block">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your full name"
                    className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-lime/80 focus:border-transparent ${errors.name ? 'border-red-400' : 'border-slate-300'}`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-800 mb-1.5 block">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-lime/80 focus:border-transparent ${errors.phone ? 'border-red-400' : 'border-slate-300'}`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-800 mb-1.5 block">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@email.com"
                    className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-lime/80 focus:border-transparent ${errors.email ? 'border-red-400' : 'border-slate-300'}`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-800 mb-2 block">
                    Experience <span className="text-red-500">*</span>
                  </label>
                  <div className={`space-y-2 rounded-lg border p-3 ${errors.experience ? 'border-red-400 bg-red-50/30' : 'border-slate-200'}`}>
                    {EXPERIENCE_OPTIONS.map((opt) => (
                      <label key={opt.id} className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="experience"
                          value={opt.id}
                          checked={form.experience === opt.id}
                          onChange={(e) => setForm((f) => ({ ...f, experience: e.target.value }))}
                          className="mt-0.5 w-4 h-4 accent-perk-black shrink-0"
                        />
                        <span className="text-sm text-slate-700 leading-snug">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.experience && <p className="text-xs text-red-500 mt-1">{errors.experience}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-lg bg-brand-lime text-perk-black font-bold text-sm border border-perk-black/10 hover:brightness-95 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
