/**
 * Manually create index page inside "about" folder, query data of intro.
 */

import React from "react"
//import { css } from "@emotion/react"
import { graphql } from "gatsby"
//import { rhythm } from "../utils/typography"
import Layout from "../../components/Layout/Layout"
import { FullscreenImg } from "../../components/Layout/FullscreenImg.styles"
import BackgroundImage from "gatsby-background-image"
import { About } from "../../components/Layout/About.styles"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

export const query = graphql`
  query aboutQuery {
    aboutPage {
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
  }
`

// The component we'll render for a given page
const PageAbout = ({ data: { aboutPage: contents } }) => {
  return (
    <div>
      <Layout>
        <About>
          <FullscreenImg>
            <BackgroundImage
              Tag="section"
              className="bgSection"
              fluid={contents.directus.cover.childImageSharp.fluid}
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
                            __html: contents.directus.title_zh_hant_tw,
                          }}
                        />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: contents.directus.title_en_us,
                          }}
                        />
                      </div>
                      <div className="aboutContent">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: contents.directus.content_zh_hant_tw,
                          }}
                        />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: contents.directus.content_en_us,
                          }}
                        />
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tabContainer">
                      <div>
                        {contents.directus.timelines && (
                          <div>
                            {contents.directus.timelines.map(timeline => (
                              <div
                                key={timeline.directus.id}
                                className="timelineAllBlock"
                              >
                                <div className="timelineYear">
                                  {timeline.directus.year}
                                </div>
                                <div className="timelineContentBlock">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        timeline.directus.title_zh_hant_tw,
                                    }}
                                    className="timelineContentTW"
                                  />
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: timeline.directus.title_en_us,
                                    }}
                                    className="timelineContentEN"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tabContainer">
                      {contents.directus.reviews && (
                        <div>
                          {contents.directus.reviews.map(review => (
                            <div key={review.directus.id}>
                              <div className="reviewTitle">
                                {review.directus.title}
                              </div>
                              <div className="reviewFD">
                                <span>{review.directus.from}</span>
                                <span>|</span>
                                <span>{review.directus.date}</span>
                              </div>
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
                          __html: contents.directus.info,
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


