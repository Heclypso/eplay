import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Index'
import Categories from './Pages/Categories/Index'

const RoutesElement = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default RoutesElement
