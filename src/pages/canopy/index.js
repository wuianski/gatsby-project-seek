/**
 * query pages' introduction, which pages_id equal 3 (canopy).
 */

import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/Layout/Layout"
import { Content } from "../../components/Layout/Content.styles"
import Header from "../../components/Header/Header"
import Img from "gatsby-image"
import ArrowDownBlk from "../../images/ArrowDownBlk.svg"
import DownloadBtn from "../../images/download.svg"
import Fade from "react-reveal/Fade"

export const query = graphql`
  query {
    canopyInfoquery: allPages(filter: { directus: { id: { eq: 3 } } }) {
      edges {
        node {
          directus {
            id
            title_zh_hant_tw
            title_en_us
            content_zh_hant_tw
            content_en_us
            cover_inside {
              publicURL
              childImageSharp {
                fluid(quality: 95, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              directus {
                title
                description
              }
            }
            planimetric_map {
              publicURL
            }
            apply_for {
              publicURL
            }
          }
        }
      }
    }
  }
`

// The component we'll render for a given page
const CanopyInfo = ({ data }) => {
  return (
    <div>
      <Layout>
        <Content>
          <Header />
          <div>
            {data.canopyInfoquery.edges.map(({ node }) => (
              <div key={node.directus.id} className="aCInfo">
                <div className="projectTagFixed">open call</div>
                <Fade top>
                  <div className="pageTitle">
                    <span>{node.directus.title_en_us}</span>
                    <span>{node.directus.title_zh_hant_tw}</span>
                  </div>
                </Fade>
                <div className="mt20 artworkCover">
                  <Img
                    fluid={node.directus.cover_inside.childImageSharp.fluid}
                  />
                </div>
                <div className="imageInfo_c">
                  <span>{node.directus.cover_inside.directus.description}</span>
                </div>
                <div className="twoGrid73 mt20">
                  <div>
                    <div className="artworks_textTW">
                      {node.directus.content_zh_hant_tw}
                    </div>
                    <div className="artworks_textEN">
                      {node.directus.content_en_us}
                    </div>
                  </div>

                  <div>
                    <div className="fr">
                      <span>
                        <a
                          href={node.directus.planimetric_map.publicURL}
                          download="平面圖"
                        >
                          <span className="downloadBtnText">平面圖</span>
                          <span
                            className="downloadBtn"
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
                      </span>
                      <span>
                        <a
                          href={node.directus.apply_for.publicURL}
                          download="申請辦法"
                          className="downloadBtnText"
                        >
                          <span>申請辦法</span>
                          <span
                            className="downloadBtn"
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
                      </span>
                    </div>
                  </div>
                </div>
                <Link to={`/canopy/list/`}>
                  <div className="pdTB80" role="button" tabIndex="0">
                    <img
                      className="arrowDown"
                      src={ArrowDownBlk}
                      alt="arrow-down"
                      height="37px"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Content>
      </Layout>
    </div>
  )
}

export default CanopyInfo
