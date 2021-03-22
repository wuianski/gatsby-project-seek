/**
 * Manually create index page inside "hong-x-panasonic" folder, query data of intro.
 *
 * Add projects list by import artworkHList.js
 */

import React from "react"
//import { css } from "@emotion/react"
import { graphql } from "gatsby"
//import { rhythm } from "../utils/typography"
//import Layout from "../../components/layout"
import Layout from "../../components/Layout/Layout"
import { Content } from "../../components/Layout/Content.styles"
import ArtworkHList from "../../components/artworkHList.js"
import Img from "gatsby-image"
import DownloadBtn from "../../images/download.png"
import ArrowDownBlk from "../../images/ArrowDownBlk.png"
import scrollTo from "gatsby-plugin-smoothscroll"

export const query = graphql`
  query hongQuery($eq: Int = 4) {
    pages(directus: { id: { eq: $eq }, artworks_list: { elemMatch: {} } }) {
      directus {
        title_en_us
        cover {
          publicURL
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        content_zh_hant_tw
        content_en_us
        equipment {
          directus {
            id
            name_zh_hant_tw
            name_en_us
            detial
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
const PageHIntro = props => {
  const { data = {} } = props
  // Destructure the new posts property from props
  const { title_en_us, cover, content_zh_hant_tw, content_en_us, equipment } =
    data.pages.directus || {}
  return (
    <Layout>
      <Content>
        <div className="pageTitle">
          <p>{title_en_us}</p>
        </div>
        <div className="mt20">
          <Img fluid={cover.childImageSharp.fluid} />
        </div>
        <div className="twoGrid73 mt60">
          <div>
            <div className="textTW">{content_zh_hant_tw}</div>
            <div className="textEN">{content_en_us}</div>
          </div>
          <div>
            <div className="fr">
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
        <div className="w70">
          {equipment && (
            <div>
              <div className="twoGrid55">
                {equipment.map(myEquipment => (
                  <div key={myEquipment.directus.id}>
                    <div className="equipName">
                      {myEquipment.directus.name_zh_hant_tw}
                    </div>
                    <div className="equipName">
                      {myEquipment.directus.name_en_us}
                    </div>
                    <div
                      className="equipDetailText mt20"
                      dangerouslySetInnerHTML={{
                        __html: myEquipment.directus.detial,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div
          className="mt80"
          onClick={() => scrollTo("#aHList")}
          onKeyDown={() => scrollTo("#aHList")}
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
        <ArtworkHList />
      </Content>
    </Layout>
  )
}

export default PageHIntro


