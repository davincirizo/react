

import NavBar from '../general/NavBar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductList from './views/ProductTree'
import ProductCard from './views/ProductCard'
import ViewButtons from '../general/ViewButtons'
import { useParams } from 'react-router-dom'
import { useThemeContext } from '../../context/ThemeContext'


function ShowProductFilter() {
    const endpoint = 'http://127.0.0.1:8000/api/products/category/'
    const [products,setProducts] = useState([])
    const [typeView,setTypeView] = useState('tree')
    const {id} = useParams()
    const {Theme} = useThemeContext()

    
    useEffect (() =>{
      getAllProducts();
    }, [])

    const getAllProducts = async () =>{
    const response = await axios.get(`${endpoint}${id}`)
    setProducts(response.data.data)
    }

    const deleteProduct = async (id) =>{
    await axios.delete(`${endpoint}/products/${id}`)
    getAllProducts()
       
  }
  const enviarTypeView = (msg) =>{
    setTypeView(msg)
  }

  return (
    <div id={Theme}>
        <NavBar/> 
        <ViewButtons
      enviarTypeView={enviarTypeView}/>
        <div>
      {typeView === 'tree' ?
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
  )
}

export default ShowProductFilter