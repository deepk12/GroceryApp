
import React from 'react';
import './Navbar.css'; // Import CSS styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
