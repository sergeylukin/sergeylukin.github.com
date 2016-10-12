import React, { PropTypes } from "react"

import styles from "./index.scss"
import cx from "classnames"

const Avatar = (props) => (
  <div className={
        cx(props.small ? styles.small : styles.big,
           props.className)
       }
  >
    <h1>{ "Sergey Lukin" }</h1>
    <img
      src={ props.small ? require("./small.jpg") : require("./big.png") }
      style={ {
        boxShadow: props.borderColor ?
          `0 0 0 2px ${props.borderColor},
           0 2px 5px 4px rgba(255, 255, 255, .2)`
          : null,
      } }
      alt="Sergey Lukin"
      width="100%"
    />
  </div>
)

Avatar.propTypes = {
  small: PropTypes.bool,
  big: PropTypes.bool,
  className: PropTypes.string,
  borderColor: PropTypes.string,
}

Avatar.defaultProps = {
  small: false,
  big: false,
}

Avatar.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Avatar
