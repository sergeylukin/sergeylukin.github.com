import React, { PropTypes } from "react"

import Header from "../Header"
import Footer from "../Footer"
import Card from "../Card"
import Navigation from "../Navigation"
import Page from "../../layouts/Page"

import styles from "./index.scss"

const InnerPage = (props) => (
  <Page {...props}>
    <div className={ styles.wrapper }>
      <Header className={ styles.container }>
        <Navigation />
        <Card carpet className={ props.nopadding ? null : styles.padding }>
          { props.children }
        </Card>
      </Header>
    </div>
    <Footer />
  </Page>
)

InnerPage.propTypes = {
  children: PropTypes.node,
  nopadding: PropTypes.bool,
}

InnerPage.defaultProps = {
  nopadding: false,
}

export default InnerPage
