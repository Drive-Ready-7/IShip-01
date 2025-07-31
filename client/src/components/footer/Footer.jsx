import './Footer.css';
import { useNavigate } from "react-router-dom";

// React icons
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

export default function Footer() {
    const navigate = useNavigate();

    const socialIcons = [
        { icon: <FaWhatsapp />, name: 'WhatsApp' },
        { icon: <FaLinkedinIn />, name: 'LinkedIn' },
        { icon: <FaInstagram />, name: 'Instagram' },
        { icon: <FaYoutube />, name: 'YouTube' },
        { icon: <FaGithub />, name: 'GitHub' },
    ];

    return (
        <footer className="footer">
            <section className="footer-top">
                <img src="/images/lastline-logo.png" alt="LastLine Logo" className="footer-logo" />
                <p className="footer-copy">&copy; 2025 LastLine, Inc.</p>
            </section>

            <div className="footer-divider" />

            <section className="footer-links">
                <div className="footer-column">
                    <h4>Services</h4>
                    <p>Mails</p>
                    <p>Alerts</p>
                    <p>Deadlines</p>
                </div>
                <div className="footer-column">
                    <h4>Get LastLine</h4>
                    <p onClick={() => navigate('/login')}>Log in</p>
                    <p onClick={() => navigate('/register')}>Sign up</p>
                </div>
                <div className="footer-column">
                    <h4>Support</h4>
                    <p>Contact us</p>
                </div>
            </section>

            <div className="footer-divider" />

            <section className="footer-bottom">
                <div className="footer-socials">
                    {socialIcons.map(({ icon, name }) => (
                        <span key={name} className="footer-icon" title={name}>
                            {icon}
                        </span>
                    ))}
                </div>
                <div className="footer-legal">
                    {['Privacy', 'Security', 'Terms'].map(label => (
                        <button key={label} onClick={() => navigate('/privacy-policy')}>{label}</button>
                    ))}
                </div>
            </section>
        </footer>
    );
}
