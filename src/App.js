import React from 'react';
import Start from './js/start.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Subsciption from './js/subsciption.js';
import Ml from './js/ml.js';
import Home from './js/home.js';
import RentEquipment from './js/equipments.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Soil from './js/soil.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} /> {/* Route for the Start component */}
        <Route path="/subscription" element={<Subsciption />} />
        <Route path="/ml" element={<Ml />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rentEquipments" element={<RentEquipment />} />
        <Route path="/soil" element={<Soil />} />
      </Routes>
    </Router>
  );
}

export default App;
