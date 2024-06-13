import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom'
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
} from '@mui/material';
import {
  Menu as MenuIcon,
  Face6TwoTone as Face6TwoToneIcon,
  ShoppingCartTwoTone as ShoppingCartTwoToneIcon,
  ReceiptLongTwoTone as ReceiptLongTwoToneIcon,
  PendingActionsTwoTone as PendingActionsTwoToneIcon,
  HomeTwoTone as HomeTwoToneIcon,
  LogoutOutlined as LogoutOutlined
} from '@mui/icons-material'; 
import { cloneElement } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useAuth0();

  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuList = [
    {
      name: 'Dashboard',
      url: '/client-dashboard',
      icon: <HomeTwoToneIcon />,
    },
    {
      name: 'Order',
      url: '/client-dashboard',
      icon: <ShoppingCartTwoToneIcon />,
    },
    {
      name: 'Order Status',
      url: '/history',
      icon: <ReceiptLongTwoToneIcon />,
    },
    {
      name: 'Transaction History',
      url: '/history',
      icon: <PendingActionsTwoToneIcon />,
    }
  ]

  const renderIcon = (icon) => {
    return cloneElement(icon, { fontSize: 'inherit' });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={closeMenu}
      onKeyDown={closeMenu}
    >
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
                <a onClick={()=> {navigate(item.url)}} style={{ textDecoration: 'none', color: '#212B36' }}>{item.name}</a>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={()=> logout({ logoutParams: { returnTo: window.location.origin } })}>
            <ListItemIcon>
                {renderIcon(<LogoutOutlined />)}
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  

  return (
    <Box sx={{ flexGrow: 1, mb: 7 }}>
      <AppBar position="fixed" sx={{ background:'#090d1d' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h3" 
            component="div" 
            sx={{ color: '#FFF', fontWeight:'700' }}
          >
            Hydro<span style={{ color:'#60A5FA' }}>Maze</span>
          </Typography>
          <Box ml={1} />
        </Toolbar>
      </AppBar>
      <Drawer 
        anchor={'left'} 
        open={menuOpen} 
        onClose={closeMenu}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default AuthHeader;
