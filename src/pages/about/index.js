/**
 * Manually create index page inside "about" folder, query data of intro.
 */

import React from "react"
//import { css } from "@emotion/react"
import { graphql, Link } from "gatsby"
//import { rhythm } from "../utils/typography"
import Layout from "../../components/Layout/Layout"
import { FullscreenImg } from "../../components/Layout/FullscreenImg.styles"
import BackgroundImage from "gatsby-background-image"
import { About } from "../../components/Layout/About.styles"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import GoTo from "../../images/goTo.png"
import Headerw from "../../components/Headerw/Headerw"

export const query = graphql`
  query {
    aboutquery: aboutPage {
      directus {
        title_zh_hant_tw
        title_en_us
        content_zh_hant_tw
        content_en_us
        timelines {
          directus {
            id
            year(formatString: "yyyy")
            title_zh_hant_tw
            title_en_us
          }
        }
        reviews {
          directus {
            id
            about_page_id
            title
            from
            date
            content
            status
          }
        }
        info
        cover {
          publicURL
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    timelinequery: allTimeline(sort: { fields: directus___year, order: ASC }) {
      nodes {
        directus {
          year(formatString: "yyyy")
          title_zh_hant_tw
          title_en_us
          status
        }
      }
    }
  }
`

// The component we'll render for a given page
const PageAbout = ({ data }) => {
  return (
    <div>
      <Layout>
        <About>
          <FullscreenImg>
            <Headerw />
            <BackgroundImage
              Tag="section"
              className="bgSection"
              fluid={data.aboutquery.directus.cover.childImageSharp.fluid}
              backgroundColor={`#040e18`}
              id="bgA"
            >
              <div className="aboutMenuBlock fr">
                <Tabs>
                  <TabList>
                    <Tab className="aboutMenu">about</Tab>
                    <Tab className="aboutMenu">timeline</Tab>
                    <Tab className="aboutMenu">review</Tab>
                    <Tab className="aboutMenu">info</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="tabContainer">
                      <div className="aboutTitle">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.aboutquery.directus.title_zh_hant_tw,
                          }}
                        />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.aboutquery.directus.title_en_us,
                          }}
                        />
                      </div>
                      <div className="aboutContent">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.aboutquery.directus.content_zh_hant_tw,
                          }}
                        />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.aboutquery.directus.content_en_us,
                          }}
                        />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tabContainer">
                      <div>
                        {data.timelinequery.nodes && (
                          <div>
                            {data.timelinequery.nodes.map(node => (
                              <div
                                key={node.directus.year}
                                className="timelineAllBlock"
                              >
                                {node.directus.status === "draft" && (
                                  <span></span>
                                )}
                                {node.directus.status === "published" && (
                                  <div>
                                    <div className="timelineYear">
                                      {node.directus.year}
                                    </div>
                                    <div className="timelineContentBlock">
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html:
                                            node.directus.title_zh_hant_tw,
                                        }}
                                        className="timelineContentTW"
                                      />
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: node.directus.title_en_us,
                                        }}
                                        className="timelineContentEN"
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tabContainer">
                      {data.aboutquery.directus.reviews && (
                        <div>
                          {data.aboutquery.directus.reviews.map(review => (
                            <div key={review.directus.id}>
                              {review.directus.status === "draft" && (
                                <span></span>
                              )}
                              {review.directus.status === "published" && (
                                <Link
                                  to={`/about/reviews/${review.directus.date}`}
                                >
                                  <div
                                    className="reviewTitle"
                                    dangerouslySetInnerHTML={{
                                      __html: review.directus.title,
                                    }}
                                  />
                                  <div className="reviewFD">
                                    <span>{review.directus.from}</span>
                                    <span> | </span>
                                    <span>{review.directus.date}</span>
                                  </div>
                                  <div
                                    className="arrowGoTo"
                                    role="button"
                                    tabIndex="0"
                                  >
                                    <img
                                      src={GoTo}
                                      alt="internal link button"
                                    />
                                  </div>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tabContainer">
                      <div
                        className="infoContent"
                        dangerouslySetInnerHTML={{
                          __html: data.aboutquery.directus.info,
                        }}
                      />
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </BackgroundImage>
          </FullscreenImg>
        </About>
      </Layout>
    </div>
  )
}

export default PageAbout


