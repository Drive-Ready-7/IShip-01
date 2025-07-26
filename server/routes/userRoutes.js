import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

import User from '../models/user.js';
import verifyToken from "../auth/verifyToken.js";
import * as userHelper from '../helpers/userHelper.js';
import sendVerificationMail from '../services/transporters/mailVerification.js';
import sendForgetPasswordCode from '../services/transporters/forgot-password.js';

const router = new Router();

const getUnicode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}


router.get('/get-users', verifyToken, async (req, res) => {
    try {
        const user = await User.countDocuments();
        res.status(200).json(user);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await userHelper.userExists(email);
        if (user) {
            res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        await userHelper.saveUser(newUser);
        res.status(200).json({ message: 'Registered Successfully' });
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.post('/login', async (req, res) => {
    console.log(req.body);
    const { usernameOrEmail, password } = req.body;

    const isEmail = (str) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(str);
    };

    try {
        let user;
        if(isEmail(usernameOrEmail)) {
            user = await User.findOne({ email: usernameOrEmail });
        } else {
            user = await User.findOne({ username: usernameOrEmail });
        }

        console.log(isEmail(usernameOrEmail));

        if(!user) {
            return res.status(404).json({ error: 'User not exists' });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY,
            { expiresIn: process.env.EXPIRES_IN, }
        );

        res.status(200).json({user, token});
    } catch(err) {
        console.log(err);

        if(err.message === "User not found") {
            res.status(404).json({ error: 'User not found' });
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.post('/change-password', async (req, res) => {
    const { userId, oldPassword, newPassword } = req.body;
    try {
        const user = await User.findbyId(userId);
        if(!user) return res.status(404).json({ error: 'User does not exist' });
        if(!bcrypt.compare(oldPassword, user.password)) {
            return res.status(400).json({
                error: 'Wrong Password'
            });
        }
        user.password = await bcrypt.hash(newPassword, 12);
        await user.save();
        return res.status(200).send('Password successfully updated');
    } catch(err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// http://localhost:5000/api/user/send-verification-mail
router.post('/send-verification-mail', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email: email});
        if(!user) {
            return res.status(404).json({
                error: 'User does not exist'
            });
        }
        if(user.verified === true) {
            return res.status(400).json({
                error: 'User already verified'
            });
        }
        const unicodeToken = getUnicode();
        await sendVerificationMail(email, unicodeToken);
        user.unicode = unicodeToken;
        await user.save();
        return res.status(200).send('Email sent successfully');
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

// http://localhost:5000/api/user/send-forgot-password-mail
router.post('send-forgot-password-mail', async (req, res) => {
    const { email } = req.body;
    console.log(email)
    try {
        const user = await User.findOne({ email: email});
        if(!user) return res.status(404).json({
            error: 'User does not exist'
        })
        console.log(user)
        const unicodeToken = getUnicode();
        await sendForgetPasswordCode(email, user.type, unicodeToken);
        user.unicode = unicodeToken;
        await user.save();
        return res.status(200).send('Password reset code sent successfully');
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

// http://localhost:5000/api/user/verify-reset-password?userId=12345&resetCode=12345
router.get('/oauth/verify-reset-password', async (req, res) => {
    const { userId, resetCode, password } = req.query;
    try {
        const user = await User.findById(userId);
        if(!user) {
            return res.status(404).json({
                error: 'User does not exist'
            });
        }
        const unicode = user.unicode;
        if(unicode !== resetCode) {
            return res.status(400).json({
                error: 'Invalid Reset Code'
            });
        }
        user.password = await bcrypt.hash(password, 12);
        await user.save();
        return res.status(200).send('Password reset successful');
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
})


export default router;