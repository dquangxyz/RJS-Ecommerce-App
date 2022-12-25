import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Detail from './pages/Detail'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
