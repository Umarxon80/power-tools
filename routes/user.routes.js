import { Router } from "express";
import { createuser, Deluser, GetOneuser, Getuser, Patchuser } from "../controllers/user.controller.js";


const router=Router()

router.get("/", Getuser);
router.get("/:id", GetOneuser);
router.post("/", createuser);
router.patch("/:id", Patchuser);
router.delete("/:id",Deluser)

export default router;