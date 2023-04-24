// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="container">
    <div className=" header-page">
      <div className="a">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
          alt="wave"
          className="wave"
        />
        <p className="p">Wave</p>
      </div>

      <ul className="p">
        <li className="p1">
          <Link to="/">Home</Link>
        </li>
        <li className="p1">
          <Link to="/about">About</Link>
        </li>
        <li className="p1">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
