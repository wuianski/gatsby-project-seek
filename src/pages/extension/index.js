/**
 * Manually create index page inside "extension" folder, query data of intro.
 *
 * Add projects list by import projectEList.js
 */

import React from "react"
//import { css } from "@emotion/react"
import { graphql } from "gatsby"
//import { rhythm } from "../utils/typography"
//import Layout from "../../components/layout"
import Layout from "../../components/Layout/Layout"
import ProjectEList from "../../components/projectEList.js"

// The component we'll render for a given page
const PageEIntro = ({ data: { pages: contents } }) => {
  return (
    <Layout>
      <p>{contents.directus.title_zh_hant_tw}</p>
      <p>{contents.directus.title_en_us}</p>
      <p>{contents.directus.content_zh_hant_tw}</p>
      <p>{contents.directus.content_en_us}</p>
      <ProjectEList />
    </Layout>
  )
}

export default PageEIntro

export const query = graphql`
  query extensionQuery($eq: Int = 2) {
    pages(directus: { id: { eq: $eq }, projects: { elemMatch: {} } }) {
      directus {
        title_zh_hant_tw
        title_en_us
        content_zh_hant_tw
        content_en_us
        projects {
          directus {
            title_zh_hant_tw
            year
          }
        }
      }
    }
  }
`
