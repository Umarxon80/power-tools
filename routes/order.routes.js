import { Router } from "express";
import { createorder, Delorder, GetOneorder, Getorder, Patchorder } from "../controllers/order.controller.js";


const router=Router()

router.get("/", Getorder);
router.get("/:id", GetOneorder);
router.post("/", createorder);
router.patch("/:id", Patchorder);
router.delete("/:id",Delorder)

export default router;