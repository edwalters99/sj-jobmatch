import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import './JobShiftDates.css'

function JobShiftDates() {
  return (
    <div className="job-shift-dates-container">
        <div className="job-shift-dates-icon-container"><FaCalendarAlt size={30} /></div>
        <div className="job-shift-dates-data-container">
            <h3>Shift Dates</h3>
            <p>Apr 7, Wed 8:00 Am - 10:00pm Pdt</p>
            <p>Apr 7, Wed 8:00 Am - 10:00pm Pdt</p>
        </div>
    </div>
  )
}

export default JobShiftDates