import { useState } from 'react'
import './Nav.css';

const Nav = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === "true");


    return (
        <nav>
            <main>
                <img alt="logo.png"/>
                <h1>
                    LastLine
                </h1>
            </main>
            <ul>
                <li>About</li>
                <li>DashBoard</li>
                <li>Contact Us</li>
            </ul>
            <main>
                {isLoggedIn ? (
                    <img alt="profile.png"/>
                ) :
                    (
                      <>
                          <button onClick={handleLogin}>login</button>
                          <button onClick={handleRegister}>register</button>
                      </>
                    )}
            </main>
        </nav>
    )
}

export default Nav;