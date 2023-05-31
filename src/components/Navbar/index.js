import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickToggleTheme = () => {
        toggleTheme()
      }
      const websiteLogo = isDarkTheme ? 'dark' : 'light'
      const toggleImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarClass = isDarkTheme ? 'dark-theme-navbar' : ''
      const navLinkClass = isDarkTheme ? 'nav-link dark-theme-link' : 'nav-link'

      return (
        <nav className={navbarClass}>
          <div>
            <Link to="/">
              <img
                src={`https://assets.ccbp.in/frontend/react-js/website-logo-${websiteLogo}-theme-img.png`}
                alt="website logo"
              />
            </Link>
            <ul>
              <li>
                <Link className={navLinkClass} to="/">
                  Home
                </Link>
              </li>
              <li>              
                <Link className={navLinkClass} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              onClick={onClickToggleTheme}
              data-testid="theme"
            >
              <img src={toggleImage} alt="theme" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
