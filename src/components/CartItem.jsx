import { useState, useEffect, useRef } from 'react'
import numberWithCommas from '../utils/numberWithCommas'
import Selected from './Selected'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateItem, removeItem } from '../redux/cart/cartItemsSlice'

const CartItem = ({ item }) => {
  const { product } = item

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [quantitySelected, setQuantitySelected] = useState(null)
  const [quantityActive, setQuantityActive] = useState(false)

  useEffect(() => {
    setQuantitySelected(item.quantity)
  }, [item])

  const handleQuantityActive = () => {
    setQuantityActive(!quantityActive)
  }

  const deleteProduct = () => {
    dispatch(removeItem(item))
  }

  const handleUpdate = quanlity => {
    dispatch(
      updateItem({
        ...item,
        quantity: quanlity
      })
    )
  }

  const ref = useRef()

  const redirectToDetail = () => {
    navigate(`/product-list/${product._id}`)
  }

  useEffect(() => {
    const checkClickOutside = e => {
      if (quantityActive && ref.current && !ref.current.contains(e.target)) {
        setQuantityActive(false)
      }
    }
    document.addEventListener('mousedown', checkClickOutside)
    return () => {
      document.removeEventListener('mousedown', checkClickOutside)
    }
  }, [quantityActive])

  return (
    <div className="cart__item">
      <div className="cart__item__image">
          <img src={product.images[0]} alt={product.name} onClick={redirectToDetail} />
      </div>
      <div className="cart__item__content">
        <div className="cart__item__content__top">
          <div className="cart__item__content__top__name" onClick={redirectToDetail} >
            {product.name} -&nbsp;
            {product.design ||
              product.designShoes ||
              `${product.design} ${product.designShoes} `}
            &nbsp;- {product.color}
          </div>
          <div className="cart__item__content__top__total-price">
            {numberWithCommas(Number(item.price * item.quantity))} VND
          </div>
        </div>
        <div className="cart__item__content__middle">
          <div className="cart__item__content__middle__price">
            <strong>Giá:</strong>&nbsp;{numberWithCommas(Number(item.price))}{' '}
            VND
          </div>
        </div>
        <div className="cart__item__content__bottom">
          <div className="cart__item__content__bottom__size">
            <strong>Size:</strong> {item.size}
          </div>
          <Selected
            title="Số lượng"
            content={quantity}
            selected={quantitySelected}
            setSelected={setQuantitySelected}
            setIsActive={handleQuantityActive}
            isActive={quantityActive}
            className="cart-select"
            handleUpdate={handleUpdate}
          />
          <div
            className="cart__item__content__bottom__delete"
            onClick={() => deleteProduct()}
          >
            <i className="bx bx-trash"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
