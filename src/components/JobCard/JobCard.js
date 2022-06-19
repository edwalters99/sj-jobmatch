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
  const shifts = jobData.shifts;
  const zoneId = jobData.company.address.zoneId;
  const address = jobData.company.address.formattedAddress;
  const requirements = jobData.requirements;

  return (
    <div className="jobcard">
      <JobImage image={image} jobTitle={jobTitle} />
      <JobTitleCompany jobTitle={jobTitle} companyName={companyName} />
      <JobDistanceRate distance={distance} rate={rate} />
      <div className="jobcard-inner-container">
        <JobShiftDates shifts={shifts} zoneId={zoneId} />
        <JobLocation address={address} distance={distance} />
        <JobRequirements requirements={requirements}/>
        <JobReportTo />
        <JobButtons />
      </div>
    </div>
  );
}

export default JobCard;
