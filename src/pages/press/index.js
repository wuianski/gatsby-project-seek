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
import SEO from "../../components/seo"
import { Content } from "../../components/Layout/Content.styles"
import Img from "gatsby-image"
import DownloadBtn from "../../images/download.svg"
import PressGoTo from "../../images/goTo.svg"
import Header from "../../components/Header/Header"

export const query = graphql`
  query {
    press: allProjects(
      filter: {
        directus: { pages_id: { in: [1, 5] }, status: { eq: "published" } }
      }
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
                fluid(quality: 95, maxWidth: 672, maxHeight: 425) {
                  ...GatsbyImageSharpFluid
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
      <SEO
        title="PRESS"
        description="尋覓創變基因，在當代思維中實踐創藝不設限。"
      />
      <Content>
        <Header />
        <div className="press_m">
          <div className="pressTitle">press package</div>
          <div>
            {data.press.edges.map(({ node }) => (
              <div key={node.directus.id}>
                <div className="twoGrid37_press">
                  <div className="pressImg">
                    <Img
                      className="pressCoverImg"
                      fluid={node.directus.cover.childImageSharp.fluid}
                    />
                  </div>
                  <div>
                    <div className="pressTextBlk">
                      <span className="pressTextEN">
                        {node.directus.pages_id === 1 && (
                          <span>THE QUESTION PROJECT</span>
                        )}
                        {node.directus.pages_id === 5 && (
                          <span>TUNG CHUNG PRIZE</span>
                        )}
                      </span>
                      <span className="pressTextYear">
                        <span>{node.directus.year}</span>
                      </span>
                      <span className="pressTextTW">
                        {node.directus.pages_id === 1 && (
                          <span>問問題計畫</span>
                        )}
                        {node.directus.pages_id === 5 && (
                          <span>銅鐘藝術賞</span>
                        )}
                      </span>
                    </div>

                    <div className="pressLinkBlk">
                      {node.directus.file_zip && (
                        <a
                          href={node.directus.file_zip.publicURL}
                          target="_blank"
                          rel="noreferrer"
                          download
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
                      )}
                      {node.directus.file_pdf && (
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
                      )}
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
        </div>
      </Content>
    </Layout>
  )
}
