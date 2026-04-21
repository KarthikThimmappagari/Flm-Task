import { motion } from 'framer-motion';
import { MapPin, Briefcase, ExternalLink } from 'lucide-react';

export function CompanyCard({ company }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow flex flex-col h-full group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center overflow-hidden">
             <img 
               src={company.logo} 
               alt={company.name} 
               className="w-full h-full object-cover"
               onError={(e) => {
                 e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}&background=random`;
               }}
             />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {company.name}
            </h3>
            <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
              <MapPin size={12} className="text-indigo-400" />
              <span>{company.location}</span>
            </div>
          </div>
        </div>
        <button className="text-slate-300 hover:text-indigo-500 transition-colors">
          <ExternalLink size={18} />
        </button>
      </div>

      <div className="mb-4">
        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 mb-3">
          <Briefcase size={12} />
          {company.industry}
        </div>
        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {company.description}
        </p>
      </div>

      <div className="mt-auto pt-4 flex items-center justify-between">
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
          View Profile
        </button>
        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
          ID: #{company.id}
        </span>
      </div>
    </motion.div>
  );
}
