import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import "./JobLocation.css";

function JobLocation({ address, distance }) {
  return (
    <div className="job-location-container">
      <div className="job-location-icon-container">
        <MdLocationOn size={45} />
      </div>
      <div className="job-location-data-container">
        <h3 className="location-header">Location</h3>
        <p className="location-address" data-testid="address">
          {address ? address : "Address Unavailable"}
        </p>
        <p className="location-distance" data-testid="distance">
          {distance
            ? `${distance.toFixed(2)} miles from your job search location`
            : "Distance unavailable"}
        </p>
      </div>
      <div className="job-location-arrow-container">
        <IoIosArrowForward size={45} />
      </div>
    </div>
  );
}

export default JobLocation;
