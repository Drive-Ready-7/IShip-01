import { Router } from "express";
import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;

import qrcode from 'qrcode-terminal';
import User from '../../models/user.js';

const router = Router();

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
});

client.on("ready", () => {
    console.log("WhatsApp client is ready!");
});

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
    console.log("Scan this QR to authenticate.");
});

export function connectWhatsapp() {

    (async () => {
        try {
            await client.initialize();
        } catch (err) {
            console.error("WhatsApp initialization failed:", err.message);
        }
    })();

}

router.post("/notify", async (req, res) => {
    const { number, message } = req.body;
    console.log("📨 Incoming request:", req.body);

    if (!number || !message) {
        return res.status(400).json({ success: false, error: "Number and message required." });
    }

    try {
        const cleanedNumber = number.replace(/\D/g, '');
        const chatId = `91${cleanedNumber}@c.us`;
        console.log(cleanedNumber)
        console.log(chatId)

        await client.sendMessage(chatId, message);
        return res.json({ success: true, message: "Message sent!" });
    } catch (error) {
        console.error("Error sending message:", error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
});

router.post('/verify-number', async (req, res) => {
    const { userId, number } = req.body;

    if (!userId || !number) {
        return res.status(400).json({ success: false, error: "User ID and number required." });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found." });
        }

        return res.json({ success: true, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

export default router;
