/**
 * Create listing template for page (hong x panasonic) that created by gatsby-node.js
 */

import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import { Content } from "../components/Layout/Content.styles"
import ArrowUp from "../images/ArrowUp.svg"

import { ArtworkList } from "../components/artworkList.styles"
import Hyperlink from "../images/hyperlink.svg"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Fade from "react-reveal/Fade"

export const artworksListHQuery = graphql`
  query artworksListHQuery($skip: Int!, $limit: Int!) {
    allArtworksList(
      filter: { directus: { pages_id: { eq: 4 } } }
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
            website
            sort
          }
        }
      }
    }
  }
`
export default class ArtworkListH extends React.Component {
  render() {
    const postsH = this.props.data.allArtworksList.edges
    const { numHPages } = this.props.pageContext
    return (
      <Layout>
        <Content id="pageTopH">
          <Header />
          <ArtworkList>
            <Fade bottom>
              <div id="aHList">
                {postsH.map(({ node }) => (
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
                    <div className="aList_linkBlk">
                      {node.directus.website && (
                        <div className="aList_linkBtn">
                          <a
                            href={node.directus.website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              className="hyperlinkBtnImg"
                              src={Hyperlink}
                              alt="link to artwork"
                            />
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="aList_yearBlk_m">
                      <div className="aList_year">{node.directus.year}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="paginationNum">
                {Array.from({ length: numHPages }, (_, j) => (
                  <Link
                    key={`pagination-number${j + 1}`}
                    to={`/hong-x-panasonic/list/${j === 0 ? "" : j + 1}`}
                  >
                    {j + 1}
                  </Link>
                ))}
              </div>
            </Fade>
          </ArtworkList>
          <Link to={`/hong-x-panasonic/`}>
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
