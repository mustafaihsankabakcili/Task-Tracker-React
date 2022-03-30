
const Button = ({color, text, onClick}) => {
    

  return (
    <div>
        <button type="button" className="btn" style={{backgroundColor: color}} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button;