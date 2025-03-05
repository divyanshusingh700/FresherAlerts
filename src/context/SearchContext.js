import React, { createContext, useState, useEffect } from 'react';
import JobsData from '../data/JobsData';
import { useSearchParams } from 'react-router-dom';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(); 
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    const keywords = searchParams.get('keywords') || '';
    const location = searchParams.get('location') || '';
    const jobType = searchParams.get('jobType') || '';
    console.log("jobType is inputted:"+jobType);

    handleFilter({ keywords, location, jobType }, false);
  }, [searchParams]);

  const handleFilter = (filters, shouldUpdateUrl = true) => {
    console.log("🔍 Filters applied:", filters);
    const { keywords, location, jobType } = filters;

    const filtered = JobsData.filter(job =>
      (keywords ? job.title.toLowerCase().includes(keywords.toLowerCase()) : true) &&
      (location ? job.location.toLowerCase().includes(location.toLowerCase()) : true) &&
      (jobType ? job.jobType === jobType : true) 
    );

    setFilteredJobs(filtered);
    setIsSearchActive(false);
    setSearchPerformed(!!(keywords || location || jobType));

    if (shouldUpdateUrl) {
      const queryParams = new URLSearchParams();
      if (keywords) queryParams.set('keywords', keywords);
      if (location) queryParams.set('location', location);
      if (jobType) queryParams.set('jobType', jobType);

      setSearchParams(queryParams);
    }
  };

  return (
    <SearchContext.Provider value={{ isSearchActive, searchPerformed, setIsSearchActive, filteredJobs, handleFilter }}>
      {children}
    </SearchContext.Provider>
  );
};
