import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        
             <div className="M-bdy">
                    <div className="M-privacy-wrapper">
                        <header className="M-privacy-header">
                            <h1 className="privacy-heading"><b>Privacy Policy</b></h1>
                        </header>

                    <div className="M-privacy-content">
                        <section className="M-privacy-section">
                            <h2 className="M-section-title">○ Introduction</h2>
                            <p className="M-section-paragraph">
                                Welcome to <strong>LastLine</strong>. Your privacy is important to us. This Privacy Policy outlines how we handle your data when you use our email classification service.
                            </p>
                        </section>

                        <section className="M-privacy-section">
                            <h2 className="M-section-title">○ What We Do</h2>
                            <p className="section-paragraph">
                                LastLine uses machine learning to sort emails into <strong>Spam</strong> or <strong>Not Spam</strong>. We highlight <strong>internships</strong>, <strong>job offers</strong>, <strong>hackathons</strong>, and <strong>deadlines</strong> in relevant (non-spam) emails.
                            </p>
                        </section>

                        <section className="M-privacy-section">
                            <h2 className="M-section-title">○ Data We Collect</h2>
                            <ul className="M-section-list">
                                <li>Read-only access to your emails via secure APIs.</li>
                                <li>Basic user information like your email address and ID.</li>
                            </ul>
                            <p className="M-section-paragraph"><strong>We do NOT:</strong></p>
                            <ul className="section-list">
                                <li>Store or save email content.</li>
                                <li>Sell or share your data with third parties.</li>
                            </ul>
                        </section>

                        <section className="M-privacy-section">
                            <h2 className="section-title">○ How We Use Your Data</h2>
                            <p className="section-paragraph">
                                Emails are processed temporarily in-memory for classification and highlighting. Email content is never stored.
                            </p>
                        </section>

                        <section className="M-privacy-section">
                            <h2 className="section-title">○ Data Security</h2>
                            <p className="section-paragraph">
                                We follow industry-standard practices to ensure secure data processing. OAuth tokens and secure access methods protect your information.
                            </p>
                        </section>

                        <section className="M-privacy-section">
                            <h2 className="section-title">○ User Control</h2>
                            <ul className="section-list">
                                <li>You may revoke access via your email provider’s app settings.</li>
                                <li>We do not retain any message content after processing.</li>
                            </ul>
                        </section>

                        <section className="M-privacy-section">
                            <h2 className="M-section-title">○ Third-Party Access</h2>
                            <p className="M-section-paragraph">
                                We do not share any data with third parties. All data stays within our secure infrastructure.
                            </p>
                        </section>

                        <section className="M-privacy-section">
                            <h2 className="M-section-title">○ Policy Updates</h2>
                            <p className="M-section-paragraph">
                                We may occasionally update this policy. Major changes will be communicated via email.
                            </p>
                        </section>

                        <section className="M-privacy-section">
                            <h2 className="M-section-title">○ Contact Us</h2>
                            <p className="M-section-paragraph">
                                For questions or concerns, reach out to:
                            </p>
                            <ul className="M-section-list">
                                <li>Email: lastline.lr@gmail.com</li>
                                <li>Website: <a href="https://lastline.life" className="M-external-link">https://lastline.life</a></li>
                            </ul>
                        </section>
                    </div>

                    <footer className="M-privacy-footer">
                        &copy; {new Date().getFullYear()} LastLine. All rights reserved.
                    </footer>
                </div>
            </div>

       
      
    );
};

export default PrivacyPolicy;
