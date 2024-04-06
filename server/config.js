let mysql=require("mysql")
let con=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    port:"3306",
    password:"",
    database:"users"
})

// con.query("create table userCart (name varchar(50),id int )",(err,res)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("table created")
//     }
// })
con.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connected")  
    }
})

module.exports =con