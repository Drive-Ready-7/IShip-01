import React, { useContext, useState } from 'react';
import './Login.css';
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

import { AppContext } from "../../../AppContext/AppProvider";
import axios from "axios";
import Logo  from '../logo/Logo';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [usernameOrGmail,setUsernameOrGmail] = useState("");
    const [password,setPassword]=useState("");


    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const navigate = useNavigate()
    
    const backendUrl = 'http://localhost:5000';

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {  
            axios.defaults.withCredentials = true;
            const res = await axios.post(`${backendUrl}/api/user/login`,
            {
              usernameOrEmail : usernameOrGmail,
              password:password,
        })
        console.log(res.data.user.name);
        if (res.data.success) {
            localStorage.setItem('user', JSON.stringify(res.data.user));
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/');
        }
        }
        catch(e){
          console.error(e);
          alert('invalid details')
        }
    }


    return (
        <section>
      <div className="mobile-login-div">
        <form className="login-box" onSubmit={handleSubmit}>
          <div className="logo">
            <Logo />
          </div>
          
          <div className="mobile-login-input">
            <input
              type="text"
              id="login-username"
              name="usernameOrGmail"
              value={usernameOrGmail}
              onChange={(e)=>setUsernameOrGmail(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="login-username">Username</label>
            <FaUser className="icon" />
          </div>


          <div className="mobile-login-input">
            <input
              type={showPassword ? "text" : "password"}
              id="login-password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
              placeholder=" "
            />
            <label htmlFor="login-password">Enter Password</label>
            <span onClick={togglePassword} style={{ cursor: "pointer" }}>
              {showPassword ? <FaEye className="icon" /> : <FaEyeSlash className="icon" />}
            </span>
          </div>

            <div className="M-Login-forget">
                <label className="M-label" ><input type="checkbox" /> Remember me</label>
                <span style={{color:"#08a3fcff", textDecoration:"underline",cursor:"pointer"}} onClick={() => navigate('/forgot-password')}>Forgot Password?</span>
            </div>
          
          <button type="submit">Login</button>

          <p className="have-account">
            Hey, You Don't have an account?
            
            <span style={{textDecoration:"underline"}} onClick={() => navigate('/register') }>Register</span> Here.
          </p>
        </form>
      </div>
    </section>
    );
};

export default Login;
