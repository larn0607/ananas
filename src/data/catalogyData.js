import men from '../assets/catalogy/catalogy-1.jpg'
import women from '../assets/catalogy/catalogy-2.jpg'
import typeShoes from '../assets/catalogy/catalogy-3.jpg'

const catalogyData = [
  {
    title: 'giày nam',
    slug: 'product-list',
    sub: [
      {
        subTitle: 'new arrival',
        subSlug: 'product-list',
      },
      {
        subTitle: 'best seller',
        subSlug: 'product-list',
      },
      {
        subTitle: 'sale-off',
        subSlug: 'product-list',
      },
    ],
    image: men
  },
  {
    title: 'giày nữ',
    slug: 'product-list',
    sub: [
      {
        subTitle: 'new arrival',
        subSlug: 'product-list',
      },
      {
        subTitle: 'best seller',
        subSlug: 'product-list',
      },
      {
        subTitle: 'sale-off',
        subSlug: 'product-list',
      },
    ],
    image: women
  },
  {
    title: 'dòng sản phẩm',
    slug: 'product-list',
    sub: [
      {
        subTitle: 'basas',
        subSlug: 'product-list',
      },
      {
        subTitle: 'vintas',
        subSlug: 'product-list',
      },
      {
        subTitle: 'urbas',
        subSlug: 'product-list',
      },
      {
        subTitle: 'track 6',
        subSlug: 'product-list',
      },
    ],
    image: typeShoes
  },
]

export default catalogyData