import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"
import InnerPage from "../../components/InnerPage"

const Blog = (props, { collection }) => {
  const posts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })

  return (
    <InnerPage {...props}>
      <PagesList pages={ posts } />
    </InnerPage>
  )
}

Blog.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Blog
