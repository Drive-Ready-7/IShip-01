import { useState,useRef,useEffect } from 'react';
import './Profile.css'
import { useNavigate } from 'react-router-dom'
import Axios from "@api";

export default function Profile(){

    const [userName,setUserName] = useState(false);
    const [email,setEmail] = useState(false);
    const [phone,setPhone] = useState(false);


    const [userData, setUserData] = useState(() => {
        return JSON.parse(localStorage.getItem('userData')) || {};
    });
    const [usernameChange,setUsernameChange] = useState(userData.name)
    const [emailChange,setEmailChange] = useState(userData.email)
    const [phoneChange,setPhoneChange] = useState('9346853554')
    const navigate = useNavigate();

    const userNameref = useRef(null);
    const emailref = useRef(null);
    const phoneref = useRef(null) 
     
    const changeUserName = async (e) => {
        e.preventDefault();
        try{
            const res = await Axios.post('/api/user/change-username', {
                userId: userData._id,
                username: usernameChange
            });
            if(res.status === 200) {
                setUserData(prev => ({ ...prev, name: usernameChange }));
                localStorage.setItem('userData', JSON.stringify({ ...userData, name: usernameChange }));
                setUserName(false);
            }else if(res.status === 400) {
                alert("Username already exists");  
            }
        }catch(e){
            console.log(e);
        }

    }
  
    

    useEffect(() => {
        if (userName && userNameref.current) {
        userNameref.current.focus();
        }

        if(email && emailref.current){
            emailref.current.focus();
        }

        if(phone && phoneref.current){
            phoneref.current.focus();
        }

    }, [userName,email,phone]);


    return(
        <>
            <div className="profile-page">
                <div className="profile-image">
                    <img src="/images/profile-icon.jpg" alt="profile image" />
                    <p className="profile-name">
                        {userData.name}
                    </p>
                </div>
                <div className="line">
                </div>
                <form className='forms'>
                    <div className="profile-username">
                        <span className="name">
                            Username 
                        </span>
                        {userName?
                            <div className="changes"> 
                                <div className='input-type'>
                                    <input 
                                    value={usernameChange}
                                    ref={userNameref}
                                    type="text" 
                                    name='username'
                                    onChange={(e)=>setUsernameChange(e.target.value)}
                                    /> 
                                </div>
                                <div className="submit">
                                    <button onClick={changeUserName} className='save'>
                                        Save
                                    </button>
                                    <button className="cancel" onClick={()=>setUserName(!userName)}>
                                        Cancel
                                    </button>

                                </div>
                            </div>
                            :<span className="body">
                                <div>
                                    {userData.name}
                                </div>
                                <svg onClick={()=>setUserName(()=>{
                                    return !userName;
                                })} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                </svg>
                            </span>
                        }
                    </div>
                    <div className="profile-email">
                        <span className="name">
                            Email 
                        </span>
                        {email?
                            <div className="changes"> 
                                <div className='input-type'>
                                    <input 
                                    value={emailChange}
                                    type="email" 
                                    ref={emailref}
                                    name='email'
                                    onChange={(e)=>setEmailChange(e.target.value)}
                                    /> 
                                </div>
                                <div className="submit">
                                    <button className='save' >
                                        Save
                                    </button>
                                    <button className="cancel" onClick={()=>setEmail(!email)}>
                                        Cancel
                                    </button>

                                </div>
                            </div>
                            :<span className="body">
                                <div>
                                    {userData.email}
                                </div>
                                <svg onClick={()=>setEmail(!email)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                </svg>
                            </span>
                        }       
                    </div>
                    <div className="profile-gmails">
                        <span className="name">
                            Gmail's 
                        </span>
                        <div className="add-mails">
                            <ul>
                                {
                                    userData.userMails.map((mail,index)=>(
                                        <li key={index}>
                                            <span className="body">
                                                <div>
                                                    {mail.email}
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                </svg>
                                
                                                </span>
                                        </li>
                                    ))
                                }
                            </ul>
                            
                        
                            <button className="add-button">
                               Add Mail +
                            </button>

                        </div>
                    </div>
                    <div className="profile-phone">
                        <span className="name">
                            Phone 
                        </span>
                        {phone?
                            <div className="changes"> 
                                <div className='input-type'>
                                    <input 
                                    value={phoneChange}
                                    type="text" 
                                    ref={phoneref}
                                    name='phone'
                                    onChange={(e)=>setPhoneChange(e.target.value)}
                                    /> 
                                </div>
                                <div className="submit">
                                    <button className='save'>
                                        Save
                                    </button>
                                    <button className="cancel" onClick={()=>setPhone(!phone)}>
                                        Cancel
                                    </button>

                                </div>
                            </div>
                            :<span className="body">
                                <div>
                                    9346853554
                                </div>
                                <svg onClick={()=>setPhone(!phone)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                </svg>
                            </span>
                        }
                    </div>
                    <div className="profile-password">
                        <span className="name">
                            Password 
                        </span>
                        <span className="body">
                            <button>
                                Change 
                            </button>
                            
                        </span>
                    </div>


                </form>
                <div onClick={()=>navigate('/privacy-policy') } className="privacy-policy">
                    Privacy & Policy?
                </div>
            </div>
        </>
    )
}