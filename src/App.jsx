
import { BrowserRouter,Route, Routes } from "react-router-dom"
import NotFound from "./assets/pages/NotFound"
import Home from "./assets/pages/Home.jsx"
import {Toaster} from '@/components/ui/toaster.jsx';


function App() {


  return (
    <>
    <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
           <Route path="*" element={<NotFound/>}/>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
