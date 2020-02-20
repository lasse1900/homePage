import React from "react"
import Layout from "../components/layout"
import Link from 'gatsby-link'

const IndexPage = () => (
  <Layout>
    <h1>Welcome to my Home Page.</h1>
    <h2>I'm Lauri software developer / job seeker living in Vantaa. </h2>
    <p>If you want to see my <a href="https://www.linkedin.com/in/laurikyttala/" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile, <Link to="/projects">projects
    </Link> or <Link to="/contact"> contact</Link> me - all the info can be found on these pages.</p>
  </Layout>
)

export default IndexPage
