/**
 * Manually create index page inside "tcaa" folder, query data of intro.
 *
 * Add projects list by import projectTList.js
 */

import React from "react"
//import { css } from "@emotion/react"
import { graphql } from "gatsby"
//import { rhythm } from "../utils/typography"
//import Layout from "../../components/layout"
import Layout from "../../components/Layout/Layout"
import ProjectTList from "../../components/projectTList.js"
import { FullscreenImg } from "../../components/Layout/FullscreenImg.styles"
import BackgroundImage from "gatsby-background-image"
import ArrowDown from "../../images/ArrowDown.svg"
import ArrowUp from "../../images/ArrowUp.svg"
//import Footer from "../Footer/Footer"
import scrollTo from "gatsby-plugin-smoothscroll"

export const query = graphql`
  query tcaaQuery($eq: Int = 5) {
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
const PageTIntro = ({ data: { pages: contents } }) => {
  return (
    <div>
      <Layout>
        <FullscreenImg>
          <BackgroundImage
            Tag="section"
            className="bgSection"
            fluid={contents.directus.cover.childImageSharp.fluid}
            backgroundColor={`#040e18`}
            id="bgT"
          >
            <div className="blcCtr">
              <p className="txtCtr fullPName">
                {contents.directus.title_en_us}
              </p>
              <p className="txtCtr fullPName">
                {contents.directus.title_zh_hant_tw}
              </p>
              <div className="pageIntro">
                <p>{contents.directus.content_zh_hant_tw}</p>
                <p>{contents.directus.content_en_us}</p>
              </div>
            </div>
            <div
              className="arrowDown"
              onClick={() => scrollTo("#pTList")}
              onKeyDown={() => scrollTo("#pTList")}
              role="button"
              tabIndex="0"
            >
              <img src={ArrowDown} alt="arrow-down" />
            </div>
          </BackgroundImage>
          <ProjectTList />
          <div
            className="arrowUp"
            onClick={() => scrollTo("#bgT")}
            onKeyDown={() => scrollTo("#bgT")}
            role="button"
            tabIndex="0"
          >
            <img src={ArrowUp} alt="arrow-up" />
          </div>
        </FullscreenImg>
      </Layout>
    </div>
  )
}

export default PageTIntro


