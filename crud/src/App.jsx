
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import ShowCategory from './component/category/ShowCategory'
import CreateCategory from './component/category/CreateCategory'
import EditCategory from './component/category/EditCategory'
import ShowProduct from './component/product/ShowProduct'
import CreateProduct from './component/product/CreateProduct'
import EditProduct from './component/product/EditProduct'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowCategory/>}/>
        <Route path='/create_category' element={<CreateCategory/>}/>
        <Route path='/edit_category/:id' element={<EditCategory/>}/>
        
        <Route path='/show_product' element={<ShowProduct/>}/>
        <Route path='/create_product' element={<CreateProduct/>}/>
        <Route path='/edit_product/:id' element={<EditProduct/>}/>
        

      </Routes>
    </BrowserRouter>
    
     
    </>
  )
}

export default App
