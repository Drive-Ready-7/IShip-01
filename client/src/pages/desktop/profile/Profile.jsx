import Axios from "@api";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLock, FaPlus } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { CiLogout } from "react-icons/ci";

import './Profile.css';
import Nav from "../../../components/nav/Nav.jsx";
import PopUp from '../../mobile/PopUp/PopUp';
import Google from "../../../services/Google/Google.jsx"

const Profile = () => {
    const navigate = useNavigate();
    const [section, setSection] = useState('user');
    const [editFields, setEditFields] = useState({});
    const [userData, setUserData] = useState(null);
    const [fieldValues, setFieldValues] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await Axios.post('/api/user/get-user-by-id', {
                userId: JSON.parse(localStorage.getItem("userData"))._id,
            });
            setUserData(res.data);
            setFieldValues({
                name: res.data.name || '',
                email: res.data.email || '',
                phone: res.data.phone || '',
            });
        };
        fetchData();
    }, []);

    const handleEditToggle = (field) => {
        setEditFields(prev => ({ ...prev, [field]: !prev[field] }));
    };

    const handleInputChange = (field, value) => {
        setFieldValues(prev => ({ ...prev, [field]: value }));
    };

    const handleSaveField = async (field) => {
        try {
            if(field === "name") {
                field = "username"
            }
            const userId = JSON.parse(localStorage.getItem("userData"))._id;
            const res = await Axios.post(`/api/user/change-${field}`, {
                userId,
                [field]: fieldValues[field]
            });
            setUserData(prev => ({ ...prev, [field]: res.data[field] }));
            setEditFields(prev => ({ ...prev, [field]: false }));
        } catch (err) {
            console.error(err);
        }
    };



    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    if (!userData) return <div className="loading">Loading...</div>;

    const { profilePic, userMails = [] } = userData;

    return (
        <div className="profile-content">
            <div className="root-nav">
                <Nav type="root" />
            </div>
            <div className="profile-container">
                <aside className="sidebar">
                    <div className={`sidebar-item ${section === 'user' ? 'active' : ''}`} onClick={() => setSection('user')}>
                        <BsPersonFill className="icon" />
                        <span>User Info</span>
                    </div>
                    <div className={`sidebar-item ${section === 'mail' ? 'active' : ''}`} onClick={() => setSection('mail')}>
                        <MdEmail className="icon" />
                        <span>Mail Info</span>
                    </div>
                    <div className="sidebar-item" onClick={() => navigate('/privacy-policy')}>
                        <FaLock className="icon" />
                        <span>Privacy</span>
                    </div>
                    <div className="sidebar-item logout" onClick={handleLogout}>
                        <CiLogout className="icon" />
                        <span>Logout</span>
                    </div>
                </aside>

                <main className="profile-details">
                    <div className="details-card">
                        <div className="user-header">
                            <img src={profilePic || "/images/profile-picture.jpeg"} alt="Profile" className="profile-image" />
                            <div>
                                <h2>{fieldValues.name}</h2>
                                <p>{fieldValues.email}</p>
                            </div>
                        </div>

                        {section === 'user' ? (
                            <div className="user-info">
                                {['name', 'email', 'phone'].map(field => (
                                    <div className="field" key={field}>
                                        <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                                        {editFields[field] ? (
                                            <>
                                                <input
                                                    type="text"
                                                    value={fieldValues[field]}
                                                    onChange={(e) => handleInputChange(field, e.target.value)}
                                                />
                                                <button className="save-btn" onClick={() => handleSaveField(field)}>Save</button>
                                                <button className="cancel-btn" onClick={() => handleEditToggle(field)}>Cancel</button>
                                            </>
                                        ) : (
                                            <>
                                                <span>{userData[field] || `Add ${field}`}</span>
                                                <button className="edit-btn" onClick={() => handleEditToggle(field)}>Edit</button>
                                            </>
                                        )}
                                    </div>
                                ))}
                                <div className="field">
                                    <label>Password:</label>
                                    <button className="edit-btn" onClick={() => navigate('/change-password')}>Change Password</button>
                                </div>
                            </div>
                        ) : (
                            <div className="email-info">
                                {[0, 1, 2].map(i => (
                                    <div key={i} className="field">
                                        <label>Mail {i + 1}:</label>
                                        <span>{userMails[i]?.email || 'Add Mail'}</span>
                                        {userMails[i]?.email ? <ImBin2 className="icon red" /> : <Google />}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Profile;
