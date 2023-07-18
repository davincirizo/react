import axios from 'axios'
import  { useState,useEffect } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import NavBar from '../general/NavBar'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ColorButtons from '../general/Button';
import BasicSelect from '../general/Select';




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

  const enviarValue = (msg) =>{
    setCategory_id(msg.target.value)
    console.log(category_id)
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
            
          <BasicSelect
          tittle='Categorias'
          types={categories}
          enviarValue={enviarValue}
          />
        
             
          </div>
         
              <div style={{ display: 'inline-block', marginLeft: '10px',marginTop:'20px' }}>
                <ColorButtons
                type='submit'
                tittle='Guardar'/>
             </div>
             <div onClick={()=>navigate(-1)} style={{ display: 'inline-block', marginLeft: '10px',marginTop:'20px' }}>
                
                    <ColorButtons
                    tittle='Descartar'/>
                
            </div>
      </form>

    </div>
  )
}

export default CreateProduct




