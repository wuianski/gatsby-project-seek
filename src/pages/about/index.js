/**
 * Manually create index page inside "about" folder, query data of intro.
 */

import React from "react"
//import { css } from "@emotion/react"
import { graphql } from "gatsby"
//import { rhythm } from "../utils/typography"
import Layout from "../../components/Layout/Layout"

// The component we'll render for a given page
const PageAbout = ({ data: { aboutPage: contents } }) => {
  return (
    <Layout>
      <p>{contents.directus.content_en_us}</p>
      <p>{contents.directus.content_zh_hant_tw}</p>
    </Layout>
  )
}

export default PageAbout

export const query = graphql`
  query aboutQuery {
    aboutPage {
      directus {
        content_en_us
        content_zh_hant_tw
      }
    }
  }
`
