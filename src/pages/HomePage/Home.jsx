import { useAuth0 } from '@auth0/auth0-react';

// COMPONENTS
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';
import {  useNavigate } from 'react-router-dom';

import {
    Box,
    Card,
    CardContent,
    Typography,
    Container,
    Button,
    Avatar
} from '@mui/material';


// IMAGES
import PeopleDrinkingWater from '../../assets/images/PeopleDrinking-removebg-preview.png'
import Background from '../../assets/images/background.png'
import PhoneOrderPrototype from '../../assets/images/orderPhone.png'
import Poster from '../../assets/images/poster.jpg'

import orderLogo from '../../assets/images/orderLogo.png'
import deliveryLogo from '../../assets/images/deliveryLogo.png'
import qualityLogo from '../../assets/images/courierLogo.png'

// STYLES
import './homePage.css'

// ICONS
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Home() {
    
    const navigate = useNavigate();
    const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

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
            desc: `The best quality of Water for you`,
            
        }
    ];

    const reviews = [
        {
            img: 'https://scontent.fmnl7-2.fna.fbcdn.net/v/t39.30808-6/409639153_3649047681998554_1780243124080532009_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFr814FoVwG1QyavOu18oPLxiGQemA1WhnGIZB6YDVaGYq4F_XCbFVxNqj56nZFb1rrO-Erbnv3HnVGPOoHVFkw&_nc_ohc=hAzkNDw-nGYAX8on0QM&_nc_ht=scontent.fmnl7-2.fna&oh=00_AfAO5s24PtAlQ_zI5A0Zr8DsfnyN_TyF43AdWLA_2Q2NyA&oe=65A11B49',
            name: 'Jonel Teano',
            desc: 'You only order through the app You only order through the app',
            starRating: 4,
        },
        {
            img: 'https://scontent.fmnl7-2.fna.fbcdn.net/v/t1.6435-1/81994641_1813192132146107_647185562154827776_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeEvD9bxxFAbpiAr8DhL1Bm3giENeZaLiW6CIQ15louJbh1JRWiyobmRAhhmQ3jpIm6Geetb6F5kmnmq1lL9P8KJ&_nc_ohc=tk57qQz4ykYAX8imu5g&_nc_ht=scontent.fmnl7-2.fna&oh=00_AfBOb5V0oyPOVrtdI9bWFQhktyIM4w-SwZVMhNVrc8pEmA&oe=65C36BCD',
            name: 'Joshua Macawili',
            desc: 'Delivery will be on time Delivery will be on time',
            starRating: 5,
        },
        {
            img: 'https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.15752-9/403604104_7097711840250491_8070029901405509204_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGhUJecRDd2nto7_2r2cxi4tf2aAt-HV2y1_ZoC34dXbAuw9oiT7aVZl6AoQXao95_sXwQJkUsxKRdP9bY-N_y5&_nc_ohc=JrIXiOqaMRAAX95dzI8&_nc_oc=AQlhX2ELGHKupC0ya3m1veFuHlzDpulnLB4mMXGFYJzLvb1E-2OkFkl0W1dMXzp_GV0&_nc_ht=scontent.fmnl7-1.fna&oh=03_AdSnl_JPfMx1QMU_RpU-OPObEIhglW-xUPE99iP03mD9Ag&oe=65C34CEA',
            name: 'Jasper Alegre',
            desc: `The best quality of Water for you The best quality of Water for you`,
            starRating: 4,
        },
        {
            img: 'https://scontent.fmnl7-1.fna.fbcdn.net/v/t1.15752-9/400590309_3926770440883227_4464755499221434023_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF0gj10VQFTiYiVTUj4erAr87BJgfG1CK3zsEmB8bUIrfOIqq17VxamPOTEnsipV2hsEe2La9MGapoatZDIn6Mw&_nc_ohc=MrOiC8RroMgAX95NI2Y&_nc_ht=scontent.fmnl7-1.fna&oh=03_AdTs3ZvGJwtVdsRCJUhdtTYtANHU4dcdMdm0vA4sBdQ8og&oe=65C36F26',
            name: 'Nishan <3',
            desc: 'You only order through the app You only order through the app',
            starRating: 3,
        },
    ];      

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
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: { md: 'space-between' },
                            width: '100%',
                            height: '100vh',
                            pt: { xs: '10em' },
                            gap: '1em'
                        }}
                    >
                        <Box sx={{ width: { xs: '100%', md: '50%' }, mr: '2em' }}>
                            <img src={PeopleDrinkingWater} width={'100%'} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: {xs: '100%', md: '70%'} }}>
                            <Typography variant='h1'>
                                Get Your Water Delivery at Your Doorstep
                            </Typography> 
                            <Typography variant='h6'>
                                Visit our Website and get your purified water delievered fast.<br></br> Click the button below
                            </Typography> 
                            <Box mt={2} sx={{ display: 'flex', gap: '1em' }}>
                                <Button 
                                    variant='contained'
                                    sx={{ borderRadius: '30px' }}
                                    size='large'
                                    onClick={()=>{
                                        if(isAuthenticated){
                                            navigate('/register');
                                        }else{
                                            loginWithRedirect();
                                        }
                                    }}
                                >
                                    Order Now
                                </Button>
                                <Button
                                    variant='outlined'
                                    sx={{ borderRadius: '30px' }}
                                    size='large'
                                    onClick={()=>{ 

                                        const scrollPosition = window.innerWidth < 768 ? 1900 : 1700;

                                            window.scrollTo({
                                            top: scrollPosition,
                                            behavior: 'smooth'
                                        });}}
                                >
                                    How it&apos;s Work
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ background: '#273452', pt: 7, pb: 7, color: '#FFF' }}>
                <Container>
                    <Box mb={5}>
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
            </Box>
            <Box sx={{ bgcolor: '#FFF', pt: 10, pb: 10 }}>
                <Container>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: {xs: 'center', md: 'space-evenly'},
                        alignItems: 'center',
                        flexDirection: {xs: 'column-reverse',md: 'column-reverse', lg: 'row'},
                        gap: {xs: '40px'},
                        bgcolor: '#FFF',
                    }}>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <img src={PhoneOrderPrototype} style={{ height: '100%', maxHeight: '600px' }} />
                        </Box>
                        <Box 
                            sx={{
                                display: 'flex',
                                gap: '1em',
                                flexDirection: 'column',
                                alignItems: {xs: 'center', md: 'start'},
                                textAlign: {xs: 'center', md: 'left'},
                                position: 'relative',
                            }}
                            >
                            <Typography variant='h2'>
                                Choose Your Type of Galloon and Order Your Water
                            </Typography>
                            <Typography variant='body1'>
                                Shop with us for your purified water to have a clean safe water that your family drinks
                            </Typography>
                            <Button 
                                variant='contained'
                                size='large'
                                sx={{ borderRadius: '30px' }}
                                onClick={()=>{
                                    if(isAuthenticated){
                                        navigate('/register');
                                    }else{
                                        loginWithRedirect();
                                    }
                                }}
                            >
                                Order Now
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ pt: 10, pb: 10 }}>
                <Container>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: {xs: 'center', md: 'space-evenly'},
                        alignItems: 'center',
                        flexDirection: {xs: 'column', md: 'column-reverse', lg: 'row'},
                        gap: {xs: '40px'},
                    }}>
                        <Box 
                            sx={{
                                display: 'flex',
                                gap: '1em',
                                flexDirection: 'column',
                                alignItems: {xs: 'center', md: 'start'},
                                textAlign: {xs: 'center', md: 'left'},
                                position: 'relative',
                            }}
                            >
                            <Typography variant='h2'>
                                Real time tracking of your Water
                            </Typography>
                            <Typography variant='body1'>
                                Our Client Dashboard has tracking order feature so that you know when your purified water arrive in your households
                            </Typography>
                            <Button 
                                variant='contained'
                                size='large'
                                sx={{ borderRadius: '30px' }}
                                onClick={()=>{
                                    if(isAuthenticated){
                                        navigate('/register');
                                    }else{
                                        loginWithRedirect();
                                    }
                                }}
                            >
                                Start Tracking
                            </Button>
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <img src={PhoneOrderPrototype} style={{ height: '100%', maxHeight: '600px' }} />
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ background: '#ecf4ff', pt: 7, pb: 7 }}>
                <Container>
                    <Box 
                        sx={{
                            display: 'flex',
                            alignItems: 'center', 
                            justifyContent: {xs: 'center', md: 'space-around'},
                            position: 'relative',
                            gap: '50px',
                            flexDirection: {xs: 'column', md: 'row'},
                            zIndex: 3,
                            padding: {xs: '30px 0px 30px 0px'}
                        }} 
                    >
                        <Box>
                            <Box 
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '30px'
                                }}
                            >
                                <Box>
                                    <Typography 
                                        variant='h3'
                                        sx={{ textAlign: { xs: 'center', md: 'none' } }}
                                    >
                                        Reviews of Customers About Our Product Quality 
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '20px',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    
                                        {reviews.map((data, index)=> (
                                            <Card key={index} sx={{ maxWidth: 250, }}>
                                                <CardContent>
                                                    <CardContent sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '10px'}}>
                                                        <Avatar alt="Remy Sharp" src={data.img} />
                                                        <Typography variant="h10" color="black" gutterBottom>
                                                        {data.name}
                                                        </Typography>
                                                    </CardContent>

                                                    <Typography variant="body2">
                                                    {data.desc} 
                                                    </Typography>
                                                    <CardContent sx={{display:'flex', justifyContent: 'flex-end', mt: 2}}>
                                                        {Array.from({ length: 5 }, (_, i) => (
                                                            i < data.starRating ? <StarIcon key={i} /> : <StarBorderIcon key={i} />
                                                        ))}
                                                    </CardContent >
                                                </CardContent>
                                            </Card>
                                        ))}
                                    
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ background: '#FFF', pt: 7, pb: 7 }}>
                <Container>
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: { xs: 'center', md: 'space-around' },
                            position: 'relative',
                            gap: '50px',
                        }} 
                    >
                        <Box sx={{ width: { xs: '100%', md: '70%' } }}>
                            <img src={Poster} style={{ height: '100%', borderRadius: '4px' }} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>
                            <Box>
                                <Typography variant='h4'>Hydrolab Approved</Typography>
                                <Typography variant='body2'>
                                    At HydroMaze, our purified water is not just a claim but a certified assurance.
                                    We proudly announce that our water has been approved by the prestigious Hydrolab Company,
                                    a renowned authority in water quality assessment. This endorsement speaks volumes
                                    about the high standards we maintain in ensuring the cleanliness and safety of our water.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='h4'>Rigorous Testing</Typography>
                                <Typography variant='body2'>
                                    Your safety is our top priority, and we leave no stone unturned in upholding the highest quality standards.
                                    Our water undergoes thorough testing twice a month, conducted by a reputable independent company.
                                    This regular and stringent testing guarantees that our water consistently
                                    meets the highest hygiene and safety benchmarks.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='h4'>State-of-the-Art Filtration Mechanism</Typography>
                                <Typography variant='body2'>
                                    What sets our water apart is the cutting-edge technology embedded in our purification process.
                                    Our advanced water purification machine boasts a five-stage filtration mechanism
                                    that meticulously removes impurities, contaminants, and unwanted particles.
                                    From sediment filtration to activated carbon purification,
                                    every step is designed to ensure that only the purest water reaches your glass.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    )
}
