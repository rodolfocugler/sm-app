"use client"
import * as React from 'react';
import {useRef} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Home from "@/app/components/home";
import {styled} from "@mui/material/styles";
import {Button, useScrollTrigger} from "@mui/material";
import About from "@/app/components/about";
import Services from "@/app/components/services";
import Footer from "@/app/components/footer";
import Customers from "@/app/components/customers";
import Contact from "@/app/components/contact";

const drawerWidth = 240;
const navItems = [ 'Home', 'Quem somos', 'Nossos serviços', 'Clientes', 'Contatos' ];

const MenuOption = styled(Button)(({theme}) => ({
  fontSize: 16,
  fontWeight: 500,
  color: '#fff',
  '&:hover': {
    textDecoration: 'underline',
    fontWeight: 700
  }
}));

function ElevationScroll(props) {
  const {children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
};

function DrawerAppBar(props) {
  const myRef = [ useRef(null), useRef(null), useRef(null), useRef(null), useRef(null) ]
  const executeScroll = (index) => myRef[index].current.scrollIntoView({behavior: "smooth"})

  const {window} = props;
  const [ mobileOpen, setMobileOpen ] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{textAlign: 'left'}}>
              <ListItemText primary={item}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <ElevationScroll {...props}>
        <AppBar component="nav" sx={{display: "flex", paddingY: 1}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{mr: 2, display: {sm: 'none'}}}
            >
              <MenuIcon/>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{display: {xs: 'flex'}, mr: 4}}
            >
              LOGO SM
            </Typography>
            <Box sx={{display: {xs: 'none', sm: 'block'}}}>
              {navItems.map((item, index) => (
                <MenuOption
                  key={item}
                  onClick={() => executeScroll(index)}>
                  {item}
                </MenuOption>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" width={"100%"}>
        <Home innerRef={myRef[0]}/>
        <About innerRef={myRef[1]}/>
        <Services innerRef={myRef[2]}/>
        <Customers innerRef={myRef[3]}/>
        <Contact innerRef={myRef[4]}/>
        <Footer/>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;