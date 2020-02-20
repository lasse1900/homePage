import React from 'react'
import Layout from "../components/layout"

const ProjectPage = () => {
  return (
    <Layout>
      <h1>Project Page</h1>
      <p>Here are some links to my works.</p>
      <ul>
        <li>
          <a href="https://lutpub.lut.fi/handle/10024/72533" target="_blank" rel="noopener noreferrer">Thesis</a>
        </li>
        <li>
          <a href="https://github.com/Lasseboy59" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <a href="https://dance-calendar-test.herokuapp.com/" target="_blank" rel="noopener noreferrer">Dance Calendar App</a>
        </li>
        <li>
          <a href="http://laurishostingpackage-com.stackstaging.com/content/10-API_a/" target="_blank" rel="noopener noreferrer">Weather App</a>
        </li>
        <li>
          <a href="http://laurishostingpackage-com.stackstaging.com/content/10-API_b/" target="_blank" rel="noopener noreferrer">PostCode Finder</a>
        </li>
        <li>
          <a href="http://contactmemo.apphb.com/" target="_blank" rel="noopener noreferrer">Contact Memo</a>
        </li>
      </ul>
    </Layout>
  )
}

export default ProjectPage