import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper'

const HotNew = () => (
  <div className="hot-new__container">
    <Swiper
      loop={true}
      grabCursor={true}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 3000}}
      className="hot-new__slider"
    >
      <SwiperSlide>BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN</SwiperSlide>
      <SwiperSlide>HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH</SwiperSlide>
      <SwiperSlide>
        BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE
      </SwiperSlide>
      <SwiperSlide>FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !</SwiperSlide>
    </Swiper>
  </div>
)

export default HotNew
