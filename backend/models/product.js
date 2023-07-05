import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    categories: {type: Array},
    size: {type: String},
    color: {type: String},
    price: {type: Number, required: true},
}, {timestamps: true });


productSchema.pre("save", async function(next){
    if(!this.size) {
        this.size = 0;
    };

    if(!this.color) {
        this.color = "brown"
    };

    next();
});

const Product = mongoose.model("Product", productSchema);

export default Product;