import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "@api";
import './Register.css';
import { FaUser, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../mobile/logo/Logo.jsx";

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPassword = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const res = await Axios.post("/api/user/register", {
                name: formData.username,
                email: formData.email,
                password: formData.password
            });

            navigate("/login");
        } catch (err) {
            console.error(err);
            setError(err?.response?.data?.error || "Registration failed.");
        }
    };

    return (
        <div className="register">
            <form className="register-form" onSubmit={handleSubmit}>
                <Logo />

                <div className="register-input">
                    <input
                        type="text"
                        name="username"
                        placeholder=" "
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <label>Username</label>
                    <FaUser className="icon" />
                </div>

                <div className="register-input">
                    <input
                        type="email"
                        name="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Email</label>
                    <FaEnvelope className="icon" />
                </div>

                <div className="register-input">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder=" "
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <label>Password</label>
                    <span onClick={togglePassword} className="toggle-password">
                        {showPassword ? <FaEye className="icon"/> : <FaEyeSlash className="icon"/>}
                    </span>
                </div>

                <div className="register-input">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder=" "
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <label>Confirm Password</label>
                    <span onClick={toggleConfirmPassword} className="toggle-password">
                        {showConfirmPassword ? <FaEye className="icon"/> : <FaEyeSlash className="icon"/>}
                    </span>
                    {formData.password &&
                        formData.confirmPassword &&
                        formData.password !== formData.confirmPassword && (
                            <p className="passwd">Passwords do not match</p>
                        )}
                </div>

                {error && <p className="error">{error}</p>}

                <button type="submit" className="register-btn">Register</button>

                <p className="login-text">
                    Already have an account?
                    <span onClick={() => navigate("/login")}> Login</span>
                </p>
            </form>
        </div>
    );
}
