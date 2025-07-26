import transporter from './mail.js';

const sendVerificationMail = async (receiver, unicode) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: receiver,
        subject: 'Last Line Verification Mail',
        text: `${unicode} is your verification code to get verified in Last Line`,
    }
    return await transporter.sendMail(mailOptions);
}

export default sendVerificationMail;