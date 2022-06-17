import React from 'react'
import './JobImage.css'
import placeholderimage from './placeholderimage.png'

function JobImage() {
  return (
    <div>
        <img className="jobimage" src={placeholderimage} alt="Job Photo" />
    </div>
  )
}

export default JobImage