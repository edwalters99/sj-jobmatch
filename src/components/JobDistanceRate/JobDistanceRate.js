import React from "react";
import "./JobDistanceRate.css";

function JobDistanceRate({ distance, rate }) {
  if (distance && distance % 1 !== 0) {
    distance = distance.toFixed(1);
  }

  return (
    <div className="job-distance-rate-container">
      <div className="distance-container">
        <p className="job-distance-rate-header">Distance</p>
        <p className="job-distance-rate-data" data-testid="distance">
          {distance ? distance + " miles" : "Not Available"}
        </p>
      </div>
      <div className="rate-container">
        <p className="job-distance-rate-header">Hourly Rate</p>
        {rate ? (
          <p className="job-distance-rate-data" data-testid="rate">
            <span className="super">$</span>
            {(rate / 100).toFixed(2)}
          </p>
        ) : (
          <p className="job-distance-rate-data" data-testid="rate">
            tbc
          </p>
        )}
      </div>
    </div>
  );
}

export default JobDistanceRate;
