import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    round:{
        type: Number,
    },
    slim:{
        type: Number,
    },
    total:{
        type: Number,
    },
    isOwned:{
        type: Boolean,
    },
})

const orderModel = mongoose.model("orders",orderSchema)

export default orderModel