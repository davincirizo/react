import React from 'react'
import NavBar from '../general/NavBar'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { show_alert } from '../notification/ShowAlert'

function ResendEmail() {
    const { register , handleSubmit }= useForm()
    const endpoint = 'http://127.0.0.1:8000/api/email/verification-notification'
    const navigate = useNavigate()

    const Resend_email = async (data) =>{
        try{
        const res = await axios.post(endpoint,{
            email:data.email,   
        })
        const msj = res.data.message
        const icon = 'info'
        show_alert(msj,icon)

        
    
      }
  
        catch(e){
          if(e.response.status == 404){
            const msj = e.response.data.message
            const icon = 'error'
            show_alert(msj,icon)
          }
  
    }
  }
  return (
    <>
    <NavBar/>
    <form onSubmit={ handleSubmit(Resend_email) } className='form-react'>
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

export default ResendEmail