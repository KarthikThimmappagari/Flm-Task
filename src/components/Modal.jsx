import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Briefcase, Globe, Mail, Phone, Users } from 'lucide-react';

export function Modal({ isOpen, onClose, company }) {
  if (!company) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header / Cover */}
            <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-8 pb-8">
              {/* Profile Bar */}
              <div className="relative -mt-12 flex items-start md:items-center gap-6 mb-8">
                <div className="shrink-0 w-24 h-24 rounded-2xl bg-white p-1 shadow-xl border-4 border-white overflow-hidden">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}&background=random`;
                    }}
                  />
                </div>
                <div className="pt-12 md:pt-4">
                  <h2 className="text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    {company.name}
                  </h2>
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold mt-1">
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
                    <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">About Company</h4>
                    <p className="text-slate-600 leading-relaxed italic">
                      "{company.description}"
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                        <MapPin size={16} />
                      </div>
                      <span className="text-sm">{company.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                        <Users size={16} />
                      </div>
                      <span className="text-sm">250 - 500 Employees</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Contact Details</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <Globe size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-bold">Website</p>
                          <p className="text-sm font-semibold text-slate-700">www.{company.name.toLowerCase().replace(/\s/g, '')}.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                          <Mail size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-bold">Email Address</p>
                          <p className="text-sm font-semibold text-slate-700">info@{company.name.toLowerCase().replace(/\s/g, '')}.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase font-bold">Phone</p>
                          <p className="text-sm font-semibold text-slate-700">+1 (555) 000-0000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  Close
                </button>
                <button className="px-6 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-lg shadow-indigo-100">
                  Contact Company
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
