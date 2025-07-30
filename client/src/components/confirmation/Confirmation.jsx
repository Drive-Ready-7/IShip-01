import './Confirmation.css'

export default function Confirmation(){
   return(
         <div className="confirmation-box">
            <img src="./public/images/confirmation.png" alt="" /> 
            <div className="confirmation-header"><h2>Are you sure?</h2></div>
            <div className="confirmation-text">Do you want to </div>
            <div className="confirmation-buttons">
               <button className="Cbtn1">Yes</button>
               <button className="Cbtn2">No</button>
            </div>
        </div>
   )
}