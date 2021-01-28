/**
 * Create template for pages that created by gatsby-node.js
 */

import { graphql, Link } from "gatsby"
import React from "react"
//import Layout from "../components/layout"
import Layout from "../components/Layout/Layout"
import Video from "../components/video"
import Img from "gatsby-image"

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
      <div>
        <div>
          <Img
            fluid={childImageSharp.fluid}
            key={childImageSharp.id}
          />
        </div>
        <div>
          <button onClick={() => handlePrevious()}>Previous</button>
          <button onClick={() => handleNext()}>Next</button>
        </div>
      </div>

      <img src={cover.publicURL} alt={cover.name} />
      <p>{year}</p>
      <p>{title_en_us}</p>
      <p>{artist_name_zh_hant_tw}</p>
      <p>{artist_name_en_us}</p>
      <div dangerouslySetInnerHTML={{ __html: summary_zh_hant_tw }} />
      <div dangerouslySetInnerHTML={{ __html: summary_en_us }} />
      <p>{content_zh_hant_tw}</p>
      <p>{content_en_us}</p>
      <Video videoSrcURL={main_video_url} videoTitle={main_video_title_en_us} />
      <p>{main_video_info}</p>
      <p>{main_video_title_zh_hant_tw}</p>
      <p>{main_video_title_en_us}</p>
      <p>{main_video_description_zh_hant_tw}</p>
      <p>{main_video_description_en_us}</p>
      {images && (
        <ul>
          {images.map(image => (
            <li key={image.id}>
              <Img fluid={image.childImageSharp.fluid} />
            </li>
          ))}
        </ul>
      )}
      <p>{artist_name_zh_hant_tw}</p>
      <p>{artist_name_en_us}</p>
      <p>{artist_introduction_zh_hant_tw}</p>
      <p>{artist_introduction_en_us}</p>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.directus.id}>
              <Link
                to={`/the-question/${data.cat.directus.year}/reviews/${review.directus.date}`}
              >
                <div>{review.directus.date}</div>
                <div>{review.directus.title}</div>
                <div>{review.directus.from}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  )
}

export default ProjectQ
