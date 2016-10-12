import React, { PropTypes } from "react"

import styles from "./index.scss"
import cx from "classnames"

const Card = (props) => (
  <div className={ cx(props.className, styles.root, {
    [styles["hideOverflow"]]: props.hideOverflow,
    [styles["carpet"]]: props.carpet,
  }) }
  >
    { props.children }
  </div>
)

Card.propTypes = {
  children: PropTypes.node,
  hideOverflow: PropTypes.bool,
  carpet: PropTypes.bool,
  className: PropTypes.string,
}

Card.defaultProps = {
  hideOverflow: false,
  carpet: false,
}

export default Card
