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
          <div>
            {data.allProjects.edges.map(({ node }) => (
              <div key={node.directus.id} className="pList">
                <Link
                  to={`/the-question/${node.directus.year}`}
                  className="pList_link"
                >
                  <div className="pList_year">{node.directus.year}</div>
                  <div className="pList_title">{node.directus.title_en_us}</div>
                  <div className="pList_aName">
                    <div>{node.directus.artist_name_zh_hant_tw}</div>
                    <div>{node.directus.artist_name_en_us}</div>
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
