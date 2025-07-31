import mongoose from 'mongoose';

const MailSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    subject: { type: String, required: true },
    type: String,
    deadline: { type: Date },
    confidence: String,

    to: String,

    metaData: { type: String },

})

export default mongoose.model('Mail', MailSchema);