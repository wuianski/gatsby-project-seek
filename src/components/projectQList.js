/**
 * Listing all projects with link, which pages_id equal 1 (the-question).
 */

import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { ProjectList } from "./projectList.styles"

export default function questionList() {
  return (
    <StaticQuery
      query={graphql`
        query projectQListingQuery {
          allProjects(
            filter: { directus: { pages_id: { eq: 1 } } }
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
          <div id="pQList">
            {data.allProjects.edges.map(({ node }) => (
              <div key={node.directus.id}>
                <Link
                  to={`/the-question/${node.directus.year}`}
                  className="pList_link"
                >
                  <div className="pList">
                    <div className="pList_year">{node.directus.year}</div>
                    <div className="pList_title">
                      <div className="pList_titleQEN">
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
