import { BrowserRouter,Routes,Route } from "react-router-dom"
import ShowProduct from "./component/ShowProduct"
import CreateRoute from "./pages/CreateRoute"

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ShowProduct></ShowProduct>}>
          </Route>
          <Route path="/createroute" element={<CreateRoute></CreateRoute>}>

          </Route>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
