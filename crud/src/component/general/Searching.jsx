import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import './Serching.css'
import { useState } from 'react';

function Searching({enviarSearch}) {
  const[search,setSearch] = useState("")

  const searcher = (e) =>{
    setSearch(e.target.value)
    enviarSearch(e)
    }
  
  return (
    <div className='contenedor'>
    <input type='text' value={search} onChange={searcher} />
        <TravelExploreIcon className="icon" />
  </div>
  )
}

export default Searching