import axios from 'axios'
import  { useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import NavBar from '../general/NavBar'

function CreateProduct() {
  const endpoint = 'http://127.0.0.1:8000/api/products'
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [stock,setStock] = useState(0)
    const [category_id,setCategory_id] = useState(0)

    const navigate = useNavigate()
    
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
              <label className='form-label'>Categoria</label>
              <input
              value={category_id}
              onChange={(e)=> setCategory_id(e.target.value)}
              type='number'
              className='form-control'
              />
          </div>
          <button type='submit' className='btn btn-primary'>Guardar</button>
      </form>
    </div>
  )
}

export default CreateProduct