import './footer.css'
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();

    return (
        <div className="footer">
        <div className="footer-headings">
            <div className="logo-heading">
                <img src="/images/lastline-logo.png" alt="logo" className="footer-lastline-logo"/>
            </div>
            <div className="footer-copyright">&copy; 2025 LastLine, Inc.</div>
        </div>
        <div className="line-horizontal"></div>
        <div className="footer-middle">
            <div className="footer-services">
                <p className="middle-heading">Services</p>
                <div className="footer-div-data">
                    <span className="middle-data">Mails</span>
                    <span className="middle-data">Alerts</span>
                    <span className="middle-data">Deadlines</span>
                </div>
            </div>
            <div className="footer-getlastline">
                <p className="middle-heading">Get LastLine</p>
                <div className="footer-div-data">
                    <span className="middle-data" onClick={() => navigate('/login')}>Log in</span>
                    <span className="middle-data" onClick={() => navigate('/register')}>Sign up</span>
                </div>
            </div>
            <div className="footer-support">
                <p className="middle-heading">Support</p>
                <div className="footer-div-data">
                    <span className="middle-data">Contact us</span>
                </div>
            </div>
        </div>
        <div className="line-horizontal"></div>
        <div className="footer-down">
            <div className="footer-icons">
                <img className='footer-icon' id='big-logos' src='/images/whatsapp.png' alt='whatsapp' />
                <img className='footer-icon' src='/images/linkedin.png' alt='linkedin' />
                <img className='footer-icon' id='insta-logo' src='/images/instagram.png' alt='instagram' />
                <img className='footer-icon' id='youtube-logo' src='/images/youtube.png' alt='youtube' />
                <img className='footer-icon' id='big-logos' src='/images/github.png' alt='github' />
            </div>
            <div className="footer-privacy">
                <button className="privacy-button" onClick={() => navigate('/privacy-policy')}>Privacy</button>
                <div className="line-vertical"></div>
                <button className="privacy-button" onClick={() => navigate('/privacy-policy')}>Security</button>
                <div className="line-vertical"></div>
                <button className="privacy-button" onClick={() => navigate('/privacy-policy')}>Terms</button>
            </div>
        </div>
    </div>
    )
}