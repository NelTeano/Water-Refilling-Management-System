export const RegisterPage = () => {
    return(
        <div className="register">
            <h3>Complete your profile</h3>
            <form>
                <input type="text" placeholder="Name"/><br />
                <input type="text" placeholder="Phone Number" /><br />
                <input type="text" placeholder="Address"/><br />
                <input type="submit" />
            </form>
        </div>
    )
}