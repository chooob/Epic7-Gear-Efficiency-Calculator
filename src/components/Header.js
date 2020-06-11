import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div style={{ marginTop: "10px" }} className="ui secondary pointing menu">
      <div>
        <Link to="/" className="item">
          Home
        </Link>
      </div>
      <div className="right menu">
        <Link to="/weapon" className="item">
          Weapon
        </Link>
        <Link to="" className="item">
          Helmet
        </Link>
      </div>
    </div>
  );
};

export default Header;
