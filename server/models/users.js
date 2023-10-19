import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;