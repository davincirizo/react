import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ButtonDelete from './buttons/ButtonDelete';
import ButtonEdit from './buttons/ButtonEdit';
import ButtonCreate from './buttons/ButtonCreate';


function ShowProduct() {

    const url = 'http://127.0.0.1:8000/api/categories';
    const [category,setCategoty] = useState([]);
    const [name,setName] = useState('');
    const [operation ,setOperation] = useState(1);

    useEffect(() =>{
        getCategory();
    },[])

    const getCategory = async () =>{
        const respuesta = await axios.get(url);
        setCategoty(respuesta.data);
        
    }

    

  return (
    <>

    <ButtonCreate size='large'/> 
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <ButtonEdit />
              </TableCell>
              <TableCell>
                <ButtonDelete/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>


  )
}

export default ShowProduct