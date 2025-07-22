import nodemailer from 'nodemailer';

// load env for transporter
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
});

transporter.verify((err, info) => {
    if (err) {
        console.error("Error Building Mail Connection", err);
    } else {
        console.log("Mail Service Verified");
    }
})

export default transporter;