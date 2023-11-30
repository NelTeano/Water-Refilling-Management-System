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
userRoute.post('/users/new', async (req, res) => {
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
          
            const saveUserData = await userDetails.save();
            res.send(saveUserData);
            console.log("Successfully Submitted User Data");
        }
    }catch(err){
        res.status(500).json({ message: "Create User Request Failed" , err });
        console.log("Failed to Submit User Details");
    }
       
    
});

userRoute.post('/users/loc/add',async (req,res)=>{
    try{
        const userData = await userModel.findOne({username:req.body.userName})
        userData.location.push({
            address: req.body.address,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        })
         
        const saveUser = await userData.save()
        res.send(saveUser)
        
    }catch(err){
        res.status(500).json({ message: "Add Location Request Failed" , err });
        console.log("Failed to Add Location");
    }
})


export default userRoute