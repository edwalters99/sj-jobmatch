import React from 'react'
import {BsPersonCircle} from 'react-icons/bs'
import './JobReportTo.css'

function JobReportTo() {
  return (
    <div className="job-reportto-container">
    <div className="job-reportto-icon-container"><BsPersonCircle size={30} /></div>
    <div className="job-reportto-data-container">
        <h3>Report To</h3>
        <p>Dave (123) 546 987</p>
    </div>
</div>
  )
}

export default JobReportTo