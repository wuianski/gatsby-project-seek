/**
 * query pages' introduction, which pages_id equal 3 (canopy).
 */

import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/Layout/Layout"
import { Content } from "../../components/Layout/Content.styles"
import { Content1280 } from "../../components/Layout/Content1280.styles"
import Header from "../../components/Header/Header"
import Img from "gatsby-image"
import ArrowDownBlk from "../../images/ArrowDownBlk.svg"
import DownloadBtn from "../../images/download.svg"
import Fade from "react-reveal/Fade"
import PanasonicLogo from "../../images/panasonic.jpg"

export const query = graphql`
  query {
    hxfInfoquery: allPages(filter: { directus: { id: { eq: 4 } } }) {
      edges {
        node {
          directus {
            title_en_us
            cover {
              publicURL
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920, maxHeight: 568) {
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
                document {
                  publicURL
                }
                status
              }
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
const HxFInfo = ({ data }) => {
  return (
    <div>
      <Layout>
        <Content>
          <Header />
          {data.hxfInfoquery.edges.map(({ node }) => (
            <div key={node.directus.id} className="aHInfo">
              <div className="projectTagFixed">sponsorship</div>
              <Fade top>
                <div className="pageTitle" id="pageTopH">
                  <p>{node.directus.title_en_us}</p>
                </div>
              </Fade>
              <div className="mt20 artworkCover">
                <Img fluid={node.directus.cover.childImageSharp.fluid} />
              </div>
              <div>
                <div>
                  <div className="twoGrid73 mt40">
                    <div>
                      <div className="artworks_textTW">
                        {node.directus.content_zh_hant_tw}
                      </div>
                      <div className="artworks_textEN">
                        {node.directus.content_en_us}
                      </div>
                    </div>

                    <div className="applyHBlk">
                      <div className="applyH">
                        <a
                          href={node.directus.apply_for.publicURL}
                          download="申請辦法"
                        >
                          <span className="downloadBtnTextH">申請辦法</span>
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
                      </div>
                    </div>
                  </div>
                  <div className="twoGrid73 mt30">
                    <div>
                      {node.directus.equipment && (
                        <div className="twoGrid55">
                          {node.directus.equipment.map(myEquipment => (
                            <div
                              key={myEquipment.directus.id}
                              className="equipBlk"
                            >
                              {myEquipment.directus.status === "draft" && (
                                <span></span>
                              )}
                              {myEquipment.directus.status === "published" && (
                                <div>
                                  <div className="equipNameTW">
                                    {myEquipment.directus.name_zh_hant_tw}
                                  </div>
                                  <div className="equipNameEN">
                                    {myEquipment.directus.name_en_us}
                                  </div>
                                  <div
                                    className="equipDetailText mt20"
                                    dangerouslySetInnerHTML={{
                                      __html: myEquipment.directus.detial,
                                    }}
                                  />

                                  <a
                                    href={
                                      myEquipment.directus.document.publicURL
                                    }
                                    download="spec"
                                  >
                                    <div
                                      className="downloadBtn"
                                      role="button"
                                      tabIndex="0"
                                    >
                                      <img
                                        className="downloadBtnImg"
                                        src={DownloadBtn}
                                        alt="download button"
                                      />
                                    </div>
                                  </a>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="panasonicLogoBlk">
                      <div className="panasonicLogo">
                        <img src={PanasonicLogo} alt="Panasonic logo" />
                      </div>
                    </div>
                  </div>

                  <Link to={`/hong-x-panasonic/list/`}>
                    <div className="pdTB60" role="button" tabIndex="0">
                      <img
                        className="arrowDown"
                        src={ArrowDownBlk}
                        alt="arrow-down"
                        height="37px"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Content>
      </Layout>
    </div>
  )
}

export default HxFInfo
