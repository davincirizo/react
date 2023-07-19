import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { SwitchContextProvider } from './context/SwitchContext.jsx'
import { ViewProductContextProvider } from './context/ViewProductContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ViewProductContextProvider>
 <SwitchContextProvider>
  <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
 </SwitchContextProvider>
</ViewProductContextProvider>

  
)
