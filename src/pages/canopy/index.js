/**
 * Manually create index page inside "canopy" folder, query data of intro.
 *
 * Add projects list by import artworkCList.js
 */

import React from "react"
//import { css } from "@emotion/react"
import { graphql } from "gatsby"
//import { rhythm } from "../utils/typography"
//import Layout from "../../components/layout"
import Layout from "../../components/Layout/Layout"
import ArtworkCList from "../../components/artworkCList.js"

// The component we'll render for a given page
const PageEIntro = ({ data: { pages: contents } }) => {
  return (
    <Layout>
      <p>{contents.directus.title_zh_hant_tw}</p>
      <p>{contents.directus.title_en_us}</p>
      <p>{contents.directus.content_zh_hant_tw}</p>
      <p>{contents.directus.content_en_us}</p>
      <ArtworkCList />
    </Layout>
  )
}

export default PageEIntro

export const query = graphql`
  query canopyQuery($eq: Int = 3) {
    pages(directus: { id: { eq: $eq }, artworks_list: { elemMatch: {} } }) {
      directus {
        title_zh_hant_tw
        title_en_us
        content_zh_hant_tw
        content_en_us
        artworks_list {
          directus {
            title_zh_hant_tw
            year
          }
        }
      }
    }
  }
`
