
import NavBar from '../general/NavBar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductList from './views/ProductTree'
import ProductCard from './views/ProductCard'
import ViewButtons from '../general/ViewButtons'
import { useThemeContext } from '../../context/ThemeContext'
import { ViewProductContextProvider, useViewProductContext } from '../../context/ViewProductContext'
import { useNavigate } from 'react-router-dom'
import { show_alert } from '../notification/ShowAlert'
import storage from '../../storage/Storage'


function ShowProduct() {
    const endpoint = 'http://127.0.0.1:8000/api'
    const [products,setProducts] = useState([])
    // const [typeView,setTypeView] = useState('tree')
    const {Theme} = useThemeContext()
    const {ViewProduct} = useViewProductContext()
    const navigate = useNavigate()
    
    useEffect (() =>{
      getAllProducts();
    }, [])

    const getAllProducts = async () =>{
      const token = storage.get('authToken')
      
      try
    {
      const response = await axios.get(`${endpoint}/products`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    setProducts(response.data.data)
  

  }
    catch(e){
      if(e.response.status == 401){
      // {console.log(e.response.data.message)}
      const icon = 'error'
      const msg = e.response.data.message
      navigate('/login')
      show_alert(msg,icon)
    }
    
    }
  }

    const deleteProduct = async (id) =>{
    await axios.delete(`${endpoint}/products/${id}`)
    getAllProducts()
       
  }
  // const enviarTypeView = (msg) =>{
  //   setTypeView(msg)
  // }

  return (
    // <ViewProductContextProvider>

    <div id={Theme}>
        <NavBar/> 
        <ViewButtons/>
        <div>
      {ViewProduct === 'tree' ?
       <ProductList
       products={products}
       deleteProduct={deleteProduct}
       />
       :<ProductCard
       products={products}
       deleteProduct={deleteProduct}
       />}
    </div>
    </div>
    // </ViewProductContextProvider>

  )
}

export default ShowProduct