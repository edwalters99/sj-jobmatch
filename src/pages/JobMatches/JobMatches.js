import React, { useState, useEffect } from "react";
import "./JobMatches.css";
import Header from "../../components/Header/Header";
import JobCard from "../../components/JobCard/JobCard";
import ClipLoader from "react-spinners/ClipLoader";
import { AiOutlineReload } from "react-icons/ai";
const axios = require("axios");

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const WORKER_ID = process.env.REACT_APP_WORKER_ID;
// Worker ID for test purposes. If operational this would be passed in as a prop.

function JobMatches() {
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingMatches, setLoadingMatches] = useState(true);
  const [profileData, setProfileData] = useState({});
  const [matchesData, setMatchesData] = useState({});
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    async function getProfile(workerID) {
      if (Object.keys(profileData).length === 0) {
        try {
          const response = await axios.get(
            SERVER_URL + "/worker/" + workerID + "/profile"
          );
          setLoadingProfile(false);
          setProfileData(response.data);
        } catch (error) {
          setErrors((prev) => [...prev, error.message + " (Fetching profile)"]);
          setLoadingProfile(false);
        }
      }
    }
    async function getMatches(workerID) {
      if (Object.keys(matchesData).length === 0) {
        try {
          const response = await axios.get(
            SERVER_URL + "/worker/" + workerID + "/matches"
          );
          setLoadingMatches(false);
          setMatchesData(response.data);
        } catch (error) {
          setErrors((prev) => [...prev, error.message + " (Fetching matches)"]);
          setLoadingMatches(false);
        }
      }
    }
    getProfile(WORKER_ID);
    getMatches(WORKER_ID);
  }, [matchesData, profileData]);

  // capture Error from API call in JobCard
  const captureError = (error, source) => {
    setErrors((prev) => [...prev, error.message + ` (${source})`]);
  };

  if (loadingProfile || loadingMatches) {
    return (
      <div className="loading-spinner">
        <ClipLoader />
      </div>
    );
  }

  if (errors.length !== 0) {
    return (
      <div className="error-body">
        <div className="error-container">
          <p className="message">Sorry! Something has gone wrong: </p>
          {errors.map((err, index) => (
            <p className="error" key={index}>
              {err}
            </p>
          ))}
          {/*index used as key as errors array will not be re-ordered */}

          <div
            className="reload-button"
            onClick={() => {
              window.location.reload(false);
              // If this was part of a larger application useNavigate() could be used to redirect to another page.
            }}
          >
            <AiOutlineReload size={40} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header
        firstName={profileData.firstName}
        lastName={profileData.lastName}
      />
      {matchesData.length === 0 ? (
        <div>
          <h2 className="jobmatch-msg">
            No Job Matches found <br />
            Please check again soon!
          </h2>
          <div
            className="reload-button"
            onClick={() => {
              window.location.reload(false);
              // If this was part of a larger application useNavigate() could be used to redirect to another page.
            }}
          >
            <AiOutlineReload size={40} />
          </div>
        </div>
      ) : (
        matchesData.map((match) => (
          <JobCard
            key={match.jobId}
            jobData={match}
            workerID={WORKER_ID}
            captureError={captureError}
          />
        ))
      )}
    </div>
  );
}

export default JobMatches;
