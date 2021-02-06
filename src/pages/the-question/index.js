/**
 * Manually create index page inside "the-question" folder, query data of intro.
 *
 * Add projects list by import projectQList.js
 */

import React from "react"
//import { css } from "@emotion/react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import ProjectQList from "../../components/projectQList.js"
import { FullscreenImg } from "../../components/Layout/FullscreenImg.styles"
import BackgroundImage from "gatsby-background-image"
import ArrowDown from "../../images/ArrowDown.png"
//import Footer from "../Footer/Footer"

export const query = graphql`
  query questionQuery($eq: Int = 1) {
    pages(directus: { id: { eq: $eq }, projects: { elemMatch: {} } }) {
      directus {
        title_zh_hant_tw
        title_en_us
        content_zh_hant_tw
        content_en_us
        cover {
          publicURL
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
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

// The component we'll render for a given page
const PageQIntro = ({ data: { pages: contents } }) => {
  return (
    <div>
      <Layout>
        <FullscreenImg>
          <BackgroundImage
            Tag="section"
            className="bgSection"
            fluid={contents.directus.cover.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          >
            <div className="blcCtr">
              <p className="txtCtr">{contents.directus.title_en_us}</p>
              <p className="txtCtr">{contents.directus.title_zh_hant_tw}</p>
              <div className="pageIntro">
                <p>{contents.directus.content_zh_hant_tw}</p>
                <p>{contents.directus.content_en_us}</p>
              </div>
            </div>
            <div className="arrowDown">
              <img src={ArrowDown} alt="arrow-down" />
            </div>
          </BackgroundImage>
        </FullscreenImg>

        <ProjectQList />
      </Layout>
    </div>
  )
}

export default PageQIntro
