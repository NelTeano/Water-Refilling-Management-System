import express from "express"
import userModel from '../../models/users.js'

const LoginRoute = express.Router()

LoginRoute.post('/',async (req,res)=>{
    const {username,password} = req.body
    res.send(`username: ${username} password: ${password}`)
    console.log(username,password)
})

export default LoginRoute
