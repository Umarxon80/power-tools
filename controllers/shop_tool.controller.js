import  db  from "../config/db.config.js";


export const Getshop_tool=(req,res)=>{
    db.query(`SELECT * FROM shop_tool`,(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting shop_tool");
            return res.status(500).json({
                message:"Error getting shop_tool",
                error:"Internal Server Error"
            }) 
        }
        res.status(200).json({
            statusCode:200,
            data:results,
            message:"shop_tools are recived successfully",
        })
    })
};

export const GetOneshop_tool=(req,res)=>{
    let {id}=req.params
    db.query(`SELECT * FROM shop_tool where id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting shop_tool");
            return res.status(500).json({
                message:"Error getting shop_tool",
                error:"Internal Server Error"
            }) 
        }
        if (!results.length) {
            return res.status(400).send("shop_tool with such id doesn't exists")
        }
        res.status(200).json({
            statusCode:200,
            data:results[0],
            message:"shop_tools are recived successfully",
        })
    })


};

export const createshop_tool=(req,res)=>{
    let {shop_id,tool_id,rent_price}=req.body
    db.query(`INSERT INTO shop_tool (shop_id,tool_id,rent_price) VALUES (?,?,?)`,[shop_id,tool_id,rent_price],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error adding new shop_tool");
            return res.status(500).json({
                message:"Error adding new shop_tool",
                error:"Internal Server Error"
            }) 
        }
        console.log(results);
        res.status(201).json({
            message:"New shop_tool is added",
            id:results.insertId
        })
    })
};



export const Patchshop_tool=(req,res)=>{
    let {id}=req.params
    let {shop_id,tool_id,rent_price}=req.body
    db.query(`UPDATE shop_tool SET shop_id=(?),tool_id=(?),rent_price=(?) where id=(?)`,[shop_id,tool_id,rent_price,id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error updating shop_tool");
            return res.status(500).json({
                message:"Error updating shop_tool",
                error:"Internal Server Error"
            }) 
        }
        res.status(201).json({
            message:results,
            id:id,
            message:"shop_tool is updated successfully",
        })
    })
};


export const Delshop_tool=(req,res)=>{
    let {id}=req.params
    db.query(`DELETE FROM shop_tool WHERE id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error deleting shop_tool");
            return res.status(500).json({
                message:"Error deleting shop_tool",
                error:"Internal Server Error",
            }) 
        }
        res.status(201).json({
            message:results,
            id:results.insertId,
            message:"shop_tool is deleted successfully",
        })
    })
};