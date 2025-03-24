import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import FilterSearch from "./FilterSearch";
import { SearchContext } from "../context/SearchContext";

const Header = () => {
  const { isSearchActive, setIsSearchActive } = useContext(SearchContext);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand href="/">
            <img
              src="/logo.png"
              height="30"
              className="logo-img d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="me-auto">
              <Nav.Link href="/search-jobs">Search Jobs</Nav.Link>
              <Nav.Link href="/search-employers">Search Employers</Nav.Link>
              <Nav.Link href="/advice">Advice</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/job-alerts">Job Alerts</Nav.Link>
              <Nav.Link href="/top-employers">Top 100 Employers</Nav.Link>
              <NavDropdown title="Forum" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/forum">All Categories</NavDropdown.Item>
                <NavDropdown.Item href="/forum/application-advice">Application Advice</NavDropdown.Item>
                <NavDropdown.Item href="/forum/career-advice">Career Advice</NavDropdown.Item>
                <NavDropdown.Item href="/forum/interview-tips">Interview Tips</NavDropdown.Item>
                <NavDropdown.Item href="/forum/job-search-strategies">Job Search Strategies</NavDropdown.Item>
                <NavDropdown.Item href="/forum/mental-health">Mental Health</NavDropdown.Item>
                <NavDropdown.Item href="/forum/skills-development">Skills Development</NavDropdown.Item>
              </NavDropdown>
            </Nav> */}

            {/* Right-aligned Nav Links */}
            <Nav>
              <Nav.Link href="/sign-in">
                <FaUserCircle style={{ marginBottom: "2px" }} /> Sign In
              </Nav.Link>
              <Nav.Link href="/employers-post-job">
                <BsBriefcase style={{ marginBottom: "2px" }} /> Employers/Post
                Job
              </Nav.Link>
            </Nav>

            {/* Search Bar */}
            <div className="search-bar" onClick={() => setIsSearchActive(true)}>
              <input type="text" placeholder="Search Jobs..." readOnly />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search Overlay */}
      {isSearchActive && (
        <div className="search-overlay">
          <div className="search-container">
            <button
              className="close-btn"
              onClick={() => setIsSearchActive(false)}
            >
              ✖
            </button>
            <FilterSearch />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
