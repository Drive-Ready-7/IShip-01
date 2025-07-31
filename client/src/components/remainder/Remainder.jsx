import React,{useState} from 'react'
import './Remainder.css'
export default function Remainder() {
  const [pin,alterPinState] = useState(1);
  const pinHandler=(event)=>{
    if(pin===1){
      alterPinState(0);
    }
    else {
      alterPinState(1);
      event.target.style.backgroundColor="rgba(104, 182, 255, 1)";
    }
  }
  return (

      <div id="remainder">
        <div id="description">
          <div id="company">
            Amazon
          </div>
          <div id="subject">
            this is to inform you that you are selected for the amazon sde-I
          </div>
        </div>
        <div id="options-container">
            <div id="timing">
              <div id="ends-in">
                5 days
              </div>
            </div>
            <div id="options">
                <i id="edit-remainder" className="bi bi-pen-fill"></i>
                { pin ?
                  <i id="pin-remainder" className="fa-solid fa-thumbtack" onClick={pinHandler}></i> :
                  <i id="unpin-remainder" className="fa-solid fa-thumbtack-slash" onClick={pinHandler} ></i> 
                }
                <i id="delete-remainder" className="bi bi-trash-fill" ></i> 
            </div>
        </div>
      </div>
  )
}

