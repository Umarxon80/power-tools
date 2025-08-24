import { Router } from "express"
import  district_router  from "./district.routes.js";
import  admin_router  from "./admin.routes.js";
import  tool_router  from "./tool.routes.js";
import  user_router  from "./user.routes.js";
import  shop_router  from "./shop.routes.js";

const router=Router()

router.use("/district",district_router)
router.use("/admin",admin_router)
router.use("/user",user_router)
router.use("/tool",tool_router)
router.use("/shop",shop_router)

export default router