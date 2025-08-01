import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MdEmail,
} from "react-icons/md";

import {
    FaLock,
    FaPlus
} from "react-icons/fa";

import { CiLogout } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { ImBin2 } from "react-icons/im";

import './Profile.css';


const Profile = () => {

    const [path, setPath] = useState("user");
    const [profileEdit, setProfileEdit] = useState(false);
    const [emailEdit, setEmailEdit] = useState(false);
    const [passwrdEdit, setPasswrdEdit] = useState(false);
    const [numberEdit, setNumberEdit] = useState(false);

    const navigate = useNavigate();


    const [personData, setPersonData] = useState(() => {
        return JSON.parse(localStorage.getItem('userData')) || {};
    });

    console.log(personData)

    const userMails = personData?.userMails || [];
    const [mail1, setMail1] = useState(userMails?.length > 0 ? userMails[0] : null);
    const [mail2, setMail2] = useState(userMails.length > 1 ? userMails[1] : null);
    const [mail3, setMail3] = useState(userMails.length > 2 ? userMails[2] : null);

    const [popUp, setPopUp] = useState(false);

    console.log(personData)

    const toggleEdit = () => {
        setPersonData(JSON.parse(localStorage.getItem('userData')))
        setProfileEdit(!profileEdit);
    }


    const emailtoggle = () => {
        setPersonData(JSON.parse(localStorage.getItem('userData')))
        setEmailEdit(!emailEdit);
    }

    const passwrdtoggle = () => {
        setPersonData(JSON.parse(localStorage.getItem('userData')))
        setPasswrdEdit(!passwrdEdit);
    }

    const numbertoggle = () => {
        setPersonData(JSON.parse(localStorage.getItem('userData')))
        setNumberEdit(!numberEdit);
    }

    const handleEmailChange = (e) => {
        e.preventDefault();
    }

    const handleNameChange = (e) => {
        e.preventDefault();
    }

    const handlePassChange = (e) => {
        e.preventDefault();
    }

    const handlePhoneChange = (e) => {
        e.preventDefault();
    }

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    }


    return (
        <div className="parent">

            <div className='profile-section'>

                <div className="pprofile">
                    <img src="/images/profile-icon.jpg" className='ppic' alt="" />
                    <div style={{color:"white"}} className="pname">{personData.name}
                    </div>
                    <svg id="desktop-home-button" onClick={()=>navigate('/')} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                    </svg>
                </div>

                {/* --------------------------------------------------- */}

                <div className="sidebardetails">

                    <div className="sidebar">

                        <div className="sidebarchild1">
                            <div className="parentIconDetails">
                                <div className={`iconDetails ${path === "user" ? "active-side-element" : ""} `}>
                                    <BsPersonFill className="dusericon" />
                                    <div
                                        onClick={() => setPath("user")}
                                        className="sideBarContent">User Details</div>

                                </div>
                            </div>

                            <div className="parentIconDetails">
                                <div className={`iconDetails ${path === "mail" ? "active-side-element" : ""}`}>
                                    <MdEmail />
                                    <div
                                        onClick={() => setPath("mail")}
                                        className="sideBarContent">Mail Details</div>

                                </div>
                            </div>

                            <div className="parentIconDetails">
                                <div className="iconDetails">
                                    <FaLock />
                                    <div className="sideBarContent"
                                        onClick={() => navigate('/privacy-policy')}
                                        >Privacy & Policy</div>

                                </div>
                            </div>

                        </div>
                        <div className="sidebarchild2">
                            <div className="parentIconDetails1">
                                <div className=" logbtn">

                                    <  CiLogout className="dicons" />
                                    <div className="sideBarContent"
                                        onClick={handleLogout}
                                        >Log Out</div>
                                </div>

                            </div>
                        </div>

                    </div>

                    {path === 'user' ?
                        <div className="details">
                            <div className="ggparent">
                                <div className="dgrandparent">
                                    <div className="dparent">

                                        <div className="dinfo">Name</div>


                                        <div className="dinput">
                                            {profileEdit ? (<input type="text" className="editInput"
                                                value={personData.name}
                                                onChange={(e) => setPersonData({
                                                    ...personData,
                                                    name: e.target.value
                                                })}
                                            />) : (
                                                <div className="textDisplay">
                                                     <span className="text-truncate">{personData.name}</span>
                                                    </div>
                                            )
                                            }

                                        </div>

                                        {!profileEdit && <div className="dicon" onClick={toggleEdit} id="nameclick">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                            </svg> </div>}
                                    </div>
                                    {
                                        profileEdit &&
                                        <div className="savecancel">
                                            <button className="psave" onClick={handleNameChange}>Save</button>
                                            <button className="pcancel" onClick={toggleEdit}>Cancel</button>
                                        </div>
                                    }
                                </div>

                                <div className="dgrandparent">

                                    <div className="dparent">

                                        <div className="dinfo">Email</div>
                                        <div className="dinput">
                                            {emailEdit ? (
                                                <input type="text"
                                                    value={personData.email}
                                                    onChange={(e) => setPersonData({
                                                        ...personData,
                                                        email: e.target.value
                                                    })}
                                                    className="editInput" />) : (
                                                <div className="textDisplay">
                                                    <span className="text-truncate">{personData.email}</span></div>
                                            )
                                            }

                                        </div>
                                        {!emailEdit && <div className="dicon" onClick={emailtoggle}  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                        </svg></div>}
                                    </div>
                                    {
                                        emailEdit &&
                                        <div className="savecancel">
                                            <button className="psave">Save</button>
                                            <button className="pcancel" onClick={emailtoggle}>Cancel</button>
                                        </div>
                                    }


                                </div>

                                <div className="dgrandparent">
                                    <div className="dparent">
                                        <div className="dinfo">Phone Number </div>
                                        <div className="dinput">
                                            {numberEdit ? (<input type="text" 
                                                                value={personData.phone || "Add your Number"}
                                                                className="editInput" />) : (
                                                <div className="textDisplay">
                                                     <span className="text-truncate">
                                                         {personData.phone || "Add your Number"}
                                                     </span>
                                                   
                                                </div>
                                            )
                                            }

                                        </div>
                                        {!numberEdit && <div className="dicon" onClick={numbertoggle}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                        </svg></div>}
                                    </div>
                                    {
                                        numberEdit &&
                                        <div className="savecancel">
                                            <button className="psave">Save</button>
                                            <button className="pcancel" onClick={numbertoggle}>Cancel</button>
                                        </div>
                                    }



                                </div>

                                <div className="dgrandparent">
                                    <div className="dparent">
                                        <div className="dinfo">Password</div>

                                        <button className="chgPasswrd" onClick={handlePassChange} >Change Password</button>

                                    </div>

                                </div>

                            </div>
                        </div>

                        :

                        <div className="details">
                            <div className="ggparent1">
                                <div className="dgrandparent">
                                    <div className="dparent">

                                        <div className="minfo">Mail 1</div>


                                        <div className="dinput">
                                            <div className="textDisplay">{mail1 ? mail1 : "Add Mail"}</div>
                                        </div>
                                        <div className="dicon"> 
                                            { mail1 ? 
                                                <ImBin2 className='Mred' />
                                            :
                                                <FaPlus /> 
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="dgrandparent">

                                    <div className="dparent">

                                        <div className="minfo">Mail 2</div>
                                        <div className="dinput">
                                            <div className="textDisplay">{mail2 ? mail2 : "Add Mail"}</div>
                                        </div>

                                        <div className="dicon">
                                            { mail2 ? 
                                                <ImBin2 className='Mred' />
                                            :
                                                <FaPlus /> 
                                            }
                                        </div>
                                    </div>

                                </div>
                                <div className="dgrandparent">
                                    <div className="dparent">
                                        <div className="minfo">Mail 3</div>
                                        <div className="dinput">
                                            <div className="textDisplay">{mail3 ? mail3 : "Add Mail"}</div>
                                        </div>
                                        <div className="dicon" > 
                                            { mail3 ? 
                                                <ImBin2 className='Mred' />
                                            :
                                                <FaPlus /> 
                                            }
                                        </div>
                                    </div>

                                </div>



                            </div>
                        </div>

                    }


                </div>
            </div>
        </div>
    )
}

export default Profile;