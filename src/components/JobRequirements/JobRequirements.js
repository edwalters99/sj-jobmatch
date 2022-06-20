import React from "react";
import { GoTools } from "react-icons/go";
import "./JobRequirements.css";

function JobRequirements({ requirements }) {
  const renderList = () => {
    if (requirements && requirements.length > 0) {
      return (
        <ul>
          {requirements.map((r, index) => (
            <li key={index + r}>{r}</li>
          ))}
        </ul>
      );
    } else {
      return <p data-testid="warning">n/a</p>;
    }
  };

  return (
    <div className="job-requirements-container">
      <div className="job-requirements-icon-container">
        <GoTools size={30} />
      </div>
      <div className="job-requirements-data-container">
        <h3>Requirements</h3>
        {renderList()}
      </div>
    </div>
  );
}

export default JobRequirements;
