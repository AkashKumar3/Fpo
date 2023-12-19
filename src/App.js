import React from 'react';
import Start from './js/start.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Subsciption from './js/subsciption.js';
import Ml from './js/ml.js';
import Home from './js/home.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} /> {/* Route for the Start component */}
        <Route path="/subscription" element={<Subsciption />} />
        <Route path="/ml" element={<Ml />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
