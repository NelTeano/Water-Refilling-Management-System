import express from "express"
import userModel from "../../models/users.js"

const LoginRoute = express.Router()

LoginRoute.post('/',(req,res)=>{
    res.send("test")
})

export default LoginRoute
