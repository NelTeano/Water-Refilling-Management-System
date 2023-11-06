import express from "express"
<<<<<<< HEAD
import userModel from "../../models/users.js"
=======
import userModel from '../../models/users.js'
>>>>>>> joshua

const LoginRoute = express.Router()

LoginRoute.post('/',async (req,res)=>{
    const {username,password} = req.body
    res.send(`username: ${username} password: ${password}`)
    console.log(username,password)
})

export default LoginRoute
