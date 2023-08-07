import React from 'react'
import NavBar from '../general/NavBar'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { show_alert } from '../notification/ShowAlert'
import axios from 'axios'

function GetResetPassword() {
    const { register , handleSubmit }= useForm()
    const endpoint = 'http://127.0.0.1:8000/api/reset-password'
    const navigate = useNavigate()
    const {token} = useParams()

    const change_password = async (data) =>{
        try{
        const res = await axios.post(`${endpoint}/${token}`,{
            password:data.password,   
        })
        const msj = res.data.message
        const icon = 'succes'
        show_alert(msj,icon)
      }
  
        catch(e){
          
            const msj = e.response.data.message
            const icon = 'error'
            show_alert(msj,icon)
            console.log(e)
            navigate('/')
    
  
    }
  }
  return (
    <>
    <NavBar/>
    <form onSubmit={ handleSubmit(change_password) } className='form-react'>
        <div className='form-control'>
            <label>
               New Password
            </label>
            <input type="password" {...register('password')}/>
           
            
        </div>

      
    
        <button type='submit'>Send</button>
    </form>

    </>
  )
}

export default GetResetPassword