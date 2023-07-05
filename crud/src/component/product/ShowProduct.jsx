
import NavBar from '../general/NavBar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function ShowProduct() {
    const endpoint = 'http://127.0.0.1:8000/api'
    const [products,setProducts] = useState([])

    useEffect (() =>{
      getAllProducts()
  },[])

    const getAllProducts = async () =>{
    const response = await axios.get(`${endpoint}/products`)
    setProducts(response.data)
}
    const deleteProduct = async (id) =>{
    await axios.delete(`${endpoint}/products/${id}`)
    getAllProducts()

  }

  return (
    <div>
        <NavBar/>   
        <div>
        
       <div className='d-grid gap-2'>
            <Link to='/create_product'  className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>  
        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th>Precio</th> 
                    <th>Stock</th> 
                    <th>Categoria</th> 
                    <th>Action</th> 
                </tr>
                {products.map( (product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.category_id}</td>
                        <td>
                            <Link to={`/edit_product/${product.id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={()=>deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                        </td>

                    </tr>
                ))}

            </thead>
            <tbody>

            </tbody>
        </table>   
    </div>
    </div>
  )
}

export default ShowProduct