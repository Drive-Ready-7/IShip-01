import './navbar.css'
import { useNavigate } from 'react-router-dom';


export default function Navbar(){
    const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return(
        <nav className='M-nav'>
            <div className="logo">
                <img src="/images/lastline-logo.png" alt="LL logo" className='logo-img' />
            </div>  
            <div className="container">
                {(isLoggedIn)?(
                    <p className='menu-Burger'>&#9776;</p>
                ):(
                    <button onClick={()=>navigate('/login')} className='M-login'>Login</button>
                )
            }
            </div>
        </nav>
    )
}