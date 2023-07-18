import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { SwitchContextProvider } from './context/SwitchContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 <SwitchContextProvider>
  <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
 </SwitchContextProvider>

  
)
