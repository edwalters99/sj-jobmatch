import React from "react";
import placeholderImage from "./placeholderimage.png";
import "./JobImage.css";

function JobImage({ image, jobTitle }) {
  if (image) {
    return (
      <div>
        <img
          className="jobimage"
          src={image}
          alt={jobTitle ? jobTitle : "Example job image"}
        />
      </div>
    );
  } else
    return (
      <div>
        <img
          className="jobimage"
          src={placeholderImage}
          alt={jobTitle ? jobTitle : "Example job image"}
        />
      </div>
    );
}

export default JobImage;
