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
    const sampleOrderStatus = {
        orderNumber: '00932-1283921232',
        deliveryDate: 'Thursday, March 23',
        deliveryTime: '08:00AM - 12:00PM',
        location: '158 Parkway Drive, BGC, Taguig City',
    }

    return (
        <>
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
            <Container>
                <Box mt={3}>
                    <Typography textAlign='center' fontSize='.90rem'>
                        <span style={{ fontWeight: 600, color: '#099DBD' }}>
                            #{sampleOrderStatus.orderNumber}
                        </span>  
                        {'  '}
                        will be delivered by:
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
                                        <Typography variant="subtitle2">Your order has been accepted</Typography>
                                        <Typography variant="caption">2023-03-22 06:17pm</Typography>
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
                                        <Typography variant="subtitle2">Rider has picked up your order.</Typography>
                                        <Typography variant="caption">2023-03-22 06:17pm</Typography>
                                    </TimelineContent>
                                </TimelineItem>
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
                                        <Typography variant="caption">2023-03-22 06:17pm</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </>
    )
}

export default OrderStatusPage
