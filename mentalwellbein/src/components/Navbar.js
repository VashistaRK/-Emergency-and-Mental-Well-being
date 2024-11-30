// Navbar

import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Well-Being</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mental-status">Mental Status</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/emergency">Emergency</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;