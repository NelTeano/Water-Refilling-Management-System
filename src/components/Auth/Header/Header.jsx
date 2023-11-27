import { useState } from 'react';
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
} from '@mui/icons-material'; 
import { cloneElement } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuList = [
    {
      name: 'Home',
      url: '#',
      icon: <HomeTwoToneIcon />,
    },
    {
      name: 'Order',
      url: '#',
      icon: <ShoppingCartTwoToneIcon />,
    },
    {
      name: 'Order Status',
      url: '#',
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
        {menuList.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {renderIcon(item.icon)}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
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

export default Header;
