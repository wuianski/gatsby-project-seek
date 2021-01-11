/**
 * Listing all artworks with link, which pages_id equal 4 (hong-x-panasonic).
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function hongList() {
  return (
    <StaticQuery
      query={graphql`
        query artworkHListingQuery {
          allArtworksList(
            filter: { directus: { pages_id: { eq: 4 } } }
            sort: { fields: directus___year, order: DESC }
          ) {
            edges {
              node {
                directus {
                  id
                  title_en_us
                  artist_name_zh_hant_tw
                  artist_name_en_us
                  year
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          {data.allArtworksList.edges.map(({ node }) => (
            <div key={node.directus.id}>
              <div>{node.directus.title_en_us}</div>
              <div>{node.directus.artist_name_zh_hant_tw}</div>
              <div>{node.directus.artist_name_en_us}</div>
              <div>{node.directus.year}</div>
            </div>
          ))}
        </div>
      )}
    />
  )
}
