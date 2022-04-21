import { useState } from 'react'
import Helmet from '../components/Helmet'
import productData from '../data/productData'
// import ProductCard from '../components/ProductCard'
import banner from '../assets/image/desktop_productlist.jpg'
// import Grid from '../components/Grid'
import { category, type, designShoes, typeProduct } from '../data/filterData'
import InfinityList from '../components/InfinityList'

const ProductList = () => {
  const product = productData.listProduct()

  const [hideFilter, sethideFilter] = useState(false)

  const [activeType, setActiveType] = useState(true)
  const [activeDesignShoes, setActiveDesignShoes] = useState(true)
  const [activeTypeProduct, setActiveTypeProduct] = useState(true)

  return (
    <Helmet title="Sản phẩm">
      <section>
        <div className="product-list">
            <i className="bx bx-filter-alt filter" onClick={() => sethideFilter(!hideFilter)}></i>
          <div className={`product-list__filter${hideFilter ? ' hide' : ''}`}>
            <div className="product-list__filter__widget">
                <div className="product-list__filter__widget__content">
                  {category.map((item, index) => (
                    <div
                      className="product-list__filter__widget__content__item"
                      key={index}
                    >
                      <p>{item.display}</p>
                      <span> &#10005;</span>
                    </div>
                  ))}
              </div>
            </div>
            <hr />
            <div className="product-list__filter__widget">
                <div className="product-list__filter__widget__top" onClick={() => setActiveType(!activeType)}>
                  <div className={`product-list__filter__widget__top__title${!activeType ? ' hide' : ''}`}>
                    Trạng thái
                  </div>
                  <i className={`bx bx-chevron-${activeType ? 'up' : 'down'}`}></i>
                </div>
                <div className={`product-list__filter__widget__content${!activeType ? ' hide' : ''}`}>
                  {type.map((item, index) => (
                    <div
                      className="product-list__filter__widget__content__item"
                      key={index}
                    >
                      <p>{item.display}</p>
                      <span> &#10005;</span>
                    </div>
                  ))}
                </div>
            </div>
            <hr className="dashed" />
            <div className="product-list__filter__widget">
                <div className="product-list__filter__widget__top" onClick={() => setActiveDesignShoes(!activeDesignShoes)}>
                  <div className={`product-list__filter__widget__top__title${!activeDesignShoes ? ' hide' : ''}`}>
                    Kiểu dáng
                  </div>
                  <i className={`bx bx-chevron-${activeDesignShoes ? 'up' : 'down'}`}></i>
                </div>
                <div className={`product-list__filter__widget__content${!activeDesignShoes ? ' hide' : ''}`}>
                  {designShoes.map((item, index) => (
                    <div
                      className="product-list__filter__widget__content__item"
                      key={index}
                    >
                      <p>{item.display}</p>
                      <span> &#10005;</span>
                    </div>
                  ))}
                </div>
            </div>
            <hr className="dashed" />
            <div className="product-list__filter__widget">
                <div className="product-list__filter__widget__top" onClick={() => setActiveTypeProduct(!activeTypeProduct)}>
                  <div className={`product-list__filter__widget__top__title${!activeTypeProduct ? ' hide' : ''}`}>
                    Dòng sản phẩm
                  </div>
                  <i className={`bx bx-chevron-${activeTypeProduct ? 'up' : 'down'}`}></i>
                </div>
                <div className={`product-list__filter__widget__content${!activeTypeProduct ? ' hide' : ''}`}>
                  {typeProduct.map((item, index) => (
                    <div
                      className="product-list__filter__widget__content__item"
                      key={index}
                    >
                      <p>{item.display}</p>
                      <span> &#10005;</span>
                    </div>
                  ))}
                </div>
            </div>
          </div>
          <div className="product-list__content">
            <div className="product-list__content__banner">
              <img src={banner} alt="" />
            </div>
            <InfinityList data={product} />
            {/* <Grid col={3} mdCol={2} smCol={1} gap={1}>
              {product.map((item, index) => (
                <ProductCard
                  key={index}
                  images={item.images}
                  _id={item._id}
                  name={item.name}
                  design={item.design}
                  designShoes={item.designShoes}
                  color={item.color}
                  price={item.price}
                  ne={item.NE}
                  condition={item.condition}
                />
              ))}
            </Grid> */}
          </div>
        </div>
      </section>
    </Helmet>
  )
}

export default ProductList
