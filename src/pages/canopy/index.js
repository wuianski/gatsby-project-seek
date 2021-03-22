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
import { Content } from "../../components/Layout/Content.styles"
import Img from "gatsby-image"
import ArrowDownBlk from "../../images/ArrowDownBlk.png"
import ArrowUp from "../../images/ArrowUp.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
import DownloadBtn from "../../images/download.png"

export const query = graphql`
  query canopyQuery($eq: Int = 3) {
    pages(directus: { id: { eq: $eq }, artworks_list: { elemMatch: {} } }) {
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

// The component we'll render for a given page
const PageEIntro = ({ data: { pages: contents } }) => {
  return (
    <Layout>
      <Content>
        <div className="pageTitle">
          <span>{contents.directus.title_en_us}</span>
          <span>{contents.directus.title_zh_hant_tw}</span>
        </div>
        <div className="mt20">
          <Img fluid={contents.directus.cover.childImageSharp.fluid} />
        </div>
        <div className="twoGrid73 mt60">
          <div>
            <div className="textTW">{contents.directus.content_zh_hant_tw}</div>
            <div className="textEN">{contents.directus.content_en_us}</div>
          </div>
          <div>
            <div className="fr">
              <span className="downloadBtnText">平面圖</span>
              <span className="downloadBtn" role="button" tabIndex="0">
                <img
                  className="downloadBtnImg"
                  src={DownloadBtn}
                  alt="download button"
                />
              </span>
              <span className="downloadBtnText">申請辦法</span>
              <span className="downloadBtn" role="button" tabIndex="0">
                <img
                  className="downloadBtnImg"
                  src={DownloadBtn}
                  alt="download button"
                />
              </span>
            </div>
          </div>
        </div>
        <div
          className="mt80"
          onClick={() => scrollTo("#aCList")}
          onKeyDown={() => scrollTo("#aCList")}
          role="button"
          tabIndex="0"
        >
          <img
            className="arrowDown"
            src={ArrowDownBlk}
            alt="arrow-down"
            height="37px"
          />
        </div>
        <ArtworkCList />
      </Content>
    </Layout>
  )
}

export default PageEIntro
