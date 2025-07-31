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

router.post('/add-mail-account', async (req, res) => {
    const { userId, email, picture, googleAccessToken, googleRefreshToken, googleTokenExpiryDate } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const mailExists = user.userMails.find(mail => mail.email === email);
        if (mailExists) return res.status(400).json({ error: 'Mail already linked' });

        user.userMails.push({ email, picture, googleAccessToken, googleRefreshToken, googleTokenExpiryDate });
        await user.save();

        res.status(200).json({ message: 'Mail added successfully', data: user.userMails });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/remove-mail-account', async (req, res) => {
    const { userId, email } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        user.userMails = user.userMails.filter(mail => mail.email !== email);
        await user.save();

        res.status(200).json({ message: 'Mail removed successfully', data: user.userMails });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/update-mail-tokens', async (req, res) => {
    const { userId, email, googleAccessToken, googleRefreshToken, googleTokenExpiryDate } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const mail = user.userMails.find(mail => mail.email === email);
        if (!mail) return res.status(404).json({ error: 'Mail not linked' });

        mail.googleAccessToken = googleAccessToken;
        mail.googleRefreshToken = googleRefreshToken;
        mail.googleTokenExpiryDate = googleTokenExpiryDate;

        await user.save();
        res.status(200).json({ message: 'Tokens updated successfully', data: mail });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.post('/get-mail-accounts', async (req, res) => {
    const { userId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        res.status(200).json({ data: user.userMails });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/clear-mail-accounts', async (req, res) => {
    const { userId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        user.userMails = [];
        await user.save();

        res.status(200).json({ message: 'All mail accounts cleared' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;