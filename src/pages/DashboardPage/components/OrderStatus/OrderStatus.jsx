import {
    Box, 
    Typography,
    Card,
    CardContent,
    Grid,
} from '@mui/material'

const OrderStatus = ({pending}) => {
    const sampleOrderStatus = {
        confirmed: 0,
        pending: pending,
        rejected: 0,
        completed: 0,
    }

  return (
    <Box mt={5}>
        <Typography color="textSecondary">My Orders</Typography>
        <Grid container spacing={2} mt={.5}>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Typography variant='h6'>{sampleOrderStatus.confirmed}</Typography>
                        <Typography sx={{ color: 'GrayText', fontSize: '.80rem' }}>Confirmed</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Typography variant='h6'>{sampleOrderStatus.pending}</Typography>
                        <Typography sx={{ color: 'GrayText', fontSize: '.80rem' }}>Pending</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Grid container spacing={2} mt={.5}>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Typography variant='h6'>{sampleOrderStatus.rejected}</Typography>
                        <Typography sx={{ color: 'GrayText', fontSize: '.80rem' }}>Rejected</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Typography variant='h6'>{sampleOrderStatus.completed}</Typography>
                        <Typography sx={{ color: 'GrayText', fontSize: '.80rem' }}>Completed</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}

export default OrderStatus
