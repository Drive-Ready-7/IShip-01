import React, { useState } from 'react';
import './PopUp.css';
import Axios from '../../../auth/Axios';
const PopUp = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
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
            
    
        });
    }catch(e)
    {
        console.error('Error submitting OTP:', e);
    }    
  }
 return (
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
  );
};

export default PopUp;
