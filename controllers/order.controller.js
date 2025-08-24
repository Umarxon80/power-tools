import  db  from "../config/db.config.js";


export const Getdistrict=(req,res)=>{
    db.query(`SELECT * FROM district`,(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting district");
            return res.status(500).json({
                message:"Error getting district",
                error:"Internal Server Error"
            }) 
        }
        res.status(200).json({
            statusCode:200,
            data:results,
            message:"districts are recived successfully",
        })
    })
};

export const GetOnedistrict=(req,res)=>{
    let {id}=req.params
    db.query(`SELECT * FROM district where id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting district");
            return res.status(500).json({
                message:"Error getting district",
                error:"Internal Server Error"
            }) 
        }
        if (!results.length) {
            return res.status(400).send("district with such id doesn't exists")
        }
        res.status(200).json({
            statusCode:200,
            data:results[0],
            message:"districts are recived successfully",
        })
    })


};

export const createdistrict=(req,res)=>{
    let {name}=req.body
    db.query(`INSERT INTO district (name) VALUES (?)`,[name],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error adding new district");
            return res.status(500).json({
                message:"Error adding new district",
                error:"Internal Server Error"
            }) 
        }
        console.log(results);
        res.status(201).json({
            message:"New district is added",
            id:results.insertId
        })
    })
};






export const Patchdistrict=(req,res)=>{
    let {id}=req.params
    let {name}=req.body
    db.query(`UPDATE district SET name=(?) where id=(?)`,[name,id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error updating district");
            return res.status(500).json({
                message:"Error updating district",
                error:"Internal Server Error"
            }) 
        }
        res.status(201).json({
            message:results,
            id:id,
            message:"district is updated successfully",
        })
    })
};


export const Deldistrict=(req,res)=>{
    let {id}=req.params
    db.query(`DELETE FROM district WHERE id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error deleting district");
            return res.status(500).json({
                message:"Error deleting district",
                error:"Internal Server Error",
            }) 
        }
        res.status(201).json({
            message:results,
            id:results.insertId,
            message:"district is deleted successfully",
        })
    })
};