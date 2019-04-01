/* eslint no-console: "off" */
import React, { PropTypes } from "react"

import "./index.global.css"
import "./highlight.global.css"

import DefaultHeadMeta from "./components/DefaultHeadMeta"
import GoogleTagManager from './GoogleTagManager'

const AppContainer = (props) => (
  <div>
    <GoogleTagManager gtmId='GTM-N4NR3HM' />
    <DefaultHeadMeta />
    { props.children }
  </div>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
