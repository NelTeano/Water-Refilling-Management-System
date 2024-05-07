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

    // STATUS COUNTER
    const [pending, setPending] = useState(0);
    const [rejected, setRejected] = useState(0);
    const [confirmed, setconfirmed] = useState(0);
    const [forDelivery, setForDelivery] = useState(0);
    const [delivered, setDelivered] = useState(0);

    useEffect(()=>{
        const fetchUser = async () =>{
            if(user){
                axios.get(`https://hydromaze-server-vercel.vercel.app/api/users/${user.email}`)
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


        const fetchOrder = async () => {
            try {
                if (user) {
                    const response = await axios.get(`https://hydromaze-server-vercel.vercel.app/api/orders/${user.email}`);
                    const orders = response.data;
        
                    // Initialize counts for each status
                    let pendingCount = 0;
                    let confirmedCount = 0;
                    let rejectedCount = 0;
                    let forDeliveryCount = 0;
                    let deliveredCount = 0;
        
                    // Iterate through orders and update counts based on status
                    orders.forEach(order => {
                        switch (order.status) {
                            case 'pending':
                                pendingCount += 1;
                                break;
                            case 'confirmed':
                                confirmedCount += 1;
                                break;
                            case 'rejected':
                                rejectedCount += 1;
                                break;
                            case 'for delivery':
                                forDeliveryCount += 1;
                                break;
                            case 'delivered':
                                deliveredCount += 1;
                                break;
                            // Add more cases for other status if needed
                            default:
                                break;
                        }
                    });
        
                    
        
                    setPending(pendingCount)
                    setconfirmed(confirmedCount);
                    setRejected(rejectedCount);
                    setForDelivery(forDeliveryCount);
                    setDelivered(deliveredCount);

                    console.log("Confirmed Count:", confirmed);
                    console.log("Rejected Count:", rejected);
                    console.log("For Delivery Count:", forDelivery);
                    console.log("Delivered Count:", delivered);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchUser()
        fetchOrder()

    },[user, confirmed, rejected, forDelivery, delivered])

    return (
        <>
            {
                isAuthenticated && !isLoading && 
                    <>
                        {/* Current Location */}
                        <Box sx={{ background: '#EEFCFF' }}>
                            <Container 
                                maxWidth='md'
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
                                        sx={{ fontSize: '.85rem' }}
                                        onClick={()=>navigate('/client-dashboard/location')}
                                    >
                                        Edit
                                    </Button>
                                </Box>
                            </Container>
                        </Box>

                        {/* Dashboard Contents */}
                        <Container sx={{ mt: 2 }} maxWidth='md'>
                            <Typography variant="h4" color="#272727">
                                Welcome {user.given_name}!
                            </Typography>

                            <OrderType />

                            <OrderStatus pending={pending} rejected={rejected} confirmed={confirmed} delivered={delivered}/>
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