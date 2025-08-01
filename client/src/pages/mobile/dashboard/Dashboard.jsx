import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Navbar from '../Navbar/navbar';
import Axios from '@api';

const getBadgeClass = (type) => {
    switch (type?.toLowerCase()) {
        case 'internships':
            return 'badge-internship';
        case 'jobs':
            return 'badge-job';
        case 'hackathons':
            return 'badge-hackathon';
        case 'career':
            return 'badge-career';
        case 'spam':
            return 'badge-spam';
        default:
            return '';
    }
};

export default function Main() {
    const [theme, setTheme] = useState('light');
    const [activeFilter, setActiveFilter] = useState('All');
    const [mails, setMails] = useState([]);

    const userId = JSON.parse(localStorage.getItem('userData'))?._id;

    useEffect(() => {
        const fetchUserMails = async () => {
            if (!userId) return;
            try {
                const response = await Axios.post('/api/secure/get-user-mails', {
                    userId,
                });
                setMails(response.data.data || []);
            } catch (error) {
                console.error('Error fetching mails:', error);
            }
        };

        fetchUserMails();
    }, [userId]);

    const filteredMails = mails.filter((mail) => {
        const type = mail?.type?.toLowerCase();
        const spamStatus = mail?.spam;

        if (activeFilter === 'All') return true;
        if (activeFilter === 'Spam') {
            return ['jobs', 'internships', 'hackathons'].includes(type) && spamStatus === 'spam';
        }
        return spamStatus === 'no_spam' && type === activeFilter.toLowerCase();
    });

    return (
        <section className="main-container">
            
                <Navbar />
           

            <div className={`M-dashboard ${theme}`}>
                <div className="mobile-filters glass">
                    {['All', 'Jobs', 'Internships', 'Hackathons', 'Spam'].map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="dashboard-body">
                   
                    

                    <main className="glass main">
                        <h2>Inbox</h2>
                        <div className="mail-list">
                            {filteredMails.length > 0 ? (
                                filteredMails.map((mail, index) => (
                                    <div className="mail-card glass" key={index}>
                                        <div className={`badge ${getBadgeClass(mail.type)}`}>
                                            {mail.type}
                                        </div>
                                        <div className="info">
                                            <h3>{mail.subject}</h3>
                                            <div className="meta">
                                                {mail.deadline && (
                                                    <span>Deadline: {new Date(mail.deadline).toLocaleDateString()}</span>
                                                )}
                                                {mail.confidence !== undefined && (
                                                    <span>
                                                        Confidence: {typeof mail.confidence === 'string'
                                                            ? mail.confidence
                                                            : `${mail.confidence?.toFixed(1)}%`}
                                                    </span>
                                                )}
                                                <span>
                                                    to : {mail.to}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No mails found for this category.</p>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}
