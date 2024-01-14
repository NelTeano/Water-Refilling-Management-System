import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ReceiptPage = () => {
    const navigate = useNavigate()

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
                <Container sx={{ background: '#dff7fe', pt: 3, pb: 3, borderRadius: 2 }}>
                    {/* <Typography variant="caption" fontWeight={500}>Order Date: </Typography> 
                    <Typography variant="caption">dd/mm/yyyy</Typography>  */}
                    <br />
                    <Typography variant="caption" fontWeight={600}>Order Number: </Typography>
                    <Typography variant="caption">SD2312000</Typography>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Typography variant="caption" fontWeight={600}>Shipping Address</Typography>
                    <br />
                    <Typography variant="caption">Silang Crossing East, Tagaytay Citye</Typography>
    
                    <Divider sx={{ mt: 2, mb: 2 }} />
    
                    <Typography variant="caption" fontWeight={600}>Summary</Typography>
                    <Grid container mt={1.5} mb={.5} sx={{ color: '#7b7b7b' }}>    
                        <Grid item xs={6}>
                            <Typography variant="caption" fontWeight={500}>Type</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography sx={{ float: 'right',  fontWeight: 500 }} variant="caption">Qty</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ float: 'right',  fontWeight: 500 }} variant="caption">Price</Typography>
                        </Grid>
                    </Grid>
    
                    <Grid container>    
                        <Grid item xs={6}>
                            <Typography variant="caption">Slim Gallon</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography sx={{ float: 'right' }} variant="caption">1</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ float: 'right' }} variant="caption">₱30.00</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>    
                        <Grid item xs={6}>
                            <Typography variant="caption">Round Gallon</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography sx={{ float: 'right' }} variant="caption">2</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ float: 'right' }} variant="caption">₱60.00</Typography>
                        </Grid>
                    </Grid>
                    
                    <Divider sx={{ mt: 2, mb: 2 }} />
    
                    <Grid container>    
                        <Grid item xs={9}>
                            <Typography variant="h6" color='#2563EB'>TOTAL</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography sx={{ float: 'right' }} variant="h6" color='#2563EB'>₱90.00</Typography>
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