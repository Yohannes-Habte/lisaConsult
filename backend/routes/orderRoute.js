import express from "express";
import adminIsAuthorized from "../middleware/authorizedAdmin.js";

const router = express.Router();
router.use(adminIsAuthorized); // The authorized body is only Admin.

router.post("/");
router.get("/");
router.delete("/:id"); 

export default router;