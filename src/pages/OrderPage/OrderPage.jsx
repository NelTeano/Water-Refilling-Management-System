import { useState, useEffect} from 'react';
import {
    Box,
    Card,
    CardContent,
    Container,
    IconButton,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Grid,
    Divider,
    Button,
    Radio,
    RadioGroup,
} from '@mui/material';
import {
    RemoveTwoTone as RemoveTwoToneIcon,
    AddTwoTone as AddTwoToneIcon,
} from '@mui/icons-material';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const OrderPage = () => {
    const {user} = useAuth0()
    const navigate = useNavigate()
    const [location, setLocation] = useState()
    const [isLoading, setIsLoading] = useState(true)

    // SETTING UP THE VALUES ORDERS OF ROUND AND SLIM
    const [orders, setOrders] = useState([
        {
            id: 1,
            name: 'Set Order (Round)',
            qty: 1,
        },
        {
            id: 2,
            name: 'Set Order (Slim)',
            qty: 0,
        },
    ]);


    // THE DATA WILL BE SUBMITTED WHEN THE ORDER CONFIRMS
    const [orderDetails, setOrderDetails] = useState({
        round: 0,
        slim: 0,
        custId: 100,
        status: 'pending',
        isOwned: false,
        total: 30,
        username: ""
    });



    const handleIncrement = (index) => {
        const updatedOrders = [...orders];
        updatedOrders[index].qty += 1;
        setOrders(updatedOrders);
        updateOrderDetails(updatedOrders); 
        updateTotal();
    };

    const handleDecrement = (index) => {
        const updatedOrders = [...orders];
        if (updatedOrders[index].qty > 0) {
            updatedOrders[index].qty -= 1;
            setOrders(updatedOrders);
            updateOrderDetails(updatedOrders); 
        }
        updateTotal();
    };

    const handleCheckboxChange = () => {
        setOrderDetails((prevOrderDetails) => ({
        ...prevOrderDetails,
        isOwned: !prevOrderDetails.isOwned,
        }));
        
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:5174/api/place-order", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderDetails),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Order Successful" , data);
                navigate(-1)
            } else {
                console.error('Server responded with an error:', response.statusText);
            }
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    const updateOrderDetails = (updatedOrders) => {
        setOrderDetails((prevOrderDetails) => ({
            ...prevOrderDetails,
            round: updatedOrders[0].qty,
            slim: updatedOrders[1].qty,
        }));
    };

    const updateTotal = () => {
        const totalQty = orders.reduce((acc, order) => acc + order.qty, 0);
        const unitPrice = totalQty <= 4 ? 30 : 25;
        const updatedTotal = totalQty * unitPrice;
    
        setOrderDetails((prevOrderDetails) => ({
            ...prevOrderDetails,
            total: updatedTotal,
        }));
    };

    useEffect(() => {
        setOrderDetails((prevOrderDetails) => ({
            ...prevOrderDetails,
            round: orders[0].qty,
            slim: orders[1].qty,
        }));
    }, [orders]);

    useEffect(()=>{
        if(user){
            setOrderDetails((prevOrderDetails) => ({
                ...prevOrderDetails,
                username:user.email
            }));

            axios.get(`http://localhost:5174/api/users/${user.email}`)
            .then((res)=>{
                for(let i in res.data[0].location){
                    if(res.data[0].location[i].isSelected){
                        setLocation(res.data[0].location[i])
                    }
                }
                setIsLoading(false)
            })
        }
    },[user])

    const bulk = false;  // this should be replace by the user option (Single or Bulk)
    
    const [selectedCard, setSelectedCard] = useState('');

    const handleCardChange = (event) => {
      setSelectedCard(event.target.value);
    };

    return (
        user && !isLoading &&
        <Container>
            <Typography mt={10}>Order Details</Typography>

            {bulk ? (
                orders.map((item, index) => (
                    <Card key={item.id} sx={{ mb: 2, mt: 2 }}>
                        <CardContent
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box>
                                <Typography variant='subtitle2'>
                                    {item.name}
                                </Typography>
                                {item.description && (
                                    <Typography color='textSecondary' fontSize='.75rem'>
                                        {item.description}
                                    </Typography>
                                )}
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <IconButton 
                                    onClick={() => handleDecrement(index)}
                                    sx={{
                                        color: item.qty === 0 ? 'textSecondary' : '#099DBD',
                                    }}
                                >
                                    <RemoveTwoToneIcon />
                                </IconButton>
                                <Typography
                                    fontWeight={600}
                                    color={item.qty === 0 ? 'textSecondary' : 'inherit'}
                                >
                                    {item.qty}
                                </Typography>
                                <IconButton 
                                    onClick={() => handleIncrement(index)}
                                    sx={{ color: '#099DBD' }}
                                >
                                    <AddTwoToneIcon />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Box sx={{ mt: 2 }}>
                    <Typography variant='subtitle2'>Gallon Type</Typography>
                    <FormGroup sx={{ ml: 2 }}>
                        <FormControlLabel
                        value="slim"
                        control={<Radio />}
                        label="Slim"
                        checked={selectedCard === 'slim'}
                        onChange={handleCardChange}
                        />
                
                        <FormControlLabel
                        value="round"
                        control={<Radio />}
                        label="Round"
                        checked={selectedCard === 'round'}
                        onChange={handleCardChange}
                        />
                    </FormGroup>
                </Box>
            )}

            <FormGroup sx={{ mt: 2 }}>
                <FormControlLabel
                    sx={{ color: '#3B3B3B' }}
                    control={
                        <Checkbox
                        size="small"
                        checked={orderDetails.isOwned}  // Controlled by orderDetails.isOwned
                        onChange={handleCheckboxChange}  // Event handler for checkbox change
                        />
                    }
                    label="Do you own the gallon/s?"
                />
            </FormGroup>

            <Card sx={{ mt: 3, mb: 3 }}>
                <CardContent sx={{ background: '#EDFCFF' }}>
                    <Typography 
                        variant='subtitle2'
                        mb={2}
                    >
                        Order Summary
                    </Typography>

                    <Grid container spacing={2} mb={1}>
                        <Grid item xs={6}>
                            <Typography color="textSecondary">Item Description</Typography>
                        </Grid>
                    </Grid>
                    

    
                    <Grid container spacing={2} mb={1}>
                        <Grid item xs={6}>
                            <Typography color="textSecondary">Round</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant='h6' sx={{ float: 'right' }}>{orderDetails.round}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mb={1}>
                        <Grid item xs={6}>
                            <Typography color="textSecondary">Slim</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant='h6' sx={{ float: 'right' }}>{orderDetails.slim}</Typography>
                        </Grid>
                    </Grid>
                    
                    


                    <Grid container spacing={2} mb={2}>
                        <Grid item xs={6}>
                            <Typography>Item Total</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant='h6' sx={{ float: 'right' }}>{orderDetails.total}</Typography>
                        </Grid>
                    </Grid>

                    <Divider />

                    <Box mt={2}>
                        <Typography color="textSecondary" mb={1}>Address</Typography>

                        <Box 
                            sx={{ 
                                display: 'flex',
                                alignItems: 'start',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Box>
                                <Typography sx={{ fontSize: '.8rem', fontWeight: 500 }}>{location.locName}</Typography>
                                <Typography sx={{ fontSize: '.7rem', color: 'textSecondary' }}>{location.address}</Typography>
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
                        </Box>
                    </Box>

                    <Grid container spacing={2} mt={3}>
                        <Grid item xs={6}>
                            <Button 
                                variant='outlined'
                                sx={{
                                    width: '100%'
                                }}
                                onClick={()=>navigate(-1)}
                            >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button 
                                onClick={handleSubmit}
                                variant='contained'
                                sx={{
                                    width: '100%'
                                }}
                            >
                                Confirm Order
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}

export default OrderPage;
