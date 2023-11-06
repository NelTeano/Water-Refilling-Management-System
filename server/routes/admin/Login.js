import express from "express"

const LoginRoute = express.Router()

LoginRoute.post('/',(req,res)=>{
    res.send("test")
})

export default LoginRoute
