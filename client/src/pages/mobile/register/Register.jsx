import React, { useState } from "react";
import "./mobile_register.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import {
  FaUser,
  FaVoicemail,
  FaPhone,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const str = "  ";
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('not match the passwords')
      return;
    }

  };

  return (
    <section>
      <div className="mobile-register-div">
        <form className="register-box" onSubmit={handleSubmit}>
          <h1><span style={{color:"blue"}}>L</span>ast <span style={{color:"red"}}> L</span>ine</h1>

          <div className="mobile-register-input">
            <input
              type="text"
              id="register-username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="register-username">Username</label>
            <FaUser className="icon" />
          </div>

          <div className="mobile-register-input">
            <input
              type="email"
              id="register-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="register-email">Email</label>
            <FaVoicemail className="icon" />
          </div>

          {/* <div className="mobile-register-input">
            <input
              type="tel"
              id="register-phone"
              
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder=""

              maxLength={10}
            />
            <label htmlFor="register-phone">Phone Number</label>
            <FaPhone className="icon" />
          </div> */}

          <div className="mobile-register-input">
            <input
              type={showPassword ? "text" : "password"}
              id="register-password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="register-password">Enter Password</label>
            <span onClick={togglePassword} style={{ cursor: "pointer" }}>
              {showPassword ? <FaEye className="icon" /> : <FaEyeSlash className="icon" />}
            </span>
          </div>

          <div className="mobile-register-input">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="register-confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="register-confirm-password">Confirm Password</label>
            <span onClick={toggleConfirmPassword} style={{ cursor: "pointer" }}>
              {showConfirmPassword ? <FaEye className="icon" /> : <FaEyeSlash className="icon" />}
            </span>
            {formData.password !== formData.confirmPassword?(
               <p className="passwd">Passwords do not match</p> ) : null  
            }
          </div>
    
          <button type="submit" onClick={handleSubmit}>Register</button>

          <p className="have-account">
            Already have an Account?{str+"  "}
            
              <span onClick={() => navigate('/login') }>Login</span>
          </p>
        </form>
      </div>
    </section>
  );
}
