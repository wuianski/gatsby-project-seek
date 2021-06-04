/**
 * query pages' introduction, which pages_id equal 3 (canopy).
 */

import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/Layout/Layout"
import BackgroundImage from "gatsby-background-image"
import { FullscreenImg } from "../../components/Layout/FullscreenImg.styles"
import ArrowDown from "../../images/ArrowDown.svg"
import Headerw from "../../components/Headerw/Headerw"
import Fade from "react-reveal/Fade"

export const query = graphql`
  query {
    projectEpagequery: allPages(filter: { directus: { id: { eq: 2 } } }) {
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
            projects {
              directus {
                title_zh_hant_tw
                year
              }
            }
          }
        }
      }
    }
  }
`

// The component we'll render for a given page
const ProjectEInfo = ({ data }) => {
  return (
    <div>
      {data.projectEpagequery.edges.map(({ node }) => (
        <div key={node.directus.id}>
          <Layout>
            <FullscreenImg>
              <Headerw />

              <BackgroundImage
                Tag="section"
                className="bgSection"
                fluid={node.directus.cover.childImageSharp.fluid}
                backgroundColor={`#040e18`}
                id="bgE"
                style={{ overflow: "hidden" }}
              >
                <div className="projectTag">commission</div>

                <div className="blcCtrTitle">
                  <Fade top>
                    <p className="txtCtr fullPName">
                      {node.directus.title_en_us}
                    </p>
                    <p className="txtCtr fullPName">
                      {node.directus.title_zh_hant_tw}
                    </p>
                  </Fade>
                </div>

                <div className="blcCtrIntro_E">
                  <Fade cascade>
                    <div className="pageIntro">
                      <p className="pageIntroTW">
                        {node.directus.content_zh_hant_tw}
                      </p>
                      <p className="pageIntroEN">
                        {node.directus.content_en_us}
                      </p>
                    </div>
                  </Fade>
                </div>
                <Link to={`/extension/list/`}>
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

export default ProjectEInfo
