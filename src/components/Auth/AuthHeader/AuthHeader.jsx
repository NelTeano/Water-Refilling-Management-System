import { useState } from 'react';
import { Link } from 'react-router-dom'
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
          <ListItemText sx={{textDecoration: 'underline'}} primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  

  return (
    <Box sx={{ flexGrow: 1, mb: 7 }}>
      <AppBar position="fixed" sx={{ background:'#099DBD' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
          >
            HydroMaze
          </Typography>
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
