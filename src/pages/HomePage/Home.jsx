import React, { useState } from 'react';

// COMPONENTS
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import AuthButton from '../../components/AuthButton.jsx'

import {
    Box,
    Card,
    CardActions, 
    CardContent,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
    ListItemIcon,
    Container,
    Breadcrumbs,
    Button,
    Avatar
} from '@mui/material';


// IMAGES
import PeopleDrinkingWater from '../../assets/images/PeopleDrinking.jpg'
import PhoneOrderPrototype from '../../assets/images/orderPhone.png'
import PhoneTrackPrototype from '../../assets/images/trackPhone.png'
import Poster from '../../assets/images/poster.jpg'

import orderLogo from '../../assets/images/orderLogo.png'
import deliveryLogo from '../../assets/images/deliveryLogo.png'
import qualityLogo from '../../assets/images/courierLogo.png'


// ICONS
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
            name: 'Jasper Lance Garret Alegre',
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
        border-radius: 30px;

        @media screen and (max-width: 900px) {
            height: 320px;
            width: 200px;
            margin-top: 0px;
        }
    `;
        

    return (
        <>
            <Header/>
                <Container maxWidth={false} disableGutters >
                    <Box mb={12}
                        sx={{
                        display: 'flex',
                        alignItems: 'center', 
                        justifyContent: 'space-around',
                        bgcolor: 'white',
                        height: '600px',
                        width: '100%',
                        ml: { xs: '15px', md: '0px' }
                    }}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <img src={PeopleDrinkingWater} height={'400px'} width={'400px'} ></img>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '30px', flexDirection: 'column'}}>
                            <Typography 
                                sx={{
                                    fontSize: '40px'
                                }}
                            >
                                Get Your Water<br></br> Delivery at Your<br></br>Doorstep
                            </Typography> 
                            <Typography 
                                sx={{
                                    fontSize: '20px'
                                }}
                            >
                                Visit our Website and get your purified water delievered fast.<br></br> Click the button below
                            </Typography> 
                            <Box sx={{display: { xs: 'flex' } }} >
                                <Button 
                                    sx={{bgcolor: '#34ACAC',
                                    color: 'white',
                                    borderRadius: '30px',
                                    border: 'none',
                                    padding: '10px 30px 10px 30px',
                                    fontWeight: '700',
                                    mr: '30px'
                                    }}
                                >Order Now</Button>
                                <Button 
                                    sx={{bgcolor: 'transparent',
                                    color: 'black',
                                    borderRadius: '30px',
                                    border: 'solid black 1px',
                                    fontWeight: '700',
                                    padding: { xs: '10px 20px 10px 20px', md: '10px 30px 10px 30px' }
                                    }}
                                >How it&apos;s Work</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box  
                        sx={{
                        display: 'flex',
                        alignItems: 'center', 
                        gap: '50px',
                        flexDirection: 'column',
                        bgcolor: 'white',
                        height: {xs: '800px', md: '500px'},
                        }} 
                    >
                        <Typography 
                            sx={{
                                textAlign: "center",
                                fontSize: { xs: '30px', md: '45px' },
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "56px"
                            }}
                        >
                            Our Serve just for you
                        </Typography>
                        <Box 
                            
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent:  { xs: 'center', md: 'space-between' },
                                alignItems: { xs: 'center', md: 'center' },
                                textAlign: 'center',
                                gap: '100px',
                                flexWrap: 'wrap',
                            }}>
                            {weServe.map((data, index) => (
                                <Box key={index}>
                                    <img src={data.img} height={'120px'} width={'120px'} alt={data.title} />
                                    <Typography 
                                        sx={{
                                            fontSize: "22px",
                                            fontStyle: "normal",
                                            fontWeight: "700",
                                            lineHeight: "normal",
                                            mb: '20px',
                                            mt: '30px'
                                        }}
                                    >
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
                        height: { xl: '500px', md: '800px'},
                        zIndex: 3,
                        }} 
                    >
                        <Box>
                            <PosterImage  src={Poster} ></PosterImage>
                        </Box>
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
                                            lineHeight: '56px'
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

                    {/* <Box 
                        sx={{
                        display: 'flex',
                        alignItems: 'center', 
                        position: 'relative',
                        gap: '50px',
                        flexDirection: 'column',
                        bgcolor: 'blue',
                        height: '500px',
                        zIndex: 3,
                        }} 
                    >
                        NEXT 
                    </Box> */}

                </Container>
            <Footer />
        </>
    )
}
