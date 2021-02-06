/**
 * Create template for pages that created by gatsby-node.js
 */

import { graphql } from "gatsby"
import React from "react"
//import Layout from "../components/layout"
import Layout from "../components/Layout/Layout"
import { Content } from "../components/Layout/Content.styles"

// A static query, the results from which
// will be passed to our component. Uses the 'id' property
// passed via the `createPage` context config to retrieve the page.
export const query = graphql`
  query($id: Int!) {
    reviews(directus: { id: { eq: $id } }) {
      directus {
        id
        date(formatString: "")
        from
        artist_name_zh_hant_tw
        title
        content
      }
    }
  }
`

// The component we'll render for a given page
const ProjectQreview = ({ data: { reviews: contents } }) => {
  return (
    <Layout>
      <Content>
        <div>
          <p>{contents.directus.date}</p>
          <p>{contents.directus.from}</p>
          <p>{contents.directus.artist_name_zh_hant_tw}</p>
        </div>
        <div>
          <p>{contents.directus.title}</p>
          <div
            dangerouslySetInnerHTML={{ __html: contents.directus.content }}
          />
        </div>
      </Content>
    </Layout>
  )
}

export default ProjectQreview
