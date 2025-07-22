import User from '../models/user.js';

export const findUser = async (email) => {
    const user = await User.findOne({ email: email });
    if(!user) throw new Error("User not found");
    return user;
}

export const saveUser = async (user) => {
    if(!user) throw new Error("User not found");
    await user.save();
}

export const userExists = async (email) => {
    const user = await User.findOne({ email: email });
    return user !== null || user !== undefined;
}