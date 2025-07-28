import axios from 'axios';
import {Router} from 'express';
import dotenv from 'dotenv';

import User from '../../models/user.js';

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
    console.log(state);
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
        user.userMails.push({
            email: userInfo.data.email,
            picture: userInfo.data.picture,
            googleAccessToken: accessToken,
            googleRefreshToken: refreshToken | accessToken,
            googleTokenExpiryDate: Date.now()
        });


        console.log(user);

        await user.save();

        res.send(`
              <script>
                window.opener.postMessage('oauth_success', '*');
                window.close();
              </script>
            `);
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.send("Error during OAuth");
    }
});

export default router;