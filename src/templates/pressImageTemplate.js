/**
 * Create template (press images) for pages that created by gatsby-node.js
 */

import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import { Content } from "../components/Layout/Content.styles"
import { Content1280 } from "../components/Layout/Content1280.styles"
import Img from "gatsby-image"
import Back from "../images/back.svg"
import Header from "../components/Header/Header"
import DownloadBtn from "../images/download.svg"

// A static query, the results from which
// will be passed to our component. Uses the 'id' property
// passed via the `createPage` context config to retrieve the page.
export const query = graphql`
  query($id: Int!) {
    pquery: projects(directus: { id: { eq: $id } }) {
      directus {
        pages_id
        id
        year
        title_en_us
        title_zh_hant_tw
        images {
          publicURL
          childImageSharp {
            fluid(quality: 95, maxWidth: 672, maxHeight: 425) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
        artist_name_zh_hant_tw
        artist_name_en_us
      }
    }
    iquery: allFileInfo {
      nodes {
        directus {
          description
          fileId
          title
        }
      }
    }
  }
`

// The component we'll render for a given page
const ProjectQreview = ({ data }) => {
  return (
    <Layout>
      <Header />
      <Content>
        <div className="press_m">
          <div className="pressImgTitleBlk">
            <div>
              <span className="pressImgTitle">press images</span>
            </div>
            <div>
              <span className="pressImgTextBlk">
                <span className="pressImgText">
                  {data.pquery.directus.pages_id === 1 && (
                    <span>THE QUESTION</span>
                  )}
                  {data.pquery.directus.pages_id === 5 && (
                    <span>TUNG CHUNG ART PRIZE</span>
                  )}
                </span>
                <span className="pressImgText">
                  <span>{data.pquery.directus.year}</span>
                </span>
                <span className="pressImgText">
                  {data.pquery.directus.pages_id === 1 && (
                    <span>問問題計畫</span>
                  )}
                  {data.pquery.directus.pages_id === 5 && (
                    <span>銅鐘藝術賞</span>
                  )}
                </span>
              </span>
              <a
                //href="/#"
                onClick={() => window.history.back()}
                onKeyDown={() => window.history.back()}
                role="button"
                tabIndex="0"
              >
                <span className="backBtn fr" role="button" tabIndex="0">
                  <img src={Back} alt="back button" />
                  <span className="backText">back</span>
                </span>
              </a>
            </div>
          </div>
          <div>
            {data.pquery.directus.images && (
              <div>
                {data.pquery.directus.images.map(image => (
                  <Content1280>
                    <div className="twoGrid64_pressImg mt20">
                      <div className="pressSingleImg_m">
                        <Img
                          className=""
                          fluid={image.childImageSharp.fluid}
                          key={image.childImageSharp.id}
                        />
                      </div>
                      <div>
                        <div
                          className="pressImgContentTxt"
                          dangerouslySetInnerHTML={{
                            __html: data.pquery.directus.artist_name_zh_hant_tw,
                          }}
                        />
                        <div
                          className="pressImgContentTxt"
                          dangerouslySetInnerHTML={{
                            __html: data.pquery.directus.artist_name_en_us,
                          }}
                        />
                        <div>
                          {data.iquery.nodes.map(node => (
                            <div className="pressImgContentTxt">
                              {image.name === node.directus.fileId && (
                                <span>{node.directus.title}</span>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="pressImgContentTxt">
                          {data.pquery.directus.year}
                        </div>
                        <div>
                          {data.iquery.nodes.map(node => (
                            <div className="pressImgContentTxtCC">
                              {image.name === node.directus.fileId && (
                                <span>{node.directus.description}</span>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="pressImgContentTxtDownload">
                          <a
                            href={image.publicURL}
                            target="_blank"
                            rel="noreferrer"
                            download
                          >
                            <span className="">download</span>
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
                        </div>
                      </div>
                      <div className="pressSingleImg">
                        <Img
                          className="pressSingleImg_d"
                          fluid={image.childImageSharp.fluid}
                          key={image.childImageSharp.id}
                        />
                      </div>
                    </div>
                  </Content1280>
                ))}
              </div>
            )}
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default ProjectQreview
