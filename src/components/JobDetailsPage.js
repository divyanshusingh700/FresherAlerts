import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Spinner, Alert, Button } from "react-bootstrap";
import JobsData from "../data/JobsData"; // Import actual job data

const JobDetailsPage = () => {
  const { jobCompany, jobTitle } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundJob = JobsData.find(
      (j) =>
        j.company === decodeURIComponent(jobCompany) &&
        j.title === decodeURIComponent(jobTitle),
    );

    setTimeout(() => {
      setJob(foundJob);
      setLoading(false);
    }, 500); // Simulating a small delay
  }, [jobCompany, jobTitle]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p>Loading job details...</p>
      </Container>
    );
  }

  if (!job) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">Job not found!</Alert>
        <Button variant="primary" onClick={() => navigate("/")}>
          Go Back to Jobs
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {job.company} - {job.location}
          </Card.Subtitle>
          <Card.Text>
            <strong>Description:</strong> {job.description}
          </Card.Text>
          <Card.Text>
            <strong>Responsibilities:</strong>
          </Card.Text>
          <ul>
            {job.responsibilities.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
          <Card.Text>
            <strong>Qualifications:</strong>
          </Card.Text>
          <ul>
            {job.qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>
          <Card.Text>
            <strong>Benefits:</strong> {job.benefits.join(", ")}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default JobDetailsPage;
