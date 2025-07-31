import './popup.css'
import { ImCross } from "react-icons/im";


    export default function PopUp(){
    return (
    <div className="Pop">
        <div className="popcontain">
            <ImCross  className="cancelicon" />
            <p className="logins">Login Successful</p>

        </div>


    </div>
)
    }