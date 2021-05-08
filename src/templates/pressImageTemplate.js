/**
 * Create template (press images) for pages that created by gatsby-node.js
 */

import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import { Content } from "../components/Layout/Content.styles"
import Img from "gatsby-image"
import Back from "../images/back.png"
import Header from "../components/Header/Header"

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
            fixed(quality: 90, width: 311, height: 220) {
              ...GatsbyImageSharpFixed
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
        <div className="pressImgTitleBlk">
          <span className="pressImgTitle">press images</span>
          <span className="pressImgTextBlk">
            <span className="pressImgText">
              {data.pquery.directus.pages_id === 1 && <span>THE QUESTION</span>}
              {data.pquery.directus.pages_id === 5 && (
                <span>TUNG CHUNG ART AWARD</span>
              )}
            </span>
            <span className="pressImgText">
              <span>{data.pquery.directus.year}</span>
            </span>
            <span className="pressImgText">
              {data.pquery.directus.pages_id === 1 && <span>問問題計畫</span>}
              {data.pquery.directus.pages_id === 5 && <span>銅鐘藝術賞</span>}
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
          </span>
        </div>
        <div>
          {data.pquery.directus.images && (
            <div>
              {data.pquery.directus.images.map(image => (
                <div className="twoGrid64_pressImg mt20">
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.pquery.directus.artist_name_zh_hant_tw,
                      }}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.pquery.directus.artist_name_en_us,
                      }}
                    />
                    <div>
                      {data.iquery.nodes.map(node => (
                        <div>
                          {image.name === node.directus.fileId && (
                            <span>{node.directus.description}</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div>{data.pquery.directus.year}</div>
                  </div>
                  <div className="pressSingleImg">
                    <Img
                      className="pressCoverImg"
                      fixed={image.childImageSharp.fixed}
                      key={image.childImageSharp.id}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Content>
    </Layout>
  )
}

export default ProjectQreview
