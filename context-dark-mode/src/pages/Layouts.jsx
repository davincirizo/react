import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Layouts() {
  return (
    <div>
      <nav>
        <ul className='list'>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet>
          
        </Outlet>
      </section>
    </div>
  )
}

export default Layouts