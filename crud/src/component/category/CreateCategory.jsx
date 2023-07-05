import axios from 'axios'
import  { useState } from 'react'
import { useNavigate, } from 'react-router-dom'
import NavBar from '../general/NavBar'


const CreateCategory = () => {
    const endpoint = 'http://127.0.0.1:8000/api/categories'
    const [name,setName] = useState('')

    const navigate = useNavigate()
    
    const store = async (e) =>{
        e.preventDefault()
        await axios.post(endpoint,{name:name})
        navigate('/')
    }
    
    return (
    <div>
        <NavBar/>
        <h3>Create Product</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input
                value={name}
                onChange={(e)=> setName(e.target.value)}
                type='text'
                className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
  )
}

export default CreateCategory