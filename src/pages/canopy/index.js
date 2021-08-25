/**
 * query pages' introduction, which pages_id equal 3 (canopy).
 */

import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout/Layout"
import SEO from "../../components/seo"
import BackgroundImage from "gatsby-background-image"
import { FullscreenImg } from "../../components/Layout/FullscreenImg.styles"
import ArrowDown from "../../images/ArrowDown.svg"
import Headerw from "../../components/Headerw/Headerw"
import Fade from "react-reveal/Fade"
import DownloadBtn from "../../images/download.svg"

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
            menu_text_en_us
            menu_text_zh_hant_tw
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
      {data.canopyInfoquery.edges.map(({ node }) => (
        <div key={node.directus.id}>
          <Layout>
            <SEO
              title="CANOPY 雨棚計畫"
              description={node.directus.content_zh_hant_tw}
            />
            <FullscreenImg>
              <Headerw />

              <BackgroundImage
                Tag="section"
                className="bgSection"
                fluid={node.directus.cover_inside.childImageSharp.fluid}
                backgroundColor={`#040e18`}
                id="bgE"
                style={{ overflow: "hidden" }}
              >
                <div className="projectTag">open call</div>

                <div className="blcCtrTitle">
                  <Fade top>
                    <p className="txtCtr fullPName">
                      {node.directus.menu_text_en_us}
                    </p>
                    <p className="txtCtr fullPName">
                      {node.directus.menu_text_zh_hant_tw}
                    </p>
                  </Fade>
                </div>

                <div className="blcCtrIntro_Q">
                  <div className="pageIntro">
                    <p className="pageIntroTW">
                      {node.directus.content_zh_hant_tw}
                    </p>
                    <p className="pageIntroEN">{node.directus.content_en_us}</p>
                    <div className="pageDownloadC">
                      <span>
                        <a
                          href={node.directus.planimetric_map.publicURL}
                          download="平面圖"
                        >
                          <span className="downloadBtnTextC">平面圖</span>
                          <span
                            className="downloadBtn"
                            role="button"
                            tabIndex="0"
                          >
                            <img
                              className="downloadBtnImgC"
                              src={DownloadBtn}
                              alt="download button"
                            />
                          </span>
                        </a>
                      </span>
                      <span className="secondDownloadC">
                        <a
                          href={node.directus.apply_for.publicURL}
                          download="申請辦法"
                        >
                          <span className="downloadBtnTextC">申請辦法</span>
                          <span
                            className="downloadBtn"
                            role="button"
                            tabIndex="0"
                          >
                            <img
                              className="downloadBtnImgC"
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
                      src={ArrowDown}
                      alt="arrow-down"
                      height="37px"
                    />
                  </div>
                </Link>
              </BackgroundImage>
            </FullscreenImg>
          </Layout>
        </div>
      ))}
    </div>
  )
}

export default CanopyInfo
