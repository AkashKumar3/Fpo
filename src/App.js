import React from 'react';
import Start from './js/start.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Subscription from './js/subscription.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} /> {/* Route for the Start component */}
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </Router>
  );
}

export default App;
