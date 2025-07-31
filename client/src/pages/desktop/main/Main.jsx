import React, { useState } from 'react';
import './Main.css';
import Nav from '@components/nav/Nav.jsx';

const fakeMails = [
    {
        subject: 'Internship at Google',
        type: 'Internships',
        deadline: '2025-08-15',
        confidence: 92.1,
    },
    {
        subject: 'Software Engineer Position - Amazon',
        type: 'Jobs',
        deadline: '2025-08-10',
        confidence: 95.5,
    },
    {
        subject: 'Hackathon Invite - TechNova',
        type: 'Hackathons',
        deadline: '2025-08-20',
        confidence: 88.0,
    },
    {
        subject: 'Career Fair Registration',
        type: 'Career',
        deadline: '2025-08-05',
        confidence: 80.0,
    },
    {
        subject: 'Win a FREE iPhone - Click now!',
        type: 'Spam',
        deadline: '',
        confidence: 5.2,
    },
];

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
    const filteredMails = [...fakeMails, ...fakeMails, ...fakeMails];

    return (
        <>
            <Nav />
            <div className={`dashboard ${theme}`}>
                <aside className="glass aside">
                    <h2>Filters</h2>
                    {['All', 'Internships', 'Jobs', 'Hackathons', 'Career', 'Spam'].map(
                        (filter) => (
                            <button
                                key={filter}
                                className={`filter-btn ${
                                    activeFilter === filter ? 'active' : ''
                                }`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        )
                    )}
                </aside>

                <main className="glass main">
                    <h2>Inbox</h2>
                    <div className="mail-list">
                        {filteredMails.map((mail, index) => (
                            <div key={index} className="mail-card">
                                <span className={`mail-badge ${getBadgeClass(mail.type)}`}>
                                  {mail.type}
                                </span>
                                <h3 className="mail-subject">{mail.subject}</h3>
                                <p className="mail-deadline">
                                    Deadline: {mail.deadline || 'N/A'}
                                </p>
                                <p className="mail-confidence">
                                    Confidence: {mail.confidence}%
                                </p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}