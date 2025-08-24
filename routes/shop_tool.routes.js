import { Router } from "express";
import { createshop_tool, Delshop_tool, GetOneshop_tool, Getshop_tool, Patchshop_tool } from "../controllers/shop_tool.controller.js";


const router=Router()

router.get("/", Getshop_tool);
router.get("/:id", GetOneshop_tool);
router.post("/", createshop_tool);
router.patch("/:id", Patchshop_tool);
router.delete("/:id",Delshop_tool)

export default router;