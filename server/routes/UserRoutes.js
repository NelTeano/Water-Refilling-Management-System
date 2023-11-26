import express from "express"; 
import userModel from '../../models/users.js'

const userRoute = express.Router();

userRoute.get('/users', async (req, res) =>{
    

        
        userModel.find({})
            .then((data)=>{
                console.log(data)
                res.send(data)
            })

});

export default userRoute