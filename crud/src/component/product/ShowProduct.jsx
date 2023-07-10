
import NavBar from '../general/NavBar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ColorButtons from '../general/Button'


function ShowProduct() {
    const endpoint = 'http://127.0.0.1:8000/api'
    const [products,setProducts] = useState([])
    const [categories,setCategories] = useState([])

    

    useEffect (() =>{
      getAllProducts();
    }, [])


    const getAllProducts = async () =>{
    const response = await axios.get(`${endpoint}/products`)
    const response_category = await axios.get(`${endpoint}/categories`)
    setProducts(response.data)
    setCategories(response_category.data)
         
    }


    const setCategoryProducts = async() => {
    
        const newProducts = products.map(product => {
            let fuund = categories.find(obj => {
                return obj.id === product.category_id
              });
             
              if (product.category_id !== fuund.id) {
      
                  return product;
                } else {
           
                  return {
                    ...product,
                    category_id: {id:product.category_id,
                                    name:fuund.name}
                                    
                  };
                }
              });
            setProducts(newProducts);   
    }

    // function setCategoryProducts() {
    
    //     const newProducts = products.map(product => {
    //         let fuund = categories.find(obj => {
    //             return obj.id === product.category_id
    //           });

    //             if (product.category_id !== fuund.id) {
      
    //               return product;
    //             } else {
           
    //               return {
    //                 ...product,
    //                 category_id: fuund.name,
    //               };
    //             }
    //           });
    //     setProducts(newProducts);   
        
    // }

    

    const deleteProduct = async (id) =>{
    await axios.delete(`${endpoint}/products/${id}`)
    getAllProducts()
       
  }


  return (
    <div>
        <NavBar/>   
        <button onClick={setCategoryProducts}>
            Hola
        </button>
        <div>
       
       
            <Link to='/create_product'>
              <ColorButtons
              tittle='Crear'
              />
            </Link>
         
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
                       
                        
                        <td>
                            {/* {product.category_id.id} */}
                            {product.category_id}
                         </td>
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