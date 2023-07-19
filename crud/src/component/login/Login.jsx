import { useForm } from "react-hook-form"
import NavBar from "../general/NavBar"


function LoginUser() {
    const { register , handleSubmit, formState:{errors},watch }= useForm()
    const customSubmit = (data) => {
        console.log(data)
    }
  return (
    <>
        <NavBar/>
        <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
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