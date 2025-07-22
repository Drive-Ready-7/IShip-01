import axios from 'axios';
import { Router } from 'express';
import dotenv from 'dotenv';

import User from '../../models/user.js';

dotenv.config();

const router = Router();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

const SCOPE = 'https://www.googleapis.com/auth/gmail.readonly';

router.get('/google/start/:UserID', (req, res) => {
    const { UserID } = req.params;
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${encodeURIComponent(SCOPE)}&access_type=offline&prompt=consent`;
    res.redirect(url);
})

router.get('/google/callback', async (req, res) => {
    const code = req.query.code;
    console.log("Received code:", code);
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

        const access_token = tokenRes.data.access_token;

        // You can store the token securely here or fetch data
        console.log("ACCESS TOKEN:", access_token);

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