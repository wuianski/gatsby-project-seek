/**
 * Listing all projects with link, which pages_id equal 2 (extension).
 */

import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

export default function extensionList() {
  return (
    <StaticQuery
      query={graphql`
        query projectEListingQuery {
          allProjects(
            filter: { directus: { pages_id: { eq: 2 } } }
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
          {data.allProjects.edges.map(({ node }) => (
            <div key={node.directus.id}>
              <Link to={`/extension/${node.directus.year}`}>
                <div>{node.directus.title_en_us}</div>
                <div>{node.directus.artist_name_zh_hant_tw}</div>
                <div>{node.directus.artist_name_en_us}</div>
                <div>{node.directus.year}</div>
              </Link>
            </div>
          ))}
        </div>
      )}
    />
  )
}
