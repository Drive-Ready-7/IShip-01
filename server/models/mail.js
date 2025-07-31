import mongoose from 'mongoose';

const MailSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    subject: { type: String, required: true },
    type: String,
    deadline: { type: Date },
    confidence: String,

    metaData: { type: String },
})

export default mongoose.model('Mail', MailSchema);