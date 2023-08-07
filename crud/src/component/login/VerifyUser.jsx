import React, { useEffect, useState } from 'react'
import NavBar from '../general/NavBar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { show_alert } from '../notification/ShowAlert'

function VerifyUser() {
    const url = 'http://127.0.0.1:8000/api/email/verify'
    const {id} = useParams()
    const {hash} = useParams()
    const navigate = useNavigate()


    const Verify = async (data) =>{
        const response = await axios.get(`${url}/${id}/${hash}`)

        if (response.status == 201){
            const icon = 'danger'
            const msg = response.data.message
            show_alert(msg,icon)
        }
        if (response.status == 404){
            const icon = 'danger'
            const msg = response.data.message
            show_alert(msg,icon)
        }
        if(response.status == 200){
            navigate('/login')
            const msg = response.data.message
            const icon = 'succes'
            show_alert(msg,icon)
        }
        
     
       
  
    }

    useEffect (() =>{
        Verify()
    },[])

  return (
    <>
    <NavBar/>
   

    </>
  )
}

export default VerifyUser