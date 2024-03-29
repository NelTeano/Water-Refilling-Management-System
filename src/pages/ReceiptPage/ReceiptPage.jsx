import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const ReceiptPage = () => {
    const navigate = useNavigate()
    const { orderSummary } = useParams();

    const serializedSummary = JSON.parse(decodeURIComponent(orderSummary));
    console.log("Order Summary", serializedSummary)
    return(
    <>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3}}>
            <Typography 
                variant="h3" 
                sx={{ color: '#2563EB', fontWeight:'700' }}
            >
                Hydro<span style={{ color:'#60A5FA' }}>Maze</span>
            </Typography>
        </Box>
        <Container maxWidth='xs'>
            <Box sx={{ textAlign: 'center', mt: 5 }}>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>Thank you for your purchase!</Typography>
                <Typography variant="subtitle2" sx={{ color: '#6f6f6f', fontWeight: 400 }}>Hi { 'Joshua Mark' }, here&apos;s your receipt.</Typography>
            </Box>
            
            <Box mt={4}>
                <Container sx={{ background: '#dff7fe', pt: 3, pb: 3, borderRadius: 1, border: '1px solid #bfe5f0' }}>
                    {/* <Typography variant="caption" fontWeight={500}>Order Date: </Typography> 
                    <Typography variant="caption">dd/mm/yyyy</Typography>  */}
                    <Typography variant="caption" fontWeight={600}>Order ID: </Typography>
                    <Typography variant="caption">{serializedSummary._id}</Typography>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Typography variant="caption" fontWeight={600}>Shipping Address</Typography>
                    <br />
                    <Typography variant="caption">{serializedSummary.location.address}</Typography>
    
                    <Divider sx={{ mt: 2, mb: 2 }} />
    
                    <Typography variant="caption" fontWeight={600}>Summary</Typography>
                    <Grid container mt={1.5} mb={.5} sx={{ color: '#7b7b7b' }}>    
                        <Grid item xs={7}>
                            <Typography variant="caption" fontWeight={500}>Type</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography sx={{ float: 'right',  fontWeight: 500 }} variant="caption">Qty</Typography>
                        </Grid>
                    </Grid>
    
                    <Grid container>    
                        <Grid item xs={7}>
                            <Typography variant="caption">Slim Gallon</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography sx={{ float: 'right' }} variant="caption">{serializedSummary.slim}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>    
                        <Grid item xs={7}>
                            <Typography variant="caption">Round Gallon</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Typography sx={{ float: 'right' }} variant="caption">{serializedSummary.round}</Typography>
                        </Grid>
                    </Grid>
                    
                    <Divider sx={{ mt: 2, mb: 2 }} />
    
                    <Grid container>    
                        <Grid item xs={9}>
                            <Typography variant="h6" color='#2563EB'>TOTAL</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography sx={{ float: 'right' }} variant="h6" color='#2563EB'>₱{serializedSummary.total}.00</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
    
            <Button
                variant="contained"
                sx={{ textAlign: 'center', mt: 2, width: '100%' }}
                onClick={()=>navigate("/client-dashboard")}
            >
                Go Back to Dashboard
            </Button>
        </Container>
    </>
    )
}


export default ReceiptPage;