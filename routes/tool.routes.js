import { Router } from "express";
import { createtool, Deltool, GetOnetool, Gettool, Patchtool } from "../controllers/tool.controller.js";


const router=Router()

router.get("/", Gettool);
router.get("/:id", GetOnetool);
router.post("/", createtool);
router.patch("/:id", Patchtool);
router.delete("/:id",Deltool)

export default router;