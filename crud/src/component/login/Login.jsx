import { useForm } from "react-hook-form"
import NavBar from "../general/NavBar"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import storage from "../../storage/Storage"
import { Button } from "bootstrap"


function LoginUser() {
    const endpoint = 'http://127.0.0.1:8000/api/login'
    const { register , handleSubmit }= useForm()
    const navigate = useNavigate()
    const [errors,setErrors] = useState([]);
    const [errorAuth,setErrorAuth] = useState([]);
    const endponit_cookie = 'http://127.0.0.1:8000'
    const csrf = async()=>{
      await axios.get(`${endponit_cookie}/sanctum/csrf-cookie`);
    }
    const Login = async (data) =>{
      try{
        await csrf();
      const res = await axios.post(endpoint,{
          email:data.email,
          password:data.password,
          
      })

      storage.set('authToken',res.data.token);
      storage.set('authUser',res.data.data);
      // console.log(storage.get('authUser'))

      navigate('/show_category')
    }
      catch(e){
        if(e.response.status === 400){    
          setErrorAuth([])
          setErrors(e.response.data.errors) 
        }  
        if(e.response.status === 401){  
          setErrors([])  
          setErrorAuth(e.response.data.errors) 
        } 

  }
}
  return (
    <>
        <NavBar/>
        <form onSubmit={ handleSubmit(Login) } className='form-react'>
        <div className='form-control'>
            <label>
               Email
            </label>
            <input type="email" {...register('email')}/>
            {errors.email &&(
              <small className='fail'>
              {errors.email}
              </small>
                )}
            
        </div>
        <div className='form-control'>
            <label>
               Password
            </label>
            <input type="password" {...register('password')}/>
           
            {errors.password &&(
              <small className='fail'>
              {errors.password}
              </small>
                )}
        </div>
        {errorAuth &&(
              <small className='fail'>
              {errorAuth}
              </small>
                )}
    
        <button type='submit'>Send</button>
    </form>
    <Link to={'/register'}>
    <button>
      Register
    </button>
    </Link>
    </>
  )

}

export default LoginUser