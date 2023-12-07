// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="HeaderContainer">
    <div className="logoContainer">
      <img
        className="Logo"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="LogoName">wave</h1>
    </div>

    <div>
      <ul type="none" className="TabsContainer">
        <li>
          {' '}
          <Link to="/" className="TabNames">
            Home
          </Link>{' '}
        </li>
        <li>
          <Link to="/about" className="TabNames">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="TabNames">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
