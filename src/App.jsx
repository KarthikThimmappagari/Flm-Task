import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, RefreshCw, Search } from 'lucide-react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { CompanyCard } from './components/CompanyCard';
import { CompanyCardSkeleton } from './components/Skeleton';
import { Pagination } from './components/Pagination';
import { Modal } from './components/Modal';
import { CompanyProvider, useCompanies } from './context/CompanyContext';

function DirectoryContent() {
  const {
    companies,
    isLoading,
    error,
    search,
    industry,
    location,
    sort,
    currentPage,
    setCurrentPage,
    totalPages,
    industries,
    locations,
    selectedCompany,
    setSelectedCompany,
    clearFilters
  } = useCompanies();

  return (
    <div className="min-h-screen bg-surface-50 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <Header />

        <div className="space-y-8">
          <FilterBar />

          {error ? (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                <AlertCircle size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Oops! Something went wrong</h3>
                <p className="text-slate-500">{error}</p>
              </div>
              <button 
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
              >
                <RefreshCw size={18} />
                Try Again
              </button>
            </div>
          ) : isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <CompanyCardSkeleton key={i} />
              ))}
            </div>
          ) : companies.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode='popLayout'>
                  {companies.map(company => (
                    <div key={company.id} onClick={() => setSelectedCompany(company)} className="cursor-pointer">
                      <CompanyCard company={company} />
                    </div>
                  ))}
                </AnimatePresence>
              </div>
              
              <Pagination />
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center">
                <Search size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">No companies found</h3>
                <p className="text-slate-500">Try adjusting your filters or search terms.</p>
              </div>
              <button 
                onClick={clearFilters}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <footer className="mt-20 border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Companies Directory. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>

      {/* Detail Modal */}
      <Modal 
        isOpen={!!selectedCompany} 
        onClose={() => setSelectedCompany(null)} 
        company={selectedCompany} 
      />
    </div>
  );
}

function App() {
  return (
    <CompanyProvider>
      <DirectoryContent />
    </CompanyProvider>
  );
}

export default App;
