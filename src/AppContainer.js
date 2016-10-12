import React, { PropTypes } from "react"

import "./index.global.css"
import "./highlight.global.css"

import DefaultHeadMeta from "./components/DefaultHeadMeta"

const AppContainer = (props) => (
  <div>
    <DefaultHeadMeta />
    { props.children }
  </div>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
