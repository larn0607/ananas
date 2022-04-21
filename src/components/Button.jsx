const Button = props => {
  return (
    <div className="btn" style={{backgroundColor: `${props.color === 'black' ? '#000' : props.color === 'main' ? '#f15e2c' : ''}`}} onClick={props.onClick ? props.onClick : null}>
      <span>{props.title}</span>
    </div>
  )
}

export default Button