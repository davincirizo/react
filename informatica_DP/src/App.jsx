import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ShowCategoria from './components/ShowCategoria';
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowCategoria></ShowCategoria>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
