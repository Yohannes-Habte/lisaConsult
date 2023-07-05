import Product from "../models/product.js";
import createError from "http-errors";

//===================================================================================
// Post Product
//===================================================================================

export const postProduct = async (req, res, next) => {
    const newProduct = new Product(req.body)
  try {
    const savedProduct = await newProduct.save();
    return res.status(201).json(savedProduct);
  } catch (err) {
    console.log(err);
    return next(createError(500, "Database could not be queries. Please try again!"));
  }
};


//===================================================================================
// Update Product
//===================================================================================
export const updatedProduct = async (req, res, next) => {
    const productId = req.params.id;
    
    try{
        const updatedProduct = await Product.findByIdAndUpdate(productId, {$set: req.body}, {new: true, runValidators: true});
        return res.status(201).json(updatedProduct);
    }catch(err){
        console.log(err);
        return next(createError(500, "Database couldn't query."))
    }
}


//===================================================================================
// Delete Product
//===================================================================================
export const deleteProduct = async (req, res, next) => {
    const productId = req.params.id;
    
    try{
        const deleteProduct = await Product.findByIdAndUpdate(productId, {$pull: req.body}, {new: true, runValidators: true});
        return res.status(201).json(deleteProduct);
    }catch(err){
        console.log(err);
        return next(createError(500, "Database couldn't query."))
    }
}

//===============================================================================
// Delete Product - Second Method
//===============================================================================
export const deletedProduct = async (req, res, next) => {
    
    try{
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        return res.status(201).json(`${deletedProduct.title} has been deleted.`);
    }catch(err){
        console.log(err);
        return next(createError(500, "Database couldn't query. Please try again!"))
    }
}

//===================================================================================
// Get a Product
//===================================================================================

export const getProduct = async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
      return res.status(201).json(product)
    } catch (err) {
      console.log(err);
      return next(createError(500, "Database could not be queries. Please try again!"));
    }
  };

  //===================================================================================
// Get All Products
//===================================================================================

export const getAllProducts = async (req, res, next) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try {
      let products;

      if(queryNew) {
        products = await Product.find().sort({createdAt: -1}).limit(5)
      } else if (queryCategory) {
        products = await Product.find({categories: {$in: [queryCategory]}})
      } else {
        products = await Product.find()
      }
      return res.status(201).json(products);
    } catch (err) {
      console.log(err);
      return next(createError(500, "Database could not be queries. Please try again!"));
    }
  };
  
  