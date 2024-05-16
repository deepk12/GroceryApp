import React from 'react';
import './Services.css'; // Assuming Services.css is the CSS file you want to import
import Navbar from './Navbar';

const Services = () => {
  return (
    <>
    <Navbar></Navbar>

    <div>
      <h1>Services:</h1>
      <div className="columns">
        {/* Basic Plan */}
        <div className="plan-container">
        
          <ul className="price">
            <li className="header">Basic</li>
            <li className="grey">$ 9.99 / year</li>
            <li>Free Delivery for 1 Month</li>
            <li>With in Two Days Delivery</li>
            <li>Generic Products are Available</li>
            <li>Minimum Order Value $20</li>
            <li className="grey"><a href="#" className="button">Buy</a></li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="plan-container">
          <ul className="price">
            <li className="header">Pro</li>
            <li className="grey">$ 19.99 / year</li>
            <li>Free Delivery for 3 Month</li>
            <li>With in One Days Delivery</li>
            <li>Generic Products + Brand Products are Available</li>
            <li>Minimum Order Value $10</li>
            <li className="grey"><a href="#" className="button">Buy</a></li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="plan-container">
          <ul className="price">
            <li className="header">Premium</li>
            <li className="grey">$ 29.99 / year</li>
            <li>Free Delivery for 6 Month</li>
            <li>On Day Delivery</li>
            <li>Only Brand & Certified Products are Available</li>
            <li>Minimum Order Value $0</li>
            <li className="grey"><a href="#" className="button">Buy</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
