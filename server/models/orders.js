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
        username:{
            type: String,
            required: true
        },
        location: {
            longitude:{
                type: Number,
                required: true,
            },
            latitude: {
                type: Number,
                required: true,
            },
            address: {
                type: String,
                required: true
            }

        }
    },
    { timestamps: true }
)

const orderModel = mongoose.model("orders",orderSchema)

export default orderModel