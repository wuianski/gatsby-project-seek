/**
 * query pages' introduction, which pages_id equal 1 (the-question).
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import Layout from "../components/Layout/Layout"
import BackgroundImage from "gatsby-background-image"
import { FullscreenImg } from "../components/Layout/FullscreenImg.styles"
import ArrowDown from "../images/ArrowDown.svg"
import Headerw from "../components/Headerw/Headerw"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"

export default function QList() {
  return (
    <StaticQuery
      query={graphql`
        query projectQPageQuery {
          allPages(filter: { directus: { id: { eq: 1 } } }) {
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
                  id="bgQ"
                  style={{ overflow: "hidden" }}
                >
                  <div className="projectTag">commission</div>
                  <div className="blcCtrTitle">
                    <Zoom cascade>
                      <p className="txtCtr fullPName">
                        {node.directus.title_en_us}
                      </p>
                      <p className="txtCtr fullPName">
                        {node.directus.title_zh_hant_tw}
                      </p>
                    </Zoom>
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
                  <div
                    className="arrowDown"
                    onClick={() => {
                      scrollTo("#pageTopQ")
                    }}
                    onKeyDown={() => scrollTo("#pageTopQ")}
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
