import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layouts/Layout'
import ProductList from './pages/ProductList'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import DiscoverYou from './pages/Discover'
import Search from './pages/Search'
import ComingSoon from './pages/ComingSoon'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/product-list/:id" element={<Detail />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/discoveryou" element={<DiscoverYou />} />
      </Route>
    </Routes>
  )
}

export default App