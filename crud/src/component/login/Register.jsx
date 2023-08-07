import { useForm } from 'react-hook-form'
import NavBar from '../general/NavBar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import ColorButtons from '../general/Button'
import { Avatar } from "@mui/material"

function Register() {
  const endpoint = 'http://127.0.0.1:8000/api/registro'  
  // const { register , handleSubmit, formState:{errors},watch }= useForm()
  const navigate = useNavigate();
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('');
  const [errors,setErrors] = useState([]);
  const [file,setFile] = useState(null)
  const [file_name,setfileName] = useState('')
  const [url_file,setURL_File] = useState(null)
  const Register = async (event) =>{
    event.preventDefault()
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('image', file);
    formData.append('password', password);
    
    try{
      await axios.post(endpoint, formData,{
          headers:{'Content-Type':"multipart/form-data"},
      } );
      navigate('/login')  
    }

  
  catch(e){
    if(e.response.status === 400){
      setErrors(e.response.data.errors)
    }
  }
  
    
    
}

const Changeimage = async (e) =>{
  const file = e
  let url = URL.createObjectURL(file)
  setFile(e)
  setURL_File(url)
  setfileName(e.name)
  

}
  return (
    <>
    <NavBar/>
    <form style={{marginLeft: '20px',marginTop:'20px'}} onSubmit={Register}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input
                value={name}
                onChange={(e)=> setName(e.target.value)}
                type='text'
                className='form-control'
                />
                {errors.name &&(
                  <span>{errors.name}</span>
                )}
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                type='text'
                className='form-control'
                
                />
                {errors.email &&(
                  <span>{errors.email}</span>
                )}
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                type='password'
                className='form-control'
                />
                {errors.password &&(
                  <span>{errors.password}</span>
                )}
            </div>
            <div className='mb-3'>
                <label className='form-label'>Avatar</label>
                <input
                name='file'
                onChange={(e)=>Changeimage(e.target.files[0])}
                type='file'
                className='form-control'
                accept="image/*"
                />

                <Avatar
                alt="Remy Sharp" 
                src={url_file} 
                sx={{ width: 200, height: 200 }}
                />
                
            </div>


            <div style={{ display: 'inline-block', marginLeft: '10px',marginTop:'20px' }}>
                <ColorButtons
                type='submit'
                tittle='Guardar'/>
             </div>
             <div onClick={()=>navigate(-1)} style={{ display: 'inline-block', marginLeft: '10px',marginTop:'20px' }}>
                
                    <ColorButtons
                    tittle='Descartar'/>
                
            </div>
            
           
           

        </form>
    {/* <form onSubmit={ handleSubmit(Register) } className='form-react'>
    <div className='form-control'>
        <label>
           Name
        </label>
        <input type="text" {...register('name',{required:true})}/>
        {errors.name?.type === 'required' && 
        <small className='fail'>
          El campo no puede estar vacio
          </small>}
    </div>
    <div className='form-control'>
        <label>
           Email
        </label>
        <input type="email" {...register('email',{required:true})}/>
        {errors.email?.type === 'required' && 
        <small className='fail'>
          El campo no puede estar vacio
          </small>}
    </div>
    <div className='form-control'>
        <label>
           Password
        </label>
        <input type="password" {...register('password',{required:true})}/>
        {errors.password?.type === 'required' && 
        <small className='fail'>
          El campo no puede estar vacio
          </small>}
    </div>

    <button type='submit'>Send</button>
</form> */}
</>
  )
}

export default Register