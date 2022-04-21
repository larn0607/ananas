import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import { Link } from 'react-router-dom'

const HeroSliderItem = props => (
  <div className="hero-slider__item">
    <Link to="/">
      <img src={props.item.image} alt="" />
    </Link>
  </div>
)

const HeroSlider = ({ data }) => {
  return (
    <div className="hero-slider">
      <Swiper
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          // dynamicBullets: true,
          clickable: true
        }}
        grabCursor={true}
        slidesPerView={1}
        autoplay={{delay: 5000}}
        className="hero-slider__swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroSliderItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider