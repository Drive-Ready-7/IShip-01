import { Router } from "express";
import User from "../models/user.js";

import fetchRecentEmails from '../services/carieers/mailProvider.js';

const router = new Router();

router.post('/get-google-mails', async (req, res) => {
    const { userId, email } = req.body;

    try {
        const user = await User.findById(userId);
        const mailData = user.userMails.filter(mail => mail.email === email);
        if(!mailData.length) {
            res.status(403).send("Mail Not Found");
        }
        const mails = await fetchRecentEmails(mailData[0].googleAccessToken);
        res.send(mails);
    } catch (err) {
        console.error(err);
        res.status(500).send({
            error: "Internal Server Error",
        })
    }
})


export default router;