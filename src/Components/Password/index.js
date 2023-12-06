import './index.css'

const Password = props => {
  const profileColors = [
    '#7683cb',
    '#f59e0b',
    '#10b981',
    '#f97316',
    '#14b8a6',
    '#b91c1c',
    '#0ea5e9',
  ]
  const profilePicture = profileColors[Math.floor(Math.random()) * 10 - 4]
  const {record, deleteRecord, showPassword} = props
  const {id, url, name, password} = record

  const passwordIsShown = showPassword ? (
    <p className="website-text">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-icon"
    />
  )

  const onDeleteRecord = () => {
    deleteRecord(id)
  }

  return (
    <li className="password-item">
      <div className="circle" style={{background: {profilePicture}}}>
        {name.charAt(0)}
      </div>
      <div className="details-container">
        <p className="website-text">{url}</p>
        <p className="website-text">{name}</p>
        {passwordIsShown}
      </div>
      <button
        data-testid="delete"
        type="button"
        onClick={onDeleteRecord}
        className="delete-btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default Password
