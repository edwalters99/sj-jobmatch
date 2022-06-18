import React from "react";
import "./JobImage.css";

function JobImage({ image, jobTitle }) {
  return (
    <div>
      <img className="jobimage" src={image} alt={jobTitle} />
    </div>
  );
}

export default JobImage;
