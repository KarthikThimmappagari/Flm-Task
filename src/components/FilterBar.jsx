import { Search, Filter, ArrowUpDown, MapPin as MapPinIcon } from 'lucide-react';
import { useCompanies } from '../context/CompanyContext';

export function FilterBar() {
  const {
    search,
    setSearch,
    industry,
    setIndustry,
    location,
    setLocation,
    sort,
    setSort,
    industries,
    locations
  } = useCompanies();

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
      {/* Search Input */}
      <div className="relative flex-1 w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Search companies by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
        {/* Industry Filter */}
        <div className="relative flex-1 md:flex-none md:min-w-[160px]">
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full appearance-none pl-3 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm cursor-pointer"
          >
            <option value="">All Industries</option>
            {industries.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
        </div>

        {/* Location Filter */}
        <div className="relative flex-1 md:flex-none md:min-w-[160px]">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full appearance-none pl-3 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm cursor-pointer"
          >
            <option value="">All Locations</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          <MapPinIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>

        {/* Sort */}
        <button
          onClick={() => setSort(s => s === 'asc' ? 'desc' : 'asc')}
          className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 whitespace-nowrap"
        >
          <ArrowUpDown size={16} className={sort === 'desc' ? 'rotate-180 transition-transform' : 'transition-transform'} />
          Sort: {sort === 'asc' ? 'A → Z' : 'Z → A'}
        </button>
      </div>
    </div>
  );
}
