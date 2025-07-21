import './Register.css'

import { FaPhone, FaUser, FaVoicemail} from 'react-icons/fa';

import {useState} from "react";


const Register = () => {

    return (
        <>
       
        <div className="register-container">
                <div id="logo_img"></div>
                <div className="register-div">
                    <h1>Register</h1>
                    <div className="register-input">
                        <input type="text" id="register-username" name="username" required placeholder=" " />
                        <label for="username">Username</label>
                        <FaUser className='icon' />
                    </div>
                    <div className="register-input">
                        <input type="text" id="register-email" name="email" required placeholder=" " />
                        <label for="email">Email</label>
                        <FaVoicemail className='icon' />
                    </div>
                    <div className="register-input">
                        <input type="phone" id="register-phone" name="phone" required placeholder=" " />
                        <label for="phone">Phone Number</label>
                        <FaPhone className='icon' />
                    </div>
                    <div className="register-input">
                        <input type="password" id="register-passwd" name="passwd" required placeholder=" " />
                        <label for="passwd">Enter Password</label>
                    </div>
                    <div className="register-input">
                        <input type="password" id="register-passwd" name="passwd" required placeholder=" " />
                        <label for="passwd">Confirm Password</label>
                    </div>
                    <button>Submit</button>
                    <p>Already have an Account? <a href="#">Login</a></p>
                </div>
        </div>
        </>
    );
}
export default Register;