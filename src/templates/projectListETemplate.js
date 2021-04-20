/**
 * Create listing template for page (extension) that created by gatsby-node.js
 */

import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import { Content } from "../components/Layout/Content.styles"
import ArrowUp from "../images/ArrowUp.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
import ProjectEInfo from "../components/projectEInfo.js"
import { ProjectList } from "../components/projectList.styles"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Fade from "react-reveal/Fade"

export const projectListEQuery = graphql`
  query projectListEQuery($skip: Int!, $limit: Int!) {
    allProjects(
      filter: { directus: { pages_id: { eq: 2 }, status: { eq: "published" } } }
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
export default class projectListE extends React.Component {
  render() {
    const postsE = this.props.data.allProjects.edges
    const { numEPages } = this.props.pageContext
    return (
      <Layout>
        <ProjectEInfo />
        <Content id="pageTopE">
          <Header />
          <ProjectList>
            <div id="pEList">
              {postsE.map(({ node }) => (
                <Fade bottom big>
                  <div key={node.directus.id}>
                    <Link
                      to={`/extension/${node.directus.year}`}
                      className="pList_link"
                    >
                      <div className="pList">
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
                      </div>
                    </Link>
                  </div>
                </Fade>
              ))}
            </div>
            <div className="paginationNum">
              {Array.from({ length: numEPages }, (_, m) => (
                <Link
                  key={`pagination-number${m + 1}`}
                  to={`/extension/${m === 0 ? "" : m + 1}/#pageTopE`}
                >
                  {m + 1}
                </Link>
              ))}
            </div>
          </ProjectList>
          <div className="">
            <div
              className="arrowUp mt-30"
              onClick={() => scrollTo("#bgE")}
              onKeyDown={() => scrollTo("#bgE")}
              role="button"
              tabIndex="0"
            >
              <img src={ArrowUp} alt="arrow-up" />
            </div>
          </div>
          <Footer />
        </Content>
      </Layout>
    )
  }
}
