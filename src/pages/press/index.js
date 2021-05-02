/**
 * listing images and attached files from pages (the-question, TCAA) into PRESS page.
 * 
 *
 */

import React from "react"
//import { css } from "@emotion/react"
import { graphql, Link } from "gatsby"
//import { rhythm } from "../utils/typography"
//import Layout from "../../components/layout"
import Layout from "../../components/Layout/Layout"
import { Content } from "../../components/Layout/Content.styles"
import Img from "gatsby-image"
import DownloadBtn from "../../images/download.png"
import PressGoTo from "../../images/pressGoto.png"
import Header from "../../components/Header/Header"

export const query = graphql`
  query {
    press: allProjects(
      filter: { directus: { pages_id: { in: [1, 5] }, status: {eq: "published"} } }
      sort: { order: DESC, fields: directus___year }
    ) {
      totalCount
      edges {
        node {
          directus {
            id
            pages_id
            title_en_us
            title_zh_hant_tw
            year
            cover {
              publicURL
              childImageSharp {
                fixed(quality: 90, width: 223, height: 158) {
                  ...GatsbyImageSharpFixed
                }
              }
              name
            }
            file_pdf {
              publicURL
              name
            }
            file_zip {
              publicURL
              name
            }
          }
        }
      }
    }
  }
`

export default function Press({ data }) {
  return (
    <Layout>
      <Content>
        <Header />
        <div className="pressTitle">press pachage</div>
        <div>
          {data.press.edges.map(({ node }) => (
            <div key={node.directus.id}>
              <div className="twoGrid37_press">
                <div className="pressImg">
                  <Img
                    className="pressCoverImg"
                    fixed={node.directus.cover.childImageSharp.fixed}
                  />
                </div>
                <div>
                  <div className="pressTextBlk">
                    <span className="pressText">
                      {node.directus.pages_id === 1 && (
                        <span>THE QUESTION</span>
                      )}
                      {node.directus.pages_id === 5 && (
                        <span>TUNG CHUNG ART AWARD</span>
                      )}
                    </span>
                    <span className="pressText">
                      <span>{node.directus.year}</span>
                    </span>
                    <span className="pressText">
                      {node.directus.pages_id === 1 && <span>問問題計畫</span>}
                      {node.directus.pages_id === 5 && <span>銅鐘藝術賞</span>}
                    </span>
                  </div>

                  <div className="pressLinkBlk">
                    <a
                      href={node.directus.file_zip.publicURL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="">Press Package</span>
                      <span
                        className="downloadBtn pressLink"
                        role="button"
                        tabIndex="0"
                      >
                        <img
                          className="downloadBtnImg"
                          src={DownloadBtn}
                          alt="download button"
                        />
                      </span>
                    </a>
                    <a
                      href={node.directus.file_pdf.publicURL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="">Press Release</span>
                      <span
                        className="downloadBtn pressLink"
                        role="button"
                        tabIndex="0"
                      >
                        <img
                          className="downloadBtnImg"
                          src={DownloadBtn}
                          alt="download button"
                        />
                      </span>
                    </a>
                    <Link
                      to={`/press/${node.directus.year}/${node.directus.pages_id}`}
                    >
                      <span className="">Press Images</span>
                      <span
                        className="arrowGoTo pressLink"
                        role="button"
                        tabIndex="0"
                      >
                        <img src={PressGoTo} alt="internal link button" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Content>
    </Layout>
  )
}
