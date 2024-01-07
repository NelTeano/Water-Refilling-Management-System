import React, { useState } from 'react';

// COMPONENTS
import { Header } from '../../components/Header.jsx';
import { Footer } from '../../components/Footer.jsx';
import { Link } from 'react-router-dom';

import {
    Box,
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
} from '@mui/material';


// IMAGES
import PeopleDrinkingWater from '../../assets/images/PeopleDrinking.jpg'
import CellphoneOrderPrototype from '../../assets/images/CellphoneOrder-Prototype.png'

import orderLogo from '../../assets/images/orderLogo.png'
import deliveryLogo from '../../assets/images/deliveryLogo.png'
import qualityLogo from '../../assets/images/courierLogo.png'

// STYLES
import './homePage.css'

import AuthButton from '../../components/AuthButton.jsx'


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
                <Container maxWidth={false} disableGutters >
                    <Box 
                        sx={{
                        display: 'flex',
                        alignItems: 'center', 
                        justifyContent: 'space-around',
                        bgcolor: 'white',
                        height: '500px',
                        width: '100%',
                    }}>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <img src={PeopleDrinkingWater} height={'400px'} width={'400px'}></img>
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
                            <Box >
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
                                    padding: '10px 30px 10px 30px'
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
                        height: '500px',
                        }} 
                    >
                        <Typography 
                            sx={{
                                textAlign: "center",
                                fontSize: "45px",
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
                </Container>
            <Footer />
        </>
    )
}
