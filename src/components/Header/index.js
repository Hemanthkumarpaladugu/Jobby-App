// Importing necessary dependencies from 'react-router-dom' for navigation,
// 'react-icons' for icon components, and 'js-cookie' for handling cookies.
import {Link, withRouter} from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

// Importing styles for the component.
import './index.css'

// URL for the website logo image.
const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

// Functional component 'Header' representing the navigation header.
const Header = props => {
  // Function to handle the logout action.
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token') // Removing the 'jwt_token' cookie.
    history.replace('/login') // Redirecting to the login page.
  }

  // Rendering the navigation header.
  return (
    <nav className="nav-container">
      {/* Unordered list for navigation links */}
      <ul className="header-ul-container">
        {/* Logo container */}
        <div>
          <li className="logo-container">
            {/* Link to the home page with the website logo */}
            <Link className="link" to="/">
              <img className="logo" src={websiteLogo} alt="website logo" />
            </Link>
          </li>
        </div>
        {/* Home link container */}
        <div>
          <li className="home-jobs-container">
            {/* Link to the home page with a home icon and text */}
            <Link className="link" to="/">
              <ImHome className="home-icon" />
              <h1 className="nav-text">Home</h1>
            </Link>
          </li>
        </div>
        {/* Jobs link container */}
        <div>
          <li>
            {/* Link to the jobs page with text and a button */}
            <Link className="link" to="/jobs">
              <h1 className="nav-text">Jobs</h1>
              <button type="button" className="home-jobs-btn">
                Jobs
              </button>
            </Link>
          </li>
        </div>
        {/* Logout button container */}
        <div>
          <li>
            {/* Logout button with a logout icon */}
            <FiLogOut className="home-icon" onClick={onClickLogout} />
            <button
              type="button"
              className="btn-logout"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </div>
      </ul>
    </nav>
  )
}

// Exporting the Header component with router functionality.
export default withRouter(Header)
