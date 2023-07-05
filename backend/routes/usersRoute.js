import express from "express";
import { getUserStatus } from "../controllers/userController.js";
import { verifyUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/verifyToken", verifyUser);
router.get("/", getUserStatus);
router.delete("/:id"); // admin 
router.get("/users") // get all users

export default router;