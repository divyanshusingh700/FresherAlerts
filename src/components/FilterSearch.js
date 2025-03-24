import React, { useState, useContext, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { SearchContext } from "../context/SearchContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSearch = () => {
  const { handleFilter, setIsSearchActive } = useContext(SearchContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Initialize state with URL parameters (maintains search on back navigation)
  const [keywords, setKeywords] = useState(searchParams.get("keywords") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [jobType, setJobType] = useState(searchParams.get("jobType") || "");

  useEffect(() => {
    console.log("inside FilterSearch useeffect");
    // Update state when URL changes (e.g., navigating back)
    setKeywords(searchParams.get("keywords") || "");
    setLocation(searchParams.get("location") || "");
    setJobType(searchParams.get("jobType") || "");
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("🔍 Applying filters:", { keywords, location, jobType });

    handleFilter({ keywords, location, jobType });

    setKeywords("");
    setLocation("");
    setJobType("");

    setIsSearchActive(false);

    // Update URL with search parameters
    const queryParams = new URLSearchParams();
    if (keywords) queryParams.append("keywords", keywords);
    if (location) queryParams.append("location", location);
    if (jobType) queryParams.append("jobType", jobType);

    navigate(`/?${queryParams.toString()}`, { replace: false });
  };

  return (
    <Form onSubmit={handleSearch} className="filter-search-form">
      <Row className="align-items-end">
        <Col md={4}>
          <Form.Group controlId="formKeywords">
            <Form.Label>Keywords</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., Software Engineer"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., Bangalore"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formJobType">
            <Form.Label>Job Type</Form.Label>
            <Form.Control
              as="select"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={2}>
          <Button variant="primary" type="submit" className="w-100">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterSearch;
