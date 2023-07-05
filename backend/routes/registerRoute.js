import express from "express";
import registerPost from "../controllers/registerController.js";
import requiredValues from "../validators/requiredValues.js";
import registerValidator from "../validators/registerValidators.js";
import checkValidation from "../validators/checkValidation.js";

const router = express.Router();

router.post("/", requiredValues(["firstName", "lastName", "email", "password" ]), registerValidator(), checkValidation, registerPost);

export default router;