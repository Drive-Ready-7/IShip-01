import Axios from "@api";
import './Google.css';
const Google = () => {

    const handleGmailLogin = () => {
        console.log(import.meta.env.VITE_BASE_URI)
        const userId = JSON.parse(localStorage.getItem("userData"))._id;
        window.open(
            `${import.meta.env.VITE_BASE_URI}/auth/google/start?state=${userId}`,
            'Login with Gmail',
            'width=500,height=600',
        );

        window.addEventListener('message', (event) => {
            if (event.data?.message === 'oauth_success') {
                Axios.post("/auth/google/process", {
                    userId: userId,
                    email: event.data.email,
                });
                console.log('User authorized Gmail access!');
            }
        });
    };

    return (
        <button onClick={handleGmailLogin} className="connect">Connect Gmail</button>
    );
}

export default Google;