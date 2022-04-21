import React, {useRef, useEffect} from 'react'
import Grid from './Grid'

const Selected = props => {

  const ref = useRef()

  useEffect(() => {
    const checkClickOutside = e => {
      if(props.isActive && ref.current && !ref.current.contains(e.target)) {
        props.setIsActive(false)
      }
    }
    document.addEventListener('mousedown', checkClickOutside)
    return () => {
      document.removeEventListener("mousedown", checkClickOutside)
    }
  }, [props])

  return (
    <div className="product-view__content__select">
      <div className="product-view__content__select__title">{props.title}</div>
      <div className="product-view__content__select__dropdown" ref={ref}>
        <div
          className="product-view__content__select__dropdown__btn"
          onClick={props.setIsActive}
          style={{cursor: `${props.condition && props.condition === 'Hết hàng' ? 'not-allowed' : 'pointer'}`}}
        >
          {props.selected === null ? <span>&nbsp;</span> : props.selected}
          <i className="bx bx-chevron-down"></i>
        </div>
        {props.isActive && (
          <div className={`product-view__content__select__dropdown__list ${props.className ? props.className : null}`}>
            <Grid col={4}>
              {props.content.map((item, index) => (
                <div
                  className={`product-view__content__select__dropdown__list__item${
                    props.selected === item ? ' active' : ''
                  }`}
                  key={index}
                  onClick={() => {
                    props.setSelected(item)
                    props.setIsActive(false)
                    props.handleUpdate && props.handleUpdate(item)
                  }}
                >
                  {item}
                </div>
              ))}
            </Grid>
          </div>
        )}
      </div>
    </div>
  )
}

export default Selected
