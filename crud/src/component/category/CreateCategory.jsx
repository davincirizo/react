import axios from 'axios'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../general/NavBar'
import ColorButtons from '../general/Button'
import { useThemeContext } from '../../context/ThemeContext'
import InputManyImages from '../general/InputManyImages'
import { show_alert } from '../notification/ShowAlert'


const CreateCategory = () => {  
    const endpoint = 'http://127.0.0.1:8000/api/categories'
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const {Theme} = useThemeContext()
    const [images,setImages] = useState([])

    const navigate = useNavigate()
    
    const store = async (e) =>{

        e.preventDefault()
        const formData = new FormData();
        for (let i = 0; i < images.length; i++) {
            formData.append('images[]', images[i].file);
          }
        formData.append('name', name);
        formData.append('description', description);
        // formData.append('images', files);
       
        const response = await axios.post(endpoint, formData,{
            headers:{'Content-Type':"multipart/form-data"},
        } );
        navigate('/show_category')
        const tipo = 'success'
        const msg = response.data.msg
        console.log(response.data)
        show_alert(msg,tipo)
    }
    
    return (
    <div id={Theme}>
        <NavBar/>

        <form style={{marginLeft: '20px',marginTop:'20px'}} onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input
                value={name}
                onChange={(e)=> setName(e.target.value)}
                type='text'
                className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Descripcion</label>
                <input
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                type='text'
                className='form-control'
                />
            </div>
            <div  className='mb-3'>
                <InputManyImages
                images={images}
                 setImages={setImages}
         
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
    </div>
  )
}

export default CreateCategory