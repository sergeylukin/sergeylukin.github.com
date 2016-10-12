import React, { PropTypes } from "react"

import styles from "./index.scss"
import cx from "classnames"

const Header = (
  {
    className,
    minimal,
    carpetColor,
    children,
    noBottomGradient,
  }) => (
  <header
    className={
      cx(minimal ? styles.minimal : styles.normal, className)
    }
  >
    <div className={ styles.carpet }
      style={ { backgroundColor: carpetColor } }
    />
    <div className={ styles.smallScreenCarpet } />
    <div className={ styles.smallScreenBackground }
      style={ { backgroundColor: carpetColor } }
    />
    { children }
    { noBottomGradient ? null :
      <div className={ styles.bottomGradient } />
    }
  </header>
)

Header.propTypes = {
  minimal: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  carpetColor: PropTypes.string,
  noBottomGradient: PropTypes.bool,
}

Header.defaultProps = {
  minimal: false,
  carpetColor: "#f6cc4c",
  noBottomGradient: false,
}

export default Header
