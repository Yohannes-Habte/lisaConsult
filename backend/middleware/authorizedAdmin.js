import User from "../models/user.js";
import jwt from "jsonwebtoken";
import createError from "http-errors";

const adminIsAuthorized = async (req, res, next) => {
    try{
        // Step 1: find the token from the frontend
        let token = req.headers.authorization.split(" ")[1];
        
        if(!token) {
            throw new Error("No authorization is given to this user")
        }
         // Step 2: If the token is there, then decode and verify the token sent from the frontend 
         const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

         // Step 3: Find current user using using the ID of a user 
         let currentUser;
         try{
            currentUser = await User.findById(decodedToken.id);
         }catch(err){
            console.log(err);
            return next(createError(500, "Couldn't query the database. Please try again"));
         };
         // Step 4: If the current user is an admin, proceed to the next
         if(currentUser && currentUser.admin) {
            next();
         } else {
            throw new Error("User unauthorized");  
         }
    }catch(err){
        console.log(err);
        return next(createError(500, "User is not authorized! Please try to get assistance from authorized body.."));
    }
};

export default adminIsAuthorized;