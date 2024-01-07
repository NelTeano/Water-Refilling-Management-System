// COMPONENTS
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';

import {
    Box,
    Typography,
    Container,
    Button,
} from '@mui/material';


// IMAGES
import PeopleDrinkingWater from '../../assets/images/PeopleDrinking-removebg-preview.png'
import Background from '../../assets/images/background.png'

import orderLogo from '../../assets/images/orderLogo.png'
import deliveryLogo from '../../assets/images/deliveryLogo.png'
import qualityLogo from '../../assets/images/courierLogo.png'

// STYLES
import './homePage.css'

export default function Home() {
    

    const weServe = [
        {
            img: orderLogo,
            title: 'Easy to Order',
            desc: 'You only order through the app',
        },
        {
            img: deliveryLogo,
            title: 'Fastest Delivery',
            desc: 'Delivery will be on time',
        },
        {
            img: qualityLogo,
            title: 'Best Quality',
            desc: `The best quality of food for you`,
        }
    ]

    return (
        <>
            <Header/>
            <Box 
                sx={{ 
                    backgroundImage: `url(${Background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", 
                }}
            >
                <Container>
                    <Box 
                        sx={{
                            display: 'flex',
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            width: '100%',
                            height: '100vh'
                        }}
                    >
                        <Box sx={{ display: { xs: 'none', md: 'block' }, width: '50%', mr: '2em' }}>
                            <img src={PeopleDrinkingWater} width={'100%'} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: {xs: '100%', md: '70%'} }}>
                            <Typography variant='h1'>
                                Get Your Water Delivery at Your Doorstep
                            </Typography> 
                            <Typography variant='h6'>
                                Visit our Website and get your purified water delievered fast.<br></br> Click the button below
                            </Typography> 
                            <Box mt={2}>
                                <Button 
                                    variant='contained'
                                    size='large'
                                    sx={{
                                        mr: '30px'
                                    }}
                                >
                                    Order Now
                                </Button>
                                <Button
                                    variant='outlined'
                                    size='large'
                                >
                                    How it&apos;s Work
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Container>
                    <Box mt={5} mb={5}>
                        <Typography variant='h2' sx={{ textAlign: 'center' }}>
                            Our Serve just for you
                        </Typography>
                        <Box 
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent:  { xs: 'center', md: 'space-between' },
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '100px',
                                flexWrap: 'wrap',
                                mt: 5,
                            }}>
                            {weServe.map((data, index) => (
                                <Box key={index}>
                                    <img src={data.img} height={'120px'} width={'120px'} alt={data.title} />
                                    <Typography variant='h4' mt={1.5} mb={1}>
                                        {data.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontStyle: "normal",
                                            fontWeight: "400",
                                            lineHeight: "normal",
                                        }}
                                    >
                                        {data.desc}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
            </Container>
            <Footer />
        </>
    )
}
