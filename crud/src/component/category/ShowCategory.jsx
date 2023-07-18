import axios from 'axios'
import { useEffect, useState } from 'react'
import CategoryList from './views/CategoryList'
import NavBar from '../general/NavBar'
import CategoryCard from './views/CategoryCard'
import ViewButtons from '../general/ViewButtons'
import '../../App.css'
import { useThemeContext } from '../../context/ThemeContext'

const ShowCategory = () => {

    const endpoint = 'http://127.0.0.1:8000/api'
    const [category,setCategory] = useState([])
    const [typeView,setTypeView] = useState('tree')
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

  
  const enviarTypeView = (msg) =>{
    setTypeView(msg)
  }
   

    

  return (
    <div id={Theme}>
 
      <NavBar/>

      <ViewButtons
      enviarTypeView={enviarTypeView}/>
    
   

    {typeView === 'tree' ?
     <CategoryList
     category={category}
     deleteCategory={deleteCategory}
     />
     : <CategoryCard
     category={category}
     deleteCategory={deleteCategory}
     />}
     
    </div>
  )
}

export default ShowCategory