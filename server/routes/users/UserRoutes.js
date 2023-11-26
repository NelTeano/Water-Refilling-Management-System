import express from "express"; 
import userModel from '../../models/users.js'

const userRoute = express.Router();

userRoute.get('/users', async (req, res) =>{
    
    try {
        
        const getUsers = await userModel.find({});
        res.send(getUsers);
        console.log("Successfully get the users")
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// USER DETAILS POST
userRoute.post('/users', async (req, res) => {


    const userDetails = new userModel({
        username : req.body.userName,
        address : req.body.userAddress,
        phone : req.body.userPhone,
        picture : req.body.userPicture
    });

    try {
        
        const saveUserData = await userDetails.save();

        res.send(saveUserData);
        console.log("Successfully Submitting a User");

    } catch (error) {
        res.status(500).json({ message: "Create User Request Failed" , error });
        console.log("Failed Submitting a User");
    }
});


export default userRoute