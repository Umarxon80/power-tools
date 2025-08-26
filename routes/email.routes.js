import { Router } from "express";
import { sendemail, verifyemail } from "../controllers/email.controller.js";

const router=Router()

router.use("/sendotp",sendemail)
router.use("/checkotp",verifyemail)

export default router