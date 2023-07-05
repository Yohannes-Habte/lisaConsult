import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
    courses: [ { type: mongoose.Types.ObjectId, ref: "Course" } ],
    messages: [ { type: mongoose.Types.ObjectId, ref: "Message" } ]
}, {timestamps: true});


userSchema.pre("save", async function(next) {
    
    try {
        if (!this.isModified("password")) return next();
        const hashedPassword = await bcrypt.hash(this.password, 12);
        this.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err);
    }
});

const User = mongoose.model( "User", userSchema );

export default User;

