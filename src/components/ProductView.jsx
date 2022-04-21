import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Thumbs } from 'swiper'
import numberWithCommas from '../utils/numberWithCommas'
import Grid from './Grid'
import Selected from './Selected'
import Button from './Button'
import { addItem } from '../redux/cart/cartItemsSlice'
import { useDispatch } from 'react-redux'

const ProductView = props => {

  const dispatch = useDispatch()

  const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [sizeSelected, setSizeSelected] = useState(null)
  const [quantitySelected, setQuantitySelected] = useState(null)
  const [sizeActive, setSizeActive] = useState(false)
  const [quantityActive, setQuantityActive] = useState(false)

  const handleSizeActive = () => {
    if (props.condition === 'Hết hàng') {
      setSizeActive(false)
      setQuantityActive(false)
    } else {
      setSizeActive(!sizeActive)
      setQuantityActive(false)
    }
  }

  const handleQuantityActive = () => {
    if (props.condition === 'Hết hàng') {
      setSizeActive(false)
      setQuantityActive(false)
    } else {
      setSizeActive(false)
      setQuantityActive(!quantityActive)
    }
  }


  const check = () => {
    if(sizeSelected === null || quantitySelected === null) {
      alert('Please select size and quantity')
      return false
    }
    return true
  }

  const addToCart = () => {
    if(check()) {
      dispatch(addItem({
        _id: props.id,
        size: sizeSelected,
        quantity: quantitySelected,
        price: props.price
      })) 
    }
  }

  const [activeThumbs, setActiveThumbs] = useState(null)
  return (
    <div className="product-view">
      <div className="product-view__image">
        <Swiper
          loop={true}
          spaceBetween={10}
          modules={[Thumbs]}
          grabCursor={true}
          thumbs={{ swiper: activeThumbs }}
          className="product-view__image__slider"
        >
          {props.images.length > 0 &&
            props.images.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt="" />
              </SwiperSlide>
            ))}
        </Swiper>
        <Swiper
          onSwiper={setActiveThumbs}
          loop={props.images.length >= 4 ? true : false}
          spaceBetween={10}
          slidesPerView={props.images.length >= 4 ? 4 : props.images.length}
          navigation={props.images.length >= 4 ? true : false}
          modules={[Navigation, Thumbs]}
          className="product-view__image__slider__thumbs"
        >
          {props.images.length > 0 &&
            props.images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="product-view__image__slider__thumbs__wrapper">
                  <img src={item} alt="" />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="product-view__content">
        <div className="product-view__content__title">
          {props.name} {props.design || props.designShoes ? `- ${props.design || props.designShoes}` : `  ${props.design || props.designShoes}`} - {props.color}
        </div>
        <div className="product-view__content__des1">
          <span>
            Mã sản phẩm: <strong>{props.id}</strong>
          </span>
          {props.condition === 'in stock' ? null : (
            <span className="cond">
              Tình trạng:&nbsp;<strong>{props.condition}</strong>
            </span>
          )}
        </div>
        <div className="product-view__content__price">
          {numberWithCommas(props.price)}đ
        </div>
        <hr />
        <div className="product-view__content__des2">{props.description}</div>
        <hr />
        <Grid col={2} mdCol={2} smCol={1} gap={1}>
          <Selected
            title="Size"
            content={props.size}
            selected={sizeSelected}
            setSelected={setSizeSelected}
            setIsActive={handleSizeActive}
            isActive={sizeActive}
            condition={props.condition}
          />
          <Selected
            title="Số lượng"
            content={quantity}
            selected={quantitySelected}
            setSelected={setQuantitySelected}
            setIsActive={handleQuantityActive}
            isActive={quantityActive}
            condition={props.condition}
          />
        </Grid>
        <Button color="black" title="thêm vào giỏ hàng" onClick={addToCart} />
        <Button color="main" title="thanh toán" />
      </div>
    </div>
  )
}

export default ProductView
