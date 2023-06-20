import DataTable, {createTheme} from 'react-data-table-component'
import 'styled-components'
import React,{useState,useEffect} from 'react'
import './App.css'



const App = ()=> {
  const  [users,setUsers] = useState([])

const URL = 'http://127.0.0.1:8000/api/categories'
// const URL = 'https://gorest.co.in/public/v2/users'

const showData = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data)
  setUsers(data)
}

useEffect ( ()=>{ 
  showData()
},[])

const columns = [
  {
  name : 'ID',
  selector: row => row.id,

},
{
  name : 'NAME',
  selector: row => row.name ,

}
]
  return (
    <> 
    <h1>Data Table</h1>
    <div>
    <DataTable
      columns={columns}
      data={users}/>

    </div>
      
      </>
  )
}

export default App
