import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    CardActionArea,
} from '@mui/material';
import bulkImg from '../../../../assets/images/bulk_img.jpg'
import singleImg from '../../../../assets/images/single_img.jpg'
import { useNavigate } from 'react-router-dom';


const OrderType = () => {
    const navigate = useNavigate()

  return (
    <Box mt={2}>
        <Typography color="textSecondary">Pick your order</Typography>
        <Grid container spacing={2} mt={.5}>
            <Grid item xs={6}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={singleImg}
                        
                            onClick = {()=>navigate('/client-dashboard/order/single')}
                        />
                        <CardContent>
                            <Typography>Single Order</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={bulkImg}
                        
                            onClick = {()=>navigate('/client-dashboard/order/bulk')}
                        />
                        <CardContent>
                            <Typography>Bulk Order</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}

export default OrderType
