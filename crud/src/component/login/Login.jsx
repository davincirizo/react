import { useForm } from "react-hook-form"
import NavBar from "../general/NavBar"
import { useNavigate } from "react-router-dom"
import axios from "axios"


function LoginUser() {
    const endpoint = 'http://127.0.0.1:8000/api/login'
    const { register , handleSubmit, formState:{errors},watch }= useForm()
    const navigate = useNavigate()

    const Login = async (data) =>{
      await axios.post(endpoint,{
          email:data.email,
          password:data.password,
          
      })
      navigate('/show_category')
  }
  return (
    <>
        <NavBar/>
        <form onSubmit={ handleSubmit(Login) } className='form-react'>
        <div className='form-control'>
            <label>
               Email
            </label>
            <input type="email" {...register('email',{required:true})}/>
            {errors.user?.type === 'required' && 
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

export default LoginUser