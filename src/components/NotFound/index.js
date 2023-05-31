import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const pageContainerClass = isDarkTheme
        ? 'page-content-container dark-theme-page'
        : 'page-content-container'
      const notFoundHeadingClass = isDarkTheme
        ? 'not-found-heading dark-theme-not-found-heading'
        : 'page-heading'
      const notfoundDescriptionClass = isDarkTheme
        ? 'not-found-description-dark'
        : 'not-found-description'
      return (
        <>
          <Navbar />
          <div className={pageContainerClass}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={notFoundHeadingClass}>Lost Your Way?</h1>
            <p className={notfoundDescriptionClass}>
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
