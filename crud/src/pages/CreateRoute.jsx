import { useForm } from 'react-hook-form'

const CreateRoute = () => {
    const { register , handleSubmit }= useForm()

  return (
    <form   className='form-react'>
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
  )
}

export default CreateRoute