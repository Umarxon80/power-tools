import  db  from "../config/db.config.js";
import bcrypt  from "bcrypt";


export const Getuser=(req,res)=>{
    db.query(`SELECT * FROM user`,(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting user");
            return res.status(500).json({
                message:"Error getting user",
                error:"Internal Server Error"
            }) 
        }
        res.status(200).json({
            statusCode:200,
            data:results,
            message:"users are recived successfully",
        })
    })
};




export const GetOneuser=(req,res)=>{
    db.query(`SELECT * FROM user`,(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error getting user");
            return res.status(500).json({
                message:"Error getting user",
                error:"Internal Server Error"
            }) 
        }
        res.status(200).json({
            statusCode:200,
            data:results,
            message:"users are recived successfully",
        })
    })
};

export const createuser=(req,res)=>{
    let {name,email,password,phone_number,is_active,role,address}=req.body
    const hash = bcrypt.hashSync(password, 10);
    db.query(`INSERT INTO user (name,email,password,phone_number,is_active,role,address) VALUES (?,?,?,?,?,?,?)`,[name,email,hash,phone_number,is_active,role,address],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error adding new user");
            return res.status(500).json({
                message:"Error adding new user",
                error:"Internal Server Error"
            }) 
        }
        console.log(results);
        res.status(201).json({
            message:"New user is added",
            id:results.insertId
        })
    })
};






export const Patchuser=(req,res)=>{
    let {id}=req.params
    let {name,email,password,phone_number,is_active,role,address}=req.body
    const hash = bcrypt.hashSync(password, 10);
    db.query(`UPDATE user SET name=(?),email=(?),password=(?),phone_number=(?),is_active=(?),role=(?),address=(?) where id=(?)`,[name,email,hash,phone_number,is_active,role,address,id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error updating user");
            return res.status(500).json({
                message:"Error updating user",
                error:"Internal Server Error"
            }) 
        }
        res.status(201).json({
            message:results,
            id:id,
            message:"user is updated successfully",
        })
    })
};


export const Deluser=(req,res)=>{
    let {id}=req.params
    db.query(`DELETE FROM user WHERE id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Error deleting user");
            return res.status(500).json({
                message:"Error deleting user",
                error:"Internal Server Error",
            }) 
        }
        res.status(201).json({
            message:results,
            id:results.insertId,
            message:"user is deleted successfully",
        })
    })
};







