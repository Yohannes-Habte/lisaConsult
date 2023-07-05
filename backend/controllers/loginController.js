import User from "../models/user.js";
import bcrypt from "bcryptjs";
import createError from "http-errors";
import jwt from "jsonwebtoken";

const loginPost = async(req, res, next) => {
    const { email, password } = req.body;

    // Find if the user exist in the database
    let foundUser;
    try{
        foundUser = await User.findOne({email: email});
    }catch(err){
        console.log(err);
        return next(createError(500, "could not query database. Please try again!"))
    }

    // Check the password 
    let isPasswordValid;
    try{
        isPasswordValid = await bcrypt.compare(password, foundUser.password);
    }catch(err){
        console.log(err);
        return next(createError(409, "Database could not be queried. Please try again!"))
    }

    if(!isPasswordValid) {
        return next(createError(401, "Invalid password. Please try again!"))
    }

    // Generate a token for the user that is valid for 1 hour.
    // let newToken;
    // try{
    //     newToken = jwt.sign({id: foundUser._id}, process.env.SECRET_KEY, {expiresIn: "1h"});
    // }catch(er){
    //     console.log(er)
    //     return next(createError( 500, "could not generate token. Please try again!"))
    // }

     // If the password is correct and the token is valid, return the user id and user token
     return res.json( { id: foundUser._id,}) //token: newToken, data:foundUser } );
}

export default loginPost;