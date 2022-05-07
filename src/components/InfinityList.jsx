import { useState, useEffect, useRef } from 'react'
import Grid from './Grid'
import ProductCard from './ProductCard'

const InfinityList = props => {
  const perLoad = 6

  const listRef = useRef()

  const [data, setData] = useState([])

  const [load, setLoad] = useState(true)

  const [index, setIndex] = useState(0)

  useEffect(() => {
    setData(props.data.slice(0, perLoad))
    setIndex(1)
  }, [props.data])


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offsetTop + 400) {
        setLoad(true)
      }
    })
  }, [listRef])


  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(props.data.length / perLoad)
      const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1
      console.log(pages, maxIndex,index)

      if (load && index <=maxIndex) {
        const start = perLoad * index
        const end = start + perLoad

        setData(data.concat(props.data.slice(start, end)))
        setIndex(index + 1)
      }
    }
    getItems()
    setLoad(false)
  }, [load, index, data, props.data])

  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1} gap={1}>
        {data.map((item, index) => (
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
      </Grid>
    </div>
  )
}

export default InfinityList
