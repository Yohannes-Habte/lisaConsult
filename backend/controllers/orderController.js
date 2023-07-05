import Order from "../models/order.js";
import createError from "http-errors";
import { get } from "mongoose";

//====================================================================
// Post Order
//====================================================================

export const postOrder = async (req, res, next) => {
  const newOrder = new Order(req.body);

  try {
    const order = await newOrder.save();
    return res.status(201).json(order);
  } catch (err) {
    console.log(err);
    return next(createError(500, "Database could not query"));
  }
};

//====================================================================
// Update Order
//====================================================================

export const updatedOrder = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const changedOrder = await Order.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    return res.status(201).json(changedOrder);
  } catch (err) {
    console.log(err);
    return next(createError(500, "Database could not query"));
  }
};

//====================================================================
// Delete Order
//====================================================================

export const deleteOrder = async (req, res, next) => {
  try {
    const removeOrder = await Order.findByIdAndDelete(req.params.id);
    return res.status(201).json(removeOrder);
  } catch (err) {
    console.log(err);
    return next(createError(500, "Database could not query"));
  }
};

//====================================================================
// Get User Orders
//====================================================================

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: get.params.userId });
    return res.status(201).json(orders);
  } catch (err) {
    console.log(err);
    return next(createError(500, "Database could not query"));
  }
};

//====================================================================
// Get All Orders
//====================================================================

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    return res.status(201).json(orders);
  } catch (err) {
    console.log(err);
    return next(createError(500, "Database could not query"));
  }
};

//====================================================================
// Get Monthly Income
//====================================================================

export const getMonthlyIncome = async (req, res, next) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const beforeLastMonth = new Date(
    new Date().setMonth(lastMonth.getMonth() - 1)
  );
  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: beforeLastMonth } } },
      { $project: { 
            month: { $month: "$createdAt" }, 
            sales: "$amount" 
        }},
      {$group: {
            _id: "$month", 
            total: {$sum: "$sales"}
        }}
    ]);
    return res.status(201).json(income);
  } catch (err) {
    console.log(err);
    return next(createError(500, "Database could not query"));
  }
};
