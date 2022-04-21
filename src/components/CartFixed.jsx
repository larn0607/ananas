import React, { useState, useEffect, useRef } from 'react'
import cart from '../assets/icons/icon_gio_hang.svg'
import productData from '../data/productData'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import numberWithCommas from '../utils/numberWithCommas'

const CartFixed = () => {
  const cartFixedRef = useRef(null)
  const cartItems = useSelector(state => state.cartItems.value)
  const product = productData.getCartItemsDetail(cartItems)
  const totalProduct = product.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )
  const totalQuantity = product.reduce((acc, item) => acc + item.quantity, 0)

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const clickOutside = e => {
      if (
        isActive &&
        cartFixedRef &&
        !cartFixedRef.current.contains(e.target)
      ) {
        setIsActive(false)
      }
    }
    document.addEventListener('click', clickOutside)
    return () => {
      document.removeEventListener('click', clickOutside)
    }
  }, [isActive, cartFixedRef])

  return (
    <div className="cart-fixed">
      <div
        className="cart-fixed__display"
        onClick={() => setIsActive(!isActive)}
        ref={cartFixedRef}
      >
        <span>{totalQuantity}</span>
        <br />
        <img src={cart} alt="" />
      </div>

      <div className={`cart-fixed__content${isActive ? ' active' : ''}`}>
        <div className="cart-fixed__content__title">
          giỏ hàng ({totalQuantity})
        </div>
        <hr className="hr-2" />
        <div className="cart-fixed__content__items">
          {product.length > 0
            ? product.map((item, index) => (
                <CartFixedItem item={item} key={index} />
              ))
            : null}
        </div>
        <hr className="hr-1" />
        <div className="cart-fixed__content__total">
          <span>Tổng cộng</span>
          <span>{numberWithCommas(totalProduct)}&nbsp;VNĐ</span>
        </div>
        <Link to="/cart">
          <button className="cart-fixed__content__button">thanh toán</button>
        </Link>
      </div>
    </div>
  )
}

const CartFixedItem = props => {
  const navigate = useNavigate()

  const redirectToDetail = () => {
    navigate(`/product-list/${props.item._id}`)
  }
  return (
    <>
      <div className="cart-fixed__item">
        <div className="cart-fixed__item__image" onClick={redirectToDetail}>
          <img
            src={props.item.product.images[0]}
            alt={props.item.product.name}
          />
        </div>
        <div className="cart-fixed__item__content">
          <p
            className="cart-fixed__item__content__name"
            onClick={redirectToDetail}
          >
            {props.item.product.name} -&nbsp;
            {props.item.product.design ||
              props.item.product.designShoes ||
              `${props.item.product.design} ${props.item.product.designShoes} `}
            &nbsp;- {props.item.product.color}
          </p>
          <p className="cart-fixed__item__content__price">
            {numberWithCommas(props.item.price)}&nbsp;VNĐ
          </p>
          <p className="cart-fixed__item__content__size">
            <span>Size:</span>
            <span>{props.item.size}</span>
          </p>
          <p className="cart-fixed__item__content__quantity">
            <span>Số lượng:</span>
            <span>{props.item.quantity} </span>
          </p>
        </div>
      </div>
      <hr className="dashed" />
    </>
  )
}

export default CartFixed
