import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    }    

}, {timestamps: true });

export const nodeModel = mongoose.model('noteflyTable', noteSchema);

export default nodeModel;