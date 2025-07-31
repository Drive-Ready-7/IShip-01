import axios from 'axios';
import fetchRecentEmails from "../services/carieers/mailProvider.js";

const fetchMLResponse = async (mails) => {
    try {
        const ML_BASE_URI = process.env.ML_BASE_URI;

        const responses = await Promise.all(
            mails.map(mail =>
                axios.post(`${ML_BASE_URI}/predict-N`, {
                    body: mail.body,
                })
            )
        );

        console.log("✅ ML Responses:", responses.map(res => res.data));
        return responses.map(res => res.data);
    } catch (err) {
        console.error("❌ ML Request Failed:", err?.response?.data || err.message || err);
    }
};


const filterMails = async (userId, email, accessToken) => {
    const res = await fetchRecentEmails(accessToken);
    const MlRes = await fetchMLResponse(res);
    console.log(MlRes);
    return res;
}

export default filterMails;