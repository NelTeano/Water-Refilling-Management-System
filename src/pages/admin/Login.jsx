import '../../styles/admin/login.css'

export const Login = () => {
    return(
        <div className="login-page">
            <div className="login-wrapper">
                <form>
                    <input type="text" placeholder="Username" /><br />
                    <input type="password" placeholder="password"/> <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}