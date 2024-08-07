// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container mt-5 text-white">
      <h1 className="display-4">Welcome to Our Awesome Website</h1>
      <p>Discover a world of possibilities and amazing features!</p>

      <div className="mt-4">
        <h2>Featured Content</h2>
        <ul>
          <li>Explore our latest products and exclusive offers</li>
          <li>Stay updated with our exciting blog posts</li>
          <li>Join vibrant community events and discussions</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link to="/about" className="text-light">
              Learn About Us
            </Link>
          </li>
          <li>
            <Link to="/counter" className="text-light">
              Visit our Counter
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-light">
              Login
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h2>Contact Information</h2>
        <p>
          Feel free to reach out to us at{' '}
          <a href="mailto:akashyte2005@gmail.com" className="text-light">
            akashyte2005@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Home;
