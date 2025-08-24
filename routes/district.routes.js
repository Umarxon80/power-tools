import { Router } from "express";
import { createdistrict, Deldistrict, Getdistrict, GetOnedistrict, Patchdistrict } from "../controllers/district.controller.js";


const router=Router()

router.get("/", Getdistrict);
router.get("/:id", GetOnedistrict);
router.post("/", createdistrict);
router.patch("/:id", Patchdistrict);
router.delete("/:id",Deldistrict)

export default router;