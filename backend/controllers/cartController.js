import Cart from "../models/cart.js";
import createError from "http-errors";


//====================================================================
// Post Cart
//====================================================================

export const postCart = async (req, res, next) => {
    const newCart = new Cart(req.body);

    try{
        const savedCart = await newCart.save();
        return res.status(201).json(savedCart);
    }catch(err){
        console.log(err);
        return next(createError(500, "Database could not query"));
    }
}

//====================================================================
// Update Cart
//====================================================================

export const updateCart = async(req, res, next) => {
    const cartId = req.params.id;

    try{
        const cart = await Cart.findByIdAndUpdate(cartId, {$set: req.body}, {new: true, runValidators: true});
        return res.status(201).json(cart);
    }catch(err){
        console.log(err);
        return next(createError(500, "Database could not query"));
    }
}


//====================================================================
// Delete Cart
//====================================================================

export const deleteCart = async(req, res, next) => {
    try{
        const cart = await Cart.findByIdAndRemove(req.params.id);
        return res.status(201).json("Cart has been deleted");
    }catch(err){
        console.log(err);
        return next(createError(500, "Database could not query"));
    }
}


//====================================================================
// Get Cart of the user
//====================================================================

export const getCart = async(req, res, next) => {
    const userId = req.params.id;
    try{
        const cart = await Cart.findOne(userId);
        return res.status(201).json(cart);
    }catch(err){
        console.log(err);
        return next(createError(500, "Database could not query"));
    }
}


//====================================================================
// Get All User Carts
//====================================================================

export const allCarts = async (req, res, next) => {

    try{
         const carts = await Cart.find();
         return res.status(201).json(carts)
    }catch(err) {
        console.log(err);
        return next(createError(500, "Database could not query"));
    }
}