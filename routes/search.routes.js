import { Router } from "express";
import { Get_shop_of_tool, Get_toll_renter, Get_user_by_time_ofperch } from "../controllers/search.controller.js";


const router=Router()

router.get("/find_shop", Get_shop_of_tool);
router.get("/find_renter", Get_toll_renter);
router.get("/find3", Get_user_by_time_ofperch);


export default router;