import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobList = ({ jobs = [], onSelectJob }) => {
  const handleJobSelect = (job) => {
    onSelectJob(job);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ListGroup className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <ListGroup.Item
            key={job.id}
            action
            onClick={() => handleJobSelect(job)}
          >
            <h5>
              <Link
                to={encodeURI(
                  `/job/${encodeURIComponent(job.company)}/${encodeURIComponent(job.title)}`,
                )}
                className="job-title"
              >
                {job.title}
              </Link>
            </h5>
            <p>
              {job.company} - {job.location}
            </p>
            <p>
              <strong>Type:</strong> {job.jobType}
            </p>
          </ListGroup.Item>
        ))
      ) : (
        <p className="text-muted text-center">No jobs found</p>
      )}
    </ListGroup>
  );
};

export default JobList;
