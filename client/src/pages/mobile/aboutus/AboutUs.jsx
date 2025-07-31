import './AboutUs.css';
import Footer from '../../../components/footer/Footer.jsx';

export default function AboutUs() {
    return (
        <div className="M-about">
             <header>
                <h1>About last line</h1>
                <p>Your Smart Companion for Career-Defining Opportunities</p>
            </header>
            <div className="M-container">
                <div className="M-content">
                    <h2>Who We Are</h2>

                    <p>Welcome to <strong>last line</strong> – your trusted platform for discovering the opportunities that shape your future. 
                        In today’s fast-paced digital world, important emails about <span className="M-content-important">jobs</span>,
                         <span className="M-content-important"> internships</span>, and <span className="M-content-important">hackathons </span> 
                         can easily get lost in crowded inboxes. 
                        We’re here to change that.
                    </p>

                    <p><strong>last line</strong> is designed to simplify how you find and manage career-defining opportunities. 
                        Our intuitive dashboard provides a clear, user-friendly experience, 
                        ensuring you stay focused on what matters most – your professional growth.
                    </p>

                    <p>From a secure login and sign-up process with easy password recovery to a smart inbox that filters out the noise,
                        we highlight the most relevant opportunities for you, showcasing up all the corrected options at a time. Plus, with real-time  <span className="M-content-important">WhatsApp alerts</span>, 
                        you’ll never miss a  <span className="M-content-important">registration deadline</span> or <span className="M-content-important">key date</span> again.
                    </p>

                    <p>At <strong>last line</strong>, our mission is to save you time, reduce stress, and empower you to take control of your future. 
                        Because the right opportunity should never pass you by.
                    </p>
                </div>

                <div className="M-features">
                    <h2>Why to Choose last line?</h2>
                    <ul>
                        <li>Smart filtering of emails by category: Jobs, Internships, and Hackathons</li>
                        <li>Easy login/signup system with secure recovery</li>
                        <li>Dashboard overview for seamless navigation</li>
                        <li>No need to dig through spam or irrelevant emails</li>
                        <li>Real-time WhatsApp alerts for deadlines & reminders</li>
                        <li>Focused approach with limited, curated opportunities</li>
                    </ul>
                </div>
            </div>
            <div className="about-mobile-footer-section">
                <Footer/>
            </div>
        </div>
    )
}