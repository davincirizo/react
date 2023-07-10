
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export default function TextButtons(props) {
  const {name} = props
  return (
    <>
      <Button>
      <Inventory2Icon/>
         {name}
      </Button>
      {/* <Button disabled>Disabled</Button> */}
      {/* <Button href="#text-buttons">Link</Button> */}
    </>
  );
}