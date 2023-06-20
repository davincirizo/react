import {BrowserRouter,Route,Routes} from 'react-router-dom';
import About from './components/about'
import Contact from './components/contact'
import Home from './components/home'
import NavBarExample from './layouts/navbar'



function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBarExample></NavBarExample>}>
        <Route index element={<Home></Home>}></Route>

          <Route path='about' element={<About></About>}></Route>
          <Route path='contact' element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
