import React from "react";
import "./Header.css";
import swipejobslogo from "./swipejobslogo.png";

function Header({ firstName, lastName }) {
  return (
    <div className="header">
      <img className="header-logo" src={swipejobslogo} alt="swipejobs logo" />
      {firstName ? (
        <h2 className="header-name" data-testid="heading">
          {firstName} {lastName}
        </h2>
      ) : (
        <h2 data-testid="heading"></h2>
      )}
    </div>
  );
}

export default Header;
