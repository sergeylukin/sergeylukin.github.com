import React, { PropTypes } from "react"

import cx from "classnames"

import styles from "./index.scss"

const Masonry = (
  {
    xxlargeItems,
    children,
  }) => {
  return (
    <div className={ cx(styles[`xxlarge${xxlargeItems}items`], styles.ml) }>
    {
      children.length
      ? (
        children.map((child, index) => (
          <div className={ styles.ml_pnl } key={ index }>
            { child }
          </div>
        ))
      )
      : "No posts yet."
    }
    </div>
  )
}

Masonry.propTypes = {
  children: PropTypes.node.isRequired,
  xxlargeItems: PropTypes.number,
}

Masonry.defaultProps = {
  xxlargeItems: 2,
}

export default Masonry
