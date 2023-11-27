import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
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
        status:{
            type: String,
        },
        custID:{
            type: String,
        },
    },
    { timestamps: true }
)

const orderModel = mongoose.model("orders",orderSchema)

export default orderModel