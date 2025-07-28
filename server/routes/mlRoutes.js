import { Router } from 'express';
import Mail from '../models/mail';
import router from "./mailRoutes.js";
import verifyToken from "../auth/verifyToken.js";

const Router = router();

router.get('/get-mails', verifyToken, async (req, res) => {
    const { userId } = req.query;

    try {

    } catch(err) {
        console.error(err);
        return res.status(400).send({
            error: "Internal Server Error",
        })
    }

})

export default router;