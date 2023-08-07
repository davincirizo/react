import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import SwitchTheme from './Switch';
import storage from '../../storage/Storage';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import * as React from 'react';
import { useState } from 'react';

const pages = [ 
  {name:'Categorias',link:'/show_category'},
  {name:'Productos',link:'/show_product'},
]
const settings = [
  {name:'Profile',link:'/user_profile'},
 ];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const endpoint_image = 'http://127.0.0.1:8000/storage/'
     

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const enpoint = 'http://127.0.0.1:8000/api/logout'
  const navigate = useNavigate()
  const logout = async()=>{
    const token = storage.get('authToken')
    storage.remove('authToken');
    storage.remove('authUser');
    console.log(storage.get('authUser'))
    await axios.post(enpoint,{},{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    navigate('/')
   
  } 
  return(
   

<AppBar position="static">
<Container maxWidth="xl">
  <Toolbar disableGutters>
    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      LOGO
    </Typography>

    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <Link to={page.link} key={page.name}>
          <MenuItem  onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page.name}</Typography>
          </MenuItem>
          </Link>

        ))}
      </Menu>
    </Box>
    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    <Typography
      variant="h5"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      LOGO
    </Typography>


  

  {storage.get('authUser')?(
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Link to={page.link} key={page.name}>
        <Button
          
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page.name}
        </Button>
        </Link>  
      ))}
    </Box>):<></>
}
{storage.get('authUser')?(
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={`${endpoint_image}${storage.get('authUser').image}`} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <Link to={setting.link} key={setting.name}>
          <MenuItem >
            <Typography textAlign="center">{setting.name}</Typography>
          </MenuItem>
          </Link>


          

        ))}
        <MenuItem onClick={logout}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
      </Menu>
    </Box>):
    <>
    <Link to={'/login'}>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            Login
          </Button>
      </Box>
    </Link>
    <Link to={'/register'}>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button sx={{ my: 2, color: 'white', display: 'block' }}>
            Register
          </Button>
      </Box>

    </Link>
    </>}
  </Toolbar>
</Container>
</AppBar>
    
  )
}

export default NavBar