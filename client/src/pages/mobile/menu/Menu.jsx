import React from 'react'
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
            {menuIsOpened ? <div id="mobile-cancel-button">x</div> : <div id="mobile-menu-button">&#9776;</div> }
        </div>
        <ul id="top-menu-bar">
          <li class="menu-options" id="menu-profile">profile</li>
          <li class="menu-options" id="menu-mails">mails</li>
          <li class="menu-options" id="menu-privacy-policy">privacy policy</li>
          <li class="menu-options" id="menu-logout">logout</li>
        </ul>
    </div>
  )
}