let con=require("../config")
let {hashPassword}=require("../utility")
let {findName}=require("../utility")
let bcrypt=require("bcryptjs")
let crypto=require("crypto")
let jwt=require("jsonwebtoken")
let express=require("express")
let router=express.Router()

let authorize=crypto.randomBytes(64).toString("hex")

router.post("/signup",async(req,res)=>{
    await hashPassword(req.body.password).then(hashPass=>{
       let data={name:req.body.name,password: hashPass,number:req.body.number}
      con.query("INSERT INTO userdata SET ?",data,(err,result,fields)=>{
       if(err){
           console.log(err)
       }else{
           res.status(200).send("user created succesfully")
       }
      })
    }).catch(err=>res.status(400).send(err))
       
})
let Name;
router.post("/login", (req,res)=>{
   con.query("SELECT * FROM userData",async(err,result)=>{
     if(err){
       console.log(err)
     }else{
       let idx=await findName(result,0,result.length,req.body.name)

       if(req.body.name==result[idx].name){
        Name=result[idx].name
         bcrypt.compare(req.body.password,result[idx].password).then((data)=>{
          if(data){
           let token=jwt.sign(req.body.name,authorize)
           res.status(200).send({token})

          }else{
            res.status(400).send("password inncorrect")
          }
          }
         )
      }else{
          res.status(400).send("username is inncorrect")
      }
     }
   })
})


module.exports=router