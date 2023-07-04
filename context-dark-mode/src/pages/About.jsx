import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

function About() {
  const {Theme} = useThemeContext() 
  return (
    <div>
        <h1>About</h1>
        <p>Theme {Theme}</p>
        <p>Pagina de About</p>
    </div>
  )
}

export default About