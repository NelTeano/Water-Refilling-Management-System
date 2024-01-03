import { 
    Box, 
    Container, 
    Typography 
} from "@mui/material";
import { 
    AccessTimeTwoTone as AccessTimeTwoToneIcon,
    LocationOnTwoTone as LocationOnTwoToneIcon,
} from '@mui/icons-material';

const OrderStatusPage = () => {
    const sampleOrderStatus = {
        orderNumber: '00932-1283921232',
        deliveryDate: 'Thursday, March 23',
        deliveryTime: '08:00AM - 12:00PM',
        location: '158 Parkway Drive, BGC, Taguig City',
    }

    return (
        <Container>
            <Typography 
                textAlign='center' 
                variant="subtitle1" 
                mt={9} 
                color="#5B7C8E"
            >
                Track your order
            </Typography>

            <Box mt={2}>
                <Typography textAlign='center' fontSize='.90rem'>
                    <span style={{ fontWeight: 600, color: '#099DBD' }}>
                        #{sampleOrderStatus.orderNumber}
                    </span>  
                    {'  '}
                    will be delivered by:
                </Typography>
                <Typography textAlign='center' variant="h6" mt={1}>
                    {sampleOrderStatus.deliveryDate}
                </Typography>
                
                <Box mt={2}>
                    <Typography variant="caption" textAlign="center" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AccessTimeTwoToneIcon fontSize="small" sx={{ mt: '-2px', mr: '4px', color: '#099DBD' }} />
                        {sampleOrderStatus.deliveryTime}
                    </Typography>
                    <Typography variant="caption" textAlign="center" sx={{ display: 'flex', alignItems: 'center', mt: .75, justifyContent: 'center' }}>
                        <LocationOnTwoToneIcon fontSize="small" sx={{ mt: '-2px', mr: '4px', color: '#099DBD' }} />
                        {sampleOrderStatus.location}
                    </Typography>
                </Box>
                <Container>
                    <Box sx={{ border: '1px solid #CCC', p: '1em', mt: 2, borderRadius: '4px' }}>
                        <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTimeTwoToneIcon fontSize="small" sx={{ mt: '-2px', mr: '4px', color: '#099DBD' }} />
                            {sampleOrderStatus.deliveryTime}
                        </Typography>
                        <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <LocationOnTwoToneIcon fontSize="small" sx={{ mt: '-2px', mr: '4px', color: '#099DBD' }} />
                            {sampleOrderStatus.location}
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Container>
    )
}

export default OrderStatusPage
