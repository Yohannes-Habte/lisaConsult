import express from "express";
import userIsAuthorized from "../middleware/authorizedUser.js";

const router = express.Router();
router.use(userIsAuthorized); // The authorized body is user.

router.post("/test", (req, res, next) => {
    const firstName = req.body.firstName;
    res.send(firstName);
});
router.delete("/:id");

export default router;