import { useNavigate } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <nav className="navbar">
            <main className="nav-logo-section">
                <img
                    src="/images/lastline-logo.png"
                    alt="Lastline logo"
                    className="img-logo"
                />
                <div className="divider" />
            </main>

            <ul className="nav-links">
                <li onClick={() => navigate('/dashboard')}>Dashboard</li>
                <li onClick={() => navigate('/about')}>About</li>
                <li onClick={() => navigate('/contact-us')}>Contact Us</li>
            </ul>

            <main className="nav-left-container">
                <div className="divider" />
                {isLoggedIn ? (
                    <img
                        src="/images/profile-picture.jpeg"
                        alt="Profile"
                        className="profile-img"
                    />
                ) : (
                    <>
                        <button onClick={handleLogin} className="nav-button nav-login-btn">Login</button>
                        <button onClick={handleRegister} className="nav-button nav-register-btn">Register</button>
                    </>
                )}
            </main>
        </nav>
    );
};

export default Nav;
