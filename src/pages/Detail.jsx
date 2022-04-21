import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet'
import ProductView from '../components/ProductView'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import SlideProduct from '../components/SlideProduct'
import productData from '../data/productData'

const Detail = () => {
  const { id } = useParams()

  const product = productData.getProductById(id)

  const relatedProduct = productData.getProductByType(product.type, "Hết hàng")

  return (
    <Helmet
      title={`${product.name} - ${
        product.design || product.designShoes ? product.design || product.designShoes : null  
      }`}
    >
      <div className="detail">
        <ProductView
          id={product._id}
          images={product.images}
          name={product.name}
          design={product.design}
          designShoes={product.designShoes}
          color={product.color}
          condition={product.condition}
          price={product.price}
          description={product.description}
          size={product.size}
        />
        {relatedProduct.length >= 5 ? (
          <Section>
            <SectionTitle>sản phẩm liên quan</SectionTitle>
            <SectionBody>
              <SlideProduct products={relatedProduct} />
            </SectionBody>
          </Section>
        ) : null}
      </div>
    </Helmet>
  )
}

export default Detail
