import React from 'react';
import Footer from '../footer/Footer.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "@api";
import './ContactUs.css';
import Logo from "../../pages/mobile/logo/Logo.jsx";
import Loader from "../loaders/simpleLoader/Loader.jsx";

export default function ContactUs() {

   const navigate = useNavigate();

    return (
        <>
           <div className='contact-body'>
            <div className="contact-container">
                <div className="login-logo-animation">
                    <Logo />
                </div>
                <div className="contact-divider"></div>
                <div className="contact-headings">
                    <p id="contact-main-heading">Contact Us</p>
                    <p id="contact-para">We're here to answer all your questions. Fill out this <br/>form, or call us <span id="contact-number">+91 63039 99848</span></p>
                </div>
                <form className='contact-form'>
                    <div className="contact-details">
                        <label for="name">Name</label>
                        <input type="text" id="contact-name" name="name" required />
                        <label for="email">Email</label>
                        <input type="text" id="contact-email" name="email" required />
                        <label for="feedback">How can we help you?</label>
                        <textarea id="contact-textbox" name="feedback" placeholder='I need ...' required></textarea>
                    </div>
                    <div className="contact-submit-div">
                        <button id="contact-submit">Send Message</button>
                    </div>
                </form>
            </div>
            <div className="aboutus-contact">
                <p>Want to learn more about who we are? <br/>Visit our <span id="nav-about" onClick={() => navigate("/about")}>About Us page.</span></p>
            </div>
        </div>
        </>
    )
}
