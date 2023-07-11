
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export default function ButtonsAvalaible(props) {
  const {name} = props
  const {cant} = props

  return (
    <>
      <Button>
      <Inventory2Icon/>
         {name}
         <h4>{cant}</h4>
      </Button>
    </>
  );
}