import { useAuth0 } from '@auth0/auth0-react';

// COMPONENTS
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';
import styled from '@emotion/styled';
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
import PhoneTrackPrototype from '../../assets/images/trackPhone.png'
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

    const Img = styled.img`
        margin-top: 200px;
        z-index: 2;
        position: relative;

        @media screen and (max-width: 900px) {
            height: 320px;
            width: 200px;
            margin-top: 0px;
        }
        `;

    const PosterImage = styled.img`
        height: 400px;
        width: 400px;
        border-radius: 15px;

        @media screen and (max-width: 768px) {
            height: 200px;
            width: 90%;
            margin-top: 0px;
        }
    `;
        

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
                            <Box mt={2} sx={{ display: 'flex', gap: '1em' }}>
                                <Button 
                                    variant='contained'
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

                    <Box 
                        sx={{
                        display: 'flex',
                        justifyContent: {xs: 'center', md: 'space-evenly'},
                        alignItems: 'center',
                        flexDirection: {xs: 'column-reverse',md: 'column-reverse', lg: 'row'},
                        gap: {xs: '40px'},
                        bgcolor: '#F8F8FA',
                        height: {xs: '800px',sm: '900px', md: '1200px',lg: '1200px', xl: '1200px'},
                        mt: {xs: 40, md: 20, lg: 20},
                        padding:'100px 0px 100px 0px'
                        }} 
                    >
                        <Box>
                            <Box sx={{display: {xs: 'none', md: 'block'}}}>
                            <div 
                                style={{
                                    position: 'absolute',
                                    width: '493.566px',
                                    height:' 710.475px',
                                    transform: 'rotate(-45deg)',
                                    borderRadius: '710.475px',
                                    border: '1px solid rgba(0, 0, 0, 0.10)',
                                    zIndex: 1
                                }}
                            ></div>
                            <div 
                                style={{
                                    position: 'absolute',
                                    marginTop: '40px',
                                    width: '493.566px',
                                    height:' 710.475px',
                                    transform: 'rotate(-45deg)',
                                    borderRadius: '710.475px',
                                    border: '1px solid rgba(0, 0, 0, 0.10)',
                                    zIndex: 1
                                }}
                            ></div>
                            <div 
                                style={{
                                    position: 'absolute',
                                    marginTop: '80px',
                                    width: '493.566px',
                                    height:' 710.475px',
                                    transform: 'rotate(-45deg)',
                                    borderRadius: '710.475px',
                                    border: '1px solid rgba(0, 0, 0, 0.10)',
                                    zIndex: 1
                                }}
                            ></div>
                            </Box>
                            <Img src={PhoneOrderPrototype} height={'700px'} width={'400px'} />
                        </Box>
                        <Box 
                            sx={{
                                display: 'flex',
                                gap: '40px',
                                flexDirection: 'column',
                                alignItems: {xs: 'center'},
                                textAlign: {xs: 'center'},
                                position: 'relative',
                                }}
                            >
                            <Typography 
                                sx={{ 
                                    fontSize: { xs: '30px', md: '45px' },
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '56px'
                                }}
                            >
                                Choose Your Type of Galloon<br></br> and Order Your Water
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {xs: '15px',md: '19px'},
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineWeight: '26px',
                                }}
                            >
                                Shop with us for your purified water<br></br> to have a clean safe water that your family drinks
                            </Typography>
                            <Button 
                                    sx={{bgcolor: '#34ACAC',
                                    color: 'white',
                                    borderRadius: '30px',
                                    border: 'none',
                                    padding: '10px 30px 10px 30px',
                                    fontWeight: '700',
                                    width: '180px',
                                    mt: '20px',
                                    position: 'relative',
                                    zIndex: 3
                                    }}
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

                    <Box 
                        sx={{
                        display: 'flex',
                        position: 'relative',
                        justifyContent: {xs: 'center', md: 'space-evenly'},
                        alignItems: 'center', 
                        flexDirection: {xs: 'column-reverse',md: 'column-reverse', lg: 'row', xl:'row-reverse'},
                        gap: {xs: '40px'},
                        bgcolor: 'white',
                        height: {xs: '800px',sm: '900px', md: '1200px',lg: '1200px', xl: '1200px'},
                        padding:'100px 0px 100px 0px',
                        zIndex: 10
                        }} 
                    >
                        <Box>
                            <Box sx={{display: {xs: 'none', md: 'block'}}}>
                            <div 
                                style={{
                                    position: 'absolute',
                                    width: '493.566px',
                                    height:' 710.475px',
                                    transform: 'rotate(-45deg)',
                                    borderRadius: '710.475px',
                                    border: '1px solid #34ACAC',
                                    zIndex: 1
                                }}
                            ></div>
                            <div 
                                style={{
                                    position: 'absolute',
                                    marginTop: '40px',
                                    width: '493.566px',
                                    height:' 710.475px',
                                    transform: 'rotate(-45deg)',
                                    borderRadius: '710.475px',
                                    border: '1px solid #34ACAC',
                                    zIndex: 1
                                }}
                            ></div>
                            <div 
                                style={{
                                    position: 'absolute',
                                    marginTop: '80px',
                                    width: '493.566px',
                                    height:' 710.475px',
                                    transform: 'rotate(-45deg)',
                                    borderRadius: '710.475px',
                                    border: '1px solid #34ACAC',
                                    zIndex: 1
                                }}
                            ></div>
                            </Box>
                            <Img src={PhoneTrackPrototype} height={'700px'} width={'400px'} />
                        </Box>
                        <Box 
                            sx={{
                                display: 'flex',
                                gap: '40px',
                                flexDirection: 'column',
                                alignItems: {xs: 'center'},
                                textAlign: {xs: 'center'},
                                position: 'relative',
                                }}
                            >
                            <Typography 
                                sx={{ 
                                    fontSize: { xs: '30px', md: '45px' },
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '56px'
                                }}
                            >
                                Real time tracking of your<br></br> Water
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {xs: '15px',md: '19px'},
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineWeight: '26px',
                                }}
                            >
                                Our Client Dashboard has tracking order feauture<br></br> so that you know when your purified water arrive in your households
                            </Typography>
                            <Button 
                                    sx={{bgcolor: '#34ACAC',
                                    color: 'white',
                                    borderRadius: '30px',
                                    border: 'none',
                                    padding: '10px 30px 10px 30px',
                                    fontWeight: '700',
                                    width: '180px',
                                    mt: '20px',
                                    position: 'relative',
                                    zIndex: 3
                                    }}
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
                    </Box>

                    <Box 
                        sx={{
                        display: 'flex',
                        alignItems: 'center', 
                        justifyContent: {xs: 'center', md: 'space-around'},
                        position: 'relative',
                        gap: '50px',
                        flexDirection: {xs: 'column', md: 'row'},
                        bgcolor: '#F8F8FA',
                        height: { xl: '700px', md: '800px'},
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
                                        sx={{
                                            fontSize: { xs: '30px', md: '35px' },
                                            fontStyle: 'normal',
                                            fontWeight: '700',
                                            lineHeight: '56px',
                                            textAlign: { xs: 'center', md: 'none' }
                                        }}
                                    >
                                        Reviews of Customers About<br></br> Our Product Quality 
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

                    <Box 
                        sx={{
                        display: 'flex',
                        alignItems: 'center', 
                        justifyContent: {xs: 'center', md: 'space-around'},
                        position: 'relative',
                        gap: '50px',
                        flexDirection: 'row',
                        bgcolor: 'white',
                        height: { xs: '1200px', md: '900px',},
                        mb:{xs: 15},
                        zIndex: 3,
                        color: '#1B1C20',
                        flexWrap: 'wrap',
                        padding: {xs: '30px 0px 30px 0px'},
                        textAlign: {xs: 'center'}
                        }} 
                    >
                        <Box>
                            <PosterImage  src={Poster} ></PosterImage>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '30px'}}>   
                            <Box>
                                <Typography sx={{fontWeight: '700', fontSize:{xs: '17px',md:'20px'}}}>Hydrolab Approved</Typography>
                                <Typography sx={{lineHeight: '26px', fontWeight: '400', fontSize:{xs: '15px',md:'18px'}}}>
                                    At HydroMaze, our purified water is not just a claim but a certified assurance.<br></br>
                                    We proudly announce that our water has been approved by the prestigious Hydrolab Company,<br></br>
                                    a renowned authority in water quality assessment. This endorsement speaks volumes<br></br> 
                                    about the high standards we maintain in ensuring the cleanliness and safety of our water.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{fontWeight: '700', fontSize:{xs: '17px',md:'20px'}}}>Rigorous Testing</Typography>
                                <Typography sx={{lineHeight: '26px', fontWeight: '400', fontSize:{xs: '15px',md:'18px'}}}>
                                    Your safety is our top priority, and we leave no stone unturned in upholding the highest quality standards.<br></br>
                                    Our water undergoes thorough testing twice a month, conducted by a reputable independent company.<br></br>
                                    This regular and stringent testing guarantees that our water consistently<br></br>
                                    meets the highest hygiene and safety benchmarks.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{fontWeight: '700', fontSize:{xs: '17px',md:'20px'}}}>State-of-the-Art Filtration Mechanism</Typography>
                                <Typography sx={{lineHeight: '26px', fontWeight: '400', fontSize:{xs: '15px',md:'18px'}}}>
                                    What sets our water apart is the cutting-edge technology embedded in our purification process.<br></br>
                                    Our advanced water purification machine boasts a five-stage filtration mechanism <br></br>
                                    that meticulously removes impurities, contaminants, and unwanted particles.<br></br>
                                    From sediment filtration to activated carbon purification, <br></br>
                                    every step is designed to ensure that only the purest water reaches your glass.<br></br>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Footer />
                </Container>
        </>
    )
}
