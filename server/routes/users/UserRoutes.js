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
    try{
        const data = await userModel.findOne({username: req.body.userName})
        if(data){
            res.send({message: "Username not available"})
        }else{
            const userDetails = new userModel({
                username : req.body.userName,
                phone : req.body.userPhone,
                picture : req.body.userPicture,
                location: [{
                    address: req.body.address,
                    latitude: req.body.latitude,
                    longitude: req.body.longitude
                }]
            });
        
            try {
                
                const saveUserData = await userDetails.save();
        
                res.send(saveUserData);
                console.log("Successfully Submitting a User");
        
            } catch (error) {
                res.status(500).json({ message: "Create User Request Failed" , error });
                console.log("Failed Submitting a User");
            }
        }
    }catch(err){
        console.log(err)
    }
       
    
});


export default userRoute