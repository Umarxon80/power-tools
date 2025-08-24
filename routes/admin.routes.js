import { Router } from "express";
import { createadmin, Deladmin, Getadmin, GetOneadmin, Patchadmin } from "../controllers/admin.controller.js";


const router=Router()

router.get("/", Getadmin);
router.get("/:id", GetOneadmin);
router.post("/", createadmin);
router.patch("/:id", Patchadmin);
router.delete("/:id",Deladmin)

export default router;