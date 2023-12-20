import React, { useState } from 'react';
import '../css/subscription.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';
import { Card, ListGroup, Button } from 'react-bootstrap';
import Lottie from 'lottie-react'; // Import Lottie component
import animationData from '../assets/Animation - 1703035097974.json'; // Import your Lottie animation JSON file


function Subscription() {
    const navigate = useNavigate();
    const [selectedState, setSelectedState] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const regions = {
        State1: ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Janjgir-Champa', 'Jashpur', 'Kabirdham (formerly Kawardha)', 'Kanker', 'Kondagaon', 'Korba', 'Korea', 'Mahasamund', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sukma', 'Surajpur', 'Surguja'],
        State2: ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kancheepuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'],
        State3: ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Pathankot', 'Patiala', 'Rupnagar', 'Sahibzada Ajit Singh Nagar (Mohali)', 'Sangrur', 'Shaheed Bhagat Singh Nagar (Nawanshahr)', 'Sri Muktsar Sahib', 'Tarn Taran']
        // Define more regions for other states as needed
    };

    const handleBuy = () => {
        navigate('/home');
    }

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedRegion('');
    };

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value);
    };

    return (
        <div className="center">
            <div className="subscription-container">
                <div className="select-container">
                    <h3 style={{ marginLeft: '70px' }}>Select State</h3>
                    <select
                        className="select-dropdown"
                        value={selectedState}
                        onChange={handleStateChange}
                    >
                        <option value="">Select State</option>
                        <option value="State1">Chattisgarh</option>
                        <option value="State2">Tamil Nadu</option>
                        <option value="State3">Punjab</option>
                        {/* Add more states as needed */}
                    </select>
                </div>
                {selectedState && (
                    <div className="select-container">
                        <h3 style={{ marginLeft: '60px' }}>Select Region</h3>
                        <select
                            className="select-dropdown"
                            value={selectedRegion}
                            onChange={handleRegionChange}
                        >
                            <option value="">Select Region</option>
                            {regions[selectedState].map((region) => (
                                <option key={region} value={region}>{region} </option>
                            ))}
                        </select>
                    </div>
                )}
                {selectedRegion && (
                     <Card className="subscription-card">
                     <Card.Body>
                     <div className="lottie-animation">
                    <Lottie animationData={animationData} />
                </div>
                         <Card.Title>Basic Plan</Card.Title>
                         <Card.Text>Rs. 999 for 6 months</Card.Text>
                         <Card.Text>Description: Farmer Producer Organisation.</Card.Text>
                         <Button variant="success" onClick={handleBuy}>BUY NOW</Button>
                     </Card.Body>
                 </Card>
                )}
            </div>
        </div>
    );
}

export default Subscription;
