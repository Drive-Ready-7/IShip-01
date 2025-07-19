import { Router } from 'express';
import User from '../models/user.js';

const router = new Router();

router.get('/get-users', async (req, res) => {
    try {
        const user = await User.countDocuments();
        res.status(200).json(user);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

export default router;