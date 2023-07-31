import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useEffect } from 'react';



export default function BasicSelect(props) {
    const {tittle} = props
    const {types} = props
    const {enviarValue} = props
    const {type_default} = props
    

    const [type_id,settype] = useState(0)


    const handleChange = (event) => {
      settype(event.target.value);
      enviarValue(event)
  
       
      };
  
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{tittle}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Categories"
            onChange={handleChange}
            value={type_default}
           
          >
            {types.map( (type) => (
                <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
                    
                ))}
          </Select>
        </FormControl>
      </Box>
    );
  }