import { useForm } from 'react-hook-form'
import NavBar from '../general/NavBar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const endpoint = 'http://127.0.0.1:8000/api/registro'  
  const { register , handleSubmit, formState:{errors},watch }= useForm()
  const navigate = useNavigate()
    
  const login = async (data) =>{
      await axios.post(endpoint,{
          name:data.name,
          email:data.email,
          password:data.password,
          
      })
      navigate('/show_category')
  }
  return (
    <>
    <NavBar/>
    <form onSubmit={ handleSubmit(login) } className='form-react'>
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
</form>
</>
  )
}

export default Register