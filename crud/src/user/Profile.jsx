import axios from "axios"
import NavBar from "../component/general/NavBar"
import storage from "../storage/Storage"
import { useEffect, useState } from "react"
import ColorButtons from "../component/general/Button"
import { useNavigate } from "react-router-dom"
import { Avatar } from "@mui/material"



function Profile() {
    const endpoint = 'http://127.0.0.1:8000/api/user'
    const endpoint_put = 'http://127.0.0.1:8000/api/profile/'
    const urlImage = 'http://127.0.0.1:8000/storage/'
    const token = storage.get('authToken')

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [id,setId] = useState('')
    const [file,setFile] = useState(null)
    const [url,setURL] = useState(null)

    const navigate = useNavigate()

    const getUserLogued  = async ()=>{
      const response = await axios.get(endpoint,{headers: {
        'Authorization': `Bearer ${token}`
      }})
      console.log(token)
      setName(response.data.name) 
      setEmail(response.data.email)
      setId(response.data.id)
      setFile(response.data.image)
      if(response.data.image){
      setURL(`${urlImage}${response.data.image}`)
     console.log(url)

      }
   }
   useEffect(() =>{
    getUserLogued()


     // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

  
   const Changeimage = async (e) =>{
      const file = e
      let url = URL.createObjectURL(file)
      setFile(e)
      setURL(url)
      console.log(url)

   }


  const save = async () =>{
    // e.preventDefault()  
      // const res = await axios.put(`${endpoint_put}${id}`,{
      //   name:name,
      //   email:email,
      //   image:image,
      // })
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('image', file);

      const res = await axios.put(`${endpoint_put}${id}`, formData,{
        headers:{'Content-Type':"multipart/form-data"},
    } );

      console.log(res)
      // storage.set('authUser',res.data.data);
      navigate('/show_category')
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    await save();

 }
    return (
    <>
    <NavBar/>
    <form onSubmit={handleSubmit} style={{marginLeft: '20px',marginTop:'20px'}}>
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
                
                onChange={(e)=>Changeimage(e.target.files[0])}
                type='file'
                className='form-control'
                accept="image/*"
                />

                <Avatar 
                alt="Remy Sharp" 
                src={url} 
                sx={{ width: 200, height: 200 }}
                />
                
            </div>
         
            <ColorButtons tittle='Guardar Cambios' type='submit'/>
            </form>
    </>
  )
}

export default Profile