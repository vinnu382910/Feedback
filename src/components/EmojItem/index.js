import './index.css'

const Emojitem = props => {
  const {emojList, clickButton} = props
  const {name, imageUrl} = emojList
  const emojClicked = () => {
    clickButton()
  }
  return (
    <li>
      <img
        src={imageUrl}
        alt={name}
        className="emoj-image"
        onClick={emojClicked}
      />
    </li>
  )
}

export default Emojitem
