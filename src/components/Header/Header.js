import React from "react";
import "./Header.css";
import swipejobslogo from "./swipejobslogo.png";

function Header() {
  return (
    <div className="header">
      <img className="header-logo" src={swipejobslogo} alt="swipejobs logo" />
      <h2 className="header-name">Jim Rose</h2>
    </div>
  );
}

export default Header;
