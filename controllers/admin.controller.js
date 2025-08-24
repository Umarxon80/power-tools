import  db  from "../config/db.config.js";
import bcrypt  from "bcrypt";
export const Getadmin=(req,res)=>{
    db.query(`SELECT * FROM admin`,(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting admin");
            return res.status(500).json({
                message:"Error getting admin",
                error:"Internal Server Error"
            }) 
        }
        res.status(200).json({
            statusCode:200,
            data:results,
            message:"admins are recived successfully",
        })
    })
};

export const GetOneadmin=(req,res)=>{
    let {id}=req.params
    db.query(`SELECT * FROM admin where id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting admin");
            return res.status(500).json({
                message:"Error getting admin",
                error:"Internal Server Error"
            }) 
        }
        if (!results.length) {
            return res.status(400).send("admin with such id doesn't exists")
        }
        res.status(200).json({
            statusCode:200,
            data:results[0],
            message:"admins are recived successfully",
        })
    })


};

export const createadmin=(req,res)=>{
    let {full_name,email,password,phone_number,is_active,is_creator}=req.body
    const hash = bcrypt.hashSync(password, 10);
    db.query(`INSERT INTO admin (full_name,email,password,phone_number,is_active,is_creator) VALUES (?,?,?,?,?,?)`,[full_name,email,hash,phone_number,is_active,is_creator],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error adding new admin");
            return res.status(500).json({
                message:"Error adding new admin",
                error:"Internal Server Error"
            }) 
        }
        console.log(results);
        res.status(201).json({
            message:"New admin is added",
            id:results.insertId
        })
    })
};






export const Patchadmin=(req,res)=>{
    let {id}=req.params
    let {full_name,email,password,phone_number,is_active,is_creator}=req.body
    const hash = bcrypt.hashSync(password, 10);
    db.query(`UPDATE admin SET full_name=(?),email=(?),password=(?),phone_number=(?),is_active=(?),is_creator=(?) where id=(?)`,[full_name,email,hash,phone_number,is_active,is_creator,id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error updating admin");
            return res.status(500).json({
                message:"Error updating admin",
                error:"Internal Server Error"
            }) 
        }
        res.status(201).json({
            message:results,
            id:id,
            message:"admin is updated successfully",
        })
    })
};


export const Deladmin=(req,res)=>{
    let {id}=req.params
    db.query(`DELETE FROM admin WHERE id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error deleting admin");
            return res.status(500).json({
                message:"Error deleting admin",
                error:"Internal Server Error",
            }) 
        }
        res.status(201).json({
            message:results,
            id:results.insertId,
            message:"admin is deleted successfully",
        })
    })
};







