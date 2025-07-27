import React ,{useState,useRef} from 'react'
import './menu.css'
export default function menu() {
  const [menuIsOpened , toggleMenu] = useState(0);
  // menuIsOpened = 1 => menu is opened
  // else menu is closed  
  const openOrCloseMenu = ()=>{
    const menuBar=document.querySelector("#mobile-top-menu-bar");
    if(menuIsOpened){

      toggleMenu(0);
      menuBar.style.right = "-180px";
    }
    else {
      toggleMenu(1);      
      menuBar.style.right = "0px";
      
    }
  };
  return (
    <div>
      <div id="mobile-menu" onClick={openOrCloseMenu}>
            {menuIsOpened ? <div id="mobile-cancel-button">x</div> : <div id="mobile-menu-button">&#9776;</div>  }
      </div>
      <ul id="mobile-top-menu-bar">
            <li className="mobile-menu-options">profile</li>
            <li className="mobile-menu-options">mails</li>
            <li className="mobile-menu-options">privacy policy</li>
            <li className="mobile-menu-options">logout</li>
      </ul>
    </div>
  )
}
