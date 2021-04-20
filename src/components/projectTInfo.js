/**
 * query pages' introduction, which pages_id equal 5 (TCAA).
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import Layout from "./Layout/Layout"
import BackgroundImage from "gatsby-background-image"
import { FullscreenImg } from "./Layout/FullscreenImg.styles"
import ArrowDown from "../images/ArrowDown.svg"
import Headerw from "../components/Headerw/Headerw"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"

export default function TList() {
  return (
    <StaticQuery
      query={graphql`
        query projectTPageQuery {
          allPages(filter: { directus: { id: { eq: 5 } } }) {
            edges {
              node {
                directus {
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
      `}
      render={data => (
        <div>
          {data.allPages.edges.map(({ node }) => (
            <Layout>
              <FullscreenImg>
                <Headerw />
                <BackgroundImage
                  Tag="section"
                  className="bgSection"
                  fluid={node.directus.cover.childImageSharp.fluid}
                  backgroundColor={`#040e18`}
                  id="bgT"
                >
                  <div className="projectTag">award</div>
                  <div className="blcCtr">
                    <Zoom>
                      <p className="txtCtr fullPName">
                        {node.directus.title_en_us}
                      </p>
                      <p className="txtCtr fullPName">
                        {node.directus.title_zh_hant_tw}
                      </p>
                    </Zoom>
                    <Fade bottom>
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
                  <div
                    className="arrowDown"
                    onClick={() => scrollTo("#pageTopT")}
                    onKeyDown={() => scrollTo("#pageTopT")}
                    role="button"
                    tabIndex="0"
                  >
                    <img src={ArrowDown} alt="arrow-down" />
                  </div>
                </BackgroundImage>
              </FullscreenImg>
            </Layout>
          ))}
        </div>
      )}
    />
  )
}
