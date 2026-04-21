import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Briefcase, Globe, Mail, Phone, Users } from 'lucide-react';

export function Modal({ isOpen, onClose, company }) {
  if (!company) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header / Cover */}
            <div className="h-24 md:h-32 bg-gradient-to-r from-indigo-500 to-purple-600 shrink-0">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors backdrop-blur-md"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto px-6 md:px-10 pb-8 custom-scrollbar">
              {/* Profile Bar */}
              <div className="relative -mt-10 md:-mt-12 flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 mb-8 text-center md:text-left">
                <div className="shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white p-1 shadow-xl border-4 border-white overflow-hidden">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}&background=random`;
                    }}
                  />
                </div>
                <div className="md:pb-2">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    {company.name}
                  </h2>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-indigo-600 font-semibold mt-1">
                    <div className="p-1 bg-indigo-50 rounded-md">
                      <Briefcase size={14} />
                    </div>
                    <span className="text-sm tracking-wide">{company.industry}</span>
                  </div>
                </div>
              </div>

              {/* Grid Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-3 text-center md:text-left">About Company</h4>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base italic">
                      "{company.description}"
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-2xl md:bg-transparent md:p-0">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm md:bg-slate-50 md:shadow-none flex items-center justify-center text-slate-400">
                        <MapPin size={16} />
                      </div>
                      <span className="text-sm font-medium">{company.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-2xl md:bg-transparent md:p-0">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm md:bg-slate-50 md:shadow-none flex items-center justify-center text-slate-400">
                        <Users size={16} />
                      </div>
                      <span className="text-sm font-medium">250 - 500 Employees</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-3 text-center md:text-left">Contact Channels</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl group cursor-pointer hover:bg-indigo-50 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white text-indigo-600 flex items-center justify-center shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <Globe size={18} />
                        </div>
                        <div>
                          <p className="text-[9px] text-slate-400 uppercase font-black tracking-wider">Website</p>
                          <p className="text-xs font-bold text-slate-700 truncate max-w-[150px] md:max-w-none">www.{company.name.toLowerCase().replace(/\s/g, '')}.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl group cursor-pointer hover:bg-purple-50 transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-white text-purple-600 flex items-center justify-center shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all">
                          <Mail size={18} />
                        </div>
                        <div>
                          <p className="text-[9px] text-slate-400 uppercase font-black tracking-wider">Email Address</p>
                          <p className="text-sm font-bold text-slate-700 truncate max-w-[150px] md:max-w-none">info@{company.name.toLowerCase().replace(/\s/g, '')}.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-end gap-3">
                <button
                  onClick={onClose}
                  className="order-2 md:order-1 w-full md:w-auto px-6 py-3 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Close
                </button>
                <button className="order-1 md:order-2 w-full md:w-auto px-8 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-lg shadow-indigo-100 active:scale-95">
                  Connect Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
