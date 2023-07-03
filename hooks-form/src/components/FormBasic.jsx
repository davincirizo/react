import React from 'react'
import { useForm } from 'react-hook-form'

export const FormBasic = () => {
    const { register , handleSubmit }= useForm()
    const customSubmit = (data) => {
        console.log(data)
    }
    return (
    <>
    <h2>
        Form Basic
    </h2>
    <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
        <div className='form-control'>
            <label>
                Name
            </label>
            <input type="text" {...register('name')}/>
        </div>
        <div className='form-control'>
            <label>
                Edad
            </label>
            <input type="text" {...register('edad')}/>
        </div>
        <div className='form-control'>
            <label>
                Pais
            </label>
            <input type="text" {...register('pais')}/>
        </div>
        <button type='submit'>Send</button>
    </form>
    </>
  )
}
