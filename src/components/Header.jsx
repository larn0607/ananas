import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import login from '../assets/icons/icon_dang_nhap.svg'
import cart from '../assets/icons/icon_gio_hang.svg'
import logo from '../assets/icons/Logo_Ananas_Header.svg'
import discoveryou from '../assets/icons/DiscoverYOU.svg'
import shoes from '../assets/menu_dropdown/Menu_Nam.jpg'
import top from '../assets/menu_dropdown/menu_top.jpg'
import accessory from '../assets/menu_dropdown/Menu_Phu-kien.jpg'
import { useSelector } from 'react-redux'
// import productData from '../data/productData'

const Header = () => {
  const menuMobileRef = useRef(null)

  // const navigate = useNavigate()

  const [activeMenu, setActiveMenu] = useState(false)

  const [activeSubMenu, setActiveSubMenu] = useState(false)

  // const [searchTerm, setSearchTerm] = useState('')

  // const goToSearch = useCallback(() => {
  //   if (searchTerm.trim().length > 0) {
  //     navigate(`/search/${searchTerm}`)
  //   }
  // }, [navigate, searchTerm])

  // useEffect(() => {
  //   const enterEvent = e => {
  //     e.preventDefault()
  //     if (e.keyCode === 13) {
  //       goToSearch()
  //     }
  //   }
  //   document.addEventListener('keyup', enterEvent)
  //   return () => {
  //     document.removeEventListener('keyup', enterEvent)
  //   }
  // }, [goToSearch])

  const [hover, setHover] = useState(false)
  const cartItems = useSelector(state => state.cartItems.value)

  const countProducts = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const menuHeader = [
    {
      display: 'Đăng nhập',
      icon: login,
      path: '/coming-soon'
    },
    {
      display: `Giỏ hàng (${countProducts})`,
      icon: cart,
      path: '/cart'
    }
  ]

  const menuDropdown = [
    {
      display: 'Giày',
      image: shoes,
      path: '/product-list'
    },
    {
      display: 'Nửa trên',
      image: top,
      path: '/product-list'
    },
    {
      display: 'Phụ kiện',
      image: accessory,
      path: '/product-list'
    }
  ]

  const closeMenuMobile = () => {
    setActiveSubMenu(false)
    setActiveMenu(false)
  }

  useEffect(() => {
    const clickOutside = e => {
      if (
        activeMenu &&
        menuMobileRef &&
        !menuMobileRef.current.contains(e.target)
      ) {
        setActiveMenu(false)
        setActiveSubMenu(false)
      }
    }
    document.addEventListener('click', clickOutside)
    return () => {
      document.removeEventListener('click', clickOutside)
    }
  }, [menuMobileRef, activeMenu, activeSubMenu])

  return (
    <div className="header">
      <div className="header__menu">
        {menuHeader.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
      <div className="header__navbar">
        <div className="header__navbar__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="header__navbar__nav">
          <li
            className="header__navbar__nav__dropdown"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <Link to="/product-list" className="pd">
              <span>Sản phẩm</span>
              <span>
                {hover ? (
                  <i className="bx bx-chevron-down"></i>
                ) : (
                  <i className="bx bx-chevron-up"></i>
                )}
              </span>
            </Link>
            <ul
              className="header__navbar__nav__dropdown__menu"
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            >
              <div className="content">
                <div className="content__menu">
                  {menuDropdown.map((item, index) => (
                    <div className="content__menu__item" key={index}>
                      <Link to={item.path}>
                        <img src={item.image} alt="" />
                      </Link>
                      <Link to={item.path}>
                        <p>{item.display}</p>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="content__title">
                  MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ <span>DỨA</span> !
                </div>
              </div>
            </ul>
          </li>
          <li className="line"></li>
          <li>
            <Link to="/product-list">
              <span>Sale off</span>
            </Link>
          </li>
          <li className="line"></li>
          <li>
            <Link to="/coming-soon">
              <img src={discoveryou} alt="" />
            </Link>
          </li>
        </ul>
        <div className="header__navbar__search">
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Tìm kiếm" />
        </div>
        <div className="header__mobile" ref={menuMobileRef}>
          <div
            className="header__mobile__ham"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <span className={activeMenu ? 'active' : ''}></span>
            <span className={activeMenu ? 'active' : ''}></span>
            <span className={activeMenu ? 'active' : ''}></span>
          </div>
          <div className={`header__mobile__menu${activeMenu ? ' active' : ''}`}>
            <ul className="menu__mobile">
              <li
                className="menu__mobile__child"
                onClick={() => {
                  setActiveSubMenu(!activeSubMenu)
                }}
              >
                <span>Sản phẩm</span>
                <i className="bx bx-chevron-right"></i>
                <ul className={`submenu${activeSubMenu ? ' active' : ''}`}>
                  <li
                    className="submenu__mobile__child tit"
                    onClick={() => {
                      setActiveSubMenu(false)
                    }}
                  >
                    <i className="bx bx-chevron-left"></i>
                    <span>Sản phẩm</span>
                  </li>
                  <hr />
                  <Link to="/product-list">
                    <li
                      className="submenu__mobile__child"
                      onClick={closeMenuMobile}
                    >
                      <span>Giày</span>
                    </li>
                  </Link>
                  <hr className="dashed" />
                  <Link to="/product-list">
                    <li
                      className="submenu__mobile__child"
                      onClick={closeMenuMobile}
                    >
                      <span>Nửa trên</span>
                    </li>
                  </Link>
                  <hr className="dashed" />
                  <Link to="/product-list">
                    <li
                      className="submenu__mobile__child"
                      onClick={closeMenuMobile}
                    >
                      <span>Phụ kiện</span>
                    </li>
                    <hr />
                  </Link>
                  <div className="content__title">
                    MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ <span>DỨA</span> !
                  </div>
                </ul>
              </li>
              <hr className="dashed" />
              <li className="menu__mobile__child" onClick={closeMenuMobile}>
                <Link to="/product-list">
                  <span>Sale-off</span>
                </Link>
              </li>
              <hr className="dashed" />
              <li className="menu__mobile__child" onClick={closeMenuMobile}>
                <Link to="/coming-soon">
                  <span>DiscoverYOU</span>
                </Link>
              </li>
              <hr />
              <li
                className="menu__mobile__child login"
                onClick={closeMenuMobile}
              >
                <Link to="/coming-soon">
                  <img src={login} alt="" />
                  <span>Đăng nhập</span>
                </Link>
              </li>
              <div className="content__title">
                MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ <span>DỨA</span> !
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const MenuItem = ({ item }) => (
  <div className="header__menu__item">
    <Link to={item.path}>
      <img src={item.icon} alt="" />
      <span>{item.display}</span>
    </Link>
  </div>
)

export default Header
