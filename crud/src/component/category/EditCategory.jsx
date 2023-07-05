import  { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../general/NavBar'

const EditCategory = () => {
  const endpoint = 'http://127.0.0.1:8000/api/categories/'
  const [name,setName] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()

  const update = async (e)=>{
    e.preventDefault()
    await axios.put(`${endpoint}${id}`,{
      name:name
    })
    navigate('/')
  }

  useEffect(() =>{
    const getCategoryById  = async ()=>{
       const response = await axios.get(`${endpoint}${id}`)
       setName(response.data.name)
       console.log(name)
    }
    getCategoryById()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      <NavBar/>
        <h3>Edit Category</h3>
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
            <button type='submit' className='btn btn-primary'>Actualizar</button>
        </form>
    </div>  
  )
}

export default EditCategory