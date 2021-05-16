/**
 * query pages' introduction, which pages_id equal 3 (canopy).
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

//import Img from "gatsby-image"
import ArrowDownBlk from "../images/ArrowDownBlk.png"
import scrollTo from "gatsby-plugin-smoothscroll"
import DownloadBtn from "../images/download.png"
import Fade from "react-reveal/Fade"
import cCover from "../images/cCover.jpg"



export default function hongList() {
  return (
    <StaticQuery
      query={graphql`
        query artworkCPageQuery {
          allPages(filter: { directus: { id: { eq: 3 } } }) {
            edges {
              node {
                directus {
                  id
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
      `}
      render={data => (
        <div>
          {data.allPages.edges.map(({ node }) => (
            <div key={node.directus.id} className="aCInfo">
              <div className="projectTagFixed">open call</div>
              <Fade top>
                <div className="pageTitle">
                  <span>{node.directus.title_en_us}</span>
                  <span>{node.directus.title_zh_hant_tw}</span>
                </div>
              </Fade>
              <div className="mt20">
                <img className="" src={cCover} alt="cover" width="100%" />
              </div>
              <div className="twoGrid73 mt40">
                <div>
                  <div className="textTW">
                    {node.directus.content_zh_hant_tw}
                  </div>
                  <div className="textEN">{node.directus.content_en_us}</div>
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
                      >
                        <span className="downloadBtnText">申請辦法</span>
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
              <div
                className="pdTB80"
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
            </div>
          ))}
        </div>
      )}
    />
  )
}
