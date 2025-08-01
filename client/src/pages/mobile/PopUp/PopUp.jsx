import React, { useState } from 'react';
import './PopUp.css';
import Axios from "@api";

import Logo from '../logo/Logo';
import { useNavigate } from 'react-router-dom';

const PopUp = (props) => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
      e.preventDefault();
      const value = e.target.value.replace(/\D/g, '');
      if (value.length <= 6) setOtp(value);
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP.');
      return;
    }
    try{
        const res = await Axios.post('/api/user/oauth/verify-code', {
            email: props.email,
            resetCode: otp   
        });
        if (res.data.success) {
            console.log('OTP verified successfully');
            props.setUserData(prev => ({ ...prev, email: props.email }));
            localStorage.setItem('userData', JSON.stringify({ ...props.userData, email: props.email }));
            props.setPopup(!props.popup);
            props.setEmailShower(!props.emailShower);
        }
        localStorage.setItem('email', props.email);
        navigate('/profile');
        
    }catch(e)
    {
        const oldEmail = localStorage.getItem('email');
        const res = await Axios.post('/api/user/change-email', {
            userId: props._id,
            email: oldEmail
        });
        console.error('Error submitting OTP:', e);
        props.setPopup(prev => !prev);
    }    
  }
 return (
     <div className="popup-body">
      <button onClick={()=>{
        props.setPopup(!props.popup);
        props.setEmailShower(!props.emailShower);
      }} className="cross">X</button>
      <form className="otp-form" onSubmit={handleSubmit}>
        <label htmlFor="otp">Enter OTP:</label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={handleChange}
          maxLength="6"
          className="spaced-input"
          autoComplete="one-time-code"
        />
        <button type="submit">Verify</button>
      </form>
     </div>
  );
};

export default PopUp;
