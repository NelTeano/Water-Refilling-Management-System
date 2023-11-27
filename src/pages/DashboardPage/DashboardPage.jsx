import { useAuth0 } from "@auth0/auth0-react"
import { Box } from "@mui/material"
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

const DashboardPage = () => {
    const {user, isAuthenticated} = useAuth0()

    return (
        <Box sx={{ background: 'red' }}>
            {
                isAuthenticated ? 
                <p>Welcome {user.given_name}!</p> : 
                <p>You are not logged in</p>
            }
            <AccessAlarm sx={{ color: 'white' }} />
            <ThreeDRotation />
        </Box>
    )
}

export default DashboardPage


