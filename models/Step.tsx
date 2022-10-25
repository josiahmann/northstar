import mongoose from 'mongoose';
const DocumentSchema = new mongoose.Schema({
    children :{
        type: [mongoose.Schema.Types.Mixed],
    },
    text: {
        type: String
    }
});
const stepSchema = new mongoose.Schema({
    // title: {
    //     type: String,
    //     // required: [true, 'Please enter a title'],
    //     maxLength: 100,
    //     trim: true
    // },
    content: {
        type: [DocumentSchema]
    },
    // index: {
    //     type: Number
    // }
});

stepSchema.set('timestamps', true);

module.exports = mongoose.models.Step || mongoose.model('Step', stepSchema);