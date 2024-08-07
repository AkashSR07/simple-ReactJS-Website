// App.js

import React from 'react';
import AppRouter from './Components/AppRouter';
import './App.css'; // Import your App.css file

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your React Website</h1>
      </header>
      <main>
        <AppRouter />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
}

export default App;
