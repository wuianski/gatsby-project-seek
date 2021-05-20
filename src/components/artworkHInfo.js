/**
 * query pages' introduction, which pages_id equal 4 (hong-x-panasonic).
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
//import { GatsbyImage } from "gatsby-plugin-image"
import ArrowDownBlk from "../images/ArrowDownBlk.png"
import scrollTo from "gatsby-plugin-smoothscroll"
import DownloadBtn from "../images/download.png"
import Fade from "react-reveal/Fade"

export default function hongList() {
  return (
    <StaticQuery
      query={graphql`
        query artworkHPageQuery {
          allPages(filter: { directus: { id: { eq: 4 } } }) {
            edges {
              node {
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
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          {data.allPages.edges.map(({ node }) => (
            <div key={node.directus.id} className="aHInfo">
              <div className="projectTagFixed">sponsorship</div>
              <Fade top>
                <div className="pageTitle" id="pageTopH">
                  <p>{node.directus.title_en_us}</p>
                </div>
              </Fade>
              <div className="mt20">
                <Img fluid={node.directus.cover.childImageSharp.fluid} />
              </div>
              <div className="twoGrid73 mt40">
                <div>
                  <div className="textTW">
                    {node.directus.content_zh_hant_tw}
                  </div>
                  <div className="textEN">{node.directus.content_en_us}</div>
                </div>

                <div>
                  <div className="apply fr">
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
                {node.directus.equipment && (
                  <div>
                    <div className="twoGrid55">
                      {node.directus.equipment.map(myEquipment => (
                        <div key={myEquipment.directus.id} className="equipBlk">
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
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="apply_m fr">
                <span className="downloadBtnText">申請辦法</span>
                <span className="downloadBtn" role="button" tabIndex="0">
                  <img
                    className="downloadBtnImg"
                    src={DownloadBtn}
                    alt="download button"
                  />
                </span>
              </div>

              <div
                className="pdTB80"
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
            </div>
          ))}
        </div>
      )}
    />
  )
}
