import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Index'
import Categories from './Pages/Categories/Index'
import Product from './Pages/Product/index'
import Checkout from './Pages/Checkout'

const RoutesElement = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default RoutesElement
