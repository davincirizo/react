import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {show_alert} from '../function';

const ShowCategoria = () => {
  const url = 'http://api-products.run';
  const [category,setCategory] = useState([]);
  const [id,setId]=useState('');
  const [name,setName]=useState('');
  const [operaction,setOperation]=useState(1);
  const [tittle,setTittle]=useState('');

  useEffect (()=>{
    getCategory();

  },[]);

  const getCategory = async () => {
    const respuesta = await axios.get(url);
    setCategory(respuesta.data)
  }




  
  return (
    <div className='App'>
      <div className='container-fluid'>
        <div className='row mt-3'>
          <div className=' col-md-4 offset-md-4'>
            <div className='d-grid mx-auto'>
              <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalCategory'>
               
               
              </button>

            </div>

          </div>

        </div>
      </div>
      <div className='modal fade'>
        
      </div> 
    </div>
  )
}

export default ShowCategoria

