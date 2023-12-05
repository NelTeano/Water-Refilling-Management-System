import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
} from '@mui/material';
import bulkImg from '../../../../assets/images/bulk_img.jpg'
import singleImg from '../../../../assets/images/single_img.jpg'

const OrderType = () => {
  return (
    <Box mt={2}>
        <Grid container spacing={2} mt={.5}>
            <Grid item xs={6}>
                <Card>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={singleImg}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography>Single Order</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={bulkImg}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography>Bulk Order</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}

export default OrderType