import React from "react"

import Layout from "../layouts/layout"
import SEO from "../layouts/seo"

import { Search } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Search />
  </Layout>
)

export default IndexPage
