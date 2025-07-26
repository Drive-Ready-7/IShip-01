import Axios from '@api'
import './Main.css';

export default function Main() {

    const test = () => {
        try {
            const res = Axios.get('http://localhost:5000/am-i-alive');
            console.log(res.data);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <section>
            Main Page

            <button onClick={test}> Test Interceptors</button>
        </section>
    )
}