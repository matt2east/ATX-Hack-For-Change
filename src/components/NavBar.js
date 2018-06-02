import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = props => {
  return (
    <div id="navbar" className="row">
      <NavLink to="/tips" className="navlink">
        Tips
      </NavLink>
      <NavLink to="/game" className="navlink">
        Game
      </NavLink>
    </div>
  );
};

export default Navbar;
