import axios from 'axios'
import { useEffect, useState } from 'react'
import CategoryList from './views/CategoryList'
import NavBar from '../general/NavBar'
import CategoryCard from './views/CategoryCard'
import ViewButtons from '../general/ViewButtons'
import '../../App.css'
import { useThemeContext } from '../../context/ThemeContext'
import { ViewProductContextProvider, useViewProductContext } from '../../context/ViewProductContext'
import storage from '../../storage/Storage'
import { useNavigate } from 'react-router-dom'

const ShowCategory = () => {

    const endpoint = 'http://127.0.0.1:8000/api'
    const [category,setCategory] = useState([])
    const {ViewProduct} = useViewProductContext()
    const {Theme} = useThemeContext()
    const navigate = useNavigate()
    useEffect (() =>{
        getAllCategory()
    },[])

    const getAllCategory = async () =>{
      if (storage.get('authUser')){
        const token = storage.get('authToken')
        const response = await axios.get(`${endpoint}/categories`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        // console.log(token)
        setCategory(response.data)
      }
      else{
        navigate('/')
      }
        
    }

    const deleteCategory = async (id) =>{
      await axios.delete(`${endpoint}/categories/${id}`)
      getAllCategory()
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