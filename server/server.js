import express from 'express';
import { config } from 'dotenv';

import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

config();

const app = express();

app.get('', (req, res) =>{
    res.status(200).json({
        status: 'Online'
    });
})

app.use('/users', userRoutes);

app.listen(5000, (req, res) => {
    console.log('Server running on localhost:5000...');
    connectDB();
});