import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

import User from '../models/user.js';
import verifyToken from "../auth/verifyToken.js";
import sendVerificationMail from '../services/transporters/mailVerification.js';
import sendForgetPasswordCode from '../services/transporters/forgot-password.js';

const router = new Router();

const getUnicode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// http://localhost:5000/api/user/

router.get('/get-users', verifyToken, async (req, res) => {
    try {
        const user = await User.countDocuments();
        res.status(200).json(user);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.post('/get-user-by-id', async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({
                message: 'User not found',
            })
        }

        return res.status(200).json(user);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,

        });

        await newUser.save();
        return res.status(200).json({ message: 'Registered Successfully' });
    } catch(err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
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
            user = await User.findOne({ name: usernameOrEmail });
        }

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

        res.status(200).json({success:true,user, token});
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.post('/change-password', async (req, res) => {
    const { userId, oldPassword, newPassword } = req.body;
    try {
        const user = await User.findById(userId);
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

router.post('/send-forgot-password-mail', async (req, res) => {
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

router.post('/oauth/verify-code', async (req, res) => {
    const { email, resetCode } = req.body;
    try {
        const user = await User.findOne({ email: email});
        if(!user) return res.status(404).json({
            error: 'User does not exist'
        })
        const unicode = user.unicode;
        if(unicode !== resetCode) {
            return res.status(400).json({
                error: 'Invalid Reset Code'
            });
        }
        res.status(200).json({
            success:true,
        })
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: 'Internal Server Error'});
    }
})

router.post('/oauth/reset-password', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email});
        if(!user) {
            return res.status(404).json({
                error: 'User does not exist'
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

router.post('/change-username', async (req, res) => {
    const { userId, username } = req.body;
    try {
        const user = await User.findById(userId);
        if(!user) return res.status(404).json({
            error: 'User does not exist'
        })
        const existingUsername = await User.findOne({ name: username } );
        if(existingUsername) {
            return res.status(400).json({
                error: 'Username already exist'
            })
        }
        user.name = username;
        await user.save();
        return res.status(200).send('Username successfully updated');
    } catch(err) {
        console.log(err);
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
})

router.post('/change-email', async (req, res) => {
    const { userId, email } = req.body;
    try {
        const user = await User.findById(userId);
        if(!user) return res.status(404).json({
            error: 'User does not exist'
        })
        const existingMail = await User.findOne({ email: email } );
        if(existingMail) {
            return res.status(400).json({
                error: 'Email already exist'
            })
        }
        user.email = email;
        user.verified = false;
        user.unicode = '';
        await user.save();
        return res.status(200).json({
            data : user,
            message: 'Email successfully updated'
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
})

router.post('/change-phone', async (req, res) => {
    const { userId, phone } = req.body;

    try {
        const user = await User.findById(userId);
        if(!user) return res.status(404).json({
            error: 'User does not exist'
        })

        user.phone = phone;
        user.phoneVerified = false;


    } catch(err) {
        console.log(err);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
})


export default router;