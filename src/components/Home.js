import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/weapon">
        <button className="ui button primary">Weapon</button>
      </Link>
    </div>
  );
};
export default Home;
