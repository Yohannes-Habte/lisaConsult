import User from "../models/user.js";
import jwt from "jsonwebtoken";
import createError from "http-errors";

//=============================================================
//  Verify Log in User in the Front End once logged in
// =============================================================

export const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.token;
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decode);
    
    if (decode) {
      let user = await User.findById(decode.id);
       return res.send({
        success: true,
        data: user,
        token: token,
      });
    }
    // next(); //! Is this correct? If so, why?
  } catch (err) {
    return res.send({ success: false, message: err.message });
  }
};


//=============================================================
//  Find all users
// =============================================================

export const getAllUsers = async(req, res, next) => {
  const query = req.query.new; // this help us to create a condition regarding users
  try{
    const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
    return res.status(201).json(users);
  }catch(err){
    console.log(err);
    return next(createError(500, "Database could not be queried. Please try again!"))
  }
}


//=============================================================
//  Get User Status using statistics
// =============================================================

export const getUserStatus = async(req, res, next) => {
 const date = new Date();
 const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

 try{
  const data = await User.aggregate([
    {$match: {createdAt: {$gte: lastYear}}},
    { $project: {$month: "$createdAt"}},
    {$group: {_id: "$month", total: {$sum: 1}}}
  ]);
  return res.status(201).json(data)
 }catch(err){
  console.log(err);
  return next(createError(500, "Database could not query. Please try again!"))
 }
}

//=============================================================
//  Find one user
// =============================================================

export const getOneUser = async(req, res, next) => {
  const userId = req.params.id
  try{
    const user = await User.findById(userId);
    return res.status(201).json(user);
  }catch(err){
    console.log(err);
    return next(createError(500, "Database could not be queried. Please try again!"))
  }
};

//=============================================================
//  Delete one user
// =============================================================

export const deleteOneUser = async(req, res, next) => {
  const userId = req.params.id
  try{
    const user = await User.findByIdAndDelete(userId);
    return res.status(201).json(`${user.name} has been deleted. Comeback soon! `);
  }catch(err){
    console.log(err);
    return next(createError(500, "Database could not be queried. Please try again!"))
  }
}