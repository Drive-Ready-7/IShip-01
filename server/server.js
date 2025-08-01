import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import transporter from "./services/transporters/mail.js";
import filterMails from "./helpers/mailSorter.js";

import Mails from "./models/mail.js"

import userRoutes from './routes/userRoutes.js';
import googleAuthRoutes from './services/carieers/OAuthGoogle.js';
import mailRoutes from './routes/mailRoutes.js';
import authRoutes from './services/auth/auth.js';
import whatsappServices, { connectWhatsapp } from './services/whatsapp/whatsapp.js';

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('', (req, res) => {
    res.status(200).send("<head> <title>LastLine Server</title> <body style='text-align: center' > <h1>LastLine</h1> <h6>Up 'N Running</h6> </body> </head>");
})

app.use('/api/user', userRoutes);
app.use('/auth', googleAuthRoutes);
app.use('/api/secure/', mailRoutes);
app.use('/api/service/auth', authRoutes);
app.use('/api/secure/whatsapp', whatsappServices);

app.get('/am-i-alive', (req, res) => {
    res.status(200).send("Im Alive");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, async (req, res) => {
    console.log(`Server running on http://localhost:${PORT} ...`);
    await connectDB();
    await connectWhatsapp();
});

(async () => {
    try {
        const allMails = await Mails.deleteMany({})
    } catch (error) {
        console.error(error);
    }
})();