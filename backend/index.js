import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";

import registerRoute from "./routes/registerRoute.js";
import loginRoute from "./routes/loginRoute.js"; 
import usersRoute from "./routes/usersRoute.js";
import adminRoute from "./routes/adminRoute.js";
import messageRoute from "./routes/messagesRoute.js"
import coursesRoute from "./routes/coursesRoute.js";
import productsRoute from "./routes/productsRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";
import paymentRoute from "./routes/paymentRoute.js"
import globalErrorHandler from "./middleware/globalErrorHandler.js";


const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

dotenv.config(); // used to hide secrete keys 

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Database connection established!"))
.catch((err) => {
    console.log(err)
});

app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/users", usersRoute);
app.use("/admin", adminRoute);
app.use("/messages", messageRoute);
app.use("/courses", coursesRoute);
app.use("/products", productsRoute); 
app.use("/carts", cartRoute);
app.use("/orders", orderRoute);
app.use("/payments", paymentRoute);


app.use(morgan("tiny"));

app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`The server has started on port ${PORT}`)
})