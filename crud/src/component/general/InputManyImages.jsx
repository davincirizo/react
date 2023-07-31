import  { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, ImageList, ImageListItem } from '@mui/material';

function InputManyImages(props) {
    const {images,setImages} = props

    const changeImage= (e)=>{
  
        let indexImg;
        if (images.length>0){
            indexImg = images[images.length - 1].index + 1;
        }
        else{
            indexImg = 0;
        }
        let newImgsToState = loadMultiple(e,indexImg);
        let newImgsState = [...images,...newImgsToState];
        setImages(newImgsState)
    }

    function loadMultiple(e,indexIncial){
        const files = e.currentTarget.files;
        const arrayImages = []; 
        Object.keys(files).forEach((i) =>{
            const file = files[i];
            let url = URL.createObjectURL(file)
            arrayImages.push({
              index:indexIncial,
              name:file.name,
              url,
              file  
            });
            indexIncial++;
        });

        return arrayImages;
    }

    function deleteImage(index){
        const newImgs = images.filter(function(element){
            return element.index !== index;
        })
        setImages(newImgs)

        
    }
    return (
    <>
    <label className='btn btn-warning'>
        <span>  Inserte Las Imagenes</span>
        <input hidden multiple type="file" onChange={changeImage}/>
    </label>
    <ImageList sx={{ width: 250, height: 250 }} cols={3} rowHeight={100}>
      {images.map((item) => (
        <ImageListItem key={item.url}>
          <button className='position-absolute btn btn-danger' onClick={()=>deleteImage(item.index)}>
              x
            </button>
          <img
            src={`${item.url}`}
            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>

  )
}

export default InputManyImages