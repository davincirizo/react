import axios from 'axios'
import NavBar from '../general/NavBar'
import { useForm } from 'react-hook-form'
import { show_alert } from '../notification/ShowAlert'

function ResetPassword() {
  const endpoint = 'http://127.0.0.1:8000/api/forgot-password'
  const { register , handleSubmit }= useForm()

  const ResetPassword = async (data) =>{
    try
   { const res = await axios.post(endpoint,{
        email:data.email,
    })
    const msj = res.data.message
    const icon = 'info'
    show_alert(msj,icon)
   }
    catch(e){
      
        const msj = e.response.data.message
        const icon = 'error'
        show_alert(msj,icon)
     
    }
  }
  return (
    <>
    <NavBar/>
    <form onSubmit={ handleSubmit(ResetPassword) } className='form-react'>
        <div className='form-control'>
            <label>
               Email
            </label>
            <input type="email" {...register('email')}/>
           
            
        </div>

      
    
        <button type='submit'>Send</button>
    </form>
    </>
  )
}

export default ResetPassword