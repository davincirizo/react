import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


function ButtonDelete() {
  return (
    <IconButton aria-label="delete">
        <DeleteIcon 
        color="success"
        fontSize="small"/>
      </IconButton>
  )
}

export default ButtonDelete