/**
 * Create template (about's review) for pages that created by gatsby-node.js
 */

import { graphql } from "gatsby"
import React from "react"
//import Layout from "../components/layout"
import Layout from "../components/Layout/Layout"
import { Content } from "../components/Layout/Content.styles"
import Back from "../images/back.svg"
import { Review } from "../components/Layout/Review.styles"
import Header from "../components/Header/Header"

// A static query, the results from which
// will be passed to our component. Uses the 'id' property
// passed via the `createPage` context config to retrieve the page.
export const query = graphql`
  query($id: Int!) {
    reviews(directus: { id: { eq: $id } }) {
      directus {
        id
        date(formatString: "")
        from
        artist_name_zh_hant_tw
        title
        content
      }
    }
  }
`

// The component we'll render for a given page
const Aboutreview = ({ data: { reviews: contents } }) => {
  return (
    <Layout>
      <Header />
      <Review>
        <div className="btmLine">
          <a
            //href="/#"
            onClick={() => window.history.back()}
            onKeyDown={() => window.history.back()}
            role="button"
            tabIndex="0"
          >
            <div className="backBtn fr">
              <img src={Back} alt="back button" />
              <span className="backText">back</span>
            </div>
          </a>
        </div>
      </Review>
      <Content>
        <div className="reviewTag">review</div>
        <div className="twoGrid28">
          <div className="reviewPostSideInfo mt40">
            <div>{contents.directus.date}</div>
            <div>{contents.directus.from}</div>
            <div>{contents.directus.artist_name_zh_hant_tw}</div>
          </div>
          <div className="mt40">
            <div
              className="reviewPostTitle"
              dangerouslySetInnerHTML={{ __html: contents.directus.title }}
            />
            <div
              className="reviewPostContent mt40"
              dangerouslySetInnerHTML={{ __html: contents.directus.content }}
            />
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default Aboutreview
