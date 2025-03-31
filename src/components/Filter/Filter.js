import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import "./Filter.css";
import FilterModal from "./Modal/FilterModal/FilterModal";

const filterOptions = [
  { id: "remote", label: "Remote", options: ["Yes", "No", "Hybrid"] },
  { id: "datePosted", label: "Date Posted", options: ["Last 24 Hours", "Last 7 Days", "Last 30 Days"] },
  { id: "pay", label: "Pay", options: ["Below $50k", "$50k-$100k", "Above $100k"] },
  { id: "jobType", label: "Job Type", modal: true },
  { id: "programmingLanguage", label: "Programming Language", modal: true },
  { id: "experience", label: "Experience", modal: true }
];

const jobTypes = ["Full-Time", "Part-Time", "Contract", "Internship", "Freelance", "Temporary", "Fresher"];
const programmingLanguages = [
  "Java", "JavaScript", "Python", "SQL", "HTML", "React", "Angular",
  "Node.js", ".NET", "Go", "C", "C++", "PHP", ".NET Core",
  "Bootstrap", "Selenium", "Hibernate", "Shell Scripting",
  "Perl", "ABAP", "J2EE", "Visual Basic", "R"
];

const Filter = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: "", type: "", options: [], selectedOptions: [], setSelectedOptions: () => {} });

  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [experience, setExperience] = useState([0, 30]);
  
  const [selectedFilters, setSelectedFilters] = useState({
    remote: "",
    datePosted: "",
    pay: ""
  });

  // Function to determine if a filter is applied
  const isFilterApplied = (filterId) => {
    if (filterId === "jobType") return selectedJobTypes.length > 0;
    if (filterId === "programmingLanguage") return selectedLanguages.length > 0;
    if (filterId === "experience") return experience[0] !== 0 || experience[1] !== 30;
    return selectedFilters[filterId] !== "";
  };

  const openModal = (title, type, options, selectedOptions, setSelectedOptions) => {
    setModalData({ title, type, options, selectedOptions, setSelectedOptions });
    setShowModal(true);
  };

  const handleDropdownSelect = (filterId, option) => {
    setSelectedFilters((prev) => ({ ...prev, [filterId]: option }));
  };

  const handleClearDropdown = (filterId) => {
    setSelectedFilters((prev) => ({ ...prev, [filterId]: "" }));
  };

  return (
    <div className="filter-container">
      {filterOptions.map((filter) =>
        filter.modal ? (
          <Button
            key={filter.id}
            variant="outline-primary"
            className={`filter-button ${isFilterApplied(filter.id) ? "active-filter" : ""}`}
            onClick={() => {
              if (filter.id === "jobType") {
                openModal("Job Type", "checkbox", jobTypes, selectedJobTypes, setSelectedJobTypes);
              } else if (filter.id === "programmingLanguage") {
                openModal("Programming Language", "checkbox", programmingLanguages, selectedLanguages, setSelectedLanguages);
              } else if (filter.id === "experience") {
                openModal("Experience", "range", [], experience, setExperience);
              }
            }}
          >
            {filter.label}
          </Button>
        ) : (
          <Dropdown key={filter.id} className="filter-item">
            <Dropdown.Toggle 
              variant="outline-primary" 
              className={`filter-button ${isFilterApplied(filter.id) ? "active-filter" : ""}`}
            >
              {selectedFilters[filter.id] || filter.label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {filter.options.map((option, index) => (
                <Dropdown.Item 
                  key={index} 
                  onClick={() => handleDropdownSelect(filter.id, option)}
                >
                  {option}
                </Dropdown.Item>
              ))}
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => handleClearDropdown(filter.id)} className="clear-filter">
                Clear
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )
      )}

      {/* Unified Filter Modal */}
      <FilterModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        title={modalData.title}
        type={modalData.type}
        options={modalData.options}
        selectedOptions={modalData.selectedOptions}
        setSelectedOptions={modalData.setSelectedOptions}
      />
    </div>
  );
};

export default Filter;