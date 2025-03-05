import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JobDetails = ({ job }) => {
  if (!job) return <p className="text-muted">Select a job to see details</p>;
  
  const jobSlug = `/job/${encodeURIComponent(job.company)}/${encodeURIComponent(job.title)}`;

  return (
    <Card className="job-details">
      <Card.Body>
        <Card.Title>          
          <Link to={jobSlug} className="job-title">
            {job.title}
          </Link>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{job.company} - {job.location}</Card.Subtitle>
        <Card.Text>{job.description}</Card.Text>
        <Card.Text><strong>Responsibilities:</strong></Card.Text>
        <ul>
          {job.responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
        <Card.Text><strong>Qualifications:</strong></Card.Text>
        <ul>
          {job.qualifications.map((qual, index) => (
            <li key={index}>{qual}</li>
          ))}
        </ul>
        <Card.Text><strong>Benefits:</strong> {job.benefits.join(', ')}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default JobDetails;
