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
import LocationOnIcon from '@mui/icons-material/LocationOn';


const DashboardPage = () => {
    const {user, isAuthenticated} = useAuth0()
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [selectedLoc, setSelectedLoc] = useState()
    const [pending, setPending] = useState(0)

    useEffect(()=>{
        const fetchUser = async () =>{
            if(user){
                axios.get(`http://localhost:5174/api/users/${user.email}`)
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

        let pending = 0

        const fetchOrder = async () =>{
            if(user){
                axios.get(`http://localhost:5174/api/orders/${user.email}`)
                .then((res)=>{
                    for(let i in res.data){
                        if(res.data[i].status === "pending"){
                            pending++
                        }
                    }
                    setPending(pending)
                })
            }
        }

        fetchUser()
        fetchOrder()

    },[user])

    return (
        <>
            {
                isAuthenticated && !isLoading && 
                    <>
                        {/* Current Location */}
                        <Box sx={{ background: '#EEFCFF' }}>
                            <Container 
                                sx={{ 
                                    pt: 1, 
                                    pb: 1, 
                                    display: 'flex',
                                    alignItems: 'start',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box mr={1}>
                                        <LocationOnIcon sx={{ color: '#4690A7' }} fontSize="medium" />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontSize: '1rem', color: '#21495f', fontWeight: 600 }}>{selectedLoc.locName}</Typography>
                                        <Typography sx={{ fontSize: '.85rem', color: '#1a3d50' }}>{selectedLoc.address}</Typography>
                                    </Box>
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
                        </Box>

                        {/* Dashboard Contents */}
                        <Container sx={{ mt: 2 }}>
                            <Typography fontWeight={500} variant="h5" color="#272727">
                                Welcome {user.given_name}!
                            </Typography>

                            <OrderType />

                            <OrderStatus pending={pending}/>
                        </Container>
                    </>
                // ) : (
                //     <div style={{
                //             width:"100vw",
                //             height:"70vh",
                //             display:'flex',
                //             justifyContent:'center',
                //             alignItems:"center"
                //         }}>
                //         <CircularProgress />
                //     </div>
                // )
            }
        </>
    )
}

export default DashboardPage