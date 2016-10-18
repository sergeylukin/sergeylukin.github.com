import React, { PropTypes } from "react"

import styles from "./index.scss"

const Info = (props) => (
  <div className={ styles.info }>
    <dl className={ styles.PersonalDetails }>
      <dt>{ "Name Surname" }</dt>
      <dd className={ styles.PersonalDetails_nameValue }>
        { "Sergey Lukin" }
      </dd>
      <dt className={ styles.PersonalDetails_occupation }>
        { "Prime occupation" }
      </dt>
      <dd className={ styles.PersonalDetails_occupationValue }>
        { "Software Developer" }
      </dd>
      <dt className={ styles.PersonalDetails_about }>
        { "About me" }
      </dt>
      <dd className={ styles.PersonalDetails_aboutValue }>
        <p>
          { "Hi, I'm Sergey, 30yo, father of 2, currently"
            + " based in Tel Aviv, Israel." }
        </p>
        <p>
          { "I'm mostly passionate about #music, #programming,"
            + " #sport, #ui, #ux"
            + " ...in alphabetical order :)" }
        </p>
        { props.children }
      </dd>
    </dl>

  </div>
)

Info.propTypes = {
  children: PropTypes.node,
}

export default Info
