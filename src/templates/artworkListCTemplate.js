/**
 * Create listing template for page (canopy) that created by gatsby-node.js
 */

import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import { Content } from "../components/Layout/Content.styles"
import ArrowUp from "../images/ArrowUp.svg"
import scrollTo from "gatsby-plugin-smoothscroll"

import { ArtworkList } from "../components/artworkList.styles"
import Hyperlink from "../images/hyperlink.png"
import ArtworkCInfo from "../components/artworkCInfo.js"

export const artworksListCQuery = graphql`
  query artworksListCQuery($skip: Int!, $limit: Int!) {
    allArtworksList(
      filter: { directus: { pages_id: { eq: 3 } } }
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
            website
          }
        }
      }
    }
  }
`
export default class ArtworkListC extends React.Component {
  render() {
    const postsC = this.props.data.allArtworksList.edges
    const { numCPages } = this.props.pageContext
    return (
      <Layout>
        <Content id="pageTopC">
          <ArtworkCInfo />
          <ArtworkList>
            <div id="aCList">
              {postsC.map(({ node }) => (
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
                </div>
              ))}
            </div>
            <div className="paginationNum">
              {Array.from({ length: numCPages }, (_, i) => (
                <Link
                  key={`pagination-number${i + 1}`}
                  to={`/canopy/${i === 0 ? "" : i + 1}`}
                >
                  {i + 1}
                </Link>
              ))}
            </div>
          </ArtworkList>
          <div className="mt-80">
            <div
              className="arrowUp"
              onClick={() => scrollTo("#pageTopC")}
              onKeyDown={() => scrollTo("#pageTopC")}
              role="button"
              tabIndex="0"
            >
              <img src={ArrowUp} alt="arrow-up" />
            </div>
            <div className="cc">project seek©2010-2020</div>
          </div>
        </Content>
      </Layout>
    )
  }
}
