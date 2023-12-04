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

orderRoute.post('/place-order',async (req,res)=>{
    
    const orderDetails = new orderModel({
        round: req.body.round,
        slim: req.body.slim,
        total: req.body.total,
        isOwned: req.body.isOwned,
        status: req.body.status,
        custID: req.body.custID,
    })

    try {   
        const saveOrderData = await orderDetails.save();
        res.send(saveOrderData);
        console.log("Successfully placed an order");

    } catch (error) {
        res.status(500).json({ message: "order failed" , error });
        console.log("Failed creating an order");
    }
})

export default orderRoute