import { useAuth0 } from "@auth0/auth0-react"
import { 
    Box,
    Typography,
    Container,
    Button,
    CircularProgress
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
    const [selectedLoc, setSelectedLoc] = useState()

    useEffect(()=>{
        const fetchData = async () =>{
            if(user){
                await axios.get(`http://localhost:5174/api/users/${user.email}`)
                .then((res)=>{
                    setUserDetails(res.data[0])
                    
                    for(let i in res.data[0].location){
                        if(res.data[0].location[i].isSelected){
                            setSelectedLoc(res.data[0].location[i])
                        }
                    }
                    
                    setIsLoading(false)
                
                })
            }
        }
        fetchData()

    },[user])

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
                                <Typography sx={{ fontSize: '.8rem', color: '#5B7C8E', fontWeight: 500 }}>{selectedLoc.locName}</Typography>
                                <Typography sx={{ fontSize: '.7rem', color: '#91AAB8' }}>{selectedLoc.address}</Typography>
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
                    <div style={{
                            width:"100vw",
                            height:"70vh",
                            display:'flex',
                            justifyContent:'center',
                            alignItems:"center"
                        }}>
                        <CircularProgress />
                    </div>
                )
            }
        </>
    )
}

export default DashboardPage