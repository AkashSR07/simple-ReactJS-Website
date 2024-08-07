// AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Counter from './Counter';
import Login from './Login';
import SearchPage from './SearchPage';
import DataPage from './DataPage'; // Import the new DataPage component
import { Link } from 'react-router-dom';
import './App.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/data">Data</Link></li> {/* Add link to the new DataPage */}
      </ul>
    </nav>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Your React Website</h1>
        </header>
        <NavBar />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/data" element={<DataPage />} /> {/* Add route for DataPage */}
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Your Company</p>
        </footer>
      </div>
    </Router>
  );
};

export default AppRouter;
