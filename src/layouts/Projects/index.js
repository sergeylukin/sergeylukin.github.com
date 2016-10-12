import React from "react"

import ProjectsList from "../../components/ProjectsList"
import InnerPage from "../../components/InnerPage"

const Projects = (props) => (
  <InnerPage {...props}>
    <ProjectsList />
  </InnerPage>
)

export default Projects
