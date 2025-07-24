import React, { useState } from "react";
import "./Register.css";
import { FaUser, FaEnvelope, FaPhone, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="bdy">
      <form>
      <div className="login-box">
        <h1>Register</h1>

        <div className="register-input">
          <div className="Login-Input">
            <input type="text" id="username" name="username" required placeholder=" " />
            <label htmlFor="username">Username</label>
            <FaUser className="icon" />
          </div>
          <div className="Login-Input">
            <input type="email" id="email" name="email" required placeholder=" " />
            <label htmlFor="email">Email</label>
            <FaEnvelope className="icon" />
          </div>
          <div className="Login-Input">
            <input type="tel" id="phone" name="phone" required placeholder=" " />
            <label htmlFor="phone">Phone Number</label>
            <FaPhone className="icon" />
          </div>
          <div className="Login-Input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              placeholder=" "
            />
            <label htmlFor="password">Enter Password</label>
            {showPassword ? (
              <FaEye className="icon" onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <FaEyeSlash className="icon" onClick={() => setShowPassword(!showPassword)} />
            )}
          </div>
          <div className="Login-Input">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder=" "
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            {showConfirmPassword ? (
              <FaEye className="icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
            ) : (
              <FaEyeSlash className="icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
            )}
          </div>

          <button className="btn">Register</button>
          <p className="login-link">Already have an account? <a href="#">Login</a></p>
        </div>
      </div>
      </form>
    </div>
  );
}

