import { useState,useEffect } from 'react'
import axios from 'axios'
// import { useSignIn } from 'react-auth-kit'
import '../../styles/admin/login.css'


export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const signIn = useSignIn()

    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        let data = {
            username: username, 
            password: password
        }

        axios.post("http://localhost:5174/login", data)
            .then((res)=>console.log(res.data))
            .catch((err)=>console.log(err))
        
        // signIn(({
        //         token: res.data.username,
        //         expiresIn:3600,
        //         tokenType: "Bearer",
                
        // }))
    }

    return(
        <>
            <div className="login">
                
                <div className="container">
                    <div className="login-container-wrapper clearfix">
                        <div className="welcome">ADMIN LOGIN</div>

                        <form className="form-horizontal login-form" onSubmit={submitHandler}>
                            <div className="form-group relative">
                                <input id="login_username" className="form-control input-lg" type="email" placeholder="Username" onChange={usernameHandler} required />
                             
                            </div>
                            <div className="form-group relative password">
                                <input id="login_password" className="form-control input-lg" type="password" placeholder="Password"  onChange={passwordHandler} required />
                              
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success btn-lg btn-block">Login</button>
                            </div>
                            <div className="checkbox pull-left">
                                <label><input type="checkbox" /> Remember</label>
                            </div>
                            <div className="checkbox pull-right">
                                <label> <a className="forget" href="" title="forget">Forgot your password</a> </label>
                            </div>
                        </form>
                    </div>
            
                </div>
            </div>
            
            
        </>
    )
}