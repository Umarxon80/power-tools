import  db  from "../config/db.config.js";


export const Getshop=(req,res)=>{
    db.query(`SELECT * FROM shop`,(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting shop");
            return res.status(500).json({
                message:"Error getting shop",
                error:"Internal Server Error"
            }) 
        }
        res.status(200).json({
            statusCode:200,
            data:results,
            message:"shops are recived successfully",
        })
    })
};

export const GetOneshop=(req,res)=>{
    let {id}=req.params
    db.query(`SELECT * FROM shop where id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting shop");
            return res.status(500).json({
                message:"Error getting shop",
                error:"Internal Server Error"
            }) 
        }
        if (!results.length) {
            return res.status(400).send("shop with such id doesn't exists")
        }
        res.status(200).json({
            statusCode:200,
            data:results[0],
            message:"shops are recived successfully",
        })
    })


};

export const createshop=(req,res)=>{
    let {name,ownerId,phone_number,district_id,address,location}=req.body
    db.query(`INSERT INTO shop (name,ownerId,phone_number,district_id,address,location) VALUES (?,?,?,?,?,?)`,[name,ownerId,phone_number,district_id,address,location],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error adding new shop");
            return res.status(500).json({
                message:"Error adding new shop",
                error:"Internal Server Error"
            }) 
        }
        console.log(results);
        res.status(201).json({
            message:"New shop is added",
            id:results.insertId
        })
    })
};






export const Patchshop=(req,res)=>{
    let {id}=req.params
    let {name,ownerId,phone_number,district_id,address,location}=req.body
    db.query(`UPDATE shop SET name=(?),ownerId=(?),phone_number=(?),district_id=(?),address=(?),location=(?) where id=(?)`,[name,ownerId,phone_number,district_id,address,location,id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error updating shop");
            return res.status(500).json({
                message:"Error updating shop",
                error:"Internal Server Error"
            }) 
        }
        res.status(201).json({
            message:results,
            id:id,
            message:"shop is updated successfully",
        })
    })
};


export const Delshop=(req,res)=>{
    let {id}=req.params
    db.query(`DELETE FROM shop WHERE id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error deleting shop");
            return res.status(500).json({
                message:"Error deleting shop",
                error:"Internal Server Error",
            }) 
        }
        res.status(201).json({
            message:results,
            id:results.insertId,
            message:"shop is deleted successfully",
        })
    })
};