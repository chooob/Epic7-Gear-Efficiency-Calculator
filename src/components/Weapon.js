import React from "react";
import { Link } from "react-router-dom";

const Weapon = () => {
  return (
    <div>
      <div>Weapon Page</div>
      <Link to="/">
        <button className="ui button primary">Home</button>
      </Link>
    </div>
  );
};

export default Weapon;
