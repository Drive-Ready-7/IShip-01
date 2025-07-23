import mongoose, {Mongoose} from 'mongoose';

const MailSchema = new mongoose.Schema({
    _id: { type: Mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    deadline: { type: Date },

    metaData: { type: String },
})

export default mongoose.model('Mail', MailSchema);