import { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Container,
    IconButton,
    Typography,
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
        </Container>
    );
}

export default OrderPage;
