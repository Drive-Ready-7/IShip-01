import React from "react";
import Nav from '@components/nav/Nav.jsx';
import Footer from '@components/footer/Footer.jsx';
import Threads from "../../../splice/threads/Threads.jsx";


import './Root.css';


export default function Root() {
    return (
        <div className="root-container">
            <Nav />

            <div className="root-content">

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    Say goodbye to cluttered inboxes. LastLine uses smart machine learning to filter out spam and
                    highlight what really matters—internships, job offers, hackathons, and deadline alerts—securely,
                    without storing your email content.
                </p>

                <Threads
                    color={[1, 1, 1]}
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />


                <div className="root-buttons">
                    <button >Get Started</button>
                    <button >Learn more</button>
                </div>

            </div>

            <div className="pp-desktop-footer-section root-footer">
                <Footer/>
            </div>
        </div>
    )
}