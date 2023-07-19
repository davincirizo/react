
import NavBar from '../general/NavBar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductList from './views/ProductTree'
import ProductCard from './views/ProductCard'
import ViewButtons from '../general/ViewButtons'
import { useThemeContext } from '../../context/ThemeContext'
import { ViewProductContextProvider, useViewProductContext } from '../../context/ViewProductContext'


function ShowProduct() {
    const endpoint = 'http://127.0.0.1:8000/api'
    const [products,setProducts] = useState([])
    // const [typeView,setTypeView] = useState('tree')
    const {Theme} = useThemeContext()
    const {ViewProduct} = useViewProductContext()
    
    
    useEffect (() =>{
      getAllProducts();
    }, [])

    const getAllProducts = async () =>{
    const response = await axios.get(`${endpoint}/products`)
    setProducts(response.data.data)
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