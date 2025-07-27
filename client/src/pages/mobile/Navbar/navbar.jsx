import { useState } from 'react';
import './navbar.css'
import { useNavigate } from 'react-router-dom';


export default function Navbar(){
    const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const [isOpen,setIsOpen] = useState(false);
    return(
        <nav className='M-nav'>
            <div className="logo">
                <img src="/images/lastline-logo.png" alt="LL logo" className='logo-img' />
            </div>  
            <div className="container">
                {(isLoggedIn)?(
                    <div>
                    <p style={{cursor:"pointer"}} onClick={()=>setIsOpen(!isOpen)} className='menu-Burger'>
                        { !isOpen?
                       <span> &#9776;</span>:
                        <span style={{fontSize:'40px',cursor:"pointer"}}> &times; </span>
                        }
                        </p>
                        <div className={`menu-bar ${isOpen ? 'slide-in' : 'slide-out'}`}>
                            <ul className="top-menu-bar">
                                <li>Profile</li>
                                <li>Jobs</li>
                                <li>InternShips</li>
                                <li>Hackathons</li>
                                <li>Privacy Policy</li>
                                <li>LogOut</li>
                            </ul>
                        </div>

                    </div>


                ):(
                    <button onClick={()=>navigate('/login')} className='M-login'>Login</button>
                )
            }
            </div>
        </nav>
    )
}