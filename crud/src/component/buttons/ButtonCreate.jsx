import { IconButton } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';



function ButtonCreate() {

  return (
    <div>
      
    <Link to='/createroute'>
    <IconButton 
      aria-label="delete">
      
    <AddCircleIcon 
        color="success"
        fontSize="large">
  
        </AddCircleIcon>
      </IconButton>
    </Link>
    
    </div>
  )
  
}

export default ButtonCreate