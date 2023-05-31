import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const pageContainerClass = isDarkTheme
        ? 'page-content-container dark-theme-page'
        : 'page-content-container'
      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const pageHeadingClass = isDarkTheme
        ? 'page-heading dark-theme-heading'
        : 'page-heading'
      return (
        <>
          <Navbar />
          <div className={pageContainerClass}>
            <img src={aboutImageUrl} alt="about" className="page-image" />
            <h1 className={pageHeadingClass}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
