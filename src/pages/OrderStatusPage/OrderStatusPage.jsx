import { useParams } from "react-router-dom";
import AuthHeader from '../../components/Auth';

import { 
    Box, 
    Container, 
    Typography 
} from "@mui/material";


import { 
    AccessTimeTwoTone as AccessTimeTwoToneIcon,
    LocationOnTwoTone as LocationOnTwoToneIcon,
    ShoppingCartTwoTone as ShoppingCartTwoToneIcon,
    LocalShippingTwoTone as LocalShippingTwoToneIcon,
    TransferWithinAStationTwoTone as TransferWithinAStationTwoToneIcon,
    TakeoutDiningTwoTone as TakeoutDiningTwoToneIcon,
    WhereToVoteTwoTone as WhereToVoteTwoToneIcon,
    GpsFixedTwoTone as GpsFixedTwoToneIcon,
} from '@mui/icons-material';
import {
    Timeline,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@mui/lab';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

const OrderStatusPage = () => {

    const { status } = useParams();
    const OrderStatus = JSON.parse(decodeURIComponent(status));
    console.log(OrderStatus);

    // OrderStatus.status = 'confirmed'
    // console.log('updated', OrderStatus);
    

    const sampleOrderStatus = {
        orderNumber: OrderStatus._id,
        deliveryDate: formatDate(OrderStatus.updatedAt),
        deliveryTime: formatDateTime(OrderStatus.updatedAt),
        location: OrderStatus.location.address,
    }

    return (
        OrderStatus &&
        <>
        <AuthHeader/>
            <Box mt={7} sx={{ background: '#EEFCFF', p:1 }}>
                <Typography 
                    textAlign='center' 
                    variant="subtitle1" 
                    color="#21495f"
                    fontWeight={600}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <GpsFixedTwoToneIcon sx={{ mr: .5 }} />
                    Track your order
                </Typography>
            </Box>
            <Container maxWidth='sm'>
                <Box mt={3}>
                    <Typography textAlign='center' fontSize='.90rem'>
                        <span style={{ fontWeight: 600, color: '#099DBD' }}>
                            #{sampleOrderStatus.orderNumber}
                        </span>  
                        {'  '}
                        got updated by:
                    </Typography>
                    <Typography textAlign='center' variant="h5" mt={1}>
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
                        <Box sx={{ border: '1px solid #CCC', background: '#fafafa', mt: 5, borderRadius: '4px' }}>
                            <Timeline
                                sx={{
                                    [`& .${timelineItemClasses.root}:before`]: {
                                    flex: 0,
                                    padding: 0,
                                    },
                                }}
                            >
                                        {OrderStatus.status == 'rejected' ?  
                                            (
                                                <>
                                                    <TimelineItem>
                                                        <TimelineSeparator>
                                                            <TimelineDot color="info" style={{backgroundColor: 'red'}}>
                                                                <ShoppingCartTwoToneIcon color="inherit" fontSize="small" />
                                                            </TimelineDot>
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                            <Typography variant="h6" fontSize='1.1rem' component="span" color='red'>
                                                                Order Placed.
                                                            </Typography>
                                                            <Typography variant="subtitle2">Your order has been Rejected</Typography>
                                                            <Typography variant="caption">{formatDateDesc(OrderStatus.createdAt)}</Typography>
                                                        </TimelineContent>
                                                    </TimelineItem>
                                                    
                                                    <TimelineItem>
                                                        <TimelineSeparator>
                                                            <TimelineDot color="info" style={{backgroundColor: '#C4CDD5'}}>
                                                                <TakeoutDiningTwoToneIcon fontSize="small" />
                                                            </TimelineDot>
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                            <Typography variant="h6" fontSize='1.1rem' component="span" >
                                                                Preparing...
                                                            </Typography>
                                                            <Typography variant="subtitle2">Your order is being prepared</Typography>
                                                        </TimelineContent>
                                                    </TimelineItem>
                                                </>
                                            )
                                            :   OrderStatus.status == 'pending' ? 
                                            (
                                                <>
                                                    <TimelineItem>
                                                            <TimelineSeparator>
                                                                <TimelineDot color="info" style={{backgroundColor: '#C4CDD5'}}>
                                                                    <ShoppingCartTwoToneIcon color="inherit" fontSize="small" />
                                                                </TimelineDot>
                                                                <TimelineConnector />
                                                            </TimelineSeparator>
                                                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                                <Typography variant="h6" fontSize='1.1rem' component="span" color='black' >
                                                                    Order Placed.
                                                                </Typography>
                                                                <Typography variant="subtitle2">Your order is Pending</Typography>
                                                                <Typography variant="caption">{formatDateDesc(OrderStatus.createdAt)}</Typography>
                                                            </TimelineContent>
                                                        </TimelineItem>
                                                        
                                                    <TimelineItem>
                                                        <TimelineSeparator>
                                                            <TimelineDot color="info" style={{backgroundColor: '#C4CDD5'}}>
                                                                <TakeoutDiningTwoToneIcon fontSize="small" />
                                                            </TimelineDot>
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                            <Typography variant="h6" fontSize='1.1rem' component="span" >
                                                                Preparing...
                                                            </Typography>
                                                            <Typography variant="subtitle2">Your order is being prepared</Typography>
                                                        </TimelineContent>
                                                    </TimelineItem>
                                                </>
                                            )
                                            :
                                            (
                                                <>
                                                    <TimelineItem>
                                                        <TimelineSeparator>
                                                            <TimelineDot color="info">
                                                                <ShoppingCartTwoToneIcon color="inherit" fontSize="small" />
                                                            </TimelineDot>
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                            <Typography variant="h6" fontSize='1.1rem' component="span" color='#099DBD'>
                                                                Order Placed.
                                                            </Typography>
                                                            <Typography variant="subtitle2">Your order has been Accepted</Typography>
                                                            <Typography variant="caption">{formatDateDesc(OrderStatus.createdAt)}</Typography>
                                                        </TimelineContent>
                                                    </TimelineItem>

                                                    <TimelineItem>
                                                        <TimelineSeparator>
                                                            <TimelineDot color="info">
                                                                <TakeoutDiningTwoToneIcon fontSize="small" />
                                                            </TimelineDot>
                                                            <TimelineConnector />
                                                        </TimelineSeparator>
                                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                            <Typography variant="h6" fontSize='1.1rem' component="span" color='#099DBD'>
                                                                Preparing...
                                                            </Typography>
                                                            <Typography variant="subtitle2">Your order is being prepared</Typography>
                                                        </TimelineContent>
                                                    </TimelineItem>
                                                </>
                                            )
                                        }
                                
                                {OrderStatus.status == 'for pick up' || OrderStatus.status == 'for delivery' || OrderStatus.status == 'delivered' ? 
                                (
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot style={{backgroundColor: '#00B8D9'}}>
                                                <TransferWithinAStationTwoToneIcon fontSize="small" />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" fontSize='1.1rem' component="span" color='#099DBD'>
                                                Order Picked-up.
                                            </Typography>
                                            <Typography variant="subtitle2">Rider will pick up the gallons.</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ) 
                                : 
                                (
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                <TransferWithinAStationTwoToneIcon fontSize="small" />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" fontSize='1.1rem' component="span">
                                                Order Picked-up.
                                            </Typography>
                                            <Typography variant="subtitle2">Rider will pick up the gallons.</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                )
                            }


                            {OrderStatus.status == 'for delivery' || OrderStatus.status == 'delivered' ? 
                                (
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot style={{backgroundColor: '#00B8D9'}}>
                                                <LocalShippingTwoToneIcon fontSize="small" />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" fontSize='1.1rem' component="span" color='#099DBD'>
                                                Be ready!
                                            </Typography>
                                            <Typography variant="subtitle2">Your order is arriving soon!</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                )
                                :
                                (
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                <LocalShippingTwoToneIcon fontSize="small" />
                                            </TimelineDot>
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" fontSize='1.1rem' component="span">
                                                Be ready!
                                            </Typography>
                                            <Typography variant="subtitle2">Your order is arriving soon!</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                )
                            }
                                



                            {OrderStatus.status == 'delivered' ? 
                                (
                                    <TimelineItem>
                                        <TimelineSeparator >
                                            <TimelineDot style={{backgroundColor: '#00B8D9'}}>
                                                <WhereToVoteTwoToneIcon fontSize="small" />
                                            </TimelineDot>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" fontSize='1.1rem' component="span" color='#099DBD'>
                                                Stay Hydrated!
                                            </Typography>
                                            <Typography variant="subtitle2">Your order has arrived!</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ) 
                                : 
                                (
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                <WhereToVoteTwoToneIcon fontSize="small" />
                                            </TimelineDot>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                                            <Typography variant="h6" fontSize='1.1rem' component="span">
                                                Stay Hydrated!
                                            </Typography>
                                            <Typography variant="subtitle2">Your order has arrived!</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                )                            
                            }
                            </Timeline>



                        </Box>
                    </Container>
                </Box>
            </Container>
        </>
    )
}

export default OrderStatusPage

// FOR HEADER DATE WEEKNAME AND DAY ONLY
function formatDate(dateString) {
        const options = {  
            month: 'short', 
            weekday: 'long', 
            day: 'numeric',  
        };

    return new Date(dateString).toLocaleDateString('en-US', options);
}


// FOR DESCRIPTION DATE
function formatDateDesc(dateString) {
    const options = {  
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'long', 
        hour: '2-digit', 
        minute: '2-digit', 
    };

return new Date(dateString).toLocaleDateString('en-US', options);
}

// FOR HEADER TIME
function formatDateTime(dateString) {
    const options = { 
        hour: '2-digit', 
        minute: '2-digit',  
    };

    return new Date(dateString).toLocaleTimeString('en-US', options);
}