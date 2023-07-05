import mongoose from "mongoose";

const { Schema } = mongoose;

const cartSchema = new Schema({
    userId: {type: String, required: true, unique: true},
    products: [
        {
            productId: {type: String},
            quantity: {type: Number, default: 1}
        }
    ],
}, {timestamps: true });



const Cart = mongoose.model("Cart", cartSchema);

export default Cart;