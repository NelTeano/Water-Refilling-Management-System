import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    username : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    },
    address  : {
        type: String,
        required: true
    },
    picture : {
        type: String,
        required: true
    },
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;