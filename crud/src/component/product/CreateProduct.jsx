import axios from 'axios'
import  { useState,useEffect } from 'react'
import { useNavigate, } from 'react-router-dom'
import NavBar from '../general/NavBar'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




function CreateProduct() {
  const endpoint = 'http://127.0.0.1:8000/api/products'
  const url_categories = 'http://127.0.0.1:8000/api/categories'
    const [categories,setCategories] = useState([])
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [stock,setStock] = useState(0)
    const [category_id,setCategory_id] = useState(0)

    const navigate = useNavigate()

  
    useEffect(() =>{
      getAllCategory()
  },[])

  const getAllCategory = async () =>{
    const response = await axios.get(url_categories)
    setCategories(response.data)
}
    
    const store = async (e) =>{
        e.preventDefault()
        await axios.post(endpoint,{
          name:name,
          price:price,
          stock:stock,
          category_id:category_id
        })
        navigate('/show_product')
    }
    
  return (
    <div>
      <NavBar/>
      <h3>Create Product</h3>
      <form onSubmit={store}>
          <div className='mb-3'>
              <label className='form-label'>Nombre</label>
              <input
              value={name}
              onChange={(e)=> setName(e.target.value)}
              type='text'
              className='form-control'
              />
          </div>
          <div className='mb-3'>
              <label className='form-label'>Precio</label>
              <input
              value={price}
              onChange={(e)=> setPrice(e.target.value)}
              type='number'
              className='form-control'
              />
          </div>
          <div className='mb-3'>
              <label className='form-label'>Stock</label>
              <input
              value={stock}
              onChange={(e)=> setStock(e.target.value)}
              type='number'
              className='form-control'
              />
          </div>
          <div className='mb-3'>
            
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
             <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Categories"
                  value={category_id}
                  onChange={(e)=> setCategory_id(e.target.value)}
            >
                  {categories.map( (category) => (
                    <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                      
                    ))}
                </Select>
              </FormControl>
            </Box>
             
          </div>
         
          <button type='submit' className='btn btn-primary'>Guardar</button>
      </form>
    </div>
  )
}

export default CreateProduct




