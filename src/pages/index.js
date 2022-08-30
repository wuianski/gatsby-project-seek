/**
 * Manually create index page, render query data.
 *
 * Add link to pages, which created by gatsby-node.js
 */

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import { FrontPage } from "../components/Layout/FrontPage.styles"
import BackgroundImage from "gatsby-background-image"
import { HeaderLogo } from "../components/Header/Header.styles"
// import LogoLight from "../images/logo_light_new.svg"
import LogoHf from "../images/logo_hf.svg"
import LogoPs from "../images/logo_ps.svg"
import Zoom from "react-reveal/Zoom"

import SwiperCore, { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/pagination/pagination.scss"
SwiperCore.use(Pagination)

export const query = graphql`
  query {
    allPages(
      filter: { directus: { sort: { ne: 5 } } }
      sort: { order: ASC, fields: directus___sort }
    ) {
      totalCount
      edges {
        node {
          directus {
            id
            slug
            title_en_us
            title_zh_hant_tw
            tag_name
            sort
            cover {
              publicURL
              childImageSharp {
                fluid(quality: 95, maxWidth: 1920, maxHeight: 1080) {
                  ...GatsbyImageSharpFluid_withWebp
                }
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

export default function Home({ data }) {
  //console.log(data)
  return (
    <div>
      <Layout>
        <SEO
          title="Project Seek 覓計畫"
          description="尋覓創變基因，在當代思維中實踐創藝不設限。"
        />
        <FrontPage>
          <div id="fullpage_container">
            <HeaderLogo>
              <a
                href="https://hongfoundation.org.tw/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="logoFrontPageHF"
                  src={LogoHf}
                  alt="logo-light"
                />
              </a>
              <Link to="/">
                <img
                  className="logoFrontPagePS"
                  src={LogoPs}
                  alt="logo-light"
                />
              </Link>
            </HeaderLogo>
            <div id="project_container">
              <div className="grid-container">
                {data.allPages.edges.map(({ node }) => (
                  <div key={node.directus.id} id={"item" + node.directus.sort}>
                    <div className="tagName">
                      <div id={"pTag_" + node.directus.sort}>
                        {node.directus.tag_name}
                      </div>
                    </div>
                    <div className="h100">
                      <Link to={node.directus.slug}>
                        {node.directus.cover && (
                          <BackgroundImage
                            Tag="section"
                            className="bgCoverImg"
                            fluid={node.directus.cover.childImageSharp.fluid}
                            backgroundColor={`#040e18`}
                          >
                            <div className="blcCtr">
                              <Zoom cascade>
                                <p className={"fullPName" + node.directus.sort}>
                                  {node.directus.menu_text_en_us}
                                </p>
                                <p
                                  className={"fullPNameTW" + node.directus.sort}
                                >
                                  {node.directus.menu_text_zh_hant_tw}
                                </p>
                              </Zoom>
                            </div>
                          </BackgroundImage>
                        )}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="project_container_m">
              <Swiper pagination={{ clickable: true }}>
                <div>
                  {data.allPages.edges.map(({ node }) => (
                    <div
                      key={node.directus.id + 10}
                      id={"item" + node.directus.sort}
                    >
                      <SwiperSlide>
                        <div>
                          <Link to={node.directus.slug}>
                            {node.directus.cover && (
                              <BackgroundImage
                                Tag="section"
                                className="bgCoverImg"
                                fluid={
                                  node.directus.cover.childImageSharp.fluid
                                }
                                backgroundColor={`#040e18`}
                              >
                                <p className="tagName">
                                  {node.directus.tag_name}
                                </p>
                                <div className="blcCtr">
                                  <Zoom cascade>
                                    <p className="txtCtr fullPName">
                                      {node.directus.menu_text_en_us}
                                    </p>
                                    <p className="txtCtr fullPNameTW">
                                      {node.directus.menu_text_zh_hant_tw}
                                    </p>
                                  </Zoom>
                                </div>
                              </BackgroundImage>
                            )}
                          </Link>
                        </div>
                      </SwiperSlide>
                    </div>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </FrontPage>
      </Layout>
    </div>
  )
}
