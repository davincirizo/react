import axios from "axios"
import NavBar from "../component/general/NavBar"
import storage from "../storage/Storage"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import ColorButtons from "../component/general/Button"
import { useNavigate } from "react-router-dom"



function Profile() {
    const endpoint = 'http://127.0.0.1:8000/api/user'
    const endpoint_put = 'http://127.0.0.1:8000/api/profile/'
    const token = storage.get('authToken')

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [id,setId] = useState('')
    const [image,setImage] = useState('')
    console.log(image)
    const navigate = useNavigate()

    const getUserLogued  = async ()=>{
      const response = await axios.get(endpoint,{headers: {
        'Authorization': `Bearer ${token}`
      }})
      setName(response.data.name) 
      setEmail(response.data.email)
      setId(response.data.id)
   }
   useEffect(() =>{
    getUserLogued()


     // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

  
   const Changeimage = async(e) =>{
      console.log(e)
      setImage(e.target.value)

   }


  const save = async (e) =>{
    e.preventDefault()
      const res = await axios.put(`${endpoint_put}${id}`,{
        name:name,
        email:email,
      })

      storage.set('authUser',res.data.data);
      navigate('/show_category')
  }
    return (
    <>
    <NavBar/>
    <form onSubmit={save} style={{marginLeft: '20px',marginTop:'20px'}}>
    <div  className='mb-3'>
                <label className='form-label'>Email</label>
                <input
                readOnly
                value={email}
                type='text'
                className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input
                value={name}
                onChange={(e)=> setName(e.target.value)}
                type='text'
                className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Avatar</label>
                <input
                
                onChange={Changeimage}
                type='file'
                className='form-control'
                />
                <img src='C:\fakepath\face_co.png'/>
            </div>
         
            <ColorButtons tittle='Guardar Cambios' type='submit'/>
            </form>
    </>
  )
}

export default Profile