// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <Link to="/" className="link-text">
      <li className="nav-text">Home</li>
    </Link>
    <Link to="/about" className="link-text">
      <li className="nav-text">About</li>
    </Link>
  </nav>
)

export default Header
