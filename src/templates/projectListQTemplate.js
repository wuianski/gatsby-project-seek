/**
 * Create listing template for page (the-question) that created by gatsby-node.js
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

export const projectListQQuery = graphql`
  query projectListQQuery($skip: Int!, $limit: Int!) {
    allProjects(
      filter: { directus: { pages_id: { eq: 1 }, status: { eq: "published" } } }
      sort: { fields: directus___year, order: DESC }
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
          }
        }
      }
    }
  }
`
export default class projectListQ extends React.Component {
  render() {
    const postsQ = this.props.data.allProjects.edges
    const { numQPages } = this.props.pageContext

    return (
      <Layout>
        <Content id="pageTopQ">
          <Header />
          <ProjectList>
            <Fade bottom>
              <div id="pQList">
                {postsQ.map(({ node }) => (
                  <div key={node.directus.id}>
                    <Link
                      to={`/the-question/${node.directus.year}/${node.directus.id}`}
                      className="pList_link"
                    >
                      <div className="pList">
                        <div className="pList_year">{node.directus.year}</div>
                        <div className="pList_title">
                          <div className="pList_titleQEN">
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
                          <div
                            className="pList_aNameEN"
                            dangerouslySetInnerHTML={{
                              __html: node.directus.artist_name_en_us,
                            }}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Fade>
            <div className="paginationNum">
              {Array.from({ length: numQPages }, (_, k) => (
                <Link
                  key={`pagination-number${k + 1}`}
                  to={`/the-question/list/${k === 0 ? "" : k + 1}`}
                >
                  {k + 1}
                </Link>
              ))}
            </div>
          </ProjectList>

          <Link to={`/the-question/`}>
            <div className="arrowUp mt-30" role="button" tabIndex="0">
              <img src={ArrowUp} alt="arrow-up" />
            </div>
          </Link>
          <Footer />
        </Content>
      </Layout>
    )
  }
}
