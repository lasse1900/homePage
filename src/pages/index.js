import React from "react"
import Layout from "../components/layout"
import Link from 'gatsby-link'
import mokkilaituri from '../pics/mokkilaituri.jpeg'

const IndexPage = () => (
  <Layout>
    <h1>Welcome to my Home Page.</h1>
    <p><i>I'm Lauri software developer / job seeker living in Vantaa. </i></p>
    <p><i>If you want to see my <a href="https://www.linkedin.com/in/laurikyttala/" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile, <Link to="/projects">projects
    </Link> or <Link to="/contact"> contact</Link> me - all the info can be found on these pages.</i></p>
    <img src={mokkilaituri} alt="myPhoto" />
  </Layout>
)

export default IndexPage
