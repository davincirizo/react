import { useState,useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";

export const TableJson = () =>{

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

const column = [
    {
        name:'id',
        label:'ID'
    },
    {
        name:'title',
        label:'TITULO'
    },
    {
        name:'category',
        label:'CATEGORIA'
    },

];


    return(
        <MUIDataTable
        tittle={"Lista de PRODUCTOS"}
        column={column}
        data={products}
        />

    )
}