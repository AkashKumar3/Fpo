import React, { useEffect, useState } from 'react';

const Soil = () => {
  const [prediction, setPrediction] = useState(null);

  const makePrediction = async (imageFile) => {
    try {
      const API_ENDPOINT = 'https://github.com/mirroracctwo/sih-api-soil';
      const formData = new FormData();
      formData.append('image', imageFile);

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'X-API-KEY': 'sih-project', // Replace with your actual API key
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        // Process the prediction data received from the API
        setPrediction(data); // Set the prediction data in state
        console.log('Prediction:', data);
      } else {
        throw new Error('Failed to fetch');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const imageFile = 'https://via.placeholder.com/300.png/8EBA94/FFFFFF/?text=Soil';

  // You can call makePrediction function with the selected image file
//   useEffect(() => {
//     // Example usage:
//     const imageFile = 'https://via.placeholder.com/300.png/8EBA94/FFFFFF/?text=Soil'; // Get the image file
//     makePrediction(imageFile);
//   }, []);

  return (
    <div>
      {/* Your component JSX */}
      <div>
        {makePrediction(imageFile)}
      </div>
    </div>
  );
};

export default Soil;
