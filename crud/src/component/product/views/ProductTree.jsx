import { Link } from "react-router-dom"
import FloatingActionButtonSize from "../../general/ButtonFloat"
import Searching from "../../general/Searching"
import { useState } from "react"


function ProductList(props) {
    const {products} = props
    const {deleteProduct} = props
    const[search,setSearch] = useState("")

    const enviarSearch = (msg) =>{
        setSearch(msg.target.value)
      }
    
      let result = []
      if(!search){   
      result = products
        }
      else{
      result = products.filter((dato)=>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      )
        }
  return (
   <>
   <Searching
enviarSearch={enviarSearch}/>
   <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th>Precio</th> 
                    <th>Stock</th> 
                    <th>Categoria</th> 
                    <th>Action</th> 
                </tr>
                
                {result.map( (product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                       
                        
                        <td>
                            {/* {product.category_id.id} */}
                            {product.category_id.name}
                            {/* {product.category_id.id} */}
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
        <Link to='/create_product'>
            
        <FloatingActionButtonSize/>
      </Link>   
   </>
  )
}

export default ProductList