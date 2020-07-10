import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Launching soon!</h1>
    <p>We apologize for the inconvenience, our site is undergoing some upgrades to serve you better.</p>
    <p>You can still contact us at <a href="mailto:sales@datrimapackaging.com">sales@datrimapackaging.com</a> Or visit us on Facebook at <a href="https://www.facebook.com/pages/Datrima-Packaging/154427008058944" target="_blank">Datrima Packaging.</a></p>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
