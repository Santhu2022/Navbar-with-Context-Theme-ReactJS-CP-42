import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const pageContainerClass = isDarkTheme
        ? 'page-content-container dark-theme-page'
        : 'page-content-container'
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const pageHeadingClass = isDarkTheme
        ? 'page-heading dark-theme-heading'
        : 'page-heading'
      return (
        <>
          <Navbar />
          <div className={pageContainerClass}>
            <img src={homeImageUrl} alt="home" className="page-image" />
            <h1 className={pageHeadingClass}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
