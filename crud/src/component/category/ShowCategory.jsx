import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../general/NavBar'
import ColorButtons from '../general/Button'
import VariantButtonGroup from '../general/GroupButtons'
import FloatingActionButtonSize from '../general/ButtonFloat'
import Searching from '../general/Searching'
import { Button } from '@mui/material'

const ShowCategory = () => {

    const endpoint = 'http://127.0.0.1:8000/api'
    const [category,setCategory] = useState([])
    const[search,setSearch] = useState("")


    useEffect (() =>{
        getAllCategory()
    },[])

    const getAllCategory = async () =>{
        const response = await axios.get(`${endpoint}/categories`)
        setCategory(response.data)
        console.log(response.data)

    }

    const deleteCategory = async (id) =>{
        await axios.delete(`${endpoint}/categories/${id}`)
        getAllCategory()

    }

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
    <Link   
    name='Juan'
     to='/prueba'>
    <Button>
        For Play
        </Button>        
    </Link>
    <NavBar/>
    
        <div>
        <VariantButtonGroup
        card='/view_card_category'
        tree='/'
        />

    <Searching
    enviarSearch={enviarSearch}/>
                
        <table className='table table-striped'>
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

export default ShowCategory