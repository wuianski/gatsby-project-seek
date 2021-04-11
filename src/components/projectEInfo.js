/**
 * query pages' introduction, which pages_id equal 2 (extension).
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import Layout from "./Layout/Layout"
import BackgroundImage from "gatsby-background-image"
import { FullscreenImg } from "./Layout/FullscreenImg.styles"
import ArrowDown from "../images/ArrowDown.svg"

export default function EList() {
  return (
    <StaticQuery
      query={graphql`
        query projectEPageQuery {
          allPages(filter: { directus: { id: { eq: 2 } } }) {
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
                <BackgroundImage
                  Tag="section"
                  className="bgSection"
                  fluid={node.directus.cover.childImageSharp.fluid}
                  backgroundColor={`#040e18`}
                  id="bgE"
                >
                  <div className="projectTag">sponsorship</div>
                  <div className="blcCtr">
                    <p className="txtCtr fullPName">
                      {node.directus.title_en_us}
                    </p>
                    <p className="txtCtr fullPName">
                      {node.directus.title_zh_hant_tw}
                    </p>
                    <div className="pageIntro">
                      <p className="pageIntroTW">
                        {node.directus.content_zh_hant_tw}
                      </p>
                      <p className="pageIntroEN">
                        {node.directus.content_en_us}
                      </p>
                    </div>
                  </div>
                  <div
                    className="arrowDown"
                    onClick={() => scrollTo("#pEList")}
                    onKeyDown={() => scrollTo("#pEList")}
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
