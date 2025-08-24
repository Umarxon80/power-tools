import  db  from "../config/db.config.js";


export const Getorder=(req,res)=>{
    db.query("SELECT * FROM `order`",(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting order");
            return res.status(500).json({
                message:"Error getting order",
                error:"Internal Server Error"
            }) 
        }
        res.status(200).json({
            statusCode:200,
            data:results,
            message:"orders are recived successfully",
        })
    })
};

export const GetOneorder=(req,res)=>{
    let {id}=req.params
    db.query("SELECT * FROM `order` where id=(?)",[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting order");
            return res.status(500).json({
                message:"Error getting order",
                error:"Internal Server Error"
            }) 
        }
        if (!results.length) {
            return res.status(400).send("order with such id doesn't exists")
        }
        res.status(200).json({
            statusCode:200,
            data:results[0],
            message:"orders are recived successfully",
        })
    })


};

export const createorder=(req,res)=>{
    let {client_id,shop_tool_id,order_date,period,total_price}=req.body
    db.query("INSERT INTO `order` (client_id,shop_tool_id,order_date,period,total_price) VALUES (?,?,?,?,?)",[client_id,shop_tool_id,order_date,period,total_price],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error adding new order");
            return res.status(500).json({
                message:"Error adding new order",
                error:"Internal Server Error"
            }) 
        }
        console.log(results);
        res.status(201).json({
            message:"New order is added",
            id:results.insertId
        })
    })
};






export const Patchorder=(req,res)=>{
    let {id}=req.params
    let {client_id,shop_tool_id,order_date,period,total_price}=req.body
    db.query("UPDATE `order` SET client_id=(?),shop_tool_id=(?),order_date=(?),period=(?),total_price=(?) where id=(?)",[client_id,shop_tool_id,order_date,period,total_price,id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error updating order");
            return res.status(500).json({
                message:"Error updating order",
                error:"Internal Server Error"
            }) 
        }
        res.status(201).json({
            message:results,
            id:id,
            message:"order is updated successfully",
        })
    })
};


export const Delorder=(req,res)=>{
    let {id}=req.params
    db.query("DELETE FROM `order` WHERE id=(?)",[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error deleting order");
            return res.status(500).json({
                message:"Error deleting order",
                error:"Internal Server Error",
            }) 
        }
        res.status(201).json({
            message:results,
            id:results.insertId,
            message:"order is deleted successfully",
        })
    })
};