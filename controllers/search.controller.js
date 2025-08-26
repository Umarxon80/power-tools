
import  db  from "../config/db.config.js";

export const Get_shop_of_tool=(req,res)=>{
    let {name}=req.body
    console.log(name);
    db.query("SELECT shop.name,shop.location FROM tool RIGHT JOIN shop_tool on tool.id=shop_tool.tool_id LEFT JOIN shop on shop.id=shop_tool.shop_id where tool.name=(?)",[name],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting user");
            return res.status(500).json({
                message:"Error getting user",
                error:"Internal Server Error"
            }) 
        }
        if (!results.length) {
            return res.status(400).send("tool with such name doesn't exists in shops")
        }
        res.status(200).json({
            statusCode:200,
            data:results,
            message:"tools are recived successfully",
        })
    })
};

export const Get_toll_renter=(req,res)=>{
    db.query("SELECT user.name,tool.name,shop_tool.rent_price  FROM tool RIGHT JOIN shop_tool on tool.id=shop_tool.tool_id LEFT JOIN `order` on `order`.shop_tool_id=shop_tool.id LEFT JOIN `user` on `user`.id=`order`.client_id WHERE rent_price<100000",(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting user");
            return res.status(500).json({
                message:"Error getting user",
                error:"Internal Server Error"
            }) 
        }
        if (!results.length) {
            return res.status(400).send("users with such tool doesn't exists in shops")
        }
        res.status(200).json({
            statusCode:200,
            data:results,
            message:"users are recived successfully",
        })
    })
};


export const Get_user_by_time_ofperch=(req,res)=>{
    let {tool_name,start_date,end_date,district}=req.body
    db.query("SELECT * FROM tool RIGHT JOIN shop_tool on tool.id=shop_tool.tool_id LEFT JOIN `order` on `order`.shop_tool_id=shop_tool.id LEFT JOIN `user` on `user`.id=`order`.client_id LEFT JOIN shop on shop_tool.shop_id=shop.id LEFT JOIN district on district.id=shop.district_id WHERE district.name=? and tool.name=?  and `order`.order_date BETWEEN (?) AND (?) ",[district,tool_name,start_date,end_date],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting user");
            return res.status(500).json({
                message:"Error getting user",
                error:"Internal Server Error"
            }) 
        }
        if (!results.length) {
            return res.status(400).send("users with such tool doesn't exists in shops")
        }
        res.status(200).json({
            statusCode:200,
            data:results,
            message:"users are recived successfully",
        })
    })
};
