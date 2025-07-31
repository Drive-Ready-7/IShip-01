import axios from 'axios';
import fetchRecentEmails from "../services/carieers/mailProvider.js";
import Mail from '../models/mail.js';
import mongoose from 'mongoose';

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

        return responses.map(res => res.data);
    } catch (err) {
        console.error("❌ ML Request Failed:", err?.response?.data || err.message || err);
        return [];
    }
};

const filterMails = async (userId, email, accessToken) => {
    const rawMails = await fetchRecentEmails(accessToken);
    const mlResults = await fetchMLResponse(rawMails);

    const preparedMails = rawMails.map((mail, index) => {
        const ml = mlResults[index] || {};
        const deadline = ml.deadline || new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days from now

        return {
            _id: new mongoose.Types.ObjectId(userId),
            subject: mail.subject,
            type: ml.prediction || 'others',
            deadline: deadline,
            confidence: ml.confidence,
            metaData: JSON.stringify({
                from: mail.from,
                to: email
            })
        };
    });

    // Save all mails to the database
    await Mail.insertMany(preparedMails);
};

export default filterMails;
