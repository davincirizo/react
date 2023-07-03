import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

function About() {
  const {Theme} = useThemeContext() 
  return (
    <div>
        <h1>Home</h1>
        <p>Theme {Theme}</p>
        <p>Pagina de Inicio</p>
    </div>
  )
}

export default About