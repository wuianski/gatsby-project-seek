/**
 * Listing all projects with link, which pages_id equal 2 (extension).
 */

import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { ProjectList } from "./projectList.styles"

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
          <div id="pEList">
            {data.allProjects.edges.map(({ node }) => (
              <div key={node.directus.id} className="pList">
                <Link
                  to={`/extension/${node.directus.year}`}
                  className="pList_link"
                >
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
                    <div
                      className="pList_aNameTW"
                      dangerouslySetInnerHTML={{
                        __html: node.directus.artist_name_zh_hant_tw,
                      }}
                    />
                    <div
                      className="pList_aNameEN"
                      dangerouslySetInnerHTML={{
                        __html: node.directus.artist_name_en_us,
                      }}
                    />
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
