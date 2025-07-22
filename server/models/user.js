import mongoose from 'mongoose';

const userMailSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    googleAccessToken: { type: String },
    googleRefreshToken: { type: String },
    googleTokenExpiryDate: { type: Date },
})

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },

    userMails: { type: [userMailSchema], default: [] },
})

const User = mongoose.model('User', userSchema);
export default User;