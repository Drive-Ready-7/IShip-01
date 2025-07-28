import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "@api";
import './ForgotPassword.css';
import { FaEnvelope, FaKey, FaLock } from "react-icons/fa";

export default function ForgotPassword() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSendCode = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");
        try {
            await Axios.post("/api/user/send-forgot-password-mail", { email });
            setStep(2);
            setMessage("Verification code sent to your email.");
        } catch (err) {
            console.error(err);
            setError("Failed to send verification code.");
        }
    };

    const handleVerifyCode = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");
        try {
            await Axios.post("/api/user/oauth/verify-code", { email, resetCode: verificationCode });
            setStep(3);
            setMessage("Verification successful. Set your new password.");
        } catch (err) {
            console.error(err);
            setError("Invalid or expired verification code.");
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");
        try {
            await Axios.post("/api/user/oauth/reset-password", { email, password: newPassword });
            setMessage("Password reset successful. Redirecting to login...");
            setTimeout(() => navigate("/"), 2000);
        } catch (err) {
            console.error(err);
            setError("Error resetting password.");
        }
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <div className="forgot-input">
                        <input
                            type="email"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label>Email</label>
                        <FaEnvelope className="icon" />
                    </div>
                );
            case 2:
                return (
                    <div className="forgot-input">
                        <input
                            type="text"
                            placeholder=" "
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            required
                        />
                        <label>Verification Code</label>
                        <FaKey className="icon" />
                    </div>
                );
            case 3:
                return (
                    <div className="forgot-input">
                        <input
                            type="password"
                            placeholder=" "
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <label>New Password</label>
                        <FaLock className="icon" />
                    </div>
                );
            default:
                return null;
        }
    };

    const handleSubmit = (e) => {
        if (step === 1) return handleSendCode(e);
        if (step === 2) return handleVerifyCode(e);
        if (step === 3) return handleResetPassword(e);
    };

    return (
        <div className="forgot">
            <form className="forgot-form" onSubmit={handleSubmit}>
                <h1>
                    <span style={{ color: "blue" }}>L</span>ast <span style={{ color: "red" }}>L</span>ine
                </h1>

                {renderStepContent()}

                {message && <p className="success">{message}</p>}
                {error && <p className="error">{error}</p>}

                <button type="submit" className="forgot-btn">
                    {step === 1 && "Send Code"}
                    {step === 2 && "Verify Code"}
                    {step === 3 && "Reset Password"}
                </button>

                <p className="login-text">
                    Back to
                    <span onClick={() => navigate("/login")}> Login</span>
                </p>
            </form>
        </div>
    );
}
