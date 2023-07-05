import express from "express";
import loginPost from "../controllers/loginController.js";
import requiredValues from "../validators/requiredValues.js";
import checkValidation from "../validators/checkValidation.js";

const router = express.Router();

router.post("/", requiredValues(["email", "password"]), checkValidation, loginPost);

export default router;