import { useState } from 'react';
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
} from '@mui/material';
import {
    RemoveTwoTone as RemoveTwoToneIcon,
    AddTwoTone as AddTwoToneIcon,
} from '@mui/icons-material';

const OrderPage = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            name: 'Single Order (Round)',
            qty: 1,
        },
        {
            id: 2,
            name: 'Single Order (Slim)',
            qty: 0,
        },
        {
            id: 3,
            name: 'Bulk Order (Round)',
            description: '5 Gallon',
            qty: 1,
        },
        {
            id: 4,
            name: 'Single Order (Slim)',
            description: '5 Gallon',
            qty: 0,
        }
    ]);

    const handleIncrement = (index) => {
        const updatedOrders = [...orders];
        updatedOrders[index].qty += 1;
        setOrders(updatedOrders);
    };

    const handleDecrement = (index) => {
        const updatedOrders = [...orders];
        if (updatedOrders[index].qty > 0) {
            updatedOrders[index].qty -= 1;
            setOrders(updatedOrders);
        }
    };

    return (
        <Container>
            <Typography mt={3}>Order Details</Typography>
            {orders.map((item, index) => (
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
            ))}

            <FormGroup>
                <FormControlLabel sx={{ color: '#3B3B3B' }} control={<Checkbox size="small" />} label="Do you own the gallon/s?" />
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
                        <Grid item xs>
                            <Typography sx={{ float: 'right' }}>0</Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} mb={2}>
                        <Grid item xs={6}>
                            <Typography color="textSecondary">Delivery Fee</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography sx={{ float: 'right' }}>0</Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} mb={2}>
                        <Grid item xs={6}>
                            <Typography>Item Total</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant='h6' sx={{ float: 'right' }}>0</Typography>
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
                                <Typography sx={{ fontSize: '.8rem', fontWeight: 500 }}>Home</Typography>
                                <Typography sx={{ fontSize: '.7rem', color: 'textSecondary' }}>Sampaloc V, Dasmarinas, Cavite</Typography>
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
                        </Box>
                    </Box>

                    <Grid container spacing={2} mt={3}>
                        <Grid item xs={6}>
                            <Button 
                                variant='outlined'
                                sx={{
                                    width: '100%'
                                }}
                            >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button 
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
