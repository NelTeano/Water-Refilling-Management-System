import { useState,useEffect } from 'react'
import axios from 'axios'
import '../../styles/admin/login.css'


export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = () => {
        axios.get("http://localhost:5174/api/users")
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err))
    }

    return(
        <>
            <div className="login">
                
                <div class="container">
                    <div class="login-container-wrapper clearfix">
                        <div class="welcome">ADMIN LOGIN</div>

                        <form class="form-horizontal login-form" onSubmit={submitHandler}>
                            <div class="form-group relative">
                                <input id="login_username" class="form-control input-lg" type="email" placeholder="Username" onChange={usernameHandler} required />
                             
                            </div>
                            <div class="form-group relative password">
                                <input id="login_password" class="form-control input-lg" type="password" placeholder="Password"  onChange={passwordHandler} required />
                              
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-success btn-lg btn-block">Login</button>
                            </div>
                            <div class="checkbox pull-left">
                                <label><input type="checkbox" /> Remember</label>
                            </div>
                            <div class="checkbox pull-right">
                                <label> <a class="forget" href="" title="forget">Forgot your password</a> </label>
                            </div>
                        </form>
                    </div>
            
                </div>
            </div>
            
            
        </>
    )
}