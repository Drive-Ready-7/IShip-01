import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Nav from '@components/nav/Nav.jsx';
import Footer from '@components/footer/Footer.jsx';
import Threads from "../../../splice/threads/Threads.jsx";


import './Root.css';
import Logo from "../../../components/logo/Logo.jsx";


export default function Root() {

    const canShow = sessionStorage.getItem("show");
    const [showAnimation, setShowAnimation] = React.useState(canShow !== "false");

    useEffect(() => {

        const animation = setTimeout(() => {
            setShowAnimation(false);
            sessionStorage.setItem("show", "false")
        }, 2500);

        return () => {
            clearTimeout(animation);
        }

    }, [])

    console.log(sessionStorage.getItem("show"));

    const navigate = useNavigate();
    console.log(sessionStorage.getItem("show"));

    if(showAnimation) {

        return <Logo />
    }

    console.log(sessionStorage.getItem("show"));

    return (
        <div className="root-container">
            <div className="root-nav">
                <Nav type="root" />
            </div>

            <div className="root-content">

                <div className="root-article">
                    <p className="root-title">
                        Say goodbye to cluttered inboxes. LastLine uses smart machine learning to filter out spam and
                        highlight what really matters—internships, job offers, hackathons, and deadline alerts—securely,
                        without storing your email content.
                    </p>
                </div>

                <Threads
                    color={[255, 255, 255]}
                    amplitude={1.5}
                    distance={0}
                    enableMouseInteraction={true}
                />

                <div className="root-buttons">
                    <button className="root-start" onClick={() => navigate('/login')} >Get Started</button>
                    <button className="root-more" onClick={() => navigate('/about')} >Learn more</button>
                </div>

            </div>

            <div className="pp-desktop-footer-section root-footer">
                <Footer/>
            </div>
        </div>
    )
}