import bg from '../assets/image/bg_comingsoon.jpg'
import Helmet from '../components/Helmet'
import socials from '../data/socialData'
import { useNavigate } from 'react-router-dom'

const ComingSoon = () => {

  const navigate = useNavigate()

  const handleBackHomePage = () => {
    navigate('/')
  }

  return (
    <Helmet title="Coming Soon">
      <div className="coming-soon" style={{ backgroundImage: `url(${bg})` }}>
        <div className="coming-soon__title">COMING SOON</div>
        <div className="coming-soon__text">
          Đăng kí ngay Email để nhận thông tin sớm nhất!
        </div>
        <div className="coming-soon__input">
          <input type="text" />
          <button>
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </div>
        <div className="coming-soon__social">
          <div className="coming-soon__text">
            Theo dõi chúng tôi trên các trang mạng xã hội:
          </div>
          <div className="coming-soon__social__items">
            {socials.map((social, i) => (
              <a href={social.path} target="_blank" key={i} rel="noreferrer">
                <img src={social.comingSoon} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="coming-soon__button" onClick={handleBackHomePage}>QUAY LẠI TRANG CHỦ</div>
      </div>
    </Helmet>
  )
}

export default ComingSoon
