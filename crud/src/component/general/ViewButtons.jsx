
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { useViewProductContext } from '../../context/ViewProductContext';

export default function ViewButtons() {
  // const [typeView,setTypeView] = useState('tree')
  const {setViewProduct} = useViewProductContext()
  
  const ViewTree = () =>{
    setViewProduct('tree')
  }

  const ViewCard = () =>{
    setViewProduct('card')
  }
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={ViewTree}>Tree</Button>
      <Button onClick={ViewCard}>Card</Button>
    </ButtonGroup>
  );
}