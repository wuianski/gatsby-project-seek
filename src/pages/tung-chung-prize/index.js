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

export const query = graphql`
  query {
    projectTpagequery: allPages(filter: { directus: { id: { eq: 5 } } }) {
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
            menu_text_en_us
            menu_text_zh_hant_tw
          }
        }
      }
    }
  }
`

// The component we'll render for a given page
const ProjectTInfo = ({ data }) => {
  return (
    <div>
      {data.projectTpagequery.edges.map(({ node }) => (
        <div key={node.directus.id}>
          <Layout>
            <SEO
              title="Project Seek 覓計畫 | TUNG CHUNG PRIZE"
              description="尋覓創變基因，在當代思維中實踐創藝不設限。"
            />
            <FullscreenImg>
              <Headerw />

              <BackgroundImage
                Tag="section"
                className="bgSection"
                fluid={node.directus.cover.childImageSharp.fluid}
                backgroundColor={`#040e18`}
                id="bgT"
                style={{ overflow: "hidden" }}
              >
                <div className="projectTag">prize</div>
                <div className="blcCtrTitle">
                  <Fade top>
                    <p className="txtCtr fullPName_T">
                      {node.directus.menu_text_en_us}
                    </p>
                    <p className="txtCtr fullPName_T">
                      {node.directus.menu_text_zh_hant_tw}
                    </p>
                  </Fade>
                </div>

                <div className="blcCtrIntro">
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
                <Link to={`/tung-chung-prize/list/`}>
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

export default ProjectTInfo
