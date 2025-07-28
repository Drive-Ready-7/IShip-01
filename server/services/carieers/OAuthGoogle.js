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
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&&scope=${encodeURIComponent(SCOPE)}&access_type=offline&prompt=consent&state=${state}`;
    res.redirect(url);
})

router.get('/google/callback', async (req, res) => {
    console.log("Getting response from google");
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

        let userInfo = null;
        try {
            userInfo = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                }
            });
        } catch (error) {
            console.error("User info fetch failed:", error.response?.data || error.message);
        }

        if (!userInfo) {
            return res.status(401).json({
                message: 'User not found',
            })
        }

        // dont forget to add if email already exists to avoid duplicates
        const user = await User.findById(state);
        curEmail = userInfo.data.email;
        user.userMails.push({
            email: curEmail,
            picture: userInfo.data.picture,
            googleAccessToken: accessToken,
            googleRefreshToken: refreshToken | accessToken,
            googleTokenExpiryDate: Date.now()
        });

        console.log(user);
        await user.save();

        console.log(accessToken);

        res.status(200).send(`
              <script>
                window.opener.postMessage({
                    email: ${curEmail},
                    message: "oauth_success"
                }, '*');
                window.close();
              </script>
            `);
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.send("Error during OAuth");
    }
});

router.post('/google/process', async (req, res) => {
    const { userId, email } = req.body;
    try {
        const user = await User.findById(userId);
        await filterMails(userId, email, user.userMails[email]);
    } catch(err) {
        console.log(err);
    }
});

export default router;