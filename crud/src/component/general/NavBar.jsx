import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


function NavBar() {
  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <Link to={'/'} className='btn btn-warning ml-3'>Categorias</Link>
            </Typography  >
            <Typography variant="h6" color="inherit" component="div">
            <Link to={'/show_product'} className='btn btn-warning ml-3'>Productos</Link>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar