
import './Main.css';
import Navbar from '../Navbar/navbar'
import Menu from '../menu/menu';
export default function Main() {
    return (
        <section className='M-section'>
            <Navbar />
            <Menu />
            <div className="M-BG-name">
                Last Line
            </div>
        </section>
    )
}