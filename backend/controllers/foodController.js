import foodModel from "../models/foodModel.js";
import fs from 'fs'

//Add food item
const addFood = async (req,res)=>{
    const {name,price,description,category,image} = req.body
    const newFood = new foodModel({name,price,description,category,image})
    try {
        await newFood.save()
        res.status(201).json(newFood)
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}
export {addFood}