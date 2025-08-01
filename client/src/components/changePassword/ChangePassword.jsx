import './ChangePassword.css';
import { useState } from 'react';   
import Axios from "@api";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import User from '../../../../server/models/user';


export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [check, setCheck] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        if (newPassword !== confirmPassword) {
            setCheck(true);
            return;
        }
        setCheck(false);
        try {
            const res = await Axios.post('/api/user/change-password', { 
                userId :JSON.parse(localStorage.getItem('userData'))._id,
                oldPassword, 
                newPassword 
            });

            

            navigate('/profile');

        } catch (error) {
            console.error("Error changing password:", error);
        }
    }

    return(
        <section className="change-password">
            <form onSubmit={handleSubmit} className="inputPassword">
                <h1>Change Password</h1>
                    <div className="chngpass-input">
                        <input
                            type={showOldPassword ? "text" : "password"}
                            placeholder=" "
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password">OldPassword</label>
                        <span onClick={() => setShowOldPassword(prev => !prev)} style={{ cursor: "pointer" }}>
                            {showOldPassword ? <FaEye className="icon" /> : <FaEyeSlash className="icon" />}
                        </span>
                    </div>
                    <div className="chngpass-input">
                        <input
                            type={showNewPassword ? "text" : "password"}
                            placeholder=" "
                            value={newPassword}
                            onChange={(e) =>{ 
                                setNewPassword(e.target.value)
                                setCheck(false)
                            }}
                            required
                        />
                        <label htmlFor="password">New Password</label>
                        <span onClick={() => setShowNewPassword(prev => !prev)} style={{ cursor: "pointer" }}>
                            {showNewPassword ? <FaEye className="icon" /> : <FaEyeSlash className="icon" />}
                        </span>
                    </div>
                    <div className="chngpass-input">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder=" "
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setCheck(false)
                            }}
                            required
                        />
                        <label htmlFor="password">Confirm Password</label>
                        <span onClick={() => setShowConfirmPassword(prev => !prev)} style={{ cursor: "pointer" }}>
                            {showConfirmPassword ? <FaEye className="icon" /> : <FaEyeSlash className="icon" />}
                        </span>
                        
                    </div>
                    {check && <p className="error">Passwords do not match</p>}
                    <button type="submit" className="change-password-btn">Change Password</button>
            </form>
        </section>
    )
}