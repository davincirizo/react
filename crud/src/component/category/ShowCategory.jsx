import axios from 'axios'
import { useEffect, useState } from 'react'
import CategoryList from './views/CategoryList'
import NavBar from '../general/NavBar'
import CategoryCard from './views/CategoryCard'
import ViewButtons from '../general/ViewButtons'
import '../../App.css'
import { useThemeContext } from '../../context/ThemeContext'
import { ViewProductContextProvider, useViewProductContext } from '../../context/ViewProductContext'

const ShowCategory = () => {

    const endpoint = 'http://127.0.0.1:8000/api'
    const [category,setCategory] = useState([])
    const {ViewProduct} = useViewProductContext()
    const {Theme} = useThemeContext()

    useEffect (() =>{
        getAllCategory()
    },[])

    const getAllCategory = async () =>{
        const response = await axios.get(`${endpoint}/categories`)
        setCategory(response.data)
    }

    const deleteCategory = async (id) =>{
      await axios.delete(`${endpoint}/categories/${id}`)
     
  }

  
 
   

    

  return (
  // <ViewProductContextProvider>
    <div id={Theme}>
 
      <NavBar/>

      <ViewButtons/>
    
   

    {ViewProduct === 'tree' ?
     <CategoryList
     category={category}
     deleteCategory={deleteCategory}
     />
     : <CategoryCard
     category={category}
     deleteCategory={deleteCategory}
     />}
     
    </div>
    // </ViewProductContextProvider>

  )
}

export default ShowCategory