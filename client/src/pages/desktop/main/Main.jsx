import Axios from '@api'
import './Main.css';
import Nav from '@components/nav/Nav.jsx';
import {useEffect, useState} from "react";
import Threads from "../../../splice/threads/Threads.jsx";

export default function Main() {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === "true");
    const [userMails, setUserMails] = useState([]);
    
    useEffect(() => {
        try {
            const id = localStorage.getItem('id');
            const res = Axios.get(`/api/get-mails?id=${id}`);
            setUserMails(res.data);
        } catch(err) {
            console.log(err);
        }
    }, [])

    return (
        <section className="main-page">
            <Nav />
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div>
            <section className="main-container">
                <aside className="main-aside">
                    <ul className="aside-list">
                        <li></li>
                    </ul>
                </aside>
                <article className="main-content">

                </article>
            </section>
        </section>
    )
}