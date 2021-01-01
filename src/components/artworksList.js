import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function artworksList() {
  return (
    <StaticQuery
      query={graphql`
        query artworksListingQuery {
          allArtworksList(filter: { directus: { pages_id: { eq: 3 } } }) {
            edges {
              node {
                directus {
                  id
                  title_zh_hant_tw
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
              <div>{node.directus.title_zh_hant_tw}</div>
              <div>{node.directus.title_en_us}</div>
              <div>{node.directus.artist_name_zh_hant_tw}</div>
              <p>{node.directus.artist_name_en_us}</p>
            </div>
          ))}
        </div>
      )}
    />
  )
}
