import { useState } from 'react';
import './navbar.css'
import { useNavigate } from 'react-router-dom';


export default function Navbar(){
    const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const [isOpen,setIsOpen] = useState(false);
    const menuClickHandler = ()=> {
        let lines = document.querySelectorAll(".burger-lines");
        if(isOpen===false){
            setIsOpen(true);
            lines[0].style.transform="translatey(8.5px) rotatez(45deg)";
            lines[1].style.opacity = 0;
            lines[2].style.transform="translatey(-8.5px) rotatez(-45deg)";
        }
        else {
            setIsOpen(false);
            lines[0].style.transform="rotatez(0deg) translatey(0px)";
            lines[1].style.opacity = 1;
            lines[2].style.transform="rotatez(0deg) translatey(0px)";
        }
    }
    return(
        <nav className='M-nav'>
            <div className="logo">
                <img src="/images/lastline-logo.png" alt="LL logo" className='logo-img' />
            </div>  
            <div className="container">
                {(isLoggedIn)?(
                    <div>
                        <p style={{cursor:"pointer"}} onClick={menuClickHandler} className='menu-Burger'>
                            <div className='burger-lines'></div>
                            <div className='burger-lines'></div>
                            <div className='burger-lines'></div>
                        </p>
                        <div className={`menu-bar ${isOpen ? 'slide-in' : 'slide-out'}`}>
                            <ul className="top-menu-bar">
                                <li onClick={()=> navigate('/profile')}>Profile</li>
                                <li onClick={() => navigate('/dashboard')}>Dashboard</li>
                               
                                <li onClick={()=> navigate('/about')}>About Us</li>
                                <li onClick={()=> navigate('/contact')}>Contact Us</li>
                            
                                <li onClick={()=>{
                                    localStorage.removeItem('accessToken');
                                    localStorage.removeItem('userData');
                                    localStorage.removeItem('isLoggedIn');
                                    navigate('/')
                                }}>LogOut</li>
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