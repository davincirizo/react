
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

export default function ViewButtons({enviarTypeView}) {
  const [typeView,setTypeView] = useState('tree')
  
  const ViewTree = () =>{
    setTypeView('tree')
    enviarTypeView('tree')
  }

  const ViewCard = () =>{
    setTypeView('card')
    enviarTypeView('card')
  }
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={ViewTree}>Tree</Button>
      <Button onClick={ViewCard}>Card</Button>
    </ButtonGroup>
  );
}