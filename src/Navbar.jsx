import React from "react";
import "./Navbar.css"; // Import CSS styles
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
      Home
        
      </Link>

      <Link to="/about">
      About
        
      </Link>

      <Link to="/service">
      Services
      </Link>

      <Link to="/contact">
      Contacts
        
      </Link>
    </nav>
  );
};

export default Navbar;
