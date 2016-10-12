import React from "react"

import styles from "./index.scss"

const Footer = () => (
  <footer className={ styles.root }>
    <p>
      { "Made with " }
      <span className={ styles.love }>{ "♥" }</span>
      { " in Tel Aviv" }
    </p>
  </footer>
)

export default Footer
