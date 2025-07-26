import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.get('/refresh', (req, res) => {
    const { refreshToken } = req.body;

    if(!refreshToken) res.status(401).send('Not logged in');

    try {
        const decoded = jwt.verify(refreshToken, process.env.SECRET_KEY);

        res.status(200).json({
            token: jwt.sign({ id: decoded.id}, process.env.SECRET_SECRET_KEY, { expiresIn: '7d'})
        });
    } catch(err) {
        console.log(err);
        res.status(403).send('Invalid Token');
    }
})

export default router;