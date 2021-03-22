/**
 * Listing all artworks with link, which pages_id equal 3 (canopy).
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { ArtworkList } from "./artworkList.styles"

export default function canopyList() {
  return (
    <StaticQuery
      query={graphql`
        query artworkCListingQuery {
          allArtworksList(
            filter: { directus: { pages_id: { eq: 3 } } }
            sort: { fields: directus___year, order: DESC }
          ) {
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
        <ArtworkList>
          <div id="aCList">
            {data.allArtworksList.edges.map(({ node }) => (
              <div key={node.directus.id} className="aList">
                <div className="aList_title">
                  <div className="aList_titleTW">
                    {node.directus.title_zh_hant_tw}
                  </div>
                  <div className="aList_titleEN">
                    {node.directus.title_en_us}
                  </div>
                </div>
                <div className="aList_yearBlk">
                  <div className="aList_year">{node.directus.year}</div>
                </div>
                <div className="aList_aName">
                  <div className="aList_aNameTW">
                    {node.directus.artist_name_zh_hant_tw}
                  </div>
                  <div className="aList_aNameEN">
                    {node.directus.artist_name_en_us}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ArtworkList>
      )}
    />
  )
}
