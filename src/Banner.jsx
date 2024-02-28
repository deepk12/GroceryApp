import React from 'react';
import './Banner.css';
import choclateImage from './assets/banner.jpeg';

export default function Banner() {
  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: `url(${choclateImage}) no-repeat`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:"400px",
        
      }}
    >
      <div className="content">
        <h3>
          fresh and
          {' '}
          <span>organic</span>
          {' '}
          products
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          vitae perspiciatis neque soluta.
        </p>
        <button type="button" className="btn">
          shop now
        </button>
      </div>
    </section>
  );
}