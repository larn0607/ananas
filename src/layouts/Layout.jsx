import Header from '../components/Header'
import Footer from '../components/Footer'
import HotNew from '../components/HotNew'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import CartFixed from '../components/CartFixed'
import SocialFixed from '../components/SocialFixed'

const Layout = () => (
  <div className="container">
    <Header />
    <ScrollToTop />
    <CartFixed />
    <SocialFixed />
    <HotNew />
    <Outlet />
    <Footer />
  </div>
)

export default Layout