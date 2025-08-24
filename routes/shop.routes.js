import { Router } from "express";
import { createshop, Delshop, GetOneshop, Getshop, Patchshop } from "../controllers/shop.controller.js";


const router=Router()

router.get("/", Getshop);
router.get("/:id", GetOneshop);
router.post("/", createshop);
router.patch("/:id", Patchshop);
router.delete("/:id",Delshop)

export default router;