import { Router } from "express"
import  district_router  from "./district.routes.js";
import  admin_router  from "./admin.routes.js";
import  tool_router  from "./tool.routes.js";
import  user_router  from "./user.routes.js";
import  shop_router  from "./shop.routes.js";
import  shop_tool_router  from "./shop_tool.routes.js";
import  order_router  from "./order.routes.js";

const router=Router()

router.use("/district",district_router)
router.use("/admin",admin_router)
router.use("/user",user_router)
router.use("/tool",tool_router)
router.use("/shop",shop_router)
router.use("/shop_tool",shop_tool_router)
router.use("/order",order_router)

export default router