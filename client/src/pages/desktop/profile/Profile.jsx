import { useState } from 'react';
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


    return (
        <div className='profile-section'>
            <div className="pprofile">
                <img src="/images/profile-icon.jpg" className='ppic' alt="" />
                <div className="pname">Surekha Reddy</div>
            </div>
            <div className="details">
                <div className="dgrandparent">
                <div className="dparent">

                    <div className="dinfo">Name</div>


                    <div className="dinput">
                        <input type="text" className="editInput"

                        />
                        {
                            // profileEdit &&
                            // <div className="savecancel">
                            //     <button className="psave">Save</button>
                            //     <button className="pcancel" onClick={toggleEdit}>Cancel</button>
                            // </div>
                        } 
                    </div>
                    
                    {!profileEdit && <div className="dicon" onClick={toggleEdit} id="nameclick"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg></div>}
                </div>
                    {
                  profileEdit &&
                            <div className="savecancel">
                                <button className="psave">Save</button>
                                <button className="pcancel" onClick={toggleEdit}>Cancel</button>
                            </div>
                          }
                          </div>





                <div className="dparent">

                    <div className="dinfo">Email</div>
                    <div className="dinput">

                    </div>
                    <div className="dicon"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg></div>
                </div>
                <div className="dparent">
                    <div className="dinfo">Change Password</div>
                    <div className="dinput"></div>
                    <div className="dicon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg></div>


                </div>
                <div className="dparent">
                    <div className="dinfo">Phone Number </div>
                    <div className="dinput">
                        <span>8639055909</span>
                    </div>
                    <div className="dicon"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg></div>



                </div>


            </div>

        </div>
    )
}
export default Profile;