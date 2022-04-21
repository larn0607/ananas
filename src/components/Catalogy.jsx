import { Link } from 'react-router-dom'

const Catalogy = ({ data }) => {
  return (
    <div className="catalogy">
      {data.map((item, index) => (
        <CatalogyItem key={index} item={item} />
      ))}
    </div>
  )
}

const CatalogyItem = props => {
  const item = props.item
  return (
    <div
      className="catalogy__item"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="catalogy__item__title">
        <Link to={`${item.slug}`}>{item.title}</Link>
      </div>
      <div className="catalogy__item__catalog">
        {item.sub.map((subItem, i) => (
          <div className="catalogy__item__catalog__item" key={i}>
            <Link to={`/${subItem.subSlug}`}>
              {subItem.subTitle}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalogy
