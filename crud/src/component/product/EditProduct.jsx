import  { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../general/NavBar'

function EditProduct() {
  const endpoint = 'http://127.0.0.1:8000/api/products/'
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [stock,setStock] = useState(0)
    const [category_id,setCategory_id] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e)=>{
      e.preventDefault()
      await axios.put(`${endpoint}${id}`,{
        name:name,
        price:price,
        stock:stock,
        category_id:category_id
      })
      navigate('/show_product')
    }

    useEffect(() =>{
      const getProductById  = async ()=>{
         const response = await axios.get(`${endpoint}${id}`)
         setName(response.data.name)
         setPrice(response.data.price)
         setStock(response.data.stock)
         setCategory_id(response.data.category_id)

         console.log(name)
      }
      getProductById()
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


  return (
    <div>
      <NavBar/>
        <h3>Edit Product</h3>
        <form onSubmit={update}>
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
                <label className='form-label'>Price</label>
                <input
                value={price}
                onChange={(e)=> setPrice(e.target.value)}
                type='text'
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
            <button type='submit' className='btn btn-primary'>Actualizar</button>
        </form>
    </div>  
  )
}

export default EditProduct