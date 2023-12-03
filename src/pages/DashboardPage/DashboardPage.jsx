import { useAuth0 } from "@auth0/auth0-react"
import { 
    Box,
    Typography,
    Container,
    Button,
} from "@mui/material"
import { OrderType, OrderStatus } from './components'

const DashboardPage = () => {
    const {user, isAuthenticated} = useAuth0()

    return (
        <>
            {
                isAuthenticated ? (
                    <>
                        {/* Current Location */}
                        <Container 
                            sx={{ 
                                background: '#EEFCFF', 
                                pt: 1, 
                                pb: 1, 
                                display: 'flex',
                                alignItems: 'start',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Box>
                                <Typography sx={{ fontSize: '.8rem', color: '#5B7C8E', fontWeight: 500 }}>Home</Typography>
                                <Typography sx={{ fontSize: '.7rem', color: '#91AAB8' }}>Sampaloc V, Dasmarinas, Cavite</Typography>
                            </Box>
                            <Box color='#5B7C8E'>
                                <Button 
                                    variant="text"
                                    color="inherit"
                                    size="small"
                                    sx={{ fontSize: '.7rem' }}
                                >
                                    Edit
                                </Button>
                            </Box>
                        </Container>

                        {/* Dashboard Contents */}
                        <Container sx={{ mt: 2 }}>
                            <Typography fontWeight={500}>
                                Welcome {user.given_name}!
                            </Typography>

                            <OrderType />

                            <OrderStatus />
                        </Container>
                    </>
                ) : (
                    <p>You are not logged in</p>
                )
            }
        </>
    )
}

export default DashboardPage