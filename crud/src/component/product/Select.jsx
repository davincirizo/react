import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';



export default function BasicSelect(props) {
    // const url_categories = 'http://127.0.0.1:8000/api/categories'
    const {tittle} = props
    const {categories} = props
    const {category} = props

    const [category_id,setCategory] = useState(0)
    // const [categories,setCategories] = useState([])
    
    // useEffect(() =>{
    //     getAllCategory()
    // },[])

    const handleChange = (event) => {
        setCategory(event.target.value);
        // console.log(category_id)
      };

    // const getAllCategory = async () =>{
    //     const response = await axios.get(url_categories)
    //     setCategories(response.data)
    // }
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{tittle}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Categories"
            onChange={handleChange}
            value={category_id}
           
          >
            {categories.map( (category) => (
                <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                    
                ))}
          </Select>
        </FormControl>
      </Box>
    );
  }