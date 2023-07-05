import express from "express";
import { coursePoset } from "../controllers/courseController.js";
import requiredValues from "../validators/requiredValues.js";
import courseValidation from "../validators/courseValidation.js";
import checkValidation from "../validators/checkValidation.js";
//import adminIsAuthorized from "../middleware/authorizedAdmin.js";

const router = express.Router();
//router.use(adminIsAuthorized) // Authority is only given to the "Admin"

router.post("/", requiredValues(["firstName", "lastName", "birthDate", "gender", "email", "telephone", "profession", "language", "street", "zipCode", "city", "state", "country", "course", "courseStart"]), courseValidation(), checkValidation, coursePoset)
router.get("/");
router.patch("./");
router.delete("/:id");

export default router;