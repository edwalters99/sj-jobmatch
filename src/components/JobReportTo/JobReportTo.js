import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import "./JobReportTo.css";

function JobReportTo({ reportToName, reportToPhone }) {
    const renderReportTo = () => {
    let phoneString;
    if (reportToName) {
      reportToName = reportToName.split(" ")[0]; // first name only
    }
    if (reportToPhone) {
      phoneString = `(${reportToPhone.slice(0, 3)}) ${reportToPhone.slice(3,6)} ${reportToPhone.slice(6)}`;
    } else {
      phoneString = "";
    }
    if (reportToName) {
      return (
        <p data-testid="name-phone">
          {reportToName} {phoneString}
        </p>
      );
    } else {
      return <p data-testid="name-phone">n/a</p>;
    }
  };
  return (
    <div className="job-reportto-container">
      <div className="job-reportto-icon-container">
        <BsPersonCircle size={30} />
      </div>
      <div className="job-reportto-data-container">
        <h3>Report To</h3>
        {renderReportTo()}
      </div>
    </div>
  );
}

export default JobReportTo;
