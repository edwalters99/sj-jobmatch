import React from 'react'
import {GoTools} from 'react-icons/go'
import './JobRequirements.css'

function JobRequirements() {
  return (
    <div className="job-requirements-container">
        <div className="job-requirements-icon-container"><GoTools size={30} /></div>
        <div className="job-requirements-data-container">
            <h3>Requirements</h3>
            <ul>
                <li>Safety Vest</li>
                <li>Hard Hat</li>
            </ul>
        </div>
    </div>
  )
}

export default JobRequirements