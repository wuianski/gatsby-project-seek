/**
 * Create template for pages that created by gatsby-node.js
 */

import { graphql, Link } from "gatsby"
import React from "react"
//import Layout from "../components/layout"
import Layout from "../components/Layout/Layout"
import Video from "../components/video"
import Img from "gatsby-image"
import { Content } from "../components/Layout/Content.styles"
import BackgroundImage from "gatsby-background-image"
import { FullscreenImg } from "../components/Layout/FullscreenImg.styles"
import ArrowDown from "../images/ArrowDown.png"

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
          publicURL
          name
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
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

  const [index, setIndex] = React.useState(0)
  const length = images.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { childImageSharp } = images[index]
  console.log(length)
  return (
    <Layout>
      {!data.cat && <p>No category data</p>}
      <FullscreenImg>
        <BackgroundImage
          Tag="section"
          className="bgSection"
          fluid={cover.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        >
          <div className="blcCtr">
            <p className="txtCtr">{year}</p>
            <p className="txtCtr">{title_en_us}</p>
            <p className="txtCtr">{artist_name_zh_hant_tw}</p>
            <p className="txtCtr">{artist_name_en_us}</p>
          </div>
          <div className="arrowDown">
            <img src={ArrowDown} alt="arrow-down" />
          </div>
        </BackgroundImage>
      </FullscreenImg>
      <Content>
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
        <div className="contentBlock">
          <div className="contentTW">{content_zh_hant_tw}</div>
          <div className="contentEN">{content_en_us}</div>
        </div>
        <div>
          <Video
            videoSrcURL={main_video_url}
            videoTitle={main_video_title_en_us}
          />
        </div>
        <div className="mainVidInfo">{main_video_info}</div>
        <div className="titleBlock">
          <div className="titleTW">{main_video_title_zh_hant_tw}</div>
          <div className="titleEN">{main_video_title_en_us}</div>
        </div>
        <div className="textBlock">
          <div className="textTW">{main_video_description_zh_hant_tw}</div>
          <div className="textEN">{main_video_description_en_us}</div>
        </div>
        <div>
          <div>
            <Img fluid={childImageSharp.fluid} key={childImageSharp.id} />
          </div>
          <div>
            <button onClick={() => handlePrevious()}>Previous</button>
            <button onClick={() => handleNext()}>Next</button>
          </div>
        </div>
        <div className="fr w80">
          <div className="titleBlock fr">
            <span className="titleTW">{artist_name_zh_hant_tw}</span>
            <span className="titleTW">{artist_name_en_us}</span>
          </div>
          <div className="textBlock">
            <div className="textTW">{artist_introduction_zh_hant_tw}</div>
            <div className="textEN">{artist_introduction_en_us}</div>
          </div>
        </div>
        {events && (
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
                <div className="titleBlock">
                  <div className="titleTW">
                    {event.directus.title_zh_hant_tw}
                  </div>
                  <div className="titleEN">{event.directus.title_en_us}</div>
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
        )}
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
      </Content>
    </Layout>
  )
}

export default ProjectQ
