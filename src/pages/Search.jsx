import { useParams } from 'react-router-dom'
import productData from '../data/productData'

const Search = () => {
  const { search } = useParams() 

  const product = productData.searchItem(search)

  console.log(product)



  return (
    <section className="search">
      {search}
    </section>
  )
}

export default Search