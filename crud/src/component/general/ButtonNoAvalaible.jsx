import Button from '@mui/material/Button';



function ButtonNoAvalaible(props) {
    const {name} = props

  return (
    <div>      
        <Button disabled>
            {name}
        </Button>
    </div>
  )
}

export default ButtonNoAvalaible