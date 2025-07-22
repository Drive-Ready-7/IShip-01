
const Google = () => {
    const handleGmailLogin = () => {
        window.open(
            `${import.meta.env.VITE_BACKEND_URI}/auth/google/start`,
            'Login with Gmail',
            'width=500,height=600,right=0',
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