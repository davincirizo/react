import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../general/NavBar'

const ShowCategory = () => {
    
    const endpoint = 'http://127.0.0.1:8000/api'
    const [category,setCategory] = useState([])

    useEffect (() =>{
        getAllCategory()
    },[])

    const getAllCategory = async () =>{
        const response = await axios.get(`${endpoint}/categories`)
        setCategory(response.data)
    }

    const deleteCategory = async (id) =>{
        await axios.delete(`${endpoint}/categories/${id}`)
        getAllCategory()

    }

  return (
    <>
    <NavBar/>
    <div>
        
       <div className='d-grid gap-2'>
            <Link to='/create_category'  className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>  
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th></th> 
                </tr>
                {category.map( (categori) => (
                    <tr key={categori.id}>
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
    </div>
    </>
  )
}

export default ShowCategory