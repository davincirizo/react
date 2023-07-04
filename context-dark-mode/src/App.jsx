
import viteLogo from '/vite.svg'
import './App.css'
import ReactSwitch from 'react-switch'
import { useState } from 'react'
import { useThemeContext } from './context/ThemeContext'
import { Route, Routes } from 'react-router'
import Layouts from './pages/Layouts'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const {Theme,setTheme} = useThemeContext()
  const [checked,setChecked] = useState (false)
  const handleSwitch = (nextChecked) =>{
    setTheme((state)=> (state === 'Light'? 'Dark':'Light'))
    setChecked(nextChecked)
    console.log(checked)

  }

  return (
    <>
    
    <div className='App' >
      
      <header className='App-header'id={Theme}  >
      <h2>
      {Theme}Theme
      </h2>
      <ReactSwitch
    onChange={handleSwitch}
          checked={checked}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
    />
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />   
      </div>
      <Routes>
        <Route path='/' element={<Layouts/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Route>

      </Routes>
      </header>
    </div>
    </>
    
      
    
  )
}

export default App
