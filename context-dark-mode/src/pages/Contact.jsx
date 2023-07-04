import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

function Contact() {
  const {Theme} = useThemeContext() 
  return (
    <div>
        <h1>Contact</h1>
        <p>Theme {Theme}</p>
        <p>Pagina de Contact</p>
    </div>
  )
}

export default Contact