const express=require("express")
const router=express.Router()
const con=require("../config")
let Name;
router.post("/cart",(req,res)=>{
    let data={name:req.body.name,id:req.body.id}
    Name=data.name
    con.query("INSERT INTO userCart SET ?",data,(err,result)=>{
       
if(err){
    console.log(err)
}else{
    res.status(200).send(result)
}
    })
})


    router.get("/cart",(req,res)=>{
        con.query(`select * from userCart` ,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                res.status(200).send(result) 
            }
        })
    
})


module.exports= router