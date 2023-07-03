import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation = () => {
    const { register , handleSubmit, formState:{errors},watch }= useForm()
    const [colorInput,setColorInput] = useState('#fff7f7')
    const customSubmit = (data) => {
        console.log(data)
    }
     useEffect(() => {
        let words = watch('prueba')
        if (words === 'react'){
          setColorInput('#614ad3')
        }
        else{
          setColorInput('#fff7f7')

        }

     })

    return (
    <>
    <h2>
        Form Vaalidation
    </h2>
    <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
        <div className='form-control'>
            <label>
                Name  
            </label>
            <input type="text" {...register('name',{required:true,maxLength:5})}/>
            {errors.name?.type === 'required' && 
            <small className='fail'>
              El campo no puede estar vacio
              </small>}
            {errors.name?.type === 'maxLength' && 
            <small className='fail'>
              El campo no puede tener mas de 5 caracteres
              </small>}
        </div>
        <div className='form-control'>
            <label>
                Edad
            </label>
            <input type="number" {...register('edad')}/>
        </div>
        <div className='form-control'>
            <label>
                Pais
            </label>
            <input type="text" {...register('pais')}/>
        </div>
        <div className='form-control'>
          <input type="text" {...register('prueba') }style={{backgroundColor:colorInput}}/>
        </div>
        <button type='submit'>Send</button>
    </form>
    </>
  )
}
