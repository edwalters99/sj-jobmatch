import React from 'react'
import './JobDistanceRate.css'

function JobDistanceRate() {
  return (
    <div className="job-distance-rate-container">
        <div className="distance-container">
        <p className="job-distance-rate-header">Distance</p>
        <p className="job-distance-rate-data">5.6 miles</p>

        </div>
        <div className="rate-container">
        <p className="job-distance-rate-header">Hourly Rate</p>
        <p className="job-distance-rate-data"><span className="super">$</span>13.50</p>
        </div>
    </div>
  )
}

export default JobDistanceRate