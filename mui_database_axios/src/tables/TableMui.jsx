import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from "react";
import axios from "axios";





export default function DataTable() {

    const [products,setProducts] = useState([])

    const endpoint = 'https://fakestoreapi.com/products'

    const getData = async () =>{
    await axios.get(endpoint).then((response)=>{
        const data = response.data
        console.log(data)
        setProducts(data)
    })
    }

    useEffect( ()=>{
    getData()
    },[])


    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'description', headerName: 'Description', width: 250 },
        { field: 'category', headerName: 'Category', width: 250 },
        {
          field: 'image',
          headerName: 'Image',
          type: 'number',
          width: 250,
        },
      ];
      

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}