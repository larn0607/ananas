import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import numberWithCommas from '../utils/numberWithCommas'

const SlideProduct = ({ products }) => {
  return (
    <div className="slide-product">
      <Swiper
        loop={true}
        slidesPerView={2}
        navigation={true}
        modules={[Navigation]}
        className="slide-product__slider"
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 4
          },
          600: {
            slidesPerView: 3
          }
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <SlideProductItem product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const SlideProductItem = ({ product }) => (
  <div className="slide-product__item">
    <div className="slide-product__item__image">
      <Link to={`/product-list/${product._id}`}>
        <img src={product.images[0]} alt="" />
      </Link>
    </div>
    <div className="slide-product__item__name">
      <Link to={`/product-list/${product._id}`}>
      {product.name} {product.design || product.designShoes ? `- ${product.design || product.designShoes}` : `  ${product.design || product.designShoes}`}
      </Link>
    </div>
    <div className="slide-product__item__color">{product.color}</div>
    <div className="slide-product__item__price">{numberWithCommas(product.price)}đ</div>
  </div>
)

export default SlideProduct
