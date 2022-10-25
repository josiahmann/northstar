import mongoose from 'mongoose';
export interface Guide {
    _id: string;
    title: string;
    description: string;
}
const GuideSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: [true, 'Please enter a title'],
        maxLength: 100,
        trim: true,
        required: true
    },
    url: {
        type: String
    },
});

GuideSchema.set('timestamps', true);

module.exports = mongoose.models.Guide || mongoose.model('Guide', GuideSchema);