import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons(props) {
    const {tittle} = props
    const {type} = props

  return (
    
    // <Stack direction="row" spacing={2}>
      
      <Button type={type} variant="contained" color="success">
        {tittle}
      </Button>
      
    // </Stack>
    
  );
}