import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Logo from '../logo/Logo'

import {
    FaUser,
    FaVoicemail,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";
import Axios from "@api";

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const res= await Axios.post(`/api/user/register`,
                {
                    name: formData.username,
                    email: formData.email,
                    password: formData.password,
                })
            console.log(res);
            navigate('/login');
        }
        catch(e){
            console.log(e);
            setError(e.response.data.error);
        }
    };

    return (
        <section>
            <div className="mobile-register-div">
                <form className="register-box" onSubmit={handleSubmit}>
                    <div className="logo">
                        <Logo />
                    </div>

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
                       
                    </div>
                     {formData.password !== formData.confirmPassword && <p className="passwd">Passwords do not match</p>}
                    {error && <p className="error">{error}</p>}
                    
                    <button type="submit">Register</button>

                    <p className="have-account">
                        Already have an Account?

                        <span onClick={() => navigate('/login') }>Login</span>
                    </p>
                </form>
            </div>
        </section>
    );
}
