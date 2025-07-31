
import './Main.css';
import Navbar from '../Navbar/navbar'

export default function Main() {
    return (
        <section className='M-section'>
            <Navbar />
        
            <div className="M-BG-name">
                <span>
                <span className='qutes'>"</span> Your future is waiting in your inbox. <span className='ll'>Last Line</span> makes sure you never miss it.<span className='qutes'>"</span>
                </span>
            </div>
        </section>
    )
}