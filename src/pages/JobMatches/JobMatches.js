import React, { useState, useEffect } from "react";
import "./JobMatches.css";
import Header from "../../components/Header/Header";
import JobCard from "../../components/JobCard/JobCard";
import ClipLoader from "react-spinners/ClipLoader";
import { AiOutlineReload } from "react-icons/ai";
const axios = require("axios");

const SERVER_URL = "https://test.swipejobs.com/api";

const WORKER_ID = "7f90df6e-b832-44e2-b624-3143d428001f";
// for test purposes. When operational this would be passed in as a prop.

function JobMatches() {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    getProfile(WORKER_ID);
  }, []);

  async function getProfile(workerID) {
    try {
      const response = await axios.get(
        SERVER_URL + "/worker/" + workerID + "/profile"
      );
      console.log("response ", response);
      setLoading(false);
      setProfileData(response.data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="loading-spinner">
        <ClipLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-body">
        <div className="error-container">
          <p className="message">Sorry! Something has gone wrong: </p>
          <p className="error">{error}</p>
          <div
            className="reload-button"
            onClick={() => {
              window.location.reload(false);
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
      <Header firstName={profileData.firstName} lastName={profileData.lastName} />
      <JobCard />
    </div>
  );
}

export default JobMatches;
