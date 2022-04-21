import bocongthuong from '../assets/icons/icon_bocongthuong.png'
import store from '../assets/icons/Store.svg'
import logo from '../assets/icons/Logo_Ananas_Footer.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src={store} alt="" />
        <button>
          <Link to="/">Tìm cửa hàng</Link>
        </button>
      </div>
      <div className="footer__right">
        <div className="footer__right__menus">
          <div className="footer__right__menu">
            <Link to="/">
              <div className="footer__right__menu__title">Sản phẩm</div>
            </Link>
            <Link to="/">Giày Nam</Link>
            <Link to="/">Giày Nữ</Link>
            <Link to="/">Thời trang &amp; Phụ kiện</Link>
            <Link to="/">Sale-off</Link>
          </div>
          <div className="footer__right__menu">
            <Link to="/">
              <div className="footer__right__menu__title">Về công ty</div>
            </Link>
            <Link to="/">Dứa tuyển dụng</Link>
            <Link to="/">Liên hệ nhượng quyền</Link>
            <Link to="/">Về Ananas</Link>
          </div>
          <div className="footer__right__menu">
            <Link to="/">
              <div className="footer__right__menu__title">Hỗ trợ</div>
            </Link>
            <Link to="/">FAQs</Link>
            <Link to="/">Bảo mật thông tin</Link>
            <Link to="/">Chính sách chung</Link>
            <Link to="/">Tra cứu đơn hàng</Link>
          </div>
          <div className="footer__right__menu">
            <Link to="/">
              <div className="footer__right__menu__title">Liên hệ</div>
            </Link>
            <Link to="/">Email góp ý</Link>
            <Link to="/">Hotline</Link>
            <Link to="/">0963 429 749</Link>
          </div>
        </div>
        <div className="footer__right__logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer__right__copyright">
          <img src={bocongthuong} alt="" />
          <span>Copyright © 2022 Ananas. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
