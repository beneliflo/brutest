import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../layouts/seo"

const Internal = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Internal</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Internal
