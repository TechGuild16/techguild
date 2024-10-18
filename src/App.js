import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

const App = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Counter logic to increment from 1 to 100
    if (count < 100) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 50); // Adjust this time to make the counter faster or slower
      return () => clearTimeout(timer);
    } else {
      // Once the count finishes, start fading out the black background
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Delay after counting finishes before starting fade out
    }
  }, [count]);

  return (
    <div className={`app-container ${loading ? 'loading' : ''}`}>
      {loading && (
        <div className="loading-screen">
          <div className="counter">{count}</div>
        </div>
      )}
      <BrowserRouter>
      <Navbar/>
          <Routes>

            <Route />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
