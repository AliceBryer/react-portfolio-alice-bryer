import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="name">ALICE BRYER</div>
      <div className="nav-bar">
        <nav>
          <ul>
            <li className="nav-list">
              <NavLink to="/"></NavLink>
            </li>
            <li className="nav-list">
              <NavLink to="/">About Me</NavLink>
            </li>
            <li className="nav-list">
              <NavLink to="/portfolio"> Portfolio</NavLink>
            </li>

            {/* Wishlist for testing purpose */}
            <li className="nav-list">
              <NavLink to="/resume">Resume</NavLink>
            </li>

            <li className="nav-list">
              <NavLink to="/contactMe">Contact Me</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
