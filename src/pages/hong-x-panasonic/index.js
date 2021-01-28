/**
 * Manually create index page inside "hong-x-panasonic" folder, query data of intro.
 *
 * Add projects list by import artworkHList.js
 */

import React from "react"
//import { css } from "@emotion/react"
import { graphql } from "gatsby"
//import { rhythm } from "../utils/typography"
//import Layout from "../../components/layout"
import Layout from "../../components/Layout/Layout"
import ArtworkHList from "../../components/artworkHList.js"
import Img from "gatsby-image"

export const query = graphql`
  query hongQuery($eq: Int = 4) {
    pages(directus: { id: { eq: $eq }, artworks_list: { elemMatch: {} } }) {
      directus {
        title_en_us
        cover {
          publicURL
          name
          childImageSharp {
            fluid {
              src
            }
          }
        }
        content_zh_hant_tw
        content_en_us
        equipment {
          directus {
            id
            name_zh_hant_tw
            name_en_us
            detial
          }
        }
        artworks_list {
          directus {
            title_zh_hant_tw
            year
          }
        }
      }
    }
  }
`

// The component we'll render for a given page
const PageHIntro = props => {
  const { data = {} } = props
  // Destructure the new posts property from props
  const { title_en_us, cover, content_zh_hant_tw, content_en_us, equipment } =
    data.pages.directus || {}
  return (
    <Layout>
      <p>{title_en_us}</p>
      <img src={cover.publicURL} alt={cover.name} />
      <Img fluid={cover.childImageSharp.fluid.src} />
      <p>{content_zh_hant_tw}</p>
      <p>{content_en_us}</p>
      {equipment && (
        <ul>
          {equipment.map(myEquipment => (
            <li key={myEquipment.directus.id}>
              <p>{myEquipment.directus.name_zh_hant_tw}</p>
              <p>{myEquipment.directus.name_en_us}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: myEquipment.directus.detial,
                }}
              />
            </li>
          ))}
        </ul>
      )}
      <ArtworkHList />
    </Layout>
  )
}

export default PageHIntro


