import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "./JobShiftDates.css";
const { DateTime } = require("luxon");

function JobShiftDates({ shifts, zoneId }) {
  const renderShifts = (shifts, zoneId) => {
    return shifts.map((shift, index) => {
      const startISO = shift.startDate;
      const endISO = shift.endDate;
      const dtStart = DateTime.fromISO(startISO).setZone(zoneId);
      const dtEnd = DateTime.fromISO(endISO).setZone(zoneId);
      const string = `${dtStart.toFormat(
        "MMM d, EEE h:mm a"
      )} - ${dtEnd.toFormat("h:mma ZZZZ")}`;
      return <p key={index + string}>{string}</p>;
    });
  };

  return (
    <div className="job-shift-dates-container">
      <div className="job-shift-dates-icon-container">
        <FaCalendarAlt size={30} />
      </div>
      <div className="job-shift-dates-data-container">
        <h3>Shift Dates</h3>
        {renderShifts(shifts, zoneId)}
      </div>
    </div>
  );
}

export default JobShiftDates;
