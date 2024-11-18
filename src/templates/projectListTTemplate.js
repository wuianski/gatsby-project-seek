/**
 * Create listing template for page (TCAA) that created by gatsby-node.js
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

export const projectListTQuery = graphql`
  query projectListTQuery($skip: Int!, $limit: Int!) {
    allProjects(
      filter: { directus: { pages_id: { eq: 5 }, status: { eq: "published" } } }
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
export default class projectListT extends React.Component {
  render() {
    const postsT = this.props.data.allProjects.edges
    const { numTPages } = this.props.pageContext

    return (
      <Layout>
        <Content id="pageTopT">
          <Header />
          <ProjectList>
            <Fade bottom>
              <div id="pTList">
                {postsT.map(({ node }) => (
                  <div key={node.directus.id}>
                    <Link
                      to={`/tung-chung-prize/${node.directus.year}/${node.directus.id}`}
                      className="pList_link"
                    >
                      <div className="pList">
                        <div className="pList_year">{node.directus.year}</div>
                        <div className="pList_title">
                          <div
                            className="pList_titleTW_T_m"
                            dangerouslySetInnerHTML={{
                              __html: node.directus.title_zh_hant_tw.replace(
                                "與",
                                "與<br />"
                              ),
                            }}
                          />
                          <div
                            className="pList_titleTW_T"
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
              {Array.from({ length: numTPages }, (_, l) => (
                <Link
                  key={`pagination-number${l + 1}`}
                  to={`/tung-chung-prize/list/${l === 0 ? "" : l + 1}`}
                >
                  {l + 1}
                </Link>
              ))}
            </div>
          </ProjectList>

          <Link to={`/tung-chung-prize/`}>
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
