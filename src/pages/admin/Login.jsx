import '../../styles/admin/login.css'

export const Login = () => {
    return(
        <>
            <body className="login">
                
                <div class="container">
                    <div class="login-container-wrapper clearfix">
                        <div class="logo">
                            <i class="fa fa-sign-in"></i>
                        </div>
                        <div class="welcome"><strong>Welcome,</strong> please login</div>

                        <form class="form-horizontal login-form">
                            <div class="form-group relative">
                                <input id="login_username" class="form-control input-lg" type="email" placeholder="Username" required />
                                <i class="fa fa-user"></i>
                            </div>
                            <div class="form-group relative password">
                                <input id="login_password" class="form-control input-lg" type="password" placeholder="Password" required />
                                <i class="fa fa-lock"></i>
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
            </body>
            
            
        </>
    )
}