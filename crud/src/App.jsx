import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import ShowCategory from './component/category/ShowCategory'
import CreateCategory from './component/category/CreateCategory'
import EditCategory from './component/category/EditCategory'
import ShowProduct from './component/product/ShowProduct'
import CreateProduct from './component/product/CreateProduct'
import EditProduct from './component/product/EditProduct'
import ShowProductFilter from './component/product/ShowProductByCategory'
import LoginUser from './component/login/Login'
import Register from './component/login/Register'
import Profile from './user/Profile'
import CategorySpecific from './component/category/CategorySpecific'
import DashboardPage from './component/Dashboard'
import ResetPassword from './component/login/ResetPassword'
import VerifyUser from './component/login/VerifyUser'
import ResendEmail from './component/login/ResendEmail'
import GetResetPassword from './component/login/GetResetPassword'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<DashboardPage/>}/>

      <Route path='/login' element={<LoginUser/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/resend_email' element={<ResendEmail/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
      <Route path='/reset-password/:token' element={<GetResetPassword/>}/>
      <Route path='/verify/:id/:hash' element={<VerifyUser/>}/>

      
      {/* <Route element={<ProtectedRoutes/>}> */}
        <Route path='/show_category' element={<ShowCategory/>}/>
        <Route path='/create_category' element={<CreateCategory/>}/>
        <Route path='/edit_category/:id' element={<EditCategory/>}/>
        <Route path='/category_specific/:id' element={<CategorySpecific/>}/>
        
        <Route path='/show_product' element={<ShowProduct/>}/>
        <Route path='/create_product' element={<CreateProduct/>}/>
        <Route path='/edit_product/:id' element={<EditProduct/>}/>
        <Route path='/product_filter/:id' element={<ShowProductFilter/>}/>

        <Route path='/user_profile' element={<Profile/>}/>

      {/* </Route> */}
      </Routes>
    </BrowserRouter>
    
     
    </>
  )
}

export default App
