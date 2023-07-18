import { Link, useNavigate,  } from 'react-router-dom'

import Searching from '../../general/Searching'
import NavBar from '../../general/NavBar'
import VariantButtonGroup from '../../general/ViewButtons'
import FloatingActionButtonSize from '../../general/ButtonFloat'
import { useState } from 'react'
import axios from 'axios'
import { useThemeContext } from '../../../context/ThemeContext'


function CategoryList(props) {
  const {category} = props
  const {deleteCategory} = props
  const {Theme} = useThemeContext()


  // const {deleteCategory} = props
  const[search,setSearch] = useState("")

  
  
  const enviarSearch = (msg) =>{
    setSearch(msg.target.value)
  }

  let result = []
  if(!search){   
  result = category
    }
  else{
  result = category.filter((dato)=>
  dato.name.toLowerCase().includes(search.toLocaleLowerCase())
  )
    }



  return (
    <>
      
    
    <div>
   
    

<Searching
enviarSearch={enviarSearch}/>
            
    <table id={Theme} className='table table-striped'>
        <thead className='bg-primary text-white'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th></th> 
            </tr>
            {result.map( (categori) => (
                <tr key={categori.id}>
                    <td>{categori.id}</td>
                    <td>{categori.name}</td>
                    <td>
                        <Link to={`/edit_category/${categori.id}`} className='btn btn-warning'>Edit</Link>
                        <button onClick={()=>deleteCategory(categori.id)} className='btn btn-danger'>Delete</button>
                    </td>

                </tr>
            ))}

        </thead>
        <tbody>

        </tbody>
    </table> 
    <Link to='/create_category'>
        
    <FloatingActionButtonSize/>
  </Link>  
</div>
    </>
  )
}

export default CategoryList