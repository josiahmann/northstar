import mongoose from 'mongoose';

const stepSchema = new mongoose.Schema({
    // title: {
    //     type: String,
    //     // required: [true, 'Please enter a title'],
    //     maxLength: 100,
    //     trim: true
    // },
    content: {
        type: String
    },
    // index: {
    //     type: Number
    // }
});

stepSchema.set('timestamps', true);

module.exports = mongoose.models.Step || mongoose.model('Step', stepSchema);