import banner from '../assets/home-collection/banner-1.jpg'
import banner2 from '../assets/home-collection/banner-2.jpg'
import outletSale from '../assets/home-collection/Banner_Sale-off-1.jpg'

const homeCollectionData = {
  slider: [
    {
      title: 'all black in black',
      image: banner2,
      description: 'Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí không nhàm chán.',
      slug: 'coming-soon'
    },
    {
      title: 'bình mới rượu "mới"',
      image: banner,
      description: `Vẫn kế thừa vẻ tối giản, nguyên bản đã được định hướng bởi cái tên, Basas mới trở lại với những cải tiến đáng giá chắc chắn sẽ đem đến một trải nghiệm thú vị như hành trình chúng tôi làm ra nó.`,
      slug: 'coming-soon'
    },
  ],
  sale: {
    title: 'outlet sale',
    image: outletSale,
    description: `Danh mục những  sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh online - Online Only, chúng đã từng làm mưa làm gió một thời gian và hiện đang rơi vào tình trạng bể size, bể số.`,
    slug: 'product-list'
  }
}

export default homeCollectionData