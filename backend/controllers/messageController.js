import Message from "../models/message.js";
import createError from "http-errors";

export const messagePost = async (req, res, next) => {
    const newMessage = new Message(req.body)
    try{
        const savedMessage = await newMessage.save();
        return res.status(201).json({comment: savedMessage})
    }catch(err){
        return next(createError(403, "Message could not be posted. Please try again"))
    }
}