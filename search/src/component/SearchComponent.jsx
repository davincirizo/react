import {useState,useEffect} from 'react'
import axios from 'axios'


export const SearchComponent = () => {
  const[users,setUsers] = useState([])
  const[search,setSearch] = useState("")

  const URl = 'https://jsonplaceholder.typicode.com/users'

  const getData = async () =>{
    await axios.get(URl).then((response)=>{
        const data = response.data
        console.log(data)
        setUsers(data)
    })
    }

    useEffect( ()=>{
        getData()
        },[])

    const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e.target.value)
        console.log(search)
    }

    let result = []
    if(!search){   
        result = users
    }
    else{
        result = users.filter((dato)=>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }
        
    return (
    <div>
        <input type='text' value={search} onChange={searcher} className='form-control'>
        </input>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>USER NAME</th>
                </tr>
            </thead>
            <tbody>
                {result.map((user) =>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>

                    </tr>
                ))}

            </tbody>
        </table>
    </div>
  )
}
