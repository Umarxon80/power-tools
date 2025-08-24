import  db  from "../config/db.config.js";


export const Gettool=(req,res)=>{
    db.query(`SELECT * FROM tool`,(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting tool");
            return res.status(500).json({
                message:"Error getting tool",
                error:"Internal Server Error"
            }) 
        }
        res.status(200).json({
            statusCode:200,
            data:results,
            message:"tools are recived successfully",
        })
    })
};

export const GetOnetool=(req,res)=>{
    let {id}=req.params
    db.query(`SELECT * FROM tool where id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting tool");
            return res.status(500).json({
                message:"Error getting tool",
                error:"Internal Server Error"
            }) 
        }
        if (!results.length) {
            return res.status(400).send("tool with such id doesn't exists")
        }
        res.status(200).json({
            statusCode:200,
            data:results[0],
            message:"tools are recived successfully",
        })
    })


};

export const createtool=(req,res)=>{
    let {name,brand,description,tool_price}=req.body
    db.query(`INSERT INTO tool (name,brand,description,tool_price) VALUES (?,?,?,?)`,[name,brand,description,tool_price],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error adding new tool");
            return res.status(500).json({
                message:"Error adding new tool",
                error:"Internal Server Error"
            }) 
        }
        console.log(results);
        res.status(201).json({
            message:"New tool is added",
            id:results.insertId
        })
    })
};






export const Patchtool=(req,res)=>{
    let {id}=req.params
    let {name,brand,description,tool_price}=req.body
    db.query(`UPDATE tool SET name=(?),brand=(?),description=(?),tool_price=(?) where id=(?)`,[name,brand,description,tool_price,id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error updating tool");
            return res.status(500).json({
                message:"Error updating tool",
                error:"Internal Server Error"
            }) 
        }
        res.status(201).json({
            message:results,
            id:id,
            message:"tool is updated successfully",
        })
    })
};


export const Deltool=(req,res)=>{
    let {id}=req.params
    db.query(`DELETE FROM tool WHERE id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error deleting tool");
            return res.status(500).json({
                message:"Error deleting tool",
                error:"Internal Server Error",
            }) 
        }
        res.status(201).json({
            message:results,
            id:results.insertId,
            message:"tool is deleted successfully",
        })
    })
};