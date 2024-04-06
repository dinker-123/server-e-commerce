let express=require("express")
let app=express()
let userController=require("./routes/user-routes")
let cartController=require("./routes/cart-route")
const cors=require("cors")

app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())
app.listen(3000)



app.use("/user",userController)
app.use("/cart",cartController)



