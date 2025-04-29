/**
 * Create listing template for page (extension) that created by gatsby-node.js
 */

import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import { Content } from "../components/Layout/Content.styles"
import ArrowUp from "../images/ArrowUp.svg"

import { ProjectList } from "../components/projectList.styles"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Fade from "react-reveal/Fade"

export const projectListEQuery = graphql`
  query projectListEQuery($skip: Int!, $limit: Int!) {
    allProjects(
      filter: { directus: { pages_id: { eq: 2 }, status: { eq: "published" } } }
      sort: { fields: [directus___year, directus___sort], order: [DESC, DESC] }
      limit: $limit
      skip: $skip
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
            sort
          }
        }
      }
    }
  }
`
export default class projectListE extends React.Component {
  render() {
    const postsE = this.props.data.allProjects.edges
    const { numEPages } = this.props.pageContext
    console.log(postsE)

    return (
      <Layout>
        <Content id="pageTopE">
          <Header />
          <ProjectList>
            <Fade bottom>
              <div id="pEList">
                {postsE.map(({ node }) => (
                  <div key={node.directus.id}>
                    <Link
                      to={`/extension/${node.directus.id}`}
                      className="pList_link"
                    >
                      <div className="pList">
                        <div className="pList_year">{node.directus.year}</div>
                        <div className="pList_title">
                          <div
                            className="pList_titleTW"
                            dangerouslySetInnerHTML={{
                              __html: node.directus.title_zh_hant_tw,
                            }}
                          ></div>
                          <div className="pList_titleEN">
                            {node.directus.title_en_us}
                          </div>
                        </div>
                        <div className="line"></div>
                        <div className="pList_aName">
                          <div
                            className="pList_aNameTW"
                            dangerouslySetInnerHTML={{
                              __html: node.directus.artist_name_zh_hant_tw,
                            }}
                          />
                          {node.directus.artist_name_en_us && (
                            <div
                              className="pList_aNameEN"
                              dangerouslySetInnerHTML={{
                                __html: node.directus.artist_name_en_us,
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Fade>
            <div className="paginationNum">
              {Array.from({ length: numEPages }, (_, m) => (
                <Link
                  key={`pagination-number${m + 1}`}
                  to={`/extension/list/${m === 0 ? "" : m + 1}`}
                >
                  {m + 1}
                </Link>
              ))}
            </div>
          </ProjectList>
          <Link to={`/extension/`}>
            <div className="arrowUp mt-45" role="button" tabIndex="0">
              <img src={ArrowUp} alt="arrow-up" />
            </div>
          </Link>
          <Footer />
        </Content>
      </Layout>
    )
  }
}
