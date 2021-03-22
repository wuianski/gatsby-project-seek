/**
 * Create template for pages that created by gatsby-node.js
 */

import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import Video from "../components/video"
import Img from "gatsby-image"
import { Content } from "../components/Layout/Content.styles"
import BackgroundImage from "gatsby-background-image"
import { FullscreenImg } from "../components/Layout/FullscreenImg.styles"
import ArrowDown from "../images/ArrowDown.svg"
import ArrowUp from "../images/ArrowUp.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
import plus from "../images/plus.png"
import minus from "../images/minus.png"

import SwiperCore, { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/pagination/pagination.scss"
SwiperCore.use(Pagination)

//import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
//import { Carousel } from "react-responsive-carousel"

//import Slider from "react-slick"
//import "slick-carousel/slick/slick.css"
//import "slick-carousel/slick/slick-theme.css"

// A static query, the results from which
// will be passed to our component. Uses the 'id' property
// passed via the `createPage` context config to retrieve the page.
export const query = graphql`
  query($id: Int!) {
    cat: projects(directus: { id: { eq: $id }, reviews: { elemMatch: {} } }) {
      directus {
        id
        cover {
          publicURL
          name
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        year
        title_en_us
        artist_name_zh_hant_tw
        artist_name_en_us
        summary_zh_hant_tw
        summary_en_us
        content_zh_hant_tw
        content_en_us
        main_video_url
        main_video_title_en_us
        main_video_info
        main_video_title_zh_hant_tw
        main_video_description_zh_hant_tw
        main_video_description_en_us
        images {
          id
          publicURL
          name
          childImageSharp {
            fixed(width: 1280, height:  700) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        artist_introduction_zh_hant_tw
        artist_introduction_en_us
        events {
          directus {
            title_zh_hant_tw
            title_en_us
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            video_url
            introduction_zh_hant_tw
            introduction_en_us
          }
        }
        reviews {
          directus {
            id
            title
            date(formatString: "")
            from
          }
        }
      }
    }
  }
`

// The component we'll render for a given page
const ProjectQ = props => {
  const { data = {} } = props
  // Destructure the new posts property from props
  const {
    cover,
    year,
    title_en_us,
    artist_name_zh_hant_tw,
    artist_name_en_us,
    summary_zh_hant_tw,
    summary_en_us,
    content_zh_hant_tw,
    content_en_us,
    main_video_url,
    main_video_title_en_us,
    main_video_info,
    main_video_title_zh_hant_tw,
    main_video_description_zh_hant_tw,
    main_video_description_en_us,
    images,
    artist_introduction_zh_hant_tw,
    artist_introduction_en_us,
    events,
    reviews,
  } = data.cat.directus || {}
  //image carousel
  const [index, setIndex] = React.useState(0)
  const length = images.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { childImageSharp } = images[index]
  console.log(length)
  //show block
  const [isVisible, setIsVisible] = React.useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const [isVisibleV, setIsVisibleV] = React.useState(false)
  const toggleVisibilityV = () => setIsVisibleV(!isVisibleV)
  const [isVisibleA, setIsVisibleA] = React.useState(false)
  const toggleVisibilityA = () => setIsVisibleA(!isVisibleA)
  
  return (
    <Layout>
      {!data.cat && <p>No category data</p>}
      <FullscreenImg id="top">
        <BackgroundImage
          Tag="section"
          className="bgSection"
          fluid={cover.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        >
          <div className="blcCtr">
            <div className="txtCtr fullPYear">{year}</div>
            <div className="txtCtr fullPTitleEN">{title_en_us}</div>
            <div className="txtCtr fullPNameTW">{artist_name_zh_hant_tw}</div>
            <div className="txtCtr fullPNameEN">{artist_name_en_us}</div>
          </div>
          <div
            className="arrowDown"
            onClick={() => scrollTo("#content")}
            onKeyDown={() => scrollTo("#content")}
            role="button"
            tabIndex="0"
          >
            <img src={ArrowDown} alt="arrow-down" />
          </div>
        </BackgroundImage>
      </FullscreenImg>

      <Content id="content">
        <div className="firstSec">
          <div className="secName">essay</div>
          <div className="summaryBlock">
            <div
              dangerouslySetInnerHTML={{ __html: summary_zh_hant_tw }}
              className="summaryTW"
            />
            <div
              dangerouslySetInnerHTML={{ __html: summary_en_us }}
              className="summaryEN"
            />
          </div>
          <div className="openBlock">
            <div
              className="fr"
              onClick={toggleVisibility}
              onKeyDown={toggleVisibility}
              role="button"
              tabIndex="0"
            >
              {!isVisible && (
                <img className="openImg" src={plus} alt="open content block" />
              )}
            </div>
          </div>
          {isVisible && (
            <div>
              <div className="contentBlock fr">
                <div className="contentTW">{content_zh_hant_tw}</div>
                <div className="contentEN">{content_en_us}</div>
              </div>
              <div
                className="closeBlock"
                onClick={toggleVisibility}
                onKeyDown={toggleVisibility}
                role="button"
                tabIndex="0"
              >
                <img
                  className="closeImg"
                  src={minus}
                  alt="close content block"
                />
              </div>
            </div>
          )}
        </div>

        <div className="vidSec mt80">
          <Video
            videoSrcURL={main_video_url}
            videoTitle={main_video_title_en_us}
          />
          <div className="mainVidInfo">{main_video_info}</div>
          <div className="titleBlock">
            <div className="titleTW">{main_video_title_zh_hant_tw}</div>
            <div className="titleEN">{main_video_title_en_us}</div>
          </div>
          <div className="openBlock">
            <div
              className="fr"
              onClick={toggleVisibilityV}
              onKeyDown={toggleVisibilityV}
              role="button"
              tabIndex="0"
            >
              {!isVisibleV && (
                <img className="openImg" src={plus} alt="open content block" />
              )}
            </div>
          </div>
          {isVisibleV && (
            <div>
              <div className="textBlock">
                <div className="textTW">
                  {main_video_description_zh_hant_tw}
                </div>
                <div className="textEN">{main_video_description_en_us}</div>
              </div>
              <div
                className="closeBlock"
                onClick={toggleVisibilityV}
                onKeyDown={toggleVisibilityV}
                role="button"
                tabIndex="0"
              >
                <img
                  className="closeImg"
                  src={minus}
                  alt="close content block"
                />
              </div>
            </div>
          )}
        </div>

        <div className="imgSec mt80">
          <div>
            <div>
              <Img fluid={childImageSharp.fluid} key={childImageSharp.id} />
            </div>
          </div>
          <div>
            {images && (
              <Swiper pagination={{ clickable: true }}>
                <div>
                  {images.map(image => (
                    <SwiperSlide>
                      <div>
                        <Img
                          fixed={image.childImageSharp.fixed}
                          key={image.childImageSharp.id}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            )}
          </div>
        </div>

        <div className="artistSec mt80">
          <div className="secName">artist</div>
          <div className="titleBlock fr">
            <span className="titleTW">{artist_name_zh_hant_tw}</span>
            <span className="titleTW">{artist_name_en_us}</span>
          </div>
          <div className="mt20">
            <div
              className="fr"
              onClick={toggleVisibilityA}
              onKeyDown={toggleVisibilityA}
              role="button"
              tabIndex="0"
            >
              {!isVisibleA && (
                <img className="openImg" src={plus} alt="open content block" />
              )}
            </div>
          </div>
          {isVisibleA && (
            <div>
              <div className="textBlock w80 fr">
                <div className="textTW">{artist_introduction_zh_hant_tw}</div>
                <div className="textEN">{artist_introduction_en_us}</div>
              </div>
              <div
                className="closeBlock"
                onClick={toggleVisibilityA}
                onKeyDown={toggleVisibilityA}
                role="button"
                tabIndex="0"
              >
                <img
                  className="closeImg"
                  src={minus}
                  alt="close content block"
                />
              </div>
            </div>
          )}
        </div>

        <div className="eventSec mt120">
          {events && (
            <div>
              <div className="secName">event</div>
              <div className="topMinus20">
                <div className="twoGrid55">
                  {events.map(event => (
                    <div key={event.directus.id}>
                      <div className="eventCover">
                        {event.directus.video_url && (
                          <Video
                            videoSrcURL={event.directus.video_url}
                            videoTitle={event.directus.title_en_us}
                          />
                        )}
                        {event.directus.image && (
                          <Img
                            className="eventCoverImg"
                            fluid={event.directus.image.childImageSharp.fluid}
                          />
                        )}
                      </div>
                      <div className="titleBlock mb20">
                        <div className="titleTW">
                          {event.directus.title_zh_hant_tw}
                        </div>
                        <div className="titleEN">
                          {event.directus.title_en_us}
                        </div>
                      </div>
                      <div className="textBlock">
                        <div className="textTW">
                          {event.directus.introduction_zh_hant_tw}
                        </div>
                        <div className="textEN">
                          {event.directus.introduction_en_us}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="reviewSec mt80">
          {reviews && (
            <div>
              {reviews.map(review => (
                <div key={review.directus.id}>
                  <Link
                    to={`/the-question/${data.cat.directus.year}/reviews/${review.directus.date}`}
                  >
                    <div className="twoGrid37">
                      <div className="reviewDate">{review.directus.date}</div>
                      <div>
                        <div className="reviewTW">{review.directus.title}</div>
                        <div className="reviewEN">{review.directus.from}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt80 pd30">
          <div
            className="arrowUp"
            onClick={() => scrollTo("#top")}
            onKeyDown={() => scrollTo("#top")}
            role="button"
            tabIndex="0"
          >
            <img src={ArrowUp} alt="arrow-up" />
          </div>
          <div className="cc">project seek©2010-2020</div>
        </div>
      </Content>
    </Layout>
  )
}

export default ProjectQ
