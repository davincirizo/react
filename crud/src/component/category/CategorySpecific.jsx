import React, { useEffect, useState } from 'react'
import NavBar from '../general/NavBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import GaleryImage from '../general/GaleryImage'

function CategorySpecific() {
  const {id} = useParams()
  const endpoint = 'http://127.0.0.1:8000/api/categories/'
  const [name,setName] = useState('')
  const [images,setImages] = useState([])


  useEffect(() =>{
    const getCategoryById  = async ()=>{
       const response = await axios.get(`${endpoint}${id}`)
        setName(response.data.name)
        if(response.data.imagenes){
            setImages(response.data.imagenes)
        }
        console.log(response.data.imagenes)

    }
    getCategoryById()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
        <>
        <NavBar/>
            <div>
                <h2>{name}</h2>
                <GaleryImage
                images={images}
                />
            </div>
        </>
  )
}

export default CategorySpecific