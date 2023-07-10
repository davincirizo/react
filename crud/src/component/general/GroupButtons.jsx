
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function VariantButtonGroup(props) {
    const {tree} = props
    const {card} = props
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'right',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
        <Link to ={tree}>
             <Button>Tree</Button>
        </Link>
        <Link to ={card}>
             <Button>Card</Button>
        </Link>
      </ButtonGroup>
    </Box>
  );
}