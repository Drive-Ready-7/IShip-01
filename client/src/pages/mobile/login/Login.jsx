import React, { useContext, useState } from 'react';
import './Login.css';
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

// import { AppContext } from "../../../AppContext/AppProvider";
import Axios from "@api";
import Logo  from '../logo/Logo';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [usernameOrGmail,setUsernameOrGmail] = useState("");
    const [password,setPassword]=useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const navigate = useNavigate()
    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {  
            // axios.defaults.withCredentials = true;
            const res = await Axios.post(`/api/user/login`,
            {
              usernameOrEmail : usernameOrGmail,
              password:password,
        })
        console.log(res.data.user.name);
        if (res.data.success) {
            localStorage.setItem('userData', JSON.stringify(res.data.user));
            localStorage.setItem('accessToken', res.data.token);
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
            Don't have an account?
            
            <span style={{textDecoration:"underline"}} onClick={() => navigate('/register') }>Register</span> Here.
          </p>
        </form>
      </div>
    </section>
    );
};

export default Login;

//
// import React, { useEffect, useState } from 'react';
// import './Login.css';
// import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';
//
// import Axios from "@api";
//
// const Login = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [usernameOrGmail,setUsernameOrGmail] = useState("");
//     const [password,setPassword]=useState("");

//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [rememberMe, setRememberMe] = useState(false);
//
//     const togglePassword = () => {
//         setShowPassword(prev => !prev);
//     };
//
//     const navigate = useNavigate()
//
//     const handleRememberMe = () => {
//         localStorage.setItem("rememberMe", JSON.stringify(true));
//     }
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (rememberMe) {
//             handleRememberMe();
//         }
//         setLoading(true);
//         setError("");
//         try {
//             const res = await Axios.post(`/api/user/login`, {
//                 usernameOrEmail: usernameOrGmail,
//                 password: password,
//             });
//             console.log(res);
//             localStorage.setItem('userData', JSON.stringify(res.data.user));
//             localStorage.setItem('accessToken', res.data.token);
//             localStorage.setItem('isLoggedIn', 'true');
//             navigate('/');
//         } catch (e) {
//             console.log(e);
//             const errMsg = e?.response?.data?.error || "Network error or server not reachable.";
//             setError(errMsg);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//
//     useEffect(() => {
//         const canRememberMe = localStorage.getItem("rememberMe");
//         if (canRememberMe) {
//             navigate("/");
//         }
//     }, []);
//
//     return (
//         <div className="M-Login">
//             <div id="M-navbar">
//                 <img id="M-logo" src="/images/logo.png" alt="lastline_logo" />
//                 <div id="M-menu">&#9776;</div>
//             </div>
//             <div className="M-LoginForm">
//                 <form  id="M-form" onSubmit={handleSubmit}>
//                     <h1>Login</h1>
//                     {/* Username Input */}
//                     <div className="M-Login-Input">
//                         <input
//                             type="text"
//                             id="username"
//                             name="username"
//                             value={usernameOrGmail}
//                             onChange={(e)=>setUsernameOrGmail(e.target.value)}
//                             required
//                             placeholder=" "
//                         />
//                         <label className="M-label" htmlFor="username">Username or Email</label>
//                         <FaUser className="M-icon" />
//                     </div>
//
//                     {/* Password Input with toggle */}
//                     <div className="M-Login-Input">
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             id="M-password"
//                             name="password"
//                             value={password}
//                             onChange={(e)=>setPassword(e.target.value)}
//                             required
//                             placeholder=" "
//                         />
//                         <label className="M-label"  htmlFor="password">Password</label>
//                         <span onClick={togglePassword} style={{ cursor: 'pointer' }}>
//                             {showPassword ? (
//                                 <FaEye className="M-icon" />
//                             ) : (
//
//                                 <FaEyeSlash className="M-icon" />
//                             )}
//                         </span>
//                     </div>
//
//                     {error && <p className="error"> {error} </p>}
//
//                     {/* Remember Me & Forgot */}
//                     <div className="M-Login-forget">
//                         <label className="M-label" onClick={() => setRememberMe(prev => !prev)} ><input type="checkbox" /> Remember me</label>
//                         <span onClick={() => navigate('/forgot-password')}>Forgot Password?</span>
//                     </div>
//
//                     <button type="submit" className="M-Login-Button">Login</button>
//
//                     {/* Register Link */}
//                     <div className="M-register-link">
//                         <p>Don't have an account? <span onClick ={()=>{navigate('/register')}} >Register</span></p>
//                     </div>
//                 </form>
//             </div>
//
//         </div>
//     );
// };
//
// export default Login;

