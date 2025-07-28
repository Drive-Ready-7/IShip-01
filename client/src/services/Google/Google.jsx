import Axios from "@api";

const Google = () => {

    const handleGmailLogin = () => {
        console.log(import.meta.env.VITE_BASE_URI)
        const userId = localStorage.getItem('userId');
        window.open(
            `${import.meta.env.VITE_BASE_URI}/auth/google/start?state=${userId}`,
            'Login with Gmail',
            'width=500,height=600',
        );

        window.addEventListener('message', (event) => {
            if (event.data === 'oauth_success') {
                Axios.post("/api/auth/google/process", {
                    userId: userId,
                    email: event.data.email,
                });
                console.log('User authorized Gmail access!');
            }
        });
    };

    return (
        <button onClick={handleGmailLogin}>Connect Gmail</button>
    );
}

export default Google;