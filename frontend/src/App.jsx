import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {

  const[showLogin, setshowLogin] = useState(false)

  return (
  <>
  {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
  <div className='App'>
   <Navbar setshowLogin={setshowLogin}/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Cart' element={<Cart/>} />
    <Route path='/Order' element={<PlaceOrder/>} />
   </Routes>
   </div>
   <Footer />
  </>
    
  )
}

export default App


//                                                          !!!!!!END!!!!!!