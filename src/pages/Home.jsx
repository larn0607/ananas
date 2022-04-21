import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import HomeCollection from '../components/HomeCollection'
import Catalogy from '../components/Catalogy'

import heroSliderData from '../data/heroSliderData'
import catalogyData from '../data/catalogyData'
import productData from '../data/productData'
import blogData from '../data/blogData'
import homeCollectionData from '../data/homeCollectionData'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import SlideProduct from '../components/SlideProduct'
import hero from '../assets/image/Banner_Clothing.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Helmet title="DiscoverYOU">
      <div className="main">
        <HeroSlider data={heroSliderData} />
        <section>
          <HomeCollection data={homeCollectionData} />
          <Section>
            <SectionTitle>Danh mục mua hàng</SectionTitle>
            <SectionBody>
              <Catalogy data={catalogyData} />
            </SectionBody>
          </Section>
          <Section>
            <SectionTitle>best seller</SectionTitle>
            <SectionBody>
              <SlideProduct products={productData.getProduct(8, "Hết hàng")} />
            </SectionBody>
          </Section>
        </section>
        <div className="hero">
          <img src={hero} alt="" />
        </div>
        <section>
          <Section>
            {/* <SectionTitle>tin tức &amp; bài viết</SectionTitle> */}
            <SectionBody>
              {/* <div className="home-blog">
                {blogData.map((item, index) => (
                  <div className="home-blog__item" key={index}>
                    <div className="home-blog__item__image">
                      <Link to="/">
                        <img src={item.image} alt="" />
                      </Link>
                    </div>
                    <div className="home-blog__item__title">
                      <Link to="/">{item.title}</Link>
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="home-blog">
                <SectionBody>
                  <SectionTitle>instagram</SectionTitle>
                  <div className="home-blog__instagram"></div>
                </SectionBody>
                <SectionBody>
                  <SectionTitle>tin tức &amp; bài viết</SectionTitle>
                  <div className="home-blog__blogs">
                    {blogData.map((item, index) => (
                      <div className="home-blog__blogs__item" key={index}>
                        <div className="home-blog__blogs__item__image">
                          <Link to="/coming-soon">
                            <img src={item.image} alt="" />
                          </Link>
                        </div>
                        <div className="home-blog__blogs__item__title">
                          <Link to="/coming-soon">{item.title}</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionBody>
              </div>
            </SectionBody>
          </Section>
        </section>
      </div>
    </Helmet>
  )
}

export default Home
