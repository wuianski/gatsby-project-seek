/**
 * Manually create index page inside "hong-x-panasonic" folder, query data of intro.
 *
 * Add projects list by import artworkHList.js
 */

import React from "react"
//import { css } from "@emotion/react"
import { graphql } from "gatsby"
//import { rhythm } from "../utils/typography"
//import Layout from "../../components/layout"
import Layout from "../../components/Layout/Layout"
import { Content } from "../../components/Layout/Content.styles"

export const query = graphql`
  query {
    press: allProjects(
      filter: { directus: { pages_id: { in: [1, 5] } } }
      sort: { order: DESC, fields: directus___year }
    ) {
      totalCount
      edges {
        node {
          directus {
            id
            pages_id
            title_en_us
            title_zh_hant_tw
            year
            cover {
              publicURL
              name
            }
            file_pdf {
              publicURL
              name
            }
            file_zip {
              publicURL
              name
            }
          }
        }
      }
    }
  }
`

export default function Press({ data }) {
  return (
    <Layout>
      <Content>
        <div>
          {data.press.edges.map(({ node }) => (
            <div key={node.directus.id}>
              <p>
                {node.directus.pages_id === 1 && <p>THE QUESTION</p>}
                {node.directus.pages_id === 5 && <p>TUNG CHUNG ART AWARD</p>}
              </p>
              <p>{node.directus.year}</p>
              <p>
                {node.directus.pages_id === 1 && <p>問問題計畫</p>}
                {node.directus.pages_id === 5 && <p>銅鐘藝術賞</p>}
              </p>
              <img
                src={node.directus.cover.publicURL}
                alt={node.directus.cover.name}
              />
              <a
                href={node.directus.file_zip.publicURL}
                target="_blank"
                rel="noreferrer"
              >
                <p>Press Pachage</p>
              </a>
              <a
                href={node.directus.file_pdf.publicURL}
                target="_blank"
                rel="noreferrer"
              >
                <p>Press Release</p>
              </a>
            </div>
          ))}
        </div>
      </Content>
    </Layout>
  )
}
