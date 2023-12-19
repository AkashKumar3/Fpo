import React, { useState, useEffect } from 'react';
import '../css/start.css';
import Lottie from 'lottie-react';
import axios from 'axios';

import Authentication from './auth'; // Import your Authentication component

function Start() {
  const [showAuth, setShowAuth] = useState(false);

  const handleGetStarted = () => {
    // Logic to show the Authentication component
    setShowAuth(true);
  };

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://lottie.host/dd09d1cb-88ae-43b3-a768-2af5fe8b3871/xgYOKcd37Y.json'
        );
        setAnimationData(response.data);
      } catch (error) {
        console.error('Error fetching animation data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      {/* Other content */}
      {!showAuth ? (
        <div>
          <div className="lottie-cont">
            {animationData && (
              <Lottie
                animationData={animationData}
                style={{ width: '25vw', height: '25vw' }}
                loop={0}
                autoplay
                speed={0.5} // Adjust the speed here (0.5 slows down the animation to half)
              />
            )}
          </div>

          <div className="texts">
            <h1 style={{ margin: '2vw 0' }}>FPO</h1>
            <p>To the farmer, for the farmer, by the farmer.</p>
          </div>

          <div style={{ marginBottom: '10vh' }}>
            <button className="btn-getStart" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default Start;
