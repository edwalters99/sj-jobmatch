import React from "react";
import "./JobCard.css";
import JobImage from "../JobImage/JobImage";
import JobTitleCompany from "../JobTitleCompany/JobTitleCompany";
import JobDistanceRate from "../JobDistanceRate/JobDistanceRate";
import JobShiftDates from "../JobShiftDates/JobShiftDates";
import JobLocation from "../JobLocation/JobLocation";
import JobRequirements from "../JobRequirements/JobRequirements";
import JobReportTo from "../JobReportTo/JobReportTo";
import JobButtons from "../JobButtons/JobButtons";

function JobCard({ jobData }) {
  const image = jobData.jobTitle.imageUrl;
  const jobTitle = jobData.jobTitle.name;
  const companyName = jobData.company.name;
  const distance = jobData.milesToTravel;
  const rate = jobData.wagePerHourInCents;

  return (
    <div className="jobcard">
      <JobImage image={image} jobTitle={jobTitle} />
      <JobTitleCompany jobTitle={jobTitle} companyName={companyName} />
      <JobDistanceRate distance={distance} rate={rate}/>
      <div className="inner-container">
        <JobShiftDates />
        <JobLocation />
        <JobRequirements />
        <JobReportTo />
        <JobButtons />
      </div>
    </div>
  );
}

export default JobCard;
