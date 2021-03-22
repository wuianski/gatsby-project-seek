/**
 * Listing all projects with link, which pages_id equal 5 (tcaa).
 */

import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { ProjectList } from "./projectList.styles"

export default function tcaaList() {
  return (
    <StaticQuery
      query={graphql`
        query projectTListingQuery {
          allProjects(
            filter: { directus: { pages_id: { eq: 5 } } }
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
        <ProjectList>
          <div id="pTList">
            {data.allProjects.edges.map(({ node }) => (
              <div key={node.directus.id} className="pList">
                <Link to={`/tcaa/${node.directus.year}`} className="pList_link">
                  <div className="pList_year">{node.directus.year}</div>
                  <div className="pList_title">
                    <div className="pList_titleTW">
                      {node.directus.title_zh_hant_tw}
                    </div>
                    <div className="pList_titleEN">
                      {node.directus.title_en_us}
                    </div>
                  </div>
                  <div className="pList_aName">
                    <div className="pList_aNameTW">
                      {node.directus.artist_name_zh_hant_tw}
                    </div>
                    <div className="pList_aNameEN">
                      {node.directus.artist_name_en_us}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </ProjectList>
      )}
    />
  )
}
