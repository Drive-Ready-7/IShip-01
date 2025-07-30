
import { useState } from 'react';
import {
    MdEmail,
} from "react-icons/md";
  
 import{
    FaLock,
 }from "react-icons/fa";

import { CiLogout } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { ImBin2 } from "react-icons/im";

import './Profile.css';
const Profile = () => {

    const [profileEdit, setProfileEdit] = useState(false);
    const [user, setUser] = useState({
        name: "surekha",
        email: "sdn",
        phone: "123456",
        password: "ajfcnvo"
    })

    const toggleEdit = () => {
        setProfileEdit(!profileEdit);
    }

    const [emailEdit, setEmailEdit] = useState(false);

    const emailtoggle = () => {
        setEmailEdit(!emailEdit);
    }

    const [passwrdEdit, setPasswrdEdit] = useState(false);
    const passwrdtoggle = () => {
        setPasswrdEdit(!passwrdEdit);
    }

    const [numberEdit, setNumberEdit] = useState(false);
    const numbertoggle = () => {
        setNumberEdit(!numberEdit);
    }


    return (
        <div className="parent">


            {/* ------------------------------------------------------------*/}
            <div className='profile-section'>

                <div className="pprofile">
                    <img src="/images/profile-icon.jpg" className='ppic' alt="" />
                    <div className="pname">Surekha Reddy</div>
                </div>

                {/* --------------------------------------------------- */}

                <div className="sidebardetails">

                    <div className="sidebar">

                        <div className="sidebarchild1">
                            <div className="parentIconDetails">
                                <div className="iconDetails">
                              <BsPersonFill class="dusericon"/>
                                    <div className="sideBarContent">User Details</div>

                                </div>
                            </div>

                            <div className="parentIconDetails">
                                <div className="iconDetails">
                                     <MdEmail />
                                    <div className="sideBarContent">Mail Details</div>

                                </div>
                            </div>

                            <div className="parentIconDetails">
                                <div className="iconDetails">
                             <FaLock/>
                                    <div className="sideBarContent">Privacy & Policy</div>

                                </div>
                            </div>

                        </div>
                        <div className="sidebarchild2">
                            <div className="parentIconDetails1">
                                <div className=" logbtn">
                                   
                                   <  CiLogout className="dicons"/>
                                    <div className="sideBarContent">Log Out</div>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* ----------------------------------- */}



{/* 
                    <div className="details">
                        <div className="ggparent">
                            <div className="dgrandparent">
                                <div className="dparent">

                                    <div className="dinfo">Name</div>


                                    <div className="dinput">
                                        {profileEdit ? (<input type="text" className="editInput"

                                        />) : (
                                            <div className="textDisplay">surekha reddy gudimetla</div>
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
                                        <button className="psave">Save</button>
                                        <button className="pcancel" onClick={toggleEdit}>Cancel</button>
                                    </div>
                                }
                            </div>




                            <div className="dgrandparent">

                                <div className="dparent">

                                    <div className="dinfo">Email</div>
                                    <div className="dinput">
                                        {emailEdit ? (<input type="text" className="editInput"

                                        />) : (
                                            <div className="textDisplay"></div>
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
                                    <div className="dinfo">Change Password</div>
                                    <div className="dinput">
                                        {passwrdEdit ? (<input type="text" className="editInput"

                                        />) : (
                                            <div className="textDisplay"></div>
                                        )
                                        }

                                    </div>

                                    {!passwrdEdit && <div className="dicon" onClick={passwrdtoggle}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                    </svg></div>}
                                </div>
                                {
                                    passwrdEdit &&
                                    <div className="savecancel">
                                        <button className="psave">Save</button>
                                        <button className="pcancel" onClick={passwrdtoggle}>Cancel</button>
                                    </div>
                                }

                            </div>
                            <div className="dgrandparent">
                                <div className="dparent">
                                    <div className="dinfo">Phone Number </div>
                                    <div className="dinput">
                                        {numberEdit ? (<input type="text" className="editInput"

                                        />) : (
                                            <div className="textDisplay"></div>
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


                        </div>
                    </div> */}


                    <div className="details">
                        <div className="ggparent1">
                            <div className="dgrandparent">
                                <div className="dparent">

                                    <div className="minfo">Email 1</div>


                                    <div className="dinput">
                                        {profileEdit ? (<input type="text" className="editInput"

                                        />) : (
                                            <div className="textDisplay">surekha reddy gudimetla</div>
                                        )
                                        }

                                    </div>

                                    {!profileEdit && <div className="dicon" onClick={toggleEdit} id="nameclick">
                                      <ImBin2 /> </div>}
                                </div>
                                {
                                    profileEdit &&
                                    <div className="savecancel">
                                        <button className="psave">Save</button>
                                        <button className="pcancel" onClick={toggleEdit}>Cancel</button>
                                    </div>
                                }
                            </div>




                            <div className="dgrandparent">

                                <div className="dparent">

                                    <div className="minfo">Email 2</div>
                                    <div className="dinput">
                                        {emailEdit ? (<input type="text" className="editInput"

                                        />) : (
                                            <div className="textDisplay"></div>
                                        )
                                        }

                                    </div>
                                    {!emailEdit && <div className="dicon" onClick={emailtoggle}  ><ImBin2 /></div>}
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
                                    <div className="minfo">Email 3</div>
                                    <div className="dinput">
                                        {passwrdEdit ? (<input type="text" className="editInput"

                                        />) : (
                                            <div className="textDisplay"></div>
                                        )
                                        }

                                    </div>

                                    {!passwrdEdit && <div className="dicon" onClick={passwrdtoggle}><ImBin2 /></div>}
                                </div>
                                {
                                    passwrdEdit &&
                                    <div className="savecancel">
                                        <button className="psave">Save</button>
                                        <button className="pcancel" onClick={passwrdtoggle}>Cancel</button>
                                    </div>
                                }

                            </div>
                            


                        </div>
                    </div>

                

                </div>
            </div>
        </div>
    )
}
export default Profile;