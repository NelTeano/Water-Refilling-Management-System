import { useAuth0 } from "@auth0/auth0-react"
import { 
    Box,
    Typography,
    Container,
    Button,
} from "@mui/material"
import { OrderType, OrderStatus } from './components'
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const DashboardPage = () => {
    const {user, isAuthenticated} = useAuth0()
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async () =>{
            if(user){
                await axios.get(`http://localhost:5174/api/users/${user.email}`)
                .then((res)=>{
                    setUserDetails(res.data)
                    setIsLoading(false)
                })
            }
        }
        fetchData()

    },[user])

    useEffect(()=>{
        console.log(userDetails)
    },[userDetails])

    return (
        <>
            {
                isAuthenticated && !isLoading ? (
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
                                <Typography sx={{ fontSize: '.8rem', color: '#5B7C8E', fontWeight: 500 }}>{userDetails[0].location[0].locName}</Typography>
                                <Typography sx={{ fontSize: '.7rem', color: '#91AAB8' }}>{userDetails[0].location[0].address}</Typography>
                            </Box>
                            <Box color='#5B7C8E'>
                                <Button 
                                    variant="text"
                                    color="inherit"
                                    size="small"
                                    sx={{ fontSize: '.7rem' }}
                                    onClick={()=>navigate('/client-dashboard/location')}
                                >
                                    Edit
                                </Button>
                            </Box>
                        </Container>

                        {/* Dashboard Contents */}
                        <Container sx={{ mt: 2 }}>
                            <Typography fontWeight={500} variant="h5" color="#272727">
                                Welcome {user.given_name}!
                            </Typography>

                            <OrderType />

                            <OrderStatus />
                        </Container>
                    </>
                ) : (
                    <p>Loading Spinner</p>
                )
            }
        </>
    )
}

export default DashboardPage