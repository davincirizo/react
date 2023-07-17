import  { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import NavBar from '../general/NavBar'
import ColorButtons from '../general/Button'
import BasicSelect from '../general/Select'

function EditProduct() {
  const endpoint = 'http://127.0.0.1:8000/api/products/'
  const url_categories = 'http://127.0.0.1:8000/api/categories'
  const [categories,setCategories] = useState([])
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
    const getAllCategory = async () =>{
      const response = await axios.get(url_categories)
      setCategories(response.data)
  }

   const enviarValue = (msg) =>{
    setCategory_id(msg.target.value)
} 
    useEffect(() =>{
      const getProductById  = async ()=>{
         const response = await axios.get(`${endpoint}${id}`)
         setName(response.data.name)
         setPrice(response.data.price)
         setStock(response.data.stock)
         setCategory_id(response.data.category_id)
         getAllCategory()
         
      
      }
      getProductById()
      console.log(category_id)
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
          <BasicSelect
          tittle='Categorias'
          types={categories}
          enviarValue={enviarValue}
          type_default={category_id}
          />
          <div style={{ display: 'inline-block', marginLeft: '10px',marginTop:'20px' }}>
                <ColorButtons
                type='submit'
                tittle='Guardar'/>
             </div>
             <div style={{ display: 'inline-block', marginLeft: '10px',marginTop:'20px' }}>
                <Link>
                    <ColorButtons
                    tittle='Descartar'/>
                </Link>
            </div>
        </form>
    </div>  
  )
}

export default EditProduct