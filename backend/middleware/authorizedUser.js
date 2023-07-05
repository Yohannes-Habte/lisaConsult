import createError from "http-errors";
import jwt from "jsonwebtoken";

const userIsAuthorized = async (req, res, next) => {
    try{
        let token = req.headers.authorization.split(" "[1]);
        if(token) {
            throw new Error("Unauthorized User")
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log("Decoded token", decodedToken);
        // If the token is valid, go on to the next middleware
        next();
    }catch(err){
        console.log(err);
        next(createError(403, "User could not be authorized. Please try again"));
    }
};

export default userIsAuthorized;