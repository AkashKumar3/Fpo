import React, { useEffect, useRef } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../css/home.css'; // Import your CSS file for Home styling
import Navbar from './navbar'; // Import your Navbar component
import sampleVideo from '../assets/production_id_4684807 (1080p).mp4'; // Import your local video file
import Footer from './footer';

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const loadVideo = async () => {
      try {
        video.src = sampleVideo;
        await video.play();
      } catch (error) {
        console.error('Error playing video:', error);
      }
    };

    if (video && sampleVideo) {
      loadVideo();
    }
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="video_text">
            {/* Content for the video_text div */}
            <h4>Welcome to our Farming Equipment Rental Service</h4>
            <p>Find the right equipment for your farming needs.</p>
          </div>
      <div className="video-container">
        <video ref={videoRef} className="background-video" muted loop />
      </div>

      <Row className="justify-content-center mt-4">
        {/* First Card */}
        <Col md={3} className="mb-3">
        <Card className="custom-card d-flex h-100 flex-column">
              <div className="circle-image">
                <img
                  src= 'https://images.unsplash.com/photo-1614977645540-7abd88ba8e56?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='image'
                  className="rounded-circle img-fluid"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>Rent Equipment</Card.Title>
                <Card.Text>Save Money Rent Equipment
                    <ul>
                        <li>Rent for short Period</li>
                        <li>No Maintaince</li>
                        <li>No huge investment</li>
                    </ul>
                </Card.Text>
                <div className="mt-auto">
                  <Button variant="primary">Rent</Button>
                </div>
              </Card.Body>
            </Card>
        </Col>

        {/* Second Card */}
        <Col md={3} className="mb-3">
        <Card className="custom-card d-flex h-100 flex-column">
              <div className="circle-image">
                <img
                  src= 'https://images.unsplash.com/photo-1614977645540-7abd88ba8e56?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='image'
                  className="rounded-circle img-fluid"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>Marketplace</Card.Title>
                <Card.Text>Be Save From Local Vendors, Get the best price for your crops</Card.Text>
                <div className="mt-auto">
                  <Button variant="primary">Sell</Button>
                </div>
              </Card.Body>
            </Card>
        </Col>

        {/* Third Card */}
        <Col md={3} className="mb-3">
        <Card className="custom-card d-flex h-100 flex-column">
              <div className="circle-image">
                <img
                  src= 'https://images.unsplash.com/photo-1614977645540-7abd88ba8e56?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='image'
                  className="rounded-circle img-fluid"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>Cold Storage</Card.Title>
                <Card.Text>Nearby Cold Storage Infrstructure, So Crops can be sell in off session </Card.Text>
                <div className="mt-auto">
                  <Button variant="primary">Search Nearby</Button>
                </div>
              </Card.Body>
            </Card>
        </Col>

        {/* Fourth Card */}
        <Col md={3} className="mb-3">
        <Card className="custom-card d-flex h-100 flex-column">
              <div className="circle-image">
                <img
                  src= 'https://images.unsplash.com/photo-1614977645540-7abd88ba8e56?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='image'
                  className="rounded-circle img-fluid"
                />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>Government Schemes</Card.Title>
                <Card.Text>Get profit from the government by applying in different schemes</Card.Text>
                <div className="mt-auto">
                  <Button variant="primary">Schemes</Button>
                </div>
              </Card.Body>
            </Card>
           
        </Col>
      </Row>
      <Footer/>
    </div>
  );
}

export default Home;
