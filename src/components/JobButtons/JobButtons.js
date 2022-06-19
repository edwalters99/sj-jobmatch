import React from "react";
import "./JobButtons.css";

function JobButtons({ acceptJob, rejectJob, jobID, workerID }) {
  return (
    <div className="job-buttons-container">
      <button className="btn" onClick={() => rejectJob(workerID, jobID)}>
        No Thanks
      </button>
      <button
        className="btn btn-reverse"
        onClick={() => acceptJob(workerID, jobID)}
      >
        I'll Take it
      </button>
    </div>
  );
}

export default JobButtons;
