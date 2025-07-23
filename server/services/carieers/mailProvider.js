import axios from "axios";

const getMailsById = async (accessToken) => {
    try {
        const res = await axios.get('https://gmail.googleapis.com/gmail/v1/users/me/messages', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                maxResults: 100
            }
        });

        return res.data.messages;
    } catch(err) {
        console.log(err);
    }
}