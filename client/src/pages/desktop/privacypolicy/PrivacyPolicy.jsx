import React from 'react';
import './PrivacyPolicy.css';
import Footer from '../../../components/footer/Footer.jsx';

const PrivacyPolicy = () => {
    return (
        <div>
        <div className="privacy-wrapper">
            <header className="privacy-header">
                <h1 className="privacy-heading">Privacy Policy</h1>
            </header>

            <div className="privacy-content">
                <section className="privacy-section">
                    <h2 className="section-title">1. Introduction</h2>
                    <p className="section-paragraph">
                        Welcome to <strong>LastLine</strong>. Your privacy is important to us. This Privacy Policy outlines how we handle your data when you use our email classification service.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2 className="section-title">2. What We Do</h2>
                    <p className="section-paragraph">
                        LastLine uses machine learning to sort emails into <strong>Spam</strong> or <strong>Not Spam</strong>. We highlight <strong>internships</strong>, <strong>job offers</strong>, <strong>hackathons</strong>, and <strong>deadlines</strong> in relevant (non-spam) emails.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2 className="section-title">3. Data We Collect</h2>
                    <ul className="section-list">
                        <li>Read-only access to your emails via secure APIs.</li>
                        <li>Basic user information like your email address and ID.</li>
                    </ul>
                    <p className="section-paragraph"><strong>We do NOT:</strong></p>
                    <ul className="section-list">
                        <li>Store or save email content.</li>
                        <li>Sell or share your data with third parties.</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2 className="section-title">4. How We Use Your Data</h2>
                    <p className="section-paragraph">
                        Emails are processed temporarily in-memory for classification and highlighting. Email content is never stored.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2 className="section-title">5. Data Security</h2>
                    <p className="section-paragraph">
                        We follow industry-standard practices to ensure secure data processing. OAuth tokens and secure access methods protect your information.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2 className="section-title">6. User Control</h2>
                    <ul className="section-list">
                        <li>You may revoke access via your email provider’s app settings.</li>
                        <li>We do not retain any message content after processing.</li>
                    </ul>
                </section>

                <section className="privacy-section">
                    <h2 className="section-title">7. Third-Party Access</h2>
                    <p className="section-paragraph">
                        We do not share any data with third parties. All data stays within our secure infrastructure.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2 className="section-title">8. Policy Updates</h2>
                    <p className="section-paragraph">
                        We may occasionally update this policy. Major changes will be communicated via email.
                    </p>
                </section>

                <section className="privacy-section">
                    <h2 className="section-title">9. Contact Us</h2>
                    <p className="section-paragraph">
                        For questions or concerns, reach out to:
                    </p>
                    <ul className="section-list">
                        <li>Email: lastline.lr@gmail.com</li>
                        <li>Website: <a href="https://lastline.life" className="external-link">https://lastline.life</a></li>
                    </ul>
                </section>
            </div>
        </div>
        <div className="pp-desktop-footer-section">
            <Footer/>
        </div>
        </div>
    );
};

export default PrivacyPolicy;
