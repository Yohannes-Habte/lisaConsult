import mongoose from "mongoose";

const { Schema } = mongoose;

const courseSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    birthDate: {type: String, required: true},
    gender: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    telephone: {type: Number, required: true},
    profession: {type: String, required: true},
    language: {type: String},
    street: {type: String, required: true},
    zipCode: {type: Number, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true},
    course: {type: String, required: true},
    courseStart: {type: String, required: true},
    //consent: {type: Boolean, default: false},
    amount: {type: Number, required: true},
}, {timestamps: true }); 



const Course = mongoose.model("Course", courseSchema);

export default Course;