import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import axios from 'axios';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase/setup'; // Import your Firebase setup correctly
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../css/auth.css';
import { useNavigate } from 'react-router-dom';

function Authentication() {

  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [animationData, setAnimationData] = useState(null);
  const [otpError, setOtpError] = useState('');
  const [showOtpIncorrectWarning, setShowOtpIncorrectWarning] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);


  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
      const confirmResult = await signInWithPhoneNumber(auth, phone, recaptcha);
      setConfirmation(confirmResult);
      setOtpRequested(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetOTP = () => {
    if (!phone || !/^(\+?\d{1,3}[- ]?)?\d{10}$/.test(phone)) {
      setPhoneError('Please enter a valid phone number');
      return;
    } else {
      setPhoneError('');
    }

    sendOtp();
  };

  const verifyOtp = async () => {
    try {
      if (!otp) {
        setOtpError('Please enter OTP');
        setShowOtpIncorrectWarning(false); // Reset incorrect OTP warning
        return;
      } else {
        setOtpError('');
      }

      if (otp && confirmation !== null) {
        const credential = await confirmation.confirm(otp);
        console.log('OTP confirmed:', credential);
        navigate('/subscription');
        // Handle successful verification - Implement navigation to home screen here
      } else {
        console.log('OTP or confirmation is null');
        setOtpError('Wrong OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setOtpError(''); // Reset OTP error message
      setShowOtpIncorrectWarning(true); // Set warning for incorrect OTP
    }
  };

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
      <div className="lottie-cont">
        {animationData && (
          <Lottie
            animationData={animationData}
            style={{ width: '20vw', height: '15vw' }}
            speed={0}
            loop={0}
          />
        )}
      </div>

      <div className="texts" style={{ marginBottom: '0' }}>
        <h1 style={{ margin: '1.5vw 0' }}>Login</h1>
        <p style={{ margin: '1vw' }}>Please sign in to continue.</p>

        <div className="phoneInput" style={{ marginBottom: '5px' }}>
          <PhoneInput
            country={'in'}
            value={phone}
            onChange={(phone) => {
              setPhone('+' + phone);
              setPhoneError('');
            }}
            placeholder="Enter mobile number"
          />
          {phoneError && (
            <p className="input-warning" style={{ color: 'red', fontSize: '0.8em' }}>
              {phoneError}
            </p>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4px' }}>
          <button id="btn-OTP" onClick={handleGetOTP}>
            Get OTP
          </button>
        </div>
        <div style={{ marginTop: '10px', marginBottom: '0', width: '40px', marginRight: '97.5%' }} id="recaptcha"></div>
      </div>

      <div style={{ marginBottom: '0.1vh' }}>
        {otpRequested && ( // Conditionally render OTP input and Verify button
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ marginLeft: '40%', marginTop: '10px', marginBottom: '10px' }}
            className="input"
            placeholder="Enter OTP"
          />
        )}
        {otpRequested && showOtpIncorrectWarning && (
          <p className="input-warning" style={{ color: 'red', fontSize: '0.8em' }}>
            Incorrect OTP. Please try again.
          </p>
        )}
        {otpRequested && otpError && (
          <p className="input-warning" style={{ color: 'red', fontSize: '0.8em' }}>
            {otpError}
          </p>
        )}
        {otpRequested && ( // Conditionally render Verify OTP button
          <div style={{ textAlign: 'center' }}>
            <button onClick={verifyOtp} id="verify-OTP">
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Authentication;
