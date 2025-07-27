import React, { useContext, useState } from 'react';
import './Login.css';
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

import { AppContext } from "../../../AppContext/AppProvider";
import axios from "axios";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [usernameOrGmail,setUsernameOrGmail] = useState("");
    const [password,setPassword]=useState("");


    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const navigate = useNavigate()
    
    const {backendUrl,setIsLogin} = useContext(AppContext);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {  
            axios.defaults.withCredentials = true;
            console.log(backendUrl)
            console.log('hi')
            const {data} = await axios.post(`${backendUrl}/api/user/login`,
            {
              usernameOrEmail : usernameOrGmail,
              password:password,
        })
            console.log(data)
            navigate('/')
        
        }
        catch(e){

        alert(e)
        }
    }


    return (

        <div className="M-Login">
        
            <div id="M-navbar">
                <img id="M-logo" src="/images/logo.png" alt="lastline_logo" />
                <div id="M-menu">&#9776;</div>
            </div>
            <div className="M-LoginForm">
                <form  id="M-form" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    {/* Username Input */}
                    <div className="M-Login-Input">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={usernameOrGmail}
                            onChange={(e)=>setUsernameOrGmail(e.target.value)}
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
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
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
