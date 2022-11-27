import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="headerContainer">
      <div className="headerLogo">
        <img src="../../logo.png" alt="Konnect" />
      </div>
      <div className="headerSearch">
        <input type="text" placeholder="Search Friend" />
        <PersonSearchIcon />
      </div>
      <div className="headerUserDetail">
        <h4>Ankit Tripathi</h4>
        <img src="../../ankit.png" alt="profileImg" />
      </div>
    </nav>
  );
};

export default Header;
