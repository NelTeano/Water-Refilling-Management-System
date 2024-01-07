import { useState, cloneElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
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
} from '@mui/material';

import {
    Menu as MenuIcon,
    Face6TwoTone as Face6TwoToneIcon,
    ShoppingCartTwoTone as ShoppingCartTwoToneIcon,
    ReceiptLongTwoTone as ReceiptLongTwoToneIcon,
    PendingActionsTwoTone as PendingActionsTwoToneIcon,
    HomeTwoTone as HomeTwoToneIcon,
    LoginOutlined as LoginOutlined,
    LogoutOutlined as LogoutOutlined
} from '@mui/icons-material'; 

import { Link } from 'react-router-dom';


// import '../styles/header.css';
import Authbutton from './AuthButton';

const menuList = [
    {
        name: 'Home',
        url: '/client-dashboard',
        icon: <HomeTwoToneIcon />,
    },
    {
        name: 'Order',
        url: '/client-dashboard/order',
        icon: <ShoppingCartTwoToneIcon />,
    },
    {
        name: 'Order Status',
        url: '/client-dashboard/order-status',
        icon: <ReceiptLongTwoToneIcon />,
    },
    {
        name: 'Transaction History',
        url: '#',
        icon: <PendingActionsTwoToneIcon />,
    },
];

const renderIcon = (icon) => {
    return cloneElement(icon, { fontSize: 'inherit' });
};

export const Header = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const list = () => (
            <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={closeMenu}
            onKeyDown={closeMenu}
            >
            {isAuthenticated ? 
                <>
                    <List>
                        <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                            <Face6TwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        {menuList.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                {renderIcon(item.icon)}
                            </ListItemIcon>
                            <Link to={item.url}>
                                <ListItemText  style={{ color: 'black' }} primary={item.name} />
                            </Link>
                            </ListItemButton>
                        </ListItem>
                        ))}
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=> logout()}>
                            <ListItemIcon>
                                {renderIcon(<LogoutOutlined />)}
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </> 
                : 
                <List>
                        <ListItem>
                                <Typography>
                                    You Have to Login First
                                </Typography>
                                <Divider />
                        </ListItem>
                        <ListItem disablePadding>
                        <ListItemButton onClick={() => loginWithRedirect()}>
                            <ListItemIcon>
                                <LoginOutlined />
                                </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItemButton>
                        </ListItem>
                    
                </List>
                }
            
            </Box>
        );

    return (
    <Box>
        <AppBar position="fixed" sx={{ background: 'white' }}>
                <Container>
                    <Box
                        sx={{ 
                            background:'white',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between', 
                        }}>
                        <Toolbar>
                            <Typography 
                                variant="h5" 
                                component="div" 
                                sx={{ flexGrow: 1, color: '#34ACAC', fontWeight:'700' }}
                            >
                                HydroMaze
                            </Typography>
                        </Toolbar>

                        <Authbutton/>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton
                                size="large"
                                edge="start"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={toggleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Container>
        </AppBar>
        <Drawer 
            anchor={'right'} 
            open={menuOpen} 
            onClose={closeMenu}
        >
            {list()}
        </Drawer>
    </Box>
    );
};
