import { useEffect, useState } from 'react'
import Helmet from '../components/Helmet'
import productData from '../data/productData'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../redux/cart/cartItemsSlice'
import CartItem from '../components/CartItem'
import { useNavigate } from 'react-router-dom'
import numberWithCommas from '../utils/numberWithCommas'
const Cart = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cartItems.value)

  const [cartProduct, setCartProduct] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  const handleReturnProduct = () => {
    navigate('/product-list')
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  useEffect(() => {
    setCartProduct(productData.getCartItemsDetail(cartItems))
    setTotalPrice(
      cartItems.length > 0 &&
        cartItems.reduce(
          (total, item) => total + Number(item.quantity) * Number(item.price),
          0
        )
    )
  }, [cartItems])

  return (
    <Helmet title="Giỏ hàng">
      {cartProduct.length > 0 ? (
        <div className="cart">
          <div className="cart__left">
            <div className="cart__left__title">Giỏ hàng</div>
            <div className="cart__left__content">
              {cartProduct.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
            <hr />
            <div className="cart__left__button">
              <div
                className="cart__left__button__item"
                onClick={handleClearCart}
              >
                xoá hết
              </div>
              <div
                className="cart__left__button__item"
                onClick={handleReturnProduct}
              >
                Quay lại mua hàng
              </div>
            </div>
          </div>
          <div className="cart__right">
            <div className="cart__right__title">đơn hàng</div>
            <hr />
            <div className="cart__right__promotion">
              <div className="cart__right__promotion__title">
                nhập mã khuyến mãi
              </div>
              <div className="cart__right__promotion__input">
                <input type="text" />
                <button>áp dụng</button>
              </div>
            </div>
            <hr className="dashed" />
            <div className="cart__right__content">
              <div className="cart__right__content__top">
                <div className="cart__right__content__top__title">Đơn hàng</div>
                <div className="cart__right__content__top__price">
                  {numberWithCommas(totalPrice)} VND
                </div>
              </div>
              <div className="cart__right__content__bottom">
                <div className="cart__right__content__bottom__title">Giảm</div>
                <div className="cart__right__content__bottom__price">0 VND</div>
              </div>
            </div>
            <hr className="dashed" />
            <div className="cart__right__total">
              <span>tạm tính:</span>
              <span>{numberWithCommas(totalPrice)} VND </span>
            </div>
            <div className="cart__right__button">Tiếp tục thanh toán</div>
          </div>
        </div>
      ) : (
        <div className="cart__empty">
          <div className="cart__empty__title">giỏ hàng của bạn</div>
          <hr />
          <div className="cart__empty__content">
            Bạn đang không có sản phẩm nào trong giỏ hàng!
          </div>
          <div className="cart__empty__button" onClick={handleReturnProduct}>
            quay lại mua hàng
          </div>
        </div>
      )}
    </Helmet>
  )
}

export default Cart
