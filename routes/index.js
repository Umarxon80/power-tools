import { Router } from "express"
import  district_router  from "./district.routes.js";
import  admin_router  from "./admin.routes.js";

const router=Router()

router.use("/district",district_router)
router.use("/admin",admin_router)

export default router