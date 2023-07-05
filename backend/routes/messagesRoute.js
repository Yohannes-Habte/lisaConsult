import express from "express";
import { messagePost } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", messagePost);

export default router;