import React, { useState } from "react";
import "./JobCard.css";
import JobImage from "../JobImage/JobImage";
import JobTitleCompany from "../JobTitleCompany/JobTitleCompany";
import JobDistanceRate from "../JobDistanceRate/JobDistanceRate";
import JobShiftDates from "../JobShiftDates/JobShiftDates";
import JobLocation from "../JobLocation/JobLocation";
import JobRequirements from "../JobRequirements/JobRequirements";
import JobReportTo from "../JobReportTo/JobReportTo";
import JobButtons from "../JobButtons/JobButtons";

const axios = require("axios");
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function JobCard({ jobData, acceptJob, workerID, captureError }) {
  const jobID = jobData.jobId;
  const image = jobData.jobTitle.imageUrl;
  const jobTitle = jobData.jobTitle.name;
  const companyName = jobData.company.name;
  const distance = jobData.milesToTravel;
  const rate = jobData.wagePerHourInCents;
  const shifts = jobData.shifts;
  const zoneId = jobData.company.address.zoneId;
  const address = jobData.company.address.formattedAddress;
  const requirements = jobData.requirements;
  const reportToName = jobData.company.reportTo.name;
  const reportToPhone = jobData.company.reportTo.phone;

  const [loadingAccept, setLoadingAccept] = useState(false);
  const [acceptResponse, setAcceptResponse] = useState("");

  async function acceptJob(workerID, jobID) {
    if (workerID && jobID && !loadingAccept) {
      try {
        setLoadingAccept(true);
        const response = await axios.get(
          SERVER_URL + "/workejjjjr/" + workerID + "/job/" + jobID + "/accept"
        );
        console.log("response accept  ", response);
        setLoadingAccept(false);
        setAcceptResponse(response.data);
      } catch (error) {
        captureError(error, "Accept Job");
        setLoadingAccept(false);
      }
    }
  }

  return (
    <div className="jobcard">
      <JobImage image={image} jobTitle={jobTitle} />
      <JobTitleCompany jobTitle={jobTitle} companyName={companyName} />
      <JobDistanceRate distance={distance} rate={rate} />
      <div className="jobcard-inner-container">
        <JobShiftDates shifts={shifts} zoneId={zoneId} />
        <JobLocation address={address} distance={distance} />
        <JobRequirements requirements={requirements} />
        <JobReportTo
          reportToName={reportToName}
          reportToPhone={reportToPhone}
        />
        <JobButtons acceptJob={acceptJob} workerID={workerID} jobID={jobID} />
        {acceptResponse.success && (
          <h2 className="lower-message">Job Accepted</h2>
        )}
        <h2 className="lower-message">{acceptResponse.message}</h2>
      </div>
    </div>
  );
}

export default JobCard;
