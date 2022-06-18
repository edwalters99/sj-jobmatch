import React from "react";
import "./Header.css";
import swipejobslogo from "./swipejobslogo.png";

function Header({firstName, lastName}) {
  return (
    <div className="header">
      <img className="header-logo" src={swipejobslogo} alt="swipejobs logo" />
      <h2 className="header-name">{firstName} {lastName}</h2>
    </div>
  );
}

export default Header;
