import React from 'react'
import './JobCard.css'
import JobImage from '../JobImage/JobImage';
import JobTitleCompany from '../JobTitleCompany/JobTitleCompany';
import JobDistanceRate from '../JobDistanceRate/JobDistanceRate';
import JobShiftDates from '../JobShiftDates/JobShiftDates';
import JobLocation from '../JobLocation/JobLocation';
import JobRequirements from '../JobRequirements/JobRequirements';
import JobReportTo from '../JobReportTo/JobReportTo';
import JobButtons from '../JobButtons/JobButtons';

function JobCard() {
  return (
    <div>
        <JobImage />
        <JobTitleCompany />
        <JobDistanceRate />
        <JobShiftDates />
        <JobLocation />
        <JobRequirements />
        <JobReportTo />
        <JobButtons />
    </div>
  )
}

export default JobCard