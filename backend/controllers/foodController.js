import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from 'fs'

//Add food item
const addFood = async (req,res)=>{

    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save()
        res.json({success:true,message:"food Added"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//all food list

const foodList = async (req,res)=>{
    try {
        const foods = await foodModel.find({})
        res.json({success:true, message:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
//remove food item

const removeFood = async (req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/$(food.image)`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"FOOD-REMOVED"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Faild"})
    }
}

//food by id

// const foodById = async (req,res)=>{
//     try {
//         const food = await foodModel.findById(req.params.id)
//         res.json(food)
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:"Error"})
//     }
// }
export {addFood,foodList,removeFood}