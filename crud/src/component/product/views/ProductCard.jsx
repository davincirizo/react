import { useState } from "react"
import Searching from "../../general/Searching"
import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { GridDeleteIcon } from "@mui/x-data-grid"
import EditIcon from '@mui/icons-material/Edit';
import FloatingActionButtonSize from "../../general/ButtonFloat"


function ProductCard(props) {
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

    {result.map( (product) => (
      <div  key={product.id}  style={{ display: 'inline-block', marginLeft: '20px',marginTop:'20px' }}>

      
      <Card sx={{ maxWidth: 345,minWidth:345 }}>
        <CardHeader className='text-center'  
          title={product.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {product.category_id.name}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link>
            <IconButton onClick={()=>deleteProduct(product.id)}>
              <GridDeleteIcon />
            </IconButton>
          </Link>
          <Link Link to={`/edit_product/${product.id}`}>
            <IconButton aria-label="share">
              <EditIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
      </div>
      ))}
      <Link to='/create_product'>
        <FloatingActionButtonSize
        back='/view_card_category'/>
      </Link>
    </>
  )
}

export default ProductCard