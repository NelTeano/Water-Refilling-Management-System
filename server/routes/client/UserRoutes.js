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

export default userRoute