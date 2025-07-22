import { Router } from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';
import verifyToken from "../auth/verifyToken.js";
import * as userHelper from '../helpers/userHelper.js';
import bcrypt from "bcrypt";

const router = new Router();

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
        if (!user) {
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
    const { email, password } = req.body;

    try {
        const user = await userHelper.findUser(email);

        if(!user) {
            res.status(404).json({ error: 'User not exists' });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        const token = jwt.sign(
            { email, id: user._id },
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

export default router;