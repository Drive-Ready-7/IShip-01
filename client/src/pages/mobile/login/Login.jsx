import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const navigate = useNavigate()

    return (

        <div className="M-Login">
        
            <div id="M-navbar">
                <img id="M-logo" src="/images/logo.png" alt="lastline_logo" />
                <div id="M-menu">&#9776;</div>
            </div>
            <div className="M-LoginForm">
                <form  id="M-form" action="">
                    <h1>Login</h1>
                    {/* Username Input */}
                    <div className="M-Login-Input">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            placeholder=" "
                        />
                        <label className="M-label" htmlFor="username">Username or Email</label>
                        <FaUser className="M-icon" />
                    </div>

                    {/* Password Input with toggle */}
                    <div className="M-Login-Input">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="M-password"
                            name="password"
                            required
                            placeholder=" "
                        />
                        <label className="M-label"  htmlFor="password">Password</label>
                        <span onClick={togglePassword} style={{ cursor: 'pointer' }}>
                            {showPassword ? (
                                <FaEye className="M-icon" />
                            ) : (

                                <FaEyeSlash className="M-icon" />
                            )}
                        </span>
                    </div>

                    {/* Remember Me & Forgot */}
                    <div className="M-Login-forget">
                        <label className="M-label" ><input type="checkbox" /> Remember me</label>
                        <span onClick={() => navigate('/forgot-password')}>Forgot Password?</span>
                    </div>

                    <button type="submit" className="M-Login-Button">Login</button>

                    {/* Register Link */}
                    <div className="M-register-link">
                        <p>Don't have an account? <span onClick ={()=>{navigate('/register')}} >Register</span></p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;
