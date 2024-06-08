import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"



// app config

const app = express()
// const port = process.env.PORT || 4000
const port = 4000

// middlewares

app.use(express.json())
app.use(cors())

// db coNNECTION
connectDB();

//api AND point
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}` )
})

























// mongodb+srv://FOOD-DEL:0987654321@cluster0.4jtgls8.mongodb.net/?