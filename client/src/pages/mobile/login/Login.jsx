import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    return (

        <div className="Login">
            <div id="navbar">
                <img src="/../../../src/assets/lastline_ll.png" alt="lastline_logo" />
                <div id="menu">&#9776;</div>
            </div>
            <div className="LoginForm">
                <form action="">
                    <h1>Login</h1>
                    {/* Username Input */}
                    <div className="Login-Input">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            placeholder=" "
                        />
                        <label htmlFor="username">Username or Email</label>
                        <FaUser className="icon" />
                    </div>

                    {/* Password Input with toggle */}
                    <div className="Login-Input">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            required
                            placeholder=" "
                        />
                        <label htmlFor="password">Password</label>
                        <span onClick={togglePassword} style={{ cursor: 'pointer' }}>
                            {showPassword ? (
                                <FaEye className="icon" />
                            ) : (

                                <FaEyeSlash className="icon" />
                            )}
                        </span>
                    </div>

                    {/* Remember Me & Forgot */}
                    <div className="Login-forget">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit">Login</button>

                    {/* Register Link */}
                    <div className="register-link">
                        <p>Don't have an account? <Link to="https://www.lastline.life/register">Register</Link></p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;
