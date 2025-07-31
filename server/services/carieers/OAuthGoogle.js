import axios from 'axios';
import {Router} from 'express';
import dotenv from 'dotenv';
// import filterMails from "../../helpers/mailSorter.js";

import User from '../../models/user.js';
import fetchRecentEmails from "./mailProvider.js";

// Security
import verifyToken from "../../auth/verifyToken.js";
import filterMails from "../../helpers/mailSorter.js";

dotenv.config();

const router = Router();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

const SCOPE = [
    'https://www.googleapis.com/auth/gmail.readonly',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
].join(' ');


router.get('/google/start', (req, res) => {
    const { state } = req.query;
    console.log(state)
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&&scope=${encodeURIComponent(SCOPE)}&access_type=offline&prompt=consent&state=${state}`;
    res.redirect(url);
})

router.get('/google/callback', async (req, res) => {
    const { code, state } = req.query;
    try {
        const tokenRes = await axios.post('https://oauth2.googleapis.com/token', null, {
            params: {
                code,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                redirect_uri: REDIRECT_URI,
                grant_type: 'authorization_code'
            }
        });

        const accessToken = tokenRes.data.access_token;
        const refreshToken = tokenRes.data.refresh_token;

        const userInfoRes = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const { email, picture } = userInfoRes.data;

        const user = await User.findById(state);
        if (!user) {
            return res.status(404).send("User not found for given state ID");
        }

        const alreadyLinked = user.userMails.find(mail => mail.email === email);
        if (alreadyLinked) {
            return res.status(200).send(`
              <script>
                window.opener.postMessage({
                    email: "${email}",
                    message: "oauth_already_linked"
                }, '*');
                window.close();
              </script>
            `);
        }

        user.userMails.push({
            email,
            picture,
            googleAccessToken: accessToken,
            googleRefreshToken: refreshToken || accessToken,
            googleTokenExpiryDate: Date.now() + (tokenRes.data.expires_in * 1000) // save expiry if needed
        });

        await user.save();

        res.status(200).send(`
          <script>
            window.opener.postMessage({
                email: "${email}",
                message: "oauth_success"
            }, '*');
            window.close();
          </script>
        `);
    } catch (error) {
        console.error("❌ Google OAuth error:", error.response?.data || error.message);
        res.status(500).send("OAuth Error: Could not complete authentication.");
    }
});

router.post('/google/process', async (req, res) => {
    const { userId, email } = req.body;

    try {
        const user = await User.findById(userId);
        const targetMail = user?.userMails?.find(mail => mail.email === email);

        if (!targetMail) {
            return res.status(404).json({ message: 'Target mail not found for user' });
        }
        console.log('Calling Process')
        const mailRes = await filterMails(userId, email, targetMail.googleAccessToken);
        if(mailRes?.length === 0) {
            return res.status(404).json({ message: 'There are no mails found.' });
        }

        return res.status(200).json({ message: 'Emails processed and saved to DB' });
    } catch (err) {
        console.error("❌ Error during email processing:", err);
        return res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});


export default router;