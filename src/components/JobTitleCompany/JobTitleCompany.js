import React from "react";
import "./JobTitleCompany.css";

function JobTitleCompany({ jobTitle, companyName }) {
  return (
    <div className="job-title-company-container">
      <h2 className="job-title">
        {jobTitle ? jobTitle : "Job title unavailable"}
      </h2>
      <h3 className="job-company">
        {companyName ? companyName : "Company name unavailable"}
      </h3>
    </div>
  );
}

export default JobTitleCompany;
