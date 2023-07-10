// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavBar from '../general/NavBar';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VariantButtonGroup from '../general/GroupButtons';
// import ColorButtons from '../general/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import FloatingActionButtonSize from '../general/ButtonFloat';
import Searching from '../general/Searching';
import ColorButtons from '../general/Button';
import { Button } from 'bootstrap';
import TextButtons from '../general/TextButton';



export default function RecipeReviewCard() {
  // const [expanded, setExpanded] = React.useState(false);
  const[search,setSearch] = useState("")


  const endpoint = 'http://127.0.0.1:8000/api'
    const [category,setCategory] = useState([])

    useEffect (() =>{
        getAllCategory()

    },[])

    const getAllCategory = async () =>{
        const response = await axios.get(`${endpoint}/categories`)
        setCategory(response.data)
    }

    const deleteCategory = async (id) =>{
        await axios.delete(`${endpoint}/categories/${id}`)
        getAllCategory()

    }

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
    <NavBar/>
    
    
    <VariantButtonGroup
    card='/view_card_category'
    tree='/'
    />
    
    <Searching
    enviarSearch={enviarSearch}/>

    {result.map( (categori) => (
      <div  key={categori.id}  style={{ display: 'inline-block', marginLeft: '20px',marginTop:'20px' }}>

      
      <Card sx={{ maxWidth: 345,minWidth:300 }}>
        <CardHeader
          
          title={categori.name}
          

        />
        <Link to='/show_product'>
         <TextButtons
         name='Productos'
         />
         
        </Link>
       
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
          {categori.qty_product}
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