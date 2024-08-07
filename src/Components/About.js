// About.js
import React from 'react';

const About = () => {
  const containerStyle = {
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <div className="container" style={containerStyle}>
      <h1 className="mb-4">About Us</h1>

      <div className="text-left">
        <h2 className="mb-3">Our Mission</h2>
        <p className="mb-4">At Our Company, we strive to...</p>
        <ul className="list-group">
          <li className="list-group-item">Deliver high-quality products and services</li>
          <li className="list-group-item">Foster a vibrant and inclusive community</li>
          <li className="list-group-item">Stay at the forefront of innovation</li>
        </ul>
      </div>

      <div className="text-left mt-4">
        <h2 className="mb-3">Our Team</h2>
        <p className="mb-4">Meet the dedicated individuals who make everything possible:</p>
        <ul className="list-group">
          <li className="list-group-item">Akash SR - CEO</li>
          <li className="list-group-item">Jane Smith - CTO</li>
          <li className="list-group-item">Alice Johnson - Marketing Director</li>
        </ul>
      </div>

      <div className="text-left mt-4">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us at <a href="mailto:akashyte2005@gmail.com" style={{ color: 'lightblue', textDecoration: 'none' }}>akashyte2005@gmail.com</a>.</p>
      </div>
    </div>
  );
};

export default About;
