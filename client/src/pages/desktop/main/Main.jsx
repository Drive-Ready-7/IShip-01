import Axios from '@api'
import './Main.css';
import Nav from '@components/nav/Nav.jsx';
import {useEffect, useState} from "react";
import Threads from "../../../splice/threads/Threads.jsx";
import Footer from '../../../components/footer/Footer.jsx';

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
        <>
            <Nav />
            <div className="container">

                <div className="main-content">
                    <aside className="main-aside">
                        <ul className="aside-list">
                            <li>afvn</li>
                        </ul>
                    </aside>
                    <article className="main-content">
                        <div className="mini-nav">mini nav</div>

                    </article>
                </div>

                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                    />
            </div>
            <div className='footer-section'>
                <Footer/>
            </div>
        </>
    )
}