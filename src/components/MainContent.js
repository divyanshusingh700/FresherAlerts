import React, { useState, useContext,useEffect } from 'react';
import JobList from './JobList';
import JobDetails from './JobDetails';
import FilterSearch from './FilterSearch';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import { SearchContext } from '../context/SearchContext';
import { useSearchParams } from 'react-router-dom';
import JobsData from '../data/JobsData';


const MainContent = () => {
  const [selectedJob, setSelectedJob] = useState(JobsData[0]);
  const { isSearchActive, searchPerformed, setIsSearchActive, filteredJobs, handleFilter } = useContext(SearchContext);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const keywords = searchParams.get("keywords") || "";
    const location = searchParams.get("location") || "";
    const jobType = searchParams.get("jobType") || "";

    if (keywords || location || jobType) {
      handleFilter({ keywords, location, jobType }, false);
    }else {
      handleFilter({ keywords: '', location: '', jobType: '' }, false);
    }
  }, [searchParams]);

  useEffect(() => {
    if (filteredJobs.length > 0) {
      setSelectedJob(prevJob => 
        filteredJobs.find(job => job.id === prevJob?.id) || filteredJobs[0]
      );
    } else {
      setSelectedJob(JobsData[0]);
    }
  }, [filteredJobs]);

  return (
    <Container fluid className="main-content">
      {isSearchActive && <FilterSearch />}
      <Row className="justify-content-center">

      {/* Results Count Message */}
      <Col md={12} className="text-center my-2">
          {searchPerformed && (
            filteredJobs.length > 0 ? (
              <h5>📢 {filteredJobs.length} result{filteredJobs.length > 1 ? 's' : ''} found</h5>
            ) : (
              <h5 className="text-danger">No results found!</h5>
            )
          )}
        </Col>

        {/* Job List Section */}
        <Col md={4} className="job-list px-3">
          <JobList jobs={filteredJobs.length > 0 ? filteredJobs : JobsData} onSelectJob={setSelectedJob} />
          {filteredJobs.length === 0 && (
            <div className="text-center mt-3">
              <h6>🔍 Showing all available jobs</h6>
              <JobList jobs={JobsData} onSelectJob={setSelectedJob} />
            </div>
          )}
        </Col>

        {/* Job Details Section */}
        <Col md={8} className="job-details px-3">
          <JobDetails job={selectedJob} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
