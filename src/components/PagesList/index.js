import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"
import Masonry from "../Masonry"

const PagesList = ({ pages }) => {
  return (
    <Masonry xxlargeItems={ 2 }>
    {
      pages.length
      ? (
        pages.map((page) => (
          <PagePreview { ...page } key={ page.title } />
        ))
      )
      : "No posts yet."
    }
    </Masonry>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
