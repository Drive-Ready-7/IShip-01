import mongoose, {Mongoose} from 'mongoose';

const MailSchema = new mongoose.Schema({
    _id: { type: Mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

})