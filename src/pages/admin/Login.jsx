import '../../styles/admin/login.css'

export const Login = () => {
    return(
        <>
            <div className="login">
                
                <div class="container">
                    <div class="login-container-wrapper clearfix">
                        <div class="welcome">ADMIN LOGIN</div>

                        <form class="form-horizontal login-form">
                            <div class="form-group relative">
                                <input id="login_username" class="form-control input-lg" type="email" placeholder="Username" required />
                             
                            </div>
                            <div class="form-group relative password">
                                <input id="login_password" class="form-control input-lg" type="password" placeholder="Password" required />
                              
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