import axios from 'axios';
import fetchRecentEmails from "../services/carieers/mailProvider.js";


const fetchMLResponse = async (mails) => {
    try {
        const ML_BASE_URI = process.env.ML_BASE_URI;
        const res = await Promise.all(mails.map(async mail => {
            return await axios.post(`${ML_BASE_URI}/predict-N`, {
                body: mail,
            });
        }))
        console.log(res)
    } catch(err) {
        console.log(err);
    }
}

const filterMails = async (userId, email, accessToken) => {
    const res = await fetchRecentEmails(accessToken);
    // await fetchMLResponse(userId, email, accessToken);
    console.log(res)
    return res;
}

export default filterMails;