import React, { PropTypes } from "react"
import { Link } from "react-router"
import styles from "./index.scss"

const PagePreview = (
  {
    __url,
    title,
    description,
    date,
    image,
    primaryColor,
    secondaryColor,
  }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <article className={ styles.Post }>
      <div className={ styles.background }
        style={ {
          backgroundImage: `url(${image})`,
        } }
      ></div>
      <div>
        <h1
          className={ styles.title }
          style={ {
            color: secondaryColor ? secondaryColor : null,
            backgroundColor: primaryColor
              ? primaryColor
              : null,
          } }
        >
          <Link to={ __url }
            style={ {
              color: secondaryColor ? secondaryColor : null,
            } }
          >
            { title }
          </Link>
        </h1>
      </div>
      {
        pageDate &&
        <div>
          { " " }
          <time key={ pageDate.toISOString() }
            className={ styles.time }
            style={ {
              color: secondaryColor ? secondaryColor : null,
              backgroundColor: primaryColor
                ? primaryColor
                : null,
            } }
          >
            { pageDate.toDateString() }
          </time>
        </div>
      }
      <p className={ styles.content }
        style={ {
          color: secondaryColor ? secondaryColor : null,
          backgroundColor: primaryColor
            ? primaryColor
            : null,
        } }
      >{ description }</p>
      <div className={ styles.ProjectLauncher_container }>
        <Link to={ __url }
          style={ {
            color: secondaryColor ? secondaryColor : null,
            borderColor: secondaryColor ? secondaryColor : null,
            backgroundColor: primaryColor
              ? primaryColor
              : null,
          } }
          className={ styles.ProjectLauncher }
        >
          <span>{ "Read more" }</span>
          <svg viewBox="-100.9 99.1 61.9 105.9">
            <path d="M-41.7
              145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8
              1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61
              152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6
              6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6
              11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4
              0-13.9z"
            />
          </svg>
        </Link>
      </div>
    </article>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
}

PagePreview.defaultProps = {
  primaryColor: "#f6cc4c",
  secondaryColor: "rgba(0, 0, 0, 0.6)",
}

export default PagePreview
