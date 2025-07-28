import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "@api";

import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import './Login.css';

export default function Login() {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if(rememberMe) {
            console.log(rememberMe);
            handleRememberMe();
        }
        setLoading(true);
        try {
            const res = await Axios.post("/api/user/login", { usernameOrEmail, password });
            localStorage.setItem('accessToken', res.data.token);
            localStorage.setItem('userData', res.data.user);
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/');
        } catch (err) {
            console.error(err);
            setError("Login failed. Please check your credentials.");
        }
    };

    const handleRememberMe = () => {
        localStorage.setItem("rememberMe", JSON.stringify(true));
    }

    useEffect(() => {
        (() => {
            const canRememberMe = localStorage.getItem("rememberMe");
            if (canRememberMe) {
                navigate("/");
            }
        })();
    }, []);

    return (
        <div className="login">
            <form className="login-form" onSubmit={handleLogin}>
                <h1>
                    <span style={{ color: "blue" }}>L</span>ast <span style={{ color: "red" }}>L</span>ine
                </h1>

                <div className="login-input">
                    <input
                        type="text"
                        placeholder=" "
                        value={usernameOrEmail}
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="username">Username or Email</label>
                    <FaUser className="icon" />
                </div>

                <div className="login-input">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder=" "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <span onClick={() => setShowPassword(prev => !prev)} style={{ cursor: "pointer" }}>
            {showPassword ? <FaEye className="icon" /> : <FaEyeSlash className="icon" />}
          </span>
                </div>

                {error && <p className="error">{error}</p>}

                <div className="login-actions">
                    <label onClick={() => setRememberMe(prev => !prev)} ><input type="checkbox" /> Remember me</label>
                    <span onClick={() => navigate('/forgot-password')}>Forgot Password?</span>
                </div>

                <button type="submit" className="login-btn">Login</button>

                <p className="register-text">
                    Don't have an account?
                    <span onClick={() => navigate("/register")}> Register</span>
                </p>
            </form>
        </div>
    );
}
