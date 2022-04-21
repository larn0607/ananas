import { Link } from 'react-router-dom'
import numberWithCommas from '../utils/numberWithCommas'
const ProductCard = props => {
  return (
    <div className="product-card">
        <div className={`product-card__image${props.condition === 'Hết hàng' ? ' sold' : ''}`}>
          <Link to={`/product-list/${props._id}`}>
            <img src={props.images[0]} alt="" />
            <img src={props.images[1]} alt="" />
            {props.condition !== 'Hết hàng' && (
              <button>Mua ngay</button>
            )}
          </Link>
        </div>
      <div className="product-card__name">
        <Link to={`/product-list/${props._id}`}>
          {props.name}
          {props.ne !== null ? ` ${props.ne}` : ''}
          {props.design || props.designShoes ? ` - ${props.design || props.designShoes}` : ''}
        </Link>
      </div>
      <div className="product-card__color">{props.color}</div>
      <div className="product-card__price">
        {numberWithCommas(props.price)}đ
      </div>
    </div>
  )
}

export default ProductCard
