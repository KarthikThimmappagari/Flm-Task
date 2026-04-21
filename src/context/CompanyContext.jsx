import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import companiesData from '../data/companies.json';

const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filter States
  const [search, setSearch] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const ITEMS_PER_PAGE = 6;

  // Mock API Fetching
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        setCompanies(companiesData);
      } catch (err) {
        setError("Failed to fetch companies. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter and Sort Logic
  const filteredAndSortedCompanies = useMemo(() => {
    let result = companies.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(search.toLowerCase());
      const matchesIndustry = !industry || company.industry === industry;
      const matchesLocation = !location || company.location === location;
      return matchesSearch && matchesIndustry && matchesLocation;
    });

    result.sort((a, b) => {
      const nameA = a.name || '';
      const nameB = b.name || '';
      if (sort === 'asc') return nameA.localeCompare(nameB);
      return nameB.localeCompare(nameA);
    });

    return result;
  }, [companies, search, industry, location, sort]);

  // Unique options for dropdowns
  const industries = useMemo(() => [...new Set(companies.map(c => c.industry))].sort(), [companies]);
  const locations = useMemo(() => [...new Set(companies.map(c => c.location))].sort(), [companies]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredAndSortedCompanies.length / ITEMS_PER_PAGE);
  const currentItems = filteredAndSortedCompanies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, industry, location]);

  const value = {
    companies: currentItems,
    allCompanies: companies,
    isLoading,
    error,
    search,
    setSearch,
    industry,
    setIndustry,
    location,
    setLocation,
    sort,
    setSort,
    currentPage,
    setCurrentPage,
    totalPages,
    industries,
    locations,
    selectedCompany,
    setSelectedCompany,
    clearFilters: () => {
      setSearch('');
      setIndustry('');
      setLocation('');
    }
  };

  return (
    <CompanyContext.Provider value={value}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompanies() {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompanies must be used within a CompanyProvider');
  }
  return context;
}
