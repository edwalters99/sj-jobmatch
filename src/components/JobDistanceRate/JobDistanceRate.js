import React from "react";
import "./JobDistanceRate.css";

function JobDistanceRate({ distance, rate }) {
  return (
    <div className="job-distance-rate-container">
      <div className="distance-container">
        <p className="job-distance-rate-header">Distance</p>
        <p className="job-distance-rate-data">{distance.toFixed(1)} miles</p>
      </div>
      <div className="rate-container">
        <p className="job-distance-rate-header">Hourly Rate</p>
        <p className="job-distance-rate-data">
          <span className="super">$</span>
          {(rate / 100).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default JobDistanceRate;
