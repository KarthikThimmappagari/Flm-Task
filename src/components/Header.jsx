import { Building2 } from 'lucide-react';

export function Header() {
  return (
    <header className="py-8 md:py-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 animate-in fade-in zoom-in duration-700">
          <Building2 className="text-white" size={32} />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Companies<span className="text-indigo-600">Directory</span>
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto text-lg font-medium">
            Discover and connect with industry-leading organizations through our curated global database.
          </p>
        </div>
      </div>
    </header>
  );
}
