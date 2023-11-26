import { useAuth0 } from "@auth0/auth0-react"

export const Dashboard = () => {
    const {user, isAuthenticated} = useAuth0()
    
    return(
        <div>
            {
                isAuthenticated ? 
                <p>Welcome {user.given_name}!</p> : 
                <p>You are not logged in</p>
            }
        </div>
    )
}




