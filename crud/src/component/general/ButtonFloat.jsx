
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from '@mui/material';

export default function FloatingActionButtonSize(props) {
    const {back} = props
    return (
    
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
    
  );
}