import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { Link } from 'react-router-dom'

const HomeCollection = ({ data }) => {
  const { slider, sale } = data

  return (
    <div className="home-collection">
      <div className="home-collection__item">
        <Swiper
          loop={true}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            clickable: true
          }}
          className="home-collection__slider"
        >
          {slider.map((item, index) => (
            <SwiperSlide key={index}>
              <SliderItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="home-collection__item">
        <div className="home-collection__item__image">
          <Link to={`/${sale.slug}`}>
            <img src={sale.image} alt="" />
          </Link>
        </div>
        <h1 className="home-collection__item__title">
          <Link to={`/${sale.slug}`}>{sale.title}</Link>
        </h1>
        <div className="home-collection__item__description">
          {sale.description}
        </div>
      </div>
    </div>
  )
}

const SliderItem = props => (
  <div className="home-collection__item__slider">
    <div className="home-collection__item__slider__image">
      <Link to={`/${props.item.slug}`}>
        <img src={props.item.image} alt="" />
      </Link>
    </div>
    <h1 className="home-collection__item__slider__title">
      <Link to={`/${props.item.slug}`}>{props.item.title}</Link>
    </h1>
    <div className="home-collection__item__slider__description">
      {props.item.description}
    </div>
  </div>
)

export default HomeCollection
