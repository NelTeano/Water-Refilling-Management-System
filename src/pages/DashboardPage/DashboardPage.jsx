import { useAuth0 } from "@auth0/auth0-react"
import { Box } from "@mui/material"

const DashboardPage = () => {
    const {user, isAuthenticated} = useAuth0()

    return (
        <Box sx={{ background: 'red' }}>
            {
                isAuthenticated ? (
                    <p>Welcome {user.given_name}!</p>
                ) : (
                    <p>You are not logged in</p>
                )
            }
        </Box>
    )
}

export default DashboardPage


