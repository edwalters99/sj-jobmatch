import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {IoIosArrowForward} from 'react-icons/io';
import './JobLocation.css'

function JobLocation() {
  return (
    <div className="job-location-container">
        <div className="job-location-icon-container"><MdLocationOn size={45} /></div>
        <div className="job-location-data-container">
            <h3 className="location-header">Location</h3>
            <p className="location-address">123 Main Street, Tacoma, WA 98409</p>
            <p className="location-distance">5.62 miles from your job search location</p>
        </div>
        <div className="job-location-arrow-container">
            <IoIosArrowForward size={45} />
        </div>
    </div>
  )
}

export default JobLocation