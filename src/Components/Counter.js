// Counter.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Counter.css'; // Import the CSS file for styling

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container mt-5">
      <div className="counter-container">
        <h2 className="counter-text">Counter: {count}</h2>
        <div className="button-group">
          <button className="btn btn-primary" onClick={handleIncrement}>
            +
          </button>
          <button className="btn btn-danger" onClick={handleDecrement}>
            -
          </button>
        </div>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
        {count >= 10 && <p className="limit-message">You've reached the maximum limit!</p>}
        {count <= -10 && <p className="limit-message">You've reached the minimum limit!</p>}
      </div>
    </div>
  );
};

export default Counter;
