import {
    Box, 
    Typography,
    Card,
    CardContent,
    Grid,
} from '@mui/material'
import {
    Recommend as RecommendIcon,
    HourglassBottom as HourglassBottomIcon,
    Error as ErrorIcon,
    CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const OrderStatus = ({ pending, confirmed, rejected, delivered }) => {

    const sampleOrderStatus = {
        confirmed: confirmed,
        pending: pending,
        rejected: rejected,
        completed: delivered,
    }

return (
    <Box mt={5}>
        <Typography color="textSecondary">My Orders</Typography>
        <Grid container spacing={2} mt={.5}>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Typography sx={{ color: 'GrayText', fontSize: '.80rem', display: 'flex', alignItems: 'center' }}>
                            <RecommendIcon sx={{ color: '#4690A7', width: '.75em', height: '.75em', mr: .5 }} />
                            Confirmed
                        </Typography>
                        <Typography variant='h5' sx={{ ml: 3 }}>{sampleOrderStatus.confirmed}</Typography> 
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Typography sx={{ color: 'GrayText', fontSize: '.80rem', display: 'flex', alignItems: 'center' }}>
                            <HourglassBottomIcon sx={{ color: '#EBA132', width: '.75em', height: '.75em', mr: .5 }} />
                            Pending
                        </Typography>
                        <Typography variant='h5' sx={{ ml: 3 }}>{sampleOrderStatus.pending}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Grid container spacing={2} mt={.5}>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Typography sx={{ color: 'GrayText', fontSize: '.80rem', display: 'flex', alignItems: 'center' }}>
                            <ErrorIcon sx={{ color: '#EB3232', width: '.75em', height: '.75em', mr: .5 }} />
                            Rejected
                        </Typography>
                        <Typography variant='h5' sx={{ ml: 3 }}>{sampleOrderStatus.rejected}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Typography sx={{ color: 'GrayText', fontSize: '.80rem', display: 'flex', alignItems: 'center' }}>
                            <CheckCircleIcon sx={{ color: '#13D231', width: '.75em', height: '.75em', mr: .5 }} />
                            Completed
                        </Typography>
                        <Typography variant='h5' sx={{ ml: 3 }}>{sampleOrderStatus.completed}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}

export default OrderStatus
