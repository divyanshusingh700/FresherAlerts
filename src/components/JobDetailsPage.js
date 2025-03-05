import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Spinner, Alert, Button } from "react-bootstrap";

// Mock job details (predefined dataset)
const mockJobDetails = {
  "Biz Solutions-Project Manager": {
    title: "Project Manager",
    company: "Biz Solutions",
    location: "Chicago",
    experience: "3 to 5 years",
    salary: "$80,000 - $100,000 per year",
    jobDescription: "Manage projects, teams, and deadlines effectively.",
    keySkills: ["Project Management", "Agile", "Scrum", "Leadership"],
    industry: "Business Solutions",
    functionalArea: "Management",
    employmentType: "Full Time, Permanent",
    roleCategory: "Project Management"
  }
};

// Function to generate dynamic mock job details if not found in mockJobDetails
const generateMockJob = (company, title) => {
  const locations = ["New York", "San Francisco", "Austin", "Seattle", "Boston"];
  const industries = ["IT Services & Consulting", "Finance", "Healthcare", "Retail", "Manufacturing"];
  const keySkills = {
    "Software Engineer": ["JavaScript", "React", "Node.js", "MongoDB"],
    "Data Analyst": ["SQL", "Python", "Tableau", "Data Visualization"],
    "Marketing Manager": ["SEO", "Google Ads", "Social Media", "Content Strategy"],
    "HR Specialist": ["Recruitment", "HR Policies", "Employee Relations"]
  };

  return {
    title,
    company,
    location: locations[Math.floor(Math.random() * locations.length)],
    experience: `${Math.floor(Math.random() * 6) + 1} to ${Math.floor(Math.random() * 10) + 3} years`,
    salary: `$${Math.floor(Math.random() * 50 + 50)}k per year`,
    jobDescription: `This is a ${title} role at ${company}. You will be responsible for leading and executing tasks efficiently.`,
    keySkills: keySkills[title] || ["Communication", "Problem-solving", "Leadership"],
    industry: industries[Math.floor(Math.random() * industries.length)],
    functionalArea: "Engineering - Software & QA",
    employmentType: "Full Time, Permanent",
    roleCategory: "Software Development"
  };
};

const JobDetailsPage = () => {
  const { jobCompany, jobTitle } = useParams();
  const navigate = useNavigate(); 
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Decode params once and store them
  const decodedCompany = decodeURIComponent(jobCompany);
  const decodedTitle = decodeURIComponent(jobTitle);
  const jobSlug = `${decodedCompany}-${decodedTitle}`;

  useEffect(() => {
    console.log("🚀 URL Params:", decodedCompany, decodedTitle);
    console.log("🔍 Generated jobSlug:", jobSlug);

    const fetchJobDetails = async () => {
      setLoading(true);

      // Check if job exists in mock data
      let jobData = mockJobDetails[jobSlug] || generateMockJob(decodedCompany, decodedTitle);
      
      console.log("📌 Fetched job data:", jobData);
      setJob(jobData);
      setLoading(false);
    };

    fetchJobDetails();
  }, [jobSlug]);

  if (loading) {
    return (
      <Container className="text-center mt-4">
        <Spinner animation="border" />
        <p>Loading job details...</p>
      </Container>
    );
  }

  if (!job) {
    return (
      <Container className="text-center mt-4">
        <Alert variant="danger">❌ Job not found. Please check the job listing.</Alert>
        <Button variant="primary" onClick={() => navigate("/")}>🏠 Go to Home</Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Button variant="secondary" onClick={() => navigate(-1)}>⬅️ Back</Button> {/* ✅ Back Button */}
      <Card className="job-details mt-3">
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {job.company} - {job.location}
          </Card.Subtitle>
          <Card.Text><strong>Experience:</strong> {job.experience}</Card.Text>
          <Card.Text><strong>Salary:</strong> {job.salary}</Card.Text>
          <Card.Text><strong>Description:</strong> {job.jobDescription}</Card.Text>
          <Card.Text><strong>Key Skills:</strong> {job.keySkills.join(", ")}</Card.Text>
          <Card.Text><strong>Industry:</strong> {job.industry}</Card.Text>
          <Card.Text><strong>Functional Area:</strong> {job.functionalArea}</Card.Text>
          <Card.Text><strong>Employment Type:</strong> {job.employmentType}</Card.Text>
          <Card.Text><strong>Role Category:</strong> {job.roleCategory}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default JobDetailsPage;
