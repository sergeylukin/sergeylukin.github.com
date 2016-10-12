import React, { PropTypes } from "react"

import cx from "classnames"
import { Link } from "react-router"
import Svg from "react-svg-inline"

import styles from "./index.scss"
import homeSvg from "./home.svg"

const Navigation = (
  {
    primaryColor,
    secondaryColor,
    linksHoverColor,
    nohome,
    className,
  }) => (

  <div className={ cx(className, styles.nav) }>
    { nohome ? null :
    <div className={ styles.navigation }>
      <Link to="/"
        style={ {
          color: secondaryColor,
          backgroundColor: primaryColor,
        } }
      >
        <div className={ styles.backLinks }>
          <span className={ styles.backArrowLink }>
            <svg className={ styles.backArrow } viewBox="0 0 24 24">
              <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2
                10.2,7.2 9,6 3.1,12 9,18 10.2,16.8"
              ></polygon>
            </svg>
          </span>
          <span className={ styles.homeLink }>
            <Svg svg={ homeSvg } className={ styles.homeIcon } cleanup />
          </span>
        </div>
      </Link>
    </div>
    }

    { nohome ? null :
    <div className={ styles.smallScreenNavigation }>
      { linksHoverColor ?
        <style>
        { `\
          .${styles.smallScreenNavigation} a:hover {\
            color: ${linksHoverColor};\
          }\
        ` }
        </style>
      : null }
      <Link to="/">
        <div className={ styles.backLinks }>
          <span className={ styles.backArrowLink }>
            <svg className={ styles.backArrow } viewBox="0 0 24 24">
              <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2
                10.2,7.2 9,6 3.1,12 9,18 10.2,16.8"
              ></polygon>
            </svg>
          </span>
          <span className={ styles.homeLink }>
            <Svg svg={ homeSvg } className={ styles.homeIcon } cleanup />
          </span>
        </div>
      </Link>
    </div>
    }

    <div className={ nohome ? styles.fullWidthMenu : styles.menu }>
      { linksHoverColor ?
        <style>
        { `\
          .${styles.menu} a:hover {\
            color: ${linksHoverColor};\
          }\
        ` }
        </style>
      : null }
      <ul>
        <li><Link to="/resume.html">{ "Résumé" }</Link></li>
        <li><Link to="/archive">{ "Blog" }</Link></li>
        <li><Link to="/lab">{ "Projects" }</Link></li>
      </ul>
    </div>

    <div>
      <input type="checkbox" autoComplete="off"
        className={ styles.checkbox }
        id="js-offcanvas-navigation-toggler"
      />
      <div className={ styles.section }>
        <label htmlFor="js-offcanvas-navigation-toggler"
          className={ styles.toggle }
        >
          <div className={ styles.one }></div>
          <div className={ styles.two }></div>
          <div className={ styles.three }></div>
        </label>

        <nav>
          <ul role="navigation" className={ styles.overlayNavigation }>
            <li><Link to="/">{ "Home" }</Link></li>
            <li><Link to="/resume.html">{ "Résumé" }</Link></li>
            <li><Link to="/archive">{ "Blog" }</Link></li>
            <li><Link to="/lab">{ "Projects" }</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
)

Navigation.propTypes = {
  className: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  linksColor: PropTypes.string,
  linksHoverColor: PropTypes.string,
  nohome: PropTypes.bool,
}

Navigation.defaultProps = {
  nohome: false,
}

export default Navigation
