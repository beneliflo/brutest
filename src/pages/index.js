import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../layouts/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/internal/">Go to internal</Link>
  </Layout>
)

export default IndexPage
