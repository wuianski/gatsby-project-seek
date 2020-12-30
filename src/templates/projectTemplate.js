/**
 * Create template for pages that created by gatsby-node.js
 */

import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

// A static query, the results from which
// will be passed to our component. Uses the 'id' property
// passed via the `createPage` context config to retrieve the page.
export const query = graphql`
  query($id: String!) {
    pages(id: { eq: $id }) {
      id
      slug
      title_en_us
      title_zh_hant_tw
      content_zh_hant_tw
      content_en_us
    }
  }
`

// The component we'll render for a given page
const PageIntro = ({ data: { pages: contents } }) => {
  return (
    <Layout>
      <p>{contents.title_zh_hant_tw}</p>
      <p>{contents.title_en_us}</p>
      <p>{contents.content_zh_hant_tw}</p>
      <p>{contents.content_en_us}</p>
    </Layout>
  )
}

export default PageIntro
