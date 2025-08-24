import  db  from "../config/db.config.js";


export const GetFuelType=(req,res)=>{
    db.query(`SELECT * FROM fuel_types`,(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Benzin turini olishda hatolik");
            return res.status(500).json({
                message:"Error getting fuel type",
                error:"Internal Server Error"
            }) 
        }
        res.status(200).json({
            statusCode:200,
            data:results,
            message:"fuel types are recived successfully",
        })
    })
};

export const GetOneFuelType=(req,res)=>{
    let {id}=req.params
    db.query(`SELECT * FROM fuel_types where id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Benzin turini olishda hatolik");
            return res.status(500).json({
                message:"Error getting fuel type",
                error:"Internal Server Error"
            }) 
        }
        if (!results.length) {
            return res.status(400).send("fuel type with such id doesn't exists")
        }
        res.status(200).json({
            statusCode:200,
            data:results[0],
            message:"fuel types are recived successfully",
        })
    })


};

export const createFuelType=(req,res)=>{
    let {name}=req.body
    db.query(`INSERT INTO fuel_types (name) VALUES (?)`,[name],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Yangi yoqilgi turi qo'shishda hatolik");
            return res.status(500).json({
                message:"Error adding new fuel type",
                error:"Internal Server Error"
            }) 
        }
        console.log(results);
        res.status(201).json({
            message:"New fuel type is added",
            id:results.insertId
        })
    })
};






export const PatchFuelType=(req,res)=>{
    let {id}=req.params
    let {name}=req.body
    db.query(`UPDATE fuel_types SET name=(?) where id=(?)`,[name,id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Benzin turini ozgartirishda hatolik");
            return res.status(500).json({
                message:"Error updating fuel type",
                error:"Internal Server Error"
            }) 
        }
        res.status(201).json({
            message:results,
            id:id,
            message:"fuel type is updated successfully",
        })
    })
};


export const DelFuelType=(req,res)=>{
    let {id}=req.params
    db.query(`DELETE FROM fuel_types WHERE id=(?)`,[id],(error,results)=>{
        if (error) {
            console.log(error);
            console.log("Benzin turini ochirishda hatolik");
            return res.status(500).json({
                message:"Error getting fuel type",
                error:"Internal Server Error",
            }) 
        }
        res.status(201).json({
            message:results,
            id:results.insertId,
            message:"fuel type is delted successfully",
        })
    })
};