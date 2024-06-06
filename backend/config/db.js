import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://FOOD-DEL:0987654321@cluster0.4jtgls8.mongodb.net/FOOD-DEL').then(()=>{
        console.log("DB CONNECTED......!")
    })
}