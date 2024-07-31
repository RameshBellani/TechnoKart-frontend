import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Importing the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/search">Search</Link></li>
        <li className="navbar-item"><Link to="/login">Login</Link></li>
        <li className="navbar-item"><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
