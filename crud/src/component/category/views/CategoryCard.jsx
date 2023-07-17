import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import FloatingActionButtonSize from '../../general/ButtonFloat';
import Searching from '../../general/Searching';
import ButtonsAvalaible from '../../general/ButtonsAvalaible';
import ButtonNoAvalaible from '../../general/ButtonNoAvalaible';
import { useState } from 'react';

export default function CategoryCard(props) {
  const {category} = props
  const {deleteCategory} = props

  const[search,setSearch] = useState("")




    let result = []
        if(!search){   
        result = category
          }
        else{
        result = category.filter((dato)=>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
          }
    const enviarSearch = (msg) =>{
      setSearch(msg.target.value)
    }

  return (
    <>
 
    <Searching
    enviarSearch={enviarSearch}/>

    {result.map( (categori) => (
      <div  key={categori.id}  style={{ display: 'inline-block', marginLeft: '20px',marginTop:'20px' }}>

      
      <Card sx={{ maxWidth: 345,minWidth:345 }}>
        <CardHeader className='text-center'  
          title={categori.name}
        />
        {categori.qty_product ? (
        <div className='text-center'>
          <Link to={`/product_filter/${categori.id}`}>
          
          <ButtonsAvalaible
          name='Productos'
          cant={categori.qty_product}
          />
         
         </Link>
        </div>
      ) : (
        <div className='text-center'>
          <ButtonNoAvalaible
        name='Productos'/>
        </div>
      )}
       

        
       
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {categori.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link>
            <IconButton onClick={()=>deleteCategory(categori.id)}>
              <DeleteIcon />
            </IconButton>
          </Link>
          <Link to={`/edit_category/${categori.id}`}>
            <IconButton aria-label="share">
              <EditIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
      </div>
      ))}
      <Link to='/create_category'>
        <FloatingActionButtonSize
        back='/view_card_category'/>
      </Link>
    </>
  );
}