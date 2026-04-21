import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { useCompanies } from '../context/CompanyContext';

export function Pagination() {
  const { currentPage, totalPages, setCurrentPage } = useCompanies();
  
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "w-10 h-10 rounded-xl text-sm font-semibold transition-all",
            currentPage === page 
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
              : "text-slate-600 hover:bg-slate-100 border border-transparent"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
