import User from "../models/user.js";
import createError from "http-errors";

const registerPost = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  let foundUser;
  try {
    foundUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
    return next(
      createError(500, "could not query database. please try again!")
    );
  }

  // If user already exist, the error message will be...
  if (foundUser) {
    return next(
      createError(400, "user already exists. Please try a different username!")
    );
  }

  // if the user does not exist
  if (!foundUser) {
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      isAdmin: false,
      courses: []
    });

    // Save the new user into the database
    try {
      await newUser.save();
    } catch (err) {
      console.log(err);
      return next(createError(500, "couldn't create user. please try again!"));
    };


   // Return the new user ID
   return res.status(201).json({ id: newUser._id });
  }
};

export default registerPost;
