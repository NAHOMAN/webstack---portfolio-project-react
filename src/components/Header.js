import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Add styling if needed

const Header = () => {
  const navigate = useNavigate(); // ✅ Fix: Initialize navigate

  return (
    <header>
      <div className="container">
        <h1>NC4x Traders Hub</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="header-right">
          <div className="search-container">
            <input type="text" id="searchInput" placeholder="Search blog posts..." />
            <button className="search-button">Search</button>
          </div>
          
          {/* Authentication Buttons */}
          <div className="auth-buttons">
            <button id="sign-up-btn" onClick={() => navigate("/signup")}>Sign Up</button>
            <button id="sign-in-btn" onClick={() => navigate("/signin")}>Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
