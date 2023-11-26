import express from "express";
import orderModel from '../models/orders.js'

const orderRoute = express.Router()

orderRoute.get('/orders',async (req,res)=>{
    try{
        const getOrders = await orderModel.find({})
        res.send(getOrders)
    }catch(err){
        console.log(err)
    }
})

export default orderRoute