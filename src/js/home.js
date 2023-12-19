import React, { useState } from 'react';
import Navbar from './navbar';
import '../css/home.css'; // Import your CSS file for Home styling

function Home() {
  const [images, setImages] = useState([]);

  const handleCaptureImage = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const mediaStream = new MediaStream(stream);
      const video = document.createElement('video');
      video.srcObject = mediaStream;

      video.onloadedmetadata = () => {
        video.play();
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageURL = canvas.toDataURL('image/png');

        setImages([...images, imageURL]);
        stream.getTracks().forEach((track) => track.stop());
      };
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };

  return (
    <div className="home">
      <Navbar />
      <div className="content">
      
        </div>
        <div className="camera-section">
          <h2>Camera Integration</h2>
          <button onClick={handleCaptureImage}>Capture Image</button>
          <div className="image-grid">
            {images.map((image, index) => (
              <div key={index} className="image-container">
                <img src={image} alt={`Captured Image ${index}`} />
                <p>Captured Image {index}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Home;
