import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchima = new Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    message: {type: String, required: true},
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchima);

export default Message;