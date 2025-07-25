
const Google = () => {

    const handleGmailLogin = () => {
        const userId = localStorage.getItem('userId');
        window.open(
            `${import.meta.env.VITE_BACKEND_URI}/auth/google/start?state=${userId}`,
            'Login with Gmail',
            'width=500,height=600',
        );

        window.addEventListener('message', (event) => {
            if (event.data === 'oauth_success') {
                console.log('User authorized Gmail access!');
            }
        });
    };

    return (
        <button onClick={handleGmailLogin}>Connect Gmail</button>
    );
}

export default Google;